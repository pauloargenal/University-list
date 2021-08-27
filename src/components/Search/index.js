import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  searchForm: {
    display: "flex",
    alignItems: "center",
    width: 350,
    height: 35
  },
  field: {
    background: "#fff",
    outline: "none",
    border: "1px solid #B9B9B9",
    color: "#8e8e93",
    fontSize: 14,
    width: "100%",
    height: 34,
    padding: 20,
    borderRadius: 8
  },
  icon: {
    left: -40,
    fontSize: 23,
    position: "relative",
    color: "#B9B9B9"
  }
});

const Search = ({ handleSearch }) => {
  const input = useRef();
  const classes = useStyles();
  const handleInput = (e) => {
    e.preventDefault();
    handleSearch(input.current.value);
  };
  return (
    <form className={classes.searchForm} onSubmit={(e) => handleInput(e)}>
      <input
        ref={input}
        className={classes.field}
        type="text"
        name="ukuusearch"
        placeholder="Search item"
      />
      <SearchIcon className={classes.icon} />
    </form>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
export default Search;
