export default function Contact() {
  return (
    <section className="contact container">
      <h2>contact</h2>
      <SendMessage />
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
