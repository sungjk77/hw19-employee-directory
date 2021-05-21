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
      quantity: 5,
      male: true,
      female: true,
      us: true,
      gb: false,
      au: false
    },
    sortby: "First Name+"
  };

  componentDidMount() {
    API.search("?format=pretty&results=100&nat=us&exc=login,registered,nat")
    .then((res) => {
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  }

  searchEmployee = event => {
    var query = "?format=pretty&results="+event.target.quantity.value+"&nat=us&exc=login,registered,nat";
    this.setState.filter({
      quantity: event.target.quantity.value
    });
    console.log(query)
    API.search(query)
    .then((res) => {
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  };

  handleSortClick = event => {
    switch (event.target.id) {
      case "First Name":
        if (this.state.sortby === "First Name+") {
          this.setState({sortby:"First Name-"})
        } else {
          this.setState({sortby:"First Name+"})
        }
        break;
      case "Last Name":
        if (this.state.sortby === "Last Name+") {
          this.setState({sortby:"Last Name-"})
        } else {
          this.setState({sortby:"Last Name+"})
        }
        break;
      case "Age":
        if (this.state.sortby === "Age+") {
          this.setState({sortby:"Age-"})
        } else {
          this.setState({sortby:"Age+"})
        }
        break;
      case "Gender":
        if (this.state.sortby === "Gender+") {
          this.setState({sortby:"Gender-"})
        } else {
          this.setState({sortby:"Gender+"})
        }
        break;
      default:
        break;
    }
    this.handleSort();
  }

  handleSort = () => {
    // const employeeList = this.state.employeeFilter;
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
    const value = event.target.value.toLowerCase();
      this.setState({
      employeeFilter: this.state.employee.filter(function (person) {
        if (person.name.first.toLowerCase().includes(value)) return person;
        if (person.name.last.toLowerCase().includes(value)) return person;
      }),
    });
  };
  // todo: prepopulate search bar with datalist
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
