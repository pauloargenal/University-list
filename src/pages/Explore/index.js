import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { fetchUniversities } from "../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import { UniversityCard } from "../../components";
import Search from "../../components/Search";

const useStyles = makeStyles(() => ({
  explore: {
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 100,
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20
  },
  universities: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between"
  },
  filters: {
    display: "flex",
    marginBottom: 50
  }
}));

const Explore = () => {
  const classes = useStyles();
  const [university, setUniversity] = useState(null);
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState("");
  const handleData = async () => {
    const output = await fetchUniversities();

    const data = output.map((uni, idx) => ({
      id: idx,
      name: uni.name,
      country: uni.country,
      page: uni.web_pages[0]
    }));
    setUniversity(data);
    setCurrent(data.slice(count.prev, count.next));
  };

  const getMoreData = () => {
    if (current.length === university.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(university.slice(count.prev + 10, count.next + 10))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }));
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className={classes.explore}>
      <div className={classes.title}>
        <Typography variant="h3" className={classes.title}>
          Explore
        </Typography>
      </div>
      <div className={classes.filters}>
        <Search />
      </div>
      {university && (
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className={classes.universities}
        >
          <div className={classes.universities}>
            {current &&
              current.map((uni, index) => (
                <UniversityCard
                  key={index}
                  image={
                    "https://images.unsplash.com/20/cambridge.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
                  }
                  name={uni.name}
                  country={uni.country}
                  page={uni.page}
                />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Explore;
