import { Nav, Navbar } from 'react-bootstrap'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <Navbar className={styles.navbar} expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#about">Sobre</Nav.Link>
                    <Nav.Link href="#services">Serviços</Nav.Link>
                    <Nav.Link href="#contact">Contato</Nav.Link>
                    <Nav.Link href="#help">Ajuda</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
                <img className={styles.logo} src="/cds-logo.svg" />
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header
