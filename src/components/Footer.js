import { Container, Row, Col } from 'react-bootstrap';

export default function SiteFooter() {
  return (
    <footer className="ph-section-dark py-4 mt-auto">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h6>FOOTER</h6>
            <ul className="list-unstyled small">
              <li>Student name: Trịnh Phú Quang</li>
              <li>Student ID: HE191453</li>
              <li>Class: SE2058</li>
              <li>email:quangtrinh752005@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
