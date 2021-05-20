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
      quantity: 20
    },
    sortby: "First Name+"
  };

  componentDidMount() {
    API.search("?format=pretty&results=20&nat=us&exc=login,registered,nat")
    .then((res) => {
      // console.log(res.data.results);
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  }

  searchEmployee() {
    var query = "?format=pretty";
    API.search(query)
    .then((res) => {
      // console.log(res.data.results);
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  };

  handleFilterChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState.filter({
      [name]: value
    });
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
    console.log(value)
      this.setState({
      employeeFilter: this.state.employee.filter(function (person) {
        if (person.name.first.toLowerCase().includes(value, 0)) return person.name.first.includes(value, 0);
        if (person.name.last.toLowerCase().includes(value, 0)) return person.name.last.includes(value, 0);
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
        <ModalForm />
      </Container>
      </>
    );
  }
}

export default EmployeeContainer;
