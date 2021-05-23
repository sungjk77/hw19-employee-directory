import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import ModalForm from "./ModalForm";
import EmployeeList from "./EmployeeList"
import NavTabs from "./NavTabs";
import SearchForm from "./SearchForm"

class EmployeeContainer extends Component {
  state = {
    employee: [],
    employeeFilter: [],
    filter: {
      quantity: 100,
      male: true,
      female: true,
      us: true,
      gb: false,
      au: false
    },
    sortby: "First Name+"
  };

  componentDidMount() {
    var query = "?format=pretty&results="+this.state.filter.quantity+"&nat=us&exc=login,registered,nat";
    API.search(query)
    .then((res) => {
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  }

  searchEmployee = event => {
    // const { name, value } = event.target.quantity;
    var value = event.target.quantity.value;
    // event.preventDefault();

    // Object.assign({}, this.state.filter, {quantity:value})
     this.setState(Object.assign(this.state.filter,{quantity:value}));
    // const filter = { ...this.state.filter, quantity: value }
    // this.setState(() => ({ filter }))
    // this.setState({...this.state.filter, quantity: value});
    //  alert(event.target.quantity.value)
    // alert(this.state.filter.quantity)
    this.componentDidMount();
  };

  handleSortClick = event => {
    switch (event.target.id) {
      case "First Name": (this.state.sortby === "First Name+")? this.setState({sortby:"First Name-"}):this.setState({sortby:"First Name+"})
        break;
      case "Last Name": (this.state.sortby === "Last Name+")? this.setState({sortby:"Last Name-"}):this.setState({sortby:"Last Name+"})
        break;
      case "Age": (this.state.sortby === "Age+")?this.setState({sortby:"Age-"}):this.setState({sortby:"Age+"})
        break;
      case "Gender": (this.state.sortby === "Gender+") ? (this.setState({sortby:"Gender-"})) : (this.setState({sortby:"Gender+"}))
        break;
      default: break;
    }
  }

  handleSort = () => {
    switch (this.state.sortby) {
      case "First Name+":
        this.state.employeeFilter.sort((a, b) => a.name.first > b.name.first ? 1:-1)
        break;
      case "First Name-":
        this.state.employeeFilter.sort((a, b) => a.name.first < b.name.first ? 1:-1)
        break;
      case "Last Name+":
        this.state.employeeFilter.sort((a, b) => a.name.last > b.name.last ? 1:-1)
        break;
      case "Last Name-":
        this.state.employeeFilter.sort((a, b) => a.name.last < b.name.last ? 1:-1)
        break;
      case "Age+":
        this.state.employeeFilter.sort((a, b) => parseInt(a.dob.age) > parseInt(b.dob.age) ? 1:-1)
        break;
      case "Age-":
        this.state.employeeFilter.sort((a, b) => parseInt(a.dob.age) < parseInt(b.dob.age) ? 1:-1)
        break;
      case "Gender+":
        this.state.employeeFilter.sort((a, b) => a.gender > b.gender ? 1:-1)
        break;
      case "Gender-":
        this.state.employeeFilter.sort((a, b) => a.gender < b.gender ? 1:-1)
        break;
      default:
        break;
    }
    return this.state.employeeFilter;
  }
 
  handleInputChange = event => {
    const value = event.target.value.toLowerCase().replace(/\s/g, '');;
    this.setState({
      employeeFilter: this.state.employee.filter(function (filtered) {
        if ((filtered.name.first.toLowerCase()+filtered.name.last.toLowerCase()).includes(value)) return filtered;
      }),
    });
  };

  render() {
    return (
      <>
      <NavTabs 
      />
        <SearchForm
          handleInputChange={this.handleInputChange}
          employee={this.state.employeeFilter}
        />
      <Container>
        <EmployeeList
          employee={this.handleSort()}
          handleFormSubmit={this.handleSortClick}
        />
        <ModalForm 
          searchEmployee={this.searchEmployee}
          filter={this.state.filter}
        />
      </Container>
      </>
    );
  }
}

export default EmployeeContainer;
