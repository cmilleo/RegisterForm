import React from "react";

import { Container } from "./styles";
import Wave from "react-wavify";
const Waves = () => {
  const isPaused = false;
  return (
    <Container className="waves">
      <div className="containerWaves">
        <div className="div1">
          <Wave
            fill="#c10c9a49"
            paused={isPaused}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 3,
            }}
          />
        </div>
        <div className="div2">
          <Wave
            fill="#c530a51f"
            paused={isPaused}
            options={{
              height: 30,
              amplitude: 25,
              speed: 0.2,
              points: 5,
            }}
          />
        </div>
        <div className="div3">
          <Wave
            fill="#8d067055"
            paused={isPaused}
            options={{
              height: 25,
              amplitude: 20,
              speed: 0.3,
              points: 4,
            }}
          />
        </div>


      </div>
    </Container>
  );
};

export default Waves;
