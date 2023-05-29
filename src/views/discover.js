import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Stars from "./stars";

export default function Home() {
  const [movies, setMovies] = useState(null);

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
    },
  };

  // REQUESTS DATA FROM THE API
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json));
  }, []);

  // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO DISPLAY ON WEBPAGE
  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };

  return (
    <Container className="homeContainer">
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        {movies ? (
          // CREATES A CARD FOR EACH MOVIE IMAGE
          movies.results.map((movie) => (
            <div className="m-4" key={movie.id}>
              <Card
                key={movie.id}
                style={{ width: "200px", height: "450px", marginTop: "50px", border: 'solid black 1px' }}
              >
                <Nav>
                  <Nav.Item>
                    <Link to={`/details/${movie.id}`}>
                      <Button
                        style={{ position: "absolute", zIndex: '1', opacity: '0', left: '-.5px', top: "0", width: "200px", height: "300px", objectFit: "cover" }}
                        to={`/details?data=${movie.id}`}

                      ></Button>
                    </Link>
                    <Card.Img
                      variant="top"
                      src={getImageUrl(movie.poster_path)}
                      alt="Movie poster"
                      style={{ position: "absolute", left: '-.7px', top: "0", width: "200px", height: "300px", objectFit: "cover" }}
                    />
                  </Nav.Item>
                </Nav>
                <Card style={{ position: "absolute", bottom: "0", top: "67%", right: "0", left: "0" }}>
                  <Card.Title style={{ textAlign: "center" }}>{movie.original_title}</Card.Title>
                  <Stars movie_id = { movie.id } />
                  <Nav>
                    <Nav.Item>
                      <Link to={`/details/${movie.id}`}>
                        <Button
                          style={{ position: "absolute", bottom: "10%", left: "18%" }}
                          variant="dark"
                          size="sm"
                          to={`/details?data=${movie.id}`}>
                          Details & Reviews
                        </Button>
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Card>
            </div>
          ))
        ) : (
          "loading.."
        )}
      </div>
    </Container>
  );
}
