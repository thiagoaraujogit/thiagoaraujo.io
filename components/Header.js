import { Nav, Navbar } from 'react-bootstrap'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img className={styles.logo} src="/cds-logo.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navbar}>
          <Nav.Link href="#about">Sobre</Nav.Link>
          <Nav.Link href="#services">Serviços</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>
          <Nav.Link href="#help">Ajuda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
