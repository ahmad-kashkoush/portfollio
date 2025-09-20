import { useAnimateSides } from "../hooks/useAnimateNav";

export default function Experience() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  
  const experiences = [
    {
      role: "Software Engineer – Google Summer of Code",
      company: "GitLab",
      date: "May 2025 – Present",
      summary:
        "Selected as a Notable Contributor at GitLab for advancing the Web IDE with features impacting thousands of developers! 🎉 ",
      highlights: [
        "🚀 Implemented 'Amend & Force Push', resolving a 5+ year feature request.",
        "🔒 Built secure 'Create' and 'Delete Branch' workflows with confirmation dialogs.",
        "📚 Authored technical documentation for new Git features, improving accessibility.",
      ],
      links: [
        { label: "📋 Final Report", url: "https://gitlab.com/ahmad-kashkoush/gsoc-2025-final-report" },
        { label: "🏆 GitLab 18.3 Release Note", url: "https://about.gitlab.com/releases/2025/08/21/gitlab-18-3-released/#notable-contributor" },
      ],
    },
  ];

  return (
    <section ref={containerRef} className="experience" id="experience">
      <div className="container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Experience
        </h2>
        <div className={`experience-content right-translate ${
          visible || visibleRef.current ? "get-from-side" : ""
        }`}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-row">
                  <div className="experience-icon">
                    <img src="/icons/gitlab.svg" alt="GitLab" />
                  </div>
                  <div className="experience-title-content">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">
                      {exp.company} &middot; {exp.date}
                    </p>
                  </div>
                </div>
              </div>
              <p className="experience-summary">{exp.summary}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="experience-links">
                {exp.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
