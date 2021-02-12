import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
function FilmCard(props) {
  return (
    <Card className="mt-3  ">
      <Card.Img
        variant="top"
        src={
          props.movie
            ? "https://image.tmdb.org/t/p/w500/" + props.movie.poster_path
            : "https://images.unsplash.com/photo-1592285733872-b70552ecf665?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
      />
      <Card.Body className="text-light">
        <Card.Title>
          {props.movie ? props.movie.title : "Böyle Bir Film Bulunamadı"}
        </Card.Title>
        <Card.Text>{props.movie ? props.movie.overview : "Tekrar Deneyin"}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default FilmCard;
