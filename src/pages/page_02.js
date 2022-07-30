import React, { useEffect, useState } from "react";

import "./style.css";
import "./style_02.css";
import NavBar from "../components/NavBar";
import searchIcon from "../assets/images/homework_Front-End_01/search-copy.png";
import arrowBottom from "../assets/images/homework_Front-End_01/path-copy-7.png";
import arrowLeft from "../assets/images/homework_Front-End_01/path-copy-4.png";
import { Link, useParams } from "react-router-dom";
import api from "../api/api.js";
import likeIcon from "../assets/images/homework_Front-End_02/hand.png";
import dislikeIcon from "../assets/images/homework_Front-End_02/hand-copy.png";
import arrowDropDpwn from "../assets/images/homework_Front-End_02/path@2x.png";
import arrowBack from "../assets/images/homework_Front-End_02/arrow-left@2x.png";



const Page_02 = () => {
  const { jokeId } = useParams();
  const [data, setData] = useState([]);
  const [showDrop, setShowDrop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState();
  const [jokeRondom, setJokeRondom] = useState();

  var joke =  data.find((joke) => joke.id === jokeId)
 
  const searchByJoke = (str) => {
    api.getRondomJoke(str).then((response) => {
      if (response.data) {
        setJokeRondom(response.data);
     
        console.warn("jokeRondom",jokeRondom)
      }
    });
 
    setSelectedCat(str.toUpperCase())
    setShowDrop(false)
  };
  const showDropFun =()=>{
    if (showDrop) {
        setShowDrop(false)
    }else{
        setShowDrop(true)
    }
  }
  useEffect(() => {
   
    setSelectedCat(joke?.categories[0].toUpperCase())
    api.getData().then((response) => {
      console.log(response.data.result);

      setData(response.data.result);
      console.warn("jokeRondom",jokeRondom)
      console.log("eqfsqdv", data);
   
    });
    api.getCategories().then((response) => {
        setCategories(response.data);
      });
      // joke (defaultValue)
  }, []);

  return (
    <div className="page-02">
      <NavBar />
      <div className="header">
        <div className="header-info">
          <div className="p-0">
            <p>The Joke Bible</p>
          </div>
          <div className="p-1">
            <p>Daily Laughs for you and yours</p>
          </div>
          <div className="input-search" onClick={()=> showDropFun()}>
            <input
              placeholder="How can we make you laugh today?"
              disabled
              value={selectedCat}
            />
            <img src={searchIcon} />
          </div>

          {
            showDrop ?  <div className="input-search-drop">
            <span className="arrow-drop" ><img src={arrowDropDpwn} /> </span>
           
             <ul>
                {categories?.map((category) =>
                <li onClick={()=>searchByJoke(category)} >{category.toUpperCase()}</li>
                ) }
                

             </ul>
          </div> : true
          }
        
        </div>
      </div>
      <div className="container ">
        <Link to="/" >
        <div className="btn-back" >
            <span>
                <img src={arrowBack} />
            </span>

        </div>
        </Link>
        <div>
          {
            jokeRondom ? (  <div className="post-section">
            <div className="card-header">
              <div className="category-name-02">
                <span> . {jokeRondom?.categories[0].toUpperCase()} JOKES</span>
              </div>
              <div className="tranding"> . TRANDING</div>
            </div>
            <span className="title">
              {jokeRondom?.categories[0].toUpperCase()} JOKES{" "}
            </span>
            <span className="post-content">{jokeRondom?.value}</span>
          </div>) : (  <div className="post-section">
            <div className="card-header">
              <div className="category-name-02">
                <span> . {joke?.categories[0].toUpperCase()} JOKES</span>
              </div>
              <div className="tranding"> . TRANDING</div>
            </div>
            <span className="title">
              {joke?.categories[0].toUpperCase()} JOKES{" "}
            </span>
            <span className="post-content">{joke?.value}</span>
          </div>)
          }
        
          <div className="opinion">
            <span className="like">
         
              <img src={likeIcon} />{" "}
            </span>
            <span className="dislike">
              <img src={dislikeIcon} />
            </span>
          </div>
        </div>

        <div className="top-10-section">
          <span className="title">The top 10 jokes this week</span>
          <a className="content">Smoking joke</a>
          <a className="content">My boss joke</a>
          <a className="content">Dirty millionaire joke</a>
          <a className="content">Smoking joke</a>
          <a className="content">My boss joke</a>
          <a className="content">Dirty millionaire joke</a>
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

export default Page_02;
