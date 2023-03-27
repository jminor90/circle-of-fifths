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
      <NavDropdown.Item href="/CMajor">C Major</NavDropdown.Item>
      <NavDropdown.Item href="/GMajor">G Major</NavDropdown.Item>
      <NavDropdown.Item href="/DMajor">D Major</NavDropdown.Item>
      <NavDropdown.Item href="/AMajor">A Major</NavDropdown.Item>
      <NavDropdown.Item href="/EMajor">E Major</NavDropdown.Item>
      <NavDropdown.Item href="/BMajor">B Major</NavDropdown.Item>
      <NavDropdown.Item href="/FsMajor">F# Major</NavDropdown.Item>
      <NavDropdown.Item href="/CsMajor">C# Major</NavDropdown.Item>
      <NavDropdown.Item href="/CfMajor">Cb Major</NavDropdown.Item>
      <NavDropdown.Item href="/GfMajor">Gb Major</NavDropdown.Item>
      <NavDropdown.Item href="/DfMajor">Db Major</NavDropdown.Item>
      <NavDropdown.Item href="/AfMajor">Ab Major</NavDropdown.Item>
      <NavDropdown.Item href="/EfMajor">Eb Major</NavDropdown.Item>
      <NavDropdown.Item href="/BfMajor">Bb Major</NavDropdown.Item>
      <NavDropdown.Item href="/FMajor">F Major</NavDropdown.Item>

      {/* <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Separated link">Separated link</NavDropdown.Item> */}
    </NavDropdown>

    <Nav.Item>
      <Nav.Link eventKey="1" href="/">
        Home
      </Nav.Link>
    </Nav.Item>

    <NavDropdown title="Minor Keys" id="nav-dropdown">
      <NavDropdown.Item href="/AMinor">A Minor</NavDropdown.Item>
      <NavDropdown.Item href="/EMinor">E Minor</NavDropdown.Item>
    </NavDropdown>
  </Nav>

)

}