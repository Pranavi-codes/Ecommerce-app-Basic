import React from "react";

const PageNotFound = () => {
  return (
    <div className="card m-5 p-5 bg-danger-subtle">
      <h3 className="card-title">404 Page Not Found</h3>
      <p className="card-text">
        Please check URL , router path not found enter valid URL
      </p>
    </div>
  );
};

export default PageNotFound;
