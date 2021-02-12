import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/home.css";

import SearchBar from "./components/SearchBar";
import FilmCard from "./components/FilmCard";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const inputValue = useRef();
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  function handleForm(event) {
    event.preventDefault();
    setSearch(inputValue.current.value);
  
  }
  useEffect(() => {
    if(search){
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1907acf7c7b6bb2654f9595f4c550b1b&language=en-US&page=1&include_adult=false&query=${search}`
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((err) => console.error(err));
    }
  
      });

  return (
    <>
      <Container fluid id="container" className="p-0">
        
        <Row className="d-flex justify-content-center mt-5">
          <Col md={6}>
            <SearchBar handleForm={handleForm} inputValue={inputValue} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={3}>
          {data?<FilmCard movie={data && data.results[0]} />:""}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
