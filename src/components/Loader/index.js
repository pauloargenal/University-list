import React from "react";
import "./index.scss";

const Loader = ({ ...props }) => {
  return (
    <div data-testid="loader" className="container">
      <i type="icon-spinner animate-spin" className="loading" {...props} />
    </div>
  );
};

export default Loader;
