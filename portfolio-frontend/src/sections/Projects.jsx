import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading'); 

  const fetchProjects = () => {
    setStatus('loading');
    getProjects()
      .then(data => { setProjects(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <div>
            <h2 className="fw-bold mb-1">Projects</h2>
            <p className="text-body-secondary mb-0">Selected work and experiments</p>
          </div>
        </div>

        {status === 'loading' && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="col" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="placeholder-glow">
                    <div className="card-img-top placeholder" style={{ height: 180 }} />
                  </div>
                  <div className="card-body">
                    <p className="card-title placeholder-glow mb-2">
                      <span className="placeholder col-8"></span>
                    </p>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-10"></span>
                    </p>
                    <span className="btn btn-sm btn-outline-primary disabled placeholder col-4"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="alert alert-danger d-flex align-items-center justify-content-between">
            <span>Could not load projects.</span>
            <button className="btn btn-sm btn-outline-danger" onClick={fetchProjects}>
              Retry
            </button>
          </div>
        )}

        {status === 'ok' && (
          <>
            {projects.length === 0 ? (
              <div className="text-body-secondary">
                <i className="bi bi-inbox me-2"></i>No projects to display yet.
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                {projects.map(p => (
                  <div className="col" key={p._id}>
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
