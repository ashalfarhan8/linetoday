import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <header className="py-2">
      <Container>
        <Row>
          <Col xs={9} sm={10} md={11}>
            <h3 className="font-montserrat uppercase">Line Today</h3>
          </Col>
          <Col xs={3} sm={2} md={1}>
            <Link href="/">
              <a className="text-black font-montserrat uppercase">Masuk</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
