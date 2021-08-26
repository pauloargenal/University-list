import React from "react";
import PropTypes from "prop-types";

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
