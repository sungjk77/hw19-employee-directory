import React from "react";

function ErrorMessage() {
  return (
    <h1 className="text-danger">
      <div className="alert alert-danger" role="alert">
        Error, nobody with that name on this list!
      </div>
    </h1>
  );
}

export default ErrorMessage;
