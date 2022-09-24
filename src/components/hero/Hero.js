import { Col, Container, Row } from "react-bootstrap";
import "../hero/Hero.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import mockImg from "../../assets/img/rentoHero.png";

const Hero = () => {
  return (
    <section className="gauto-slider-area">
    <div className="gauto-main-slide" >
          <div className="gauto-main-caption">
          <div className="gauto-caption-cell">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="left">
                    <h1>Agency Fee <FaTimes color="#ec3323"/></h1>
                    <h1>Agreement Fee <FaTimes color="#ec3323"/></h1>
                    <h1>Flexible Payment <FaCheck color="#408000"/></h1>
                    <p>
                      We offer prospective clients the opportunity to partner
                      with us in our various products and earn juicy high return
                      on their investments.
                    </p>
                    <button>Create Free Account</button>
                  </div>
                </Col>
                <Col md={6} className="rightCol" >
                  <div className="right">
                    <div className="image-frame">
                      <img
                        src={mockImg}
                        alt
                      />
                      <div className="box-1">
                        <div className="circle" />
                        <h3>+12.4%</h3>
                        <p>Revenue earned</p>
                      </div>
                   
                    </div>
                  </div>
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
