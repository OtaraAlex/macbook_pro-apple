import { footerLinks } from "../constants/index.js";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop:{" "}
          <a
            href="https://www.apple.com/retail/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a
            href="https://locate.apple.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            other retailer
          </a>{" "}
          near you. Or call{" "}
          <a href="tel:1-800-692-7753" className="text-primary hover:underline">
            1-800-MY-APPLE
          </a>{" "}
          (1-800-692-7753).
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © {year} Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
