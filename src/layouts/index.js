import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Custom = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

Custom.propTypes = {
  children: PropTypes.node.isRequired
};

export default Custom;
