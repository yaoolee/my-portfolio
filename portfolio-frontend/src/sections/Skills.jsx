import { useEffect, useState } from 'react';
import { getSkills } from '../services/api';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState('loading'); 

  useEffect(() => {
    getSkills()
      .then(data => { setSkills(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  const levelVariant = (level = '') => {
    const l = level.toLowerCase();
    if (l.includes('expert') || l.includes('advanced')) return 'success';
    if (l.includes('intermediate')) return 'primary';
    if (l.includes('beginner') || l.includes('learning')) return 'secondary';
    return 'secondary';
  };

  return (
    <section id="skills" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <div>
            <h2 className="fw-bold mb-1">Skills</h2>
            <p className="text-body-secondary mb-0">Tools and technologies I work with</p>
          </div>
        </div>

        {status === 'loading' && (
          <div className="d-flex align-items-center gap-2">
            <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
            <span>Loading skills…</span>
          </div>
        )}

        {status === 'error' && (
          <div className="alert alert-danger">Could not load skills.</div>
        )}

        {status === 'ok' && (
          <div className="row g-3 g-md-4">
            {skills.map(s => (
              <div key={s._id} className="col-6 col-md-4 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-braces text-primary"></i>
                      <span className="fw-medium">{s.name}</span>
                    </div>
                    {s.level && (
                      <span className={`badge text-bg-${levelVariant(s.level)} rounded-pill`}>
                        {s.level}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {skills.length === 0 && (
              <div className="text-body-secondary">No skills to display yet.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
