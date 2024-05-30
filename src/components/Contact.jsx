/* eslint-disable react/prop-types */
import { useAnimateSides } from "../hooks/useAnimateNav";

export default function Contact() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  return (
    <section ref={containerRef} className="contact" id="contact">
      <div className="container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          contact
        </h2>
        <SendMessage visibleScroll={visible || visibleRef.current} />
      </div>
    </section>
  );
}
function SendMessage({ visibleScroll }) {
  return (
    <form
      action=""
      className={`send-message right-translate ${
        visibleScroll ? "get-from-side" : ""
      }`}
    >
      <input type="text" placeholder="type your name or leave it empty" />
      <textarea placeholder="feel free to send me a message"></textarea>
      <button className="btn" type="submit">
        send
      </button>
    </form>
  );
}
