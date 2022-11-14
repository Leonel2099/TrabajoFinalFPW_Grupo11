import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import icon from "../Assets/icons/logo.png" 
export default function NavBar() {
    return (
        <>
            <Navbar className='navbar'>
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            alt="image-nav"
                            src={icon}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="letras">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Games">Games</Nav.Link>
                        <Nav.Link href="/AboutPage">AboutPage</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}