import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (


  <Nav variant="pills">
    {/* <Nav.Item>
      <Nav.Link eventKey="1" href="#/home">
        NavLink 1 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="2" title="Item">
        NavLink 2 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="3" disabled>
        NavLink 3 content
      </Nav.Link>
    </Nav.Item> */}
    <NavDropdown title="Major Keys" id="nav-dropdown">
      {/* <NavDropdown.Item href="/A">A</NavDropdown.Item>
      <NavDropdown.Item href="/B">B</NavDropdown.Item> */}
      <NavDropdown.Item href="/C">C</NavDropdown.Item>
      <NavDropdown.Item href="/GMajor">G Major</NavDropdown.Item>
      <NavDropdown.Item href="/DMajor">D Major</NavDropdown.Item>
      <NavDropdown.Item href="/AMajor">A Major</NavDropdown.Item>
      <NavDropdown.Item href="/EMajor">E Major</NavDropdown.Item>
      <NavDropdown.Item href="/BMajor">B Major</NavDropdown.Item>
      <NavDropdown.Item href="/FsMajor">F# Major</NavDropdown.Item>
      <NavDropdown.Item href="/CsMajor">C# Major</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Separated link">Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>

)

}