import { useState } from 'react';

export default function ProjectCard({ project }) {
  const { title, description, url, screenshot, tech } = project;
  const [imgSrc, setImgSrc] = useState(
    screenshot || 'https://placehold.co/640x360?text=Screenshot'
  );

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        onError={() => setImgSrc('https://placehold.co/640x360?text=No+Image')}
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-text text-body-secondary">{description}</p>}

       
        {tech?.length > 0 && (
          <div className="mb-2">
            {tech.map((t, i) => (
              <span key={i} className="badge text-bg-secondary me-1">{t}</span>
            ))}
          </div>
        )}

        {url ? (
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
            View Project
          </a>
        ) : (
          <span className="text-muted">No link available</span>
        )}
      </div>
    </div>
  );
}
