import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

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

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchForm}>
      <input
        className={classes.field}
        type="text"
        name="ukuusearch"
        placeholder="Search item"
      />
      <SearchIcon className={classes.icon} />
    </div>
  );
};
export default Search;
