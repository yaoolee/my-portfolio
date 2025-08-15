import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ok' | 'error'

  useEffect(() => {
    getProjects()
      .then(data => { setProjects(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section id="projects" className="py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="fw-bold mb-3">Projects</h2>

        {status === 'loading' && (
          <div className="alert alert-info">Loading projects…</div>
        )}

        {status === 'error' && (
          <div className="alert alert-danger">
            Could not load projects.
          </div>
        )}

        {status === 'ok' && (
          <div className="row g-4">
            {projects.map(p => (
              <div className="col-12 col-sm-6" key={p._id}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
