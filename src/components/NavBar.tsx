import { Navbar, Nav, Container,Button } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar expand="lg" className="colorBackground">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo_white.png' width="50%"alt="" />
                    &nbsp; 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to="/mint">Mint</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create Color</Nav.Link> */}
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;