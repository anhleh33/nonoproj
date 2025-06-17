// SkillBlurb.jsx
import React, { useState } from "react";

function getRandomColor() {
  const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function SkillBlurb({ text }) {
  const [hoverColor, setHoverColor] = useState(null);

  return (
    <div
      className="skill-blurb"
      onMouseEnter={() => setHoverColor(getRandomColor())}
      onMouseLeave={() => setHoverColor(null)}
      style={{
        boxShadow: hoverColor
          ? `4px 4px 0 ${hoverColor}`
          : "4px 4px 0 transparent",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {text}
    </div>
  );
}
