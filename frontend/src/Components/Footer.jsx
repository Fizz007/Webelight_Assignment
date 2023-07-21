import React from "react";
import { Col, Container, ModalFooter, Row } from "react-bootstrap";
import {
  TiShoppingCart,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialGooglePlus,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <ModalFooter
      bgColor="light"
      className="text-center text-lg-start text-muted sticky"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="">
          <Link href="/" className="me-4 text-reset">
            <TiSocialFacebook fab icon="facebook-f" />
          </Link>
          <Link href="/" className="me-4 text-reset">
            <TiSocialTwitter fab icon="twitter" />
          </Link>
          <Link href="/" className="me-4 text-reset">
            <TiSocialGooglePlus fab icon="google" />
          </Link>
          <Link href="/" className="me-4 text-reset">
            <TiSocialInstagram fab icon="instagram" />
          </Link>
          <Link href="/" className="me-4 text-reset">
            <TiSocialLinkedin fab icon="linkedin" />
          </Link>
          <Link href="/" className="me-4 text-reset">
            <TiSocialGithub fab icon="github" />
          </Link>
        </div>
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <TiShoppingCart icon="gem" className="me-3" />
                Myntra India
              </h6>
              <p>
                This is an online retail brand in India, which sells various
                things needed on a day to day basis for the people.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Shirts
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Kurtis
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trousers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  T-Shirts
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  *TnC
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaMapMarkerAlt icon="home" className="me-2" />
                New Delhi, IN 10012, India
              </p>
              <p>
                <MdOutlineEmail icon="envelope" className="me-3" />
                support@myntra.com
              </p>
              <p>
                <MdCall icon="phone" className="me-3" /> +91-8887776661
              </p>
              <p>
                <MdCall icon="print" className="me-3" /> +91-9995551234
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © MYNTRA 2023 Copyright
      </div>
    </ModalFooter>
  );
}
