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
      <NavDropdown.Item ><Link to ="/CMajor">C Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/GMajor">G Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/DMajor">D Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/AMajor">A Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/EMajor">E Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/BMajor">B Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/FsMajor">F# Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/CsMajor">C# Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/CfMajor">Cb Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/GfMajor">Gb Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/DfMajor">Db Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/AfMajor">Ab Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/EfMajor">Eb Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/BfMajor">Bb Major</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/FMajor">F Major</Link></NavDropdown.Item>

      {/* <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Separated link">Separated link</NavDropdown.Item> */}
    </NavDropdown>

    <Nav.Item>
      <Nav.Link eventKey="1" href="/circle-of-fifths">
        Home
      </Nav.Link>
    </Nav.Item>
      
    <NavDropdown title="Minor Keys" id="nav-dropdown">
      <NavDropdown.Item ><Link to="/AMinor">A Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/EMinor">E Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/BMinor">B Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/FsMinor">F# Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/CsMinor">C# Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/GsMinor">G# Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/DsMinor">D# Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/AsMinor">A# Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/AfMinor">Ab Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/EfMinor">Eb Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/BfMinor">Bb Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/FMinor">F Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/CMinor">C Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/GMinor">G Minor</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/DMinor">D Minor</Link></NavDropdown.Item>
    </NavDropdown>
  </Nav>

)

}