import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { fetchUniversities, fetchbyName } from "../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import { UniversityCard, Loader } from "../../components";
import Search from "../../components/Search";

const useStyles = makeStyles((theme) => ({
  explore: {
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 50,
      paddingRight: 50
    }
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
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around"
    }
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
  const [search, setSearch] = useState("");

  const handlePage = (universities) => {
    const data = universities.map((uni, idx) => ({
      id: idx,
      name: uni.name,
      country: uni.country,
      page: uni.web_pages[0]
    }));
    setUniversity(data);
    setCurrent(data.slice(count.prev, count.next));
  };

  const handleSearch = async (search) => {
    const universities = await fetchbyName(search);
    setSearch(search);
    handlePage(universities);
  };

  const handleData = async () => {
    const universities = await fetchUniversities();
    handlePage(universities);
  };

  const getMoreData = () => {
    if (current) {
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
    }
  };

  useEffect(() => {
    handleData();
    console.log("useEffect");
  }, []);
  return (
    <div className={classes.explore}>
      <div className={classes.title}>
        <Typography variant="h3" className={classes.title}>
          Explore
        </Typography>
      </div>
      <div className={classes.filters}>
        <Search handleSearch={handleSearch} />
      </div>
      {search ? (
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          className={classes.universities}
        >
          <div className={classes.universities}>
            {current &&
              current.map((uni, index) => (
                <UniversityCard
                  key={index}
                  image={"https://source.unsplash.com/800x900/?university"}
                  name={uni.name}
                  country={uni.country}
                  page={uni.page}
                />
              ))}
          </div>
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          className={classes.universities}
        >
          <div className={classes.universities}>
            {current &&
              current.map((uni, index) => (
                <UniversityCard
                  key={index}
                  image={"https://source.unsplash.com/800x900/?university"}
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
