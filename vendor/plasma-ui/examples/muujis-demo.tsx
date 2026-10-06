import React from "react";
import { createRoot } from "react-dom/client";
import { Plasma, PlasmaProvider } from "../src/index";

const mount = document.querySelector("#plasma-demo");

if (mount) {
  createRoot(mount).render(
    <PlasmaProvider
      mood="tidal"
      background="#061210"
      tint="#00d6b2"
      opacity={0.14}
      frost={0.14}
      radius={28}
      blend={18}
      viscosity={0.72}
      stretch={0.18}
      flow={0.12}
      rimColor="#79ffe2"
      rimWidth={1.2}
      highlight={0.7}
      shimmer={0.5}
      shimmerSpeed={0.35}
      glow={0.65}
      grain={0.35}
      quality={1}
      maxSurfaces={1}
      pointerDrop={false}
      pointerPull={false}
      freezeOnScroll
    >
      <Plasma className="muujis-plasma-card" lean={false} elevation={0.6}>
        <div className="plasma-card-top"><span>01 / PLASMA</span><span aria-hidden="true">✦</span></div>
        <div className="plasma-card-copy">
          <p className="plasma-card-kicker">Creative surface</p>
          <h3>Brand presence<br />that <em>moves.</em></h3>
          <p>Liquid glass test oo Muujis loogu sameeyay—fudud, muuqaal leh, oo desktop-ka si deggan ula shaqeeya.</p>
        </div>
        <div className="plasma-card-bottom"><span>WebGL / React</span><span>Live material ↗</span></div>
      </Plasma>
    </PlasmaProvider>,
  );
}
