import { timeline } from '../data';
import './Timeline.css';

export default function Timeline() {
  return (
    <section id="journey">
      <div className="container">
        <p className="eyebrow">How I got here</p>
        <h2 className="timeline-title">My journey so far</h2>

        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.title} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
