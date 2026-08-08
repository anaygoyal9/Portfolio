import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="eyebrow">What I work with</p>
        <h2 className="skills-title">Skills &amp; tools</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skills-card">
              <h3>{group.title}</h3>
              <p className="skills-desc">{group.description}</p>
              <ul className="skills-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
