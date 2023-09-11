

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <>  
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">FlowerShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <br />

    <h1 className="text-center">Reack Checkpoint</h1>
    <br />

    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://silverfallsseed.com/wp-content/uploads/2015/12/cynoglossum-field-klein-2019-6.jpg" />
            <Card.Body>
            <Card.Title>Forget Me Not</Card.Title>
             <Card.Text>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum alias harum delectus id dolor.
            </Card.Text>
           <Button variant="success">Go somewhere</Button>
         </Card.Body>
         </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://silverfallsseed.com/wp-content/uploads/2016/01/PoppyCaliforniaIvoryCastleWhite01.jpg" />
            <Card.Body>
            <Card.Title>California White</Card.Title>
             <Card.Text>
             Odio vel architecto incidunt ipsum impedit vero minima maxime tempora et eius dicta at velit.
            </Card.Text>
           <Button variant="success">Go somewhere</Button>
         </Card.Body>
         </Card>
        </Col>
        
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://silverfallsseed.com/wp-content/uploads/2015/12/candytuft-stadeli-2020-1.jpg" />
            <Card.Body>
            <Card.Title>Tall Mix</Card.Title>
             <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum alias harum delectus id dolor. 
            </Card.Text>
           <Button variant="success">Go somewhere</Button>
         </Card.Body>
         </Card>
        </Col>
      </Row>
    </Container>
    <br /><br />
    <div className='text-center'>
    <Button variant="danger">ORDER A BOUQUET!</Button>
    </div>
    </div>   
  </>  
  );
}


export default App;
