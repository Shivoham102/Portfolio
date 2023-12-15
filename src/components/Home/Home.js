import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ScrollToBottomArrow from "../ScrollToBottomArrow";


function Home() {
  const home2Ref = useRef(null);

  const scrollToHome2 = () => {
    if (home2Ref.current) {
      console.log("OffsetTop:", home2Ref.current.offsetTop);
      window.scrollTo({
        top: home2Ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHIVOHAM ANGAL</strong>
              </h1>

              <div style={{ padding: "50px 50px 80px", textAlign: "center" }}>
                <Type />
              </div>         
            </Col>    
          </Row>
        </Container>
      </Container>
      <Home2 ref={home2Ref}/>
      <ScrollToBottomArrow onClick={scrollToHome2}/>
      
    </section>
  );
}

export default Home;
