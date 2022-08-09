import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  h1 {
    z-index: 999;
  }
  .divCircle {
    transition: 1s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    width: 300px;
    height: 300px;
    background: #ff0058;
    clip-path: circle(50% at 50% 50%);
    ${({ mouseIn }) => {
      if (mouseIn) {
        return css`
          background: rgba(
            ${Math.floor(Math.random() * (255 - 50)) + 50},
            ${Math.floor(Math.random() * (255 - 50)) + 50},
            ${Math.floor(Math.random() * (255 - 50)) + 50},
            1
          );
          -webkit-box-shadow: 3px 3px 15px -1px rgba(0, 0, 0, 0.82);
          box-shadow: 3px 3px 15px -1px rgba(0, 0, 0, 0.82);
          z-index: 1;
        `;
      } else {
        return css`
          background: #ff0058;
        `;
      }
    }}
    &:hover {
      transform: scale(1.1);
    }
  }
  button {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 900;
    bottom: 10%;
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
  @keyframes principal {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
  section {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: linear-gradient(30deg, #fff, #6c2169);
    animation: animate 30s linear infinite;
  }
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(1000deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }
  section:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 100vh solid transparent;
    border-left: 100vh solid #6c2169;
    opacity: 0.1;
  }
  section:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-top: 100vh solid transparent;
    border-right: 100vh solid #6c2169;
    opacity: 0.1;
  }
`;
