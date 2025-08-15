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

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-3">Skills</h2>

        {status === 'loading' && <div className="alert alert-info">Loading skills…</div>}
        {status === 'error' && (
          <div className="alert alert-danger">Could not load skills.</div>
        )}

        {status === 'ok' && (
          <ul className="list-group">
            {skills.map(s => (
              <li key={s._id} className="list-group-item">
                {s.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
