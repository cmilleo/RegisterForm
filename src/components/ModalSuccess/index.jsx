import React from "react";
import {BsCheckLg} from "react-icons/bs";
import Container from "./styles";

function ModalSuccess() {
  return <Container>
    <div className="bgModal">
        <div className="modal">
            <BsCheckLg size={100} color="#fff" />
        </div>
    </div>
  </Container>;
}

export default ModalSuccess;
