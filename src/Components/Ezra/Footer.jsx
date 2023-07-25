import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from "react-bootstrap/Image";
import react_logo from "../../Assets/Image/react1png.png";
import Node_logo from "../../Assets/Image/Nodepng.png";
// import MongoDb_logo from "../../Assets/Image/Mongopng.png";
import Ispm_logo from "../../Assets/Image/ISPM.png";

function Footer() {
  return (
    <MDBFooter color="blue" bg="dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <Image src={react_logo} />
          </MDBCol>
          <MDBCol md="3">
            <Image src={Node_logo} />
          </MDBCol>
          <MDBCol md="3">{/* <Image src={} /> */}</MDBCol>
          <MDBCol md="3">
            <Image src={Ispm_logo} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
