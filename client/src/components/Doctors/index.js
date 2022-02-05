import { Container, Col, Row } from "react-bootstrap";

export default function Doctors() {
    return (
        <Container>
            <Row>
                <Col>Doctor 1</Col>
                <Col>Doctor 2</Col>
                <Col>Doctor 3</Col>
            </Row>
            <Row>
                <Col>Doctor 4</Col>
                <Col>Doctor 5</Col>
                <Col>Doctor 6</Col>
            </Row>
        </Container>
    )
}