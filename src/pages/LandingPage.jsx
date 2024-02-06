import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl = useNavigate();

  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ textAlign: "justify" }}>
            Welcome to <span className="text-warning">Media Player</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            magnam atque natus labore consequuntur veniam minus ratione, aut
            neque unde! Quia suscipit consequatur commodi porro voluptas, dolor
            hic corrupti nemo.
          </p>
          <button
            onClick={() => navigateByUrl("/home")}
            className="mt-4 btn btn-info "
          >
            Get Started
          </button>
        </Col>

        <Col lg={5}>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIxbzBhdGh3emZ1cm9iNzJmZ243bXUyN2xqZmVqZHhkd2NzdTRiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hD1TSlavNv114vTaME/giphy.gif"
            alt=""
          />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column ">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">
          <Card className="p-5 bg-dark" style={{ width: "18rem" }}>
            <Card.Img
              height={"250px"}
              width={"450px"}
              variant="top"
              src="https://i.pinimg.com/originals/52/ee/db/52eedbd99898f136f9b7b7b9d4395dcc.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-5 bg-dark" style={{ width: "18rem" }}>
            <Card.Img
              height={"250px"}
              width={"450px"}
              variant="top"
              src="https://i.pinimg.com/originals/69/99/83/699983ab49d614aa5a2284a2334ec7a4.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-5 bg-dark" style={{ width: "18rem" }}>
            <Card.Img
              height={"250px"}
              width={"450px"}
              variant="top"
              src="https://i.pinimg.com/originals/d4/2a/8f/d42a8f8f73cac99891899d93506ce0eb.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div
        className="container border border-secondary border border-rounded p-5 b-5 mt-5 d-flex align-items-center justify-content-between w-100"
        style={{ marginTop: "100px" }}
      >
        <div className="col-lg-5">
          <h3 className="mb-3 text-warning">Simple,powerful & fast</h3>
          <h6 className="mb-5">
            {" "}
            <span className="fs-5 fw-bolder text-warning ">
              Play Everything
            </span>
            : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            corporis! Porro molestias earum ex eligendi exercitationem quam qui
            voluptatem architecto quidem, commodi quia officia veniam natus
            blanditiis sed corrupti ipsum.{" "}
          </h6>

          <h6 className="mb-5">
            {" "}
            <span className="fs-5 fw-bolder text-warning ">
              Categorised Videos
            </span>
            : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            corporis! Porro molestias earum ex eligendi exercitationem quam qui
            voluptatem architecto quidem, commodi quia officia veniam natus
            blanditiis sed corrupti ipsum.{" "}
          </h6>

          <h6 className="mb-5">
            {" "}
            <span className="fs-5 fw-bolder text-warning ">
              Managing History
            </span>
            : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            corporis! Porro molestias earum ex eligendi exercitationem quam qui
            voluptatem architecto quidem, commodi quia officia veniam natus
            blanditiis sed corrupti ipsum.{" "}
          </h6>
        </div>
        <div className="video ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g9e07RYTInE?si=WohtgXcWYH_HsUiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
