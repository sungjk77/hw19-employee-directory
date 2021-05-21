import React from 'react'

export default function SearchForm(props) {
  const filtered = props;
  console.log(filtered)
  return (
    <form className="d-flex px-3 my-3">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search"
        list="employee"
        type="text"
        className="form-control px-1 mx-1"
        placeholder="Search For an Employee"
         id="search"
      />
      <datalist id="employee">
        {/* {props.employee.map(employee => (
          <option value={employee.name} key={employee} />
        ))} */}
      </datalist>
      {/* 
      <datalist id="people">
      {/* {filtered.employee.map(employee => (
        <option value={employee.email} key={employee.email} />))} 
      </datalist> */}

    </form>
  );
}
