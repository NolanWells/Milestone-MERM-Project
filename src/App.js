// import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
      <Router>
        <Container>
          <Nav>
            {/* home */}
            <Nav.Item>
              <Nav.Link href="/">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>

            {/* 
            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/'>Add A Movie</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/'>See All Reviews</Link>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Container>

        <header>
          <h1>Movies</h1>
        </header>
      </Router>
    </>
  );
}

export default App;
