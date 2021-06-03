import AtomParagraph from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,  Form, FormControl, Button, } from 'react-bootstrap';

export default function test() {
  return (
    <>
    <Navbar  variant="light" style={{background: "#0086CF"}}>
  <Navbar.Brand href="#home"><img src="/homepage/nav_logo.svg" /></Navbar.Brand>
  <Nav className="mr-auto text-light">
    <Nav.Link className="text-light" href="#home">Trends</Nav.Link>
    <Nav.Link className="text-light" href="#features">Explore</Nav.Link>
    <Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>
    <Nav.Link className="text-light" href="#pricing">About Us</Nav.Link>
  </Nav>
  <Form inline>
  <img src="/homepage/chart_logo.svg" style={{marginRight:"20px"}} />
  <img src="/homepage/user_logo.svg" />
  </Form>
</Navbar>
<center>
  <div className= "row container mt-5">
    <div className="col-md-6 text-left">
      <AtomParagraph value="Peduli Digital Market" size="36px" lineHeight="39px" weight="bold" font="Roboto Condensed" />
      <AtomParagraph value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged "
      size="14px" lineHeight="30px"/>
<div className="mt-5">
      < AtomButton value = "Browse All Product"
                    background = "#0086CF"
                    color = "#FFF"
                    padding = "10px 50px 10px 20px"
                    border = "none"
                    radius = "10px"
                    img src = "/homepage/right_arrow.svg"
      / >
      <AtomButton value = "Follow This Board  "
                  customClass = "ml-3"
                  background = "#F0F0F0"
                  color = "#787878"
                  padding = "10px 50px 10px 20px"
                  border = "none"
                  radius = "10px"
      / >
</div>
    </div>
      <img src="/homepage/banner_main.svg" />
    <div className="col-md-6">
    </div>
  </div>
</center>

    </>
  );
}
