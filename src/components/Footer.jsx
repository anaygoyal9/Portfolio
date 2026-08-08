import { profile } from '../data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
