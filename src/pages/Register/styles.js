import styled from "styled-components";

export const Container = styled.div`
  position: relative;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  color: white;
  margin: 0 auto;
  width: 80%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 30px;

  h1{
    font-weight: 900;
  }
  strong{
    color: #ff0058;
  }
  h2{
    width: 100%;
  }

  input[type="submit"] {
    color: white;
    padding: 6px 1rem;
    border: none;
    border-radius: 5px;
    background-color: #ff0058;
    cursor: pointer;
    &:hover {
      background-color: #720027;
    }
  }
`;
