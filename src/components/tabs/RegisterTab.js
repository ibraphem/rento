import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope } from "react-icons/fa"

const RegisterTab = () => {
 
    return (
      <section className="gauto-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>Sign Up</h3>
              </div>
              <form>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                  />
                  <FaRegEnvelope />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                  <FaLock />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="Confirm password"
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="checkbox remember signup">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                    />
                    <label htmlFor="Freelance">
                      <span />
                    Accept Terms
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    Register
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">Have an Account?</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
};

export default RegisterTab;