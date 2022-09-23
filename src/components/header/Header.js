import {Fragment} from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import MobileMenu from "../../components/MobileMenu";
import "../header/Header.css"
import { useSelector } from 'react-redux';

const Header = () => {
  const favRent = useSelector((state) => state?.favoriteRent?.rent);

  // console.log(favRent);
    return (
        <Fragment>
      {/* <section className="gauto-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  Need Help? <FaPhoneAlt /> Call: +234 703 125 9185
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="header-top-right">
                <Link to="/login">
                  <FaSignInAlt />
                 Login
                </Link>
                <Link to="/register">
                  <FaUserAlt />
                  Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* <header className="gauto-main-header-area">
      
            <div className="col-lg-3">
              
            </div>
            <div className="col-lg-3 header-action-right">
              
            </div>
            <div className="col-lg-3">
              <div className="header-action header-action-left">
              <Link to="/contact">
                  <FaHome /> Enlist Your Property
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </header> */}
      <section className="gauto-mainmenu-area" >
        <Container>
          <Row>
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">Who We Are</Link>
                    </li>
                  
                    <li>
                      <Link to="/about">What We DO</Link>
                    </li>
                  
                    <li>
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="main-search-right">
                <MobileMenu />
                <div className="header-cart-box">
                  <div className="login dropdown">
                    <Link to="/favorites" className="cart-icon" id="dropdownMenu1">
                      <span>{favRent?.length}</span>
                    </Link>
                  </div>
                </div>
                {/* <div className="search-box">
                  <form>
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
    );
};

export default Header;