import React from "react";

function ModalForm(props) {
  // console.log(props.filter)
  return (
    <form id="filterForm" onSubmit={props.searchEmployee}>
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
                <input 
                  defaultValue={props.filter.quantity}
                  name="quantity" 
                  type="number" 
                  className="form-control" 
                />
              </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-success">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}

export default ModalForm;
