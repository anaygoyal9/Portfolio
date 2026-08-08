import { about } from '../data';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-heading">
          <p className="eyebrow">About</p>
          <h2 className="about-title">A bit about how I work.</h2>
        </div>

        <div className="about-body">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 12)}>{p}</p>
          ))}

          <dl className="about-facts">
            {about.facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  );
}
