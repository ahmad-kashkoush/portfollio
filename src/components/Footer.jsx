import { Social } from "./Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <RandomQuoteGenerator />
        <h2>ahmed kashkoush</h2>
        <ul>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
        <Social forContact={true} />
      </div>
    </footer>
  );
}
function RandomQuoteGenerator() {
  return (
    <div className="quote-wrapper">
      <h3>Quote of the day</h3>
      <p>All you need is love, but money doesn't hurt 🙂</p>
    </div>
  );
}
