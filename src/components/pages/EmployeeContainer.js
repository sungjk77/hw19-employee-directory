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
<<<<<<< HEAD
      quantity: 20
=======
      quantity: 5,
      male: true,
      female: true,
      us: true,
      gb: false,
      au: false
>>>>>>> parent of 0149c25 (Updates)
    },
    sortby: "First Name+"
  };

  componentDidMount() {
<<<<<<< HEAD
    API.search("?format=pretty&results=20&nat=us&exc=login,registered,nat")
    .then((res) => {
      // console.log(res.data.results);
=======
    API.search("?format=pretty&results=100&nat=us&exc=login,registered,nat")
    .then((res) => {
>>>>>>> parent of 0149c25 (Updates)
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  }

<<<<<<< HEAD
  searchEmployee() {
    var query = "?format=pretty";
    API.search(query)
    .then((res) => {
      // console.log(res.data.results);
=======
  searchEmployee = event => {
    var query = "?format=pretty&results="+event.target.quantity.value+"&nat=us&exc=login,registered,nat";
    this.setState.filter({
      quantity: event.target.quantity.value
    });
    console.log(query)
    API.search(query)
    .then((res) => {
>>>>>>> parent of 0149c25 (Updates)
      this.setState({
        employee: res.data.results,
        employeeFilter: res.data.results
      });
    })
    .catch((err) => console.log(err));
  };

<<<<<<< HEAD
  handleFilterChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState.filter({
      [name]: value
    });
  };

=======
>>>>>>> parent of 0149c25 (Updates)
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
<<<<<<< HEAD

  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    console.log(value)
=======
 
  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
>>>>>>> parent of 0149c25 (Updates)
      this.setState({
      employeeFilter: this.state.employee.filter(function (person) {
        if (person.name.first.toLowerCase().includes(value)) return person;
        if (person.name.last.toLowerCase().includes(value)) return person;
      }),
    });
  };
<<<<<<< HEAD
  
=======
  // todo: prepopulate search bar with datalist
>>>>>>> parent of 0149c25 (Updates)
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
<<<<<<< HEAD
        <ModalForm />
=======
        <ModalForm 
          searchEmployee={this.searchEmployee}
          filter={this.state.filter}
        />
>>>>>>> parent of 0149c25 (Updates)
      </Container>
      </>
    );
  }
}

export default EmployeeContainer;
