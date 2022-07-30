import React, { useEffect, useState } from "react";

import "./style.css";
import NavBar from "../components/NavBar";
import searchIcon from "../assets/images/homework_Front-End_01/search-copy.png";
import arrowBottom from "../assets/images/homework_Front-End_01/path-copy-7.png";
import arrowLeft from "../assets/images/homework_Front-End_01/path-copy-4.png";
import api from "../api/api";
import { Link } from "react-router-dom";

const Page_01 = () => {
  const [data, setData] = useState([]);
  const [countItems, setCountItems] = useState(6);
  const [filteredJoke, setFilteredJoke] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const searchByJoke = (category) => {
    if (category.toString().length >= 3) {
      api.searchForJoke(category).then((response) => {
        setFilteredJoke(response.data.result);
      });
    }
  };

  const searchByCategory = (cat) => {
    if (cat === "All Categories") {
      setFilteredJoke(data);
    } else {
      cat
        ? setFilteredJoke(data.filter((joke) => joke.categories.includes(cat)))
        : setFilteredJoke(data.filter((joke) => joke.categories === []));
    }

    setSelectedCategory(cat);
  };

  const scrollToViewMore = () => {
    setCountItems(countItems + 6);
    setFilteredJoke(filteredJoke.filter((item, idx) => idx < countItems));
  };

  useEffect(() => {
    api.getData().then((response) => {
      setData(response.data.result);
      setFilteredJoke(response.data.result);
    });

    api.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);
  const categoryClassList = [
    "dad-jokes",
    "adult-jokes",
    "christmas-jokes",
    "job-jokes",
    "birthday-jokes",
    "social-jokes",
    "puns",
    "new",
  ];

  return (
    <div>
      <NavBar />
      <div className="header">
        <div className="header-info">
          <div className="p-0">
            <p>The Joke Bible</p>
          </div>
          <div className="p-1">
            <p>Daily Laughs for you and yours</p>
          </div>
          <div className="input-search">
            <input
              placeholder="How can we make you laugh today?"
              onChange={(e) => searchByJoke(e.target.value)}
            />
            <img src={searchIcon} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="category-section">
          {categories?.map((category) => (
            <div
              className={`category ${
                categoryClassList[Math.floor(Math.random() * 8)]
              }`}
              onClick={() => searchByCategory(category)}
            >
              <span>{category.toUpperCase()}</span>
            </div>
          ))}

          <div
            className="category view-all"
            onClick={() => searchByCategory("All Categories")}
          >
            <span>VIEW ALL</span>
            <span>
              <img src={arrowBottom} />
            </span>
          </div>
        </div>

        <div className="category-name">
          <span>{selectedCategory.toUpperCase()} JOKES </span>
        </div>
        <div className="pots-section">
          {filteredJoke?.map((joke) => (
            <div className="post">
              <Link to={`/jokes/${joke.id}`}>
                <span className="post-title">
                  {joke.categories[0] ? joke.categories[0] : "ungategorized"}{" "}
                  Joke
                </span>
                <span className="post-content">{joke.value}</span>

                <span className="see-status">
                  SEE STATUS <img src={arrowLeft} />
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="view-more-section">
          <div className="category view-all" onClick={() => scrollToViewMore()}>
            <span>VIEW MORE</span>
            <span>
              <img src={arrowBottom} />
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info-section">
          <p>got jobs? get paid</p>
          <p>for submitting!</p>
          <span className="submit-joke">
            submit joke{" "}
            <span style={{ paddingTop: "10px" }}>
              {" "}
              <img src={arrowLeft} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page_01;
