import React from "react";

function ModalForm(props) {
  return (
    <form id="filterForm">
    <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="filterModalLabel">Filter Search from API</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="filter-results" className="col-form-label">Quantity to Request:</label>
                <input type="number" className="form-control" id="filter-results" onChange={props.handleInputChange} defaultValue="20" name="quantity"/>
              </div>
              <div className="mb-3">
                <input className="form-check-input" type="checkbox" value="" id="filter-gender-m" defaultChecked/>
                <label className="form-check-label px-1" htmlFor="flexCheckChecked">Male</label>

                <input className="form-check-input" type="checkbox" value="" id="filter-gender-f" defaultChecked/>
                <label className="form-check-label px-1" htmlFor="flexCheckChecked">Female</label>
              </div>
              <div className="mb-3">
                <input className="form-check-input" type="checkbox" value="" id="filter-cb-US" defaultChecked/>
                <label className="form-check-label px-1" htmlFor="flexCheckChecked">US</label>

                <input className="form-check-input" type="checkbox" value="" id="filter-cb-GB"/>
                <label className="form-check-label px-1" htmlFor="flexCheckChecked">GB</label>

                <input className="form-check-input" type="checkbox" value="" id="filter-cb-AU"/>
                <label className="form-check-label px-1" htmlFor="flexCheckChecked">AU</label>
              </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={props.handleRefresh} type="button" className="btn btn-success">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}

export default ModalForm;