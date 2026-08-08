import { profile } from '../data';
import { GithubIcon, LinkedinIcon, ArrowIcon } from './Icons';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-graph" aria-hidden="true">
        <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
          <polyline
            className="hero-graph-line"
            points="10,300 70,270 120,290 170,220 220,235 270,150 320,175 370,100 420,120 470,55 520,75 580,20"
          />
          {[
            [10, 300], [120, 290], [220, 235], [320, 175], [420, 120], [520, 75], [580, 20],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} className="hero-graph-dot" cx={x} cy={y} r="4" />
          ))}
        </svg>
      </div>

      <div className="container hero-inner">
        <aside className="hero-rail">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <span className="hero-rail-line" />
        </aside>

        <div className="hero-content">
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View my work <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span className="hero-stats-num">1450+</span>
              <span className="hero-stats-label">Leetcode rating</span>
            </div>
            <div className="hero-stats-divider" />
            <div>
              <span className="hero-stats-num">5</span>
              <span className="hero-stats-label">Shipped projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
