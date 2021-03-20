import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header>
  <Container>
  <Navbar bg="dark" expand="md" fixed="top">
  <img src="https://img.icons8.com/android/48/fa314a/cycling-mountain-bike.png"/>
  <Navbar.Brand href="/"> <h3 id="titulo-nome">Elton Santos - Portfólio</h3> </Navbar.Brand> 
  <Navbar.Toggle aria-controls="navbarResponsive"/>     
  <Navbar.Collapse id="navbarResponsive">
    <Nav as="ul" className="ml-auto">
      <Nav.Item as="li" id="nav-linha">
     
      <Link to="/page-4" className="nav-link" activeClassName="active"><a id="test">Bike</a></Link>
      <Link to="/page-3" className="nav-link" activeClassName="active"><a id="test">Acessórios</a></Link>
      <Link to="/page-2" className="nav-link" activeClassName="active"><a id="test">Contatos</a></Link>
      
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
</Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
