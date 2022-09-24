import { Col, Container, Row } from "react-bootstrap";
import hero1 from "../../assets/img/hero1.jpg"
import "../hero/Hero.css"
import FindHome from "../filter/FindHome";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Hero = () => {
    
    return (
        <section className="gauto-slider-area fix">
       
          <div className="slide">
            <div
              className=" gauto-main-slide"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="gauto-main-caption">
                <div className="gauto-caption-cell">
                  <Container>
                    <Row>
                      <Col md={12}>
                          <div className="heroCaption">
                            <h2>Agency Fee <FaRegTimesCircle color="#ec3323"/></h2>
                            <h2>Agreement Fee <FaRegTimesCircle color="#ec3323"/></h2>
                            <h2>Flexible Payment <FaCheckCircle color="#00ff00"/></h2>

                          </div>
                          <FindHome/>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
    
      </section>
    );
};

export default Hero;