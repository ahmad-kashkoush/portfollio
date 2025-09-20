import { useAnimateSides } from "../hooks/useAnimateNav";

const testimonials = [
  {
    id: 1,
    content: "I was Ahmed's mentor during his participation in the Google Summer of Code program where he worked on a project to expand the source control operations of GitLab's Web IDE. I want to highlight Ahmed's remarkable performance during the duration of the program. He worked in the project with discipline and dedication that translated into outstanding results: He was chosen as the Notable Contributor for the GitLab's 18.3 release. Ahmed has so much hunger for growth and knowledge that it inspired me as a mentor. He inquired the reasoning behind my advice and requested additional learning resources for the software development techniques that I referenced. He was receptive to my suggestions during code reviews and was very patient during this process. He communicated often, consistently, and requested feedback about his communication style. All these behaviors demonstrate a precocious professional maturity that allowed him to perform so well in this project. I see a bright future ahead of him and I'd recommend him for any project that require young talent with ambition and disciplined work.",
    author: "Enrique Alcántara",
    position: "Staff Frontend Engineer at GitLab",
    company: "GitLab",
    avatar: "/icons/enrique.png"
  }
];

export default function Testimonials() {
  const { visible, containerRef, visibleRef } = useAnimateSides();

  return (
    <section ref={containerRef} className="testimonials" id="testimonials">
      <div className="container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Testimonials
        </h2>
        <div className={`testimonials-content right-translate ${
          visible || visibleRef.current ? "get-from-side" : ""
        }`}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
                <p className="testimonial-text">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.company} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
