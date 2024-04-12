import { Social } from "./Social";

export default function Contact() {
  return (
    <section className="contact container">
      <h2>contact</h2>
      <SendMessage />
      <h3>Feel free to contact me for any work or suggestions below:</h3>
      <Social forContact={true} />
    </section>
  );
}
function SendMessage() {
  return (
    <form action="" className="send-message">
      <input type="text" placeholder="type your name or leave it empty" />
      <textarea placeholder="feel free to send me a message"></textarea>
      <button className="btn" type="submit">
        send
      </button>
    </form>
  );
}
