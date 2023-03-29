import React from "react";
import Container from "react-bootstrap/Container";

import AvatarLogo from "./Avatar/AvatarLogo";
import FormPart from "./FormPart";

function Header() {
  return (
    <Container fluid className="bg-white d-flex">
      <AvatarLogo />
      <FormPart />
    </Container>
  );
}

export default Header;
