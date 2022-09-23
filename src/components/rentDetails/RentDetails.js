import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import {
  FaToilet,
  FaHome,
  FaBed,
  FaChair,
  FaUtensilSpoon,
  FaBars,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import Slider from "react-slick";
import { rentDataDetail } from "../../mock/rentData";
import { amountFormat } from "../../utils/format";
import "../rentDetails/Rentdetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomToolTip from "../CustomToolTip";
import { Link } from "react-router-dom";
import Alerts from "../Alerts";
import { validatePhoneNumber } from "../../utils/validate";
import FullPageLoader from "../loaders/fullPageLoader/FullPageLoader";
import AlertModal from "../modals/AlertModal";


const RentDetails = () => {
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [initialPayment, setInitialPayment] = useState("");
  const [bvn, setBvn] = useState("")
  const [partnerCompany, setPartnerCompany] = useState("")
  const [showFullPageLoading, setShowFullPageLoading] = useState(false)

  const [showAlert, setShowAlert] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const [step, setStep] = useState(1)
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if(step === 2 && initialPayment >= rentDataDetail?.amount) {
      setStep(1)
    }
  }, [step, initialPayment])
  

  const applyForRent = (e) => {
    e.preventDefault()
    setShowAlert(false)
    if(!validatePhoneNumber(phoneNo)){
      setShowAlert(true)
      setErrMsg(`The phone number you provided is incorrect`)
      return
    }
    if(initialPayment < rentDataDetail?.amount / 2) {
      setShowAlert(true)
      setErrMsg(`The minimum initial payment you can make is 50% of the annual rent - (\u20A6${amountFormat(rentDataDetail?.amount / 2)})`)
      return
    }
    
    if(initialPayment > rentDataDetail?.amount) {
      setShowAlert(true)
      setErrMsg(`The amount you entered is greater than the annual rent - (\u20A6${amountFormat(rentDataDetail?.amount)})`)
      return
    }

    if(initialPayment === rentDataDetail?.amount ) {
      // Call the onboarding endpoint
    }
    if(initialPayment >= rentDataDetail?.amount / 2 && initialPayment < rentDataDetail?.amount){
      setStep(2)
      //Call Endpoint

    }


  }
  return (
    <>
      <section className="gauto-car-booking section_70">
        <AlertModal onboardingComplete={false} heading="Onboarding Successful" message="You have successfully onboarded with Rento"/>
        <FullPageLoader showFullPageLoading={showFullPageLoading}/>
        <Container>
         
          <Row>
            <Col lg={6}>
              <Slider {...settings}>
                {rentDataDetail?.images?.map((image) => (
                  <div className="car-booking-image">
                    <img
                      src={image}
                      alt="car"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </Slider>
            </Col>
            <Col md={6}>
              <div className="car-booking-right">
                <p className="rental-tag">{rentDataDetail?.apartmentType}</p>
                <h3>Ikeja, Lagos</h3>
                <div className="price-rating">
                  <div className="price-rent">
                    <h4>
                      &#8358;{amountFormat(rentDataDetail?.amount)}
                      <span>/ {rentDataDetail?.paymentMode}</span>
                    </h4>
                  </div>
                </div>
                <p> {rentDataDetail?.desc}</p>
                <div className="car-features clearfix">
                  <ul>
                    <li>
                      <FaToilet /> {rentDataDetail?.toilet} Toilet(s)
                    </li>
                    <li>
                      <FaHome /> {rentDataDetail?.condition}
                    </li>
                    <li>
                      <FaUtensilSpoon /> {rentDataDetail?.kitchen} Kitchen(s)
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaBed /> {rentDataDetail?.bedroom} Bedrooms
                    </li>
                    <li>
                      <FaChair /> {rentDataDetail?.livingRoom} Living Room
                    </li>
                    <li>
                      <FaBars /> {rentDataDetail?.furnished}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gauto-booking-form" style={{ padding: "20px" }}>
        <Container>
       
          <Row>
            <Col lg={12}>
              <div className="booking-form-left">
                <div className="single-booking">
                  <h3>Do you like this apartment? Get Started</h3>
             
              <Alerts showAlert={showAlert} message={errMsg} closeAlert={() => setShowAlert(false)}/>
       
                  <form onSubmit={applyForRent}>
                    <Row>
                      <Col lg={3} md={12} className="mb-2">
                        <p>
                          <label>
                            Enter Your Email address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="somebody@example.com"
                            required
                          />
                        </p>
                      </Col>
                      <Col lg={3} md={12} className="mb-2">
                        <p>
                          <label>
                            Enter Your Phone Number
                          </label>
                          <input
                            required
                            type="number"
                            value={phoneNo}
                            onChange={(e)=>setPhoneNo(e.target.value)}
                            placeholder="080xxxxxxxx5"
                          />
                        </p>
                      </Col>
                      <Col lg={4} md={12} className="mb-2">
                        <p>
                          <label>
                            Enter{" "}
                            <CustomToolTip message={`Remember your rent payment can be flexible on RENTO. You may decide to pay the \u20A6${amountFormat(rentDataDetail?.amount)} annual fee outrightly or pay at least 50% (\u20A6${amountFormat(rentDataDetail?.amount / 2)}) of the annual fee and complete the rest over the next six months.`} >
                            <span className="text-primary">
                                initial payment
                              </span>
                            </CustomToolTip>
                          </label>
                          <input
                            required
                            type="number"
                            value={initialPayment}
                            onChange={(e)=>setInitialPayment(e.target.value)}
                            placeholder={`\u20A6${amountFormat(rentDataDetail?.amount / 2)} - \u20A6${amountFormat(rentDataDetail?.amount)}`}
                          />
                        </p>
                      </Col>
                      {step === 2 && (
                        <>
                        <Col lg={5} md={12} className="mb-2">
                        <p>
                          <label>
                           Enter Your BVN
                          </label>
                          <input
                            type="number"
                            value={bvn}
                            onChange={(e)=>setBvn(e.target.value)}
                            placeholder="somebody@example.com"
                            required
                          />
                        </p>
                      </Col>
                      <Col lg={5} md={12} className="mb-2">
                        <p>
                          <label>
                           Enter Your BVN
                          </label>
                          <input
                            type="email"
                            placeholder="somebody@example.com"
                            required
                          />
                        </p>
                      </Col>
                      </>
                      )}
                      

                      <Col lg={2} md={2} className="mb-2">
                      <p>
                       <label>&nbsp;</label>
                      <Button type="submit" className="p-2" style={{width: "100%"}} variant="danger">Proceed</Button>
                      </p>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RentDetails;
