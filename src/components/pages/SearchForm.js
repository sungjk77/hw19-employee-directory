import React from 'react'

export default function SearchForm(props) {
  console.log(props.employee)
  return (
    <form className="d-flex px-3 my-3">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="namesearch"
        list="employee"
        type="text"
        className="form-control px-1 mx-1"
        placeholder="Search For an Employee"
         id="search"
      />
      <datalist id="employee">
        {props.employee.map(employee => (
          <option value={employee.name.first} key={employee.email} />
        ))}
        {props.employee.map(employee => (
          <option value={employee.name.last} key={employee.email} />
        ))}
      </datalist>
    </form>
  );
}
