
import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { BrowserRouter,Route, Routes,Link } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Tokens from './Components/Tokens/Tokens';
import Home from './Components/Home/Home';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    
     <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">SG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/tokens">Tokens</Nav.Link>
            </Nav>  
            <Nav className="justify-content-end">
            <Navbar.Text>Signed in as: </Navbar.Text>
            <Nav.Link as={Link} to="/profile">
                  <a href="/profile">Suvadeep Ghosh</a>
            </Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            </Nav> 
        </Container>
      </Navbar>
      <br />
    </>
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tokens" element={<Tokens/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}
export default App;