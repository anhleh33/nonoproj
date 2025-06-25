// ProjectCard.jsx
import React from "react";

export default function ProjectCard({
  image,
  alt,
  title,
  techStack,
  githubLink,
  figmaLink,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={alt} className="project-image" />
      <h3>{title}</h3>
      <p>{techStack}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub
      </a>
      <a
        href={figmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on Figma
      </a>
    </div>
  );
}
