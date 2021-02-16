import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <header className="py-2">
      <Container>
        <div className="flex justify-between items-center">
          <h3 className="font-montserrat uppercase">Line Today</h3>
          <Link href="/">
            <a className="text-black font-montserrat uppercase">Masuk</a>
          </Link>
        </div>
      </Container>
    </header>
  );
}
