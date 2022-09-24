import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const RegisterTab = () => {
    return (
      <section className="gauto-login-area section_70">
        <Container>
        <Row>
          <Col md={12}>
        <Tabs
        defaultActiveKey="profile"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <p>Cool</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>Hot</p>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <p>Warm</p>
        </Tab>
      </Tabs>
      </Col>
      </Row>
      </Container>
      </section>
    );
};

export default RegisterTab;