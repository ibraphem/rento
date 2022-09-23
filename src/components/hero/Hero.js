import { Col, Container, Row } from "react-bootstrap";
import "../hero/Hero.css"
import { FaCheck, FaTimes } from "react-icons/fa";
import mockImg from "../../assets/img/rentoHero.png"
const Hero = () => {
    
    
    return (
        <section className="gauto-slider-area fix">
       
            <div
              className="gauto-main-slide"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="gauto-main-caption">
                <div className="gauto-caption-cell">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <div className="slider-text">
                          <p >When you rent with RENTO</p>
                          <h2>Agent Fee <FaTimes color="red"/></h2>
                          <h2>Agreement Fee <FaTimes color="red"/></h2>
                          <h2>Pay As you want <FaCheck color="green"/></h2>
                          {/* <Link to="/" onClick={onClick} className="gauto-btn">
                            Get Started
                          </Link> */}
                        </div>
                      </Col>
                      <Col md={6}>
                        <img className="heroImg" src={mockImg} alt="Hero Img"/>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
    
    
      </section>
    );
};

export default Hero;