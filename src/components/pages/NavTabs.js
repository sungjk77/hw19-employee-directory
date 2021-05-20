import React from "react";

function NavTabs(props){
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h5 className="text-white h4 px-3 align-middle"><span>
        <button type="button" className="btn btn-outline-secondary mx-2" data-bs-toggle="modal" data-bs-target="#filterModal" data-bs-whatever="filter">✔</button>Employee Directory</span></h5>
      </nav>
  )
};


export default NavTabs;
