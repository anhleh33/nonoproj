export default function ResearchCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p style={{ width: "100%" }}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Link Paper
      </a>
    </div>
  );
}
