import { Container, Image } from "react-bootstrap";
import Banner from "../../images/MedicalBanner2.jpg";

export default function Header() {
  return (
    <Container>
      <Image fluid src={Banner}></Image>
    </Container>
  );
}
