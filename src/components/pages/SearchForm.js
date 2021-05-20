import React from 'react'

export default function SearchForm(props) {
  const filtered = props;
  console.log(filtered)
  return (
    <form className="d-flex px-3">
      {/* <input
          onChange={props.handleFilterBy}
          value={props.search}
          name="search"
          type="text"
          placeholder="Search For an Employee"
          id="search"
          className="form-control px-1 mx-1"
          list="people"
      />
      <datalist id="people">
      {/* {filtered.employee.map(employee => (
        <option value={employee.email} key={employee.email} />))} 
      </datalist> */}
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            list="employee"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="filter"
          />
        <datalist id="employee">
          {/* {props.employee.map(employee => (
            <option value={employee.name} key={employee} />
          ))} */}
        </datalist>
    </form>
  );
}
