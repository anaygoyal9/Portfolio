import { profile } from '../data';
import { MailIcon, GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Get in touch</p>
        <h2 className="contact-title">Let&apos;s build something.</h2>
        <p className="contact-sub">
          Open to internships, collaborations, or just a good conversation about code.
        </p>

        <a className="contact-email" href={`mailto:${profile.email}`}>
          <MailIcon /> {profile.email}
        </a>

        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
