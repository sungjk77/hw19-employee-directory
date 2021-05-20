import React from 'react'

export default function EmployeeList(props) {
  // const filtered = props.groceries.filter(grocery => !grocery.purchased);
  const filtered = props;
  return (
    <div>
    <table className="table table-striped table-hover align-middle table-bordered sortable my-3">
      <thead className="table-success">
        <tr>
          <th scope="col"></th>
            <th scope="col">First Name<label  className="pull-right" onClick={props.handleFormSubmit}><i className="fa fa-fw fa-sort" id="First Name"></i></label></th>
            <th scope="col">Last Name<label className="pull-right" onClick={props.handleFormSubmit}><i className="fa fa-fw fa-sort" id="Last Name"></i></label></th>
            <th scope="col">Age<label className="pull-right" onClick={props.handleFormSubmit}><i className="fa fa-fw fa-sort" id="Age"></i></label></th>
            <th scope="col">Gender<label className="pull-right" onClick={props.handleFormSubmit}><i className="fa fa-fw fa-sort" id="Gender"></i></label></th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {filtered.employee.map(employee => (
        <tr key={employee.email}>
          <th className="text-center"><img alt={employee.name.first} src={employee.picture.thumbnail}/></th>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.dob.age}</td>
          <td>{employee.gender}</td>
          <td>{employee.email}</td>
          <td>{employee.location.city}, {employee.location.state}</td>
        </tr>
        ))}
      </tbody>
    </table>
</div>
  );
}
