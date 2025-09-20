import { openSourceContributions } from "../data/OSS";
import { useAnimateSides } from "../hooks/useAnimateNav";

export default function OpenSource() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  
  return (
    <section ref={containerRef} className="open-source" id="open-source">
      <div className="container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Open Source Contributions
        </h2>
        <div className={`open-source-content right-translate ${
          visible || visibleRef.current ? "get-from-side" : ""
        }`}>
          {openSourceContributions.map((contribution, index) => (
            <OpenSourceCard 
              key={index} 
              contribution={contribution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSourceCard({ contribution }) {
  const { project, url, logo, summary, highlights } = contribution;
  
  // Helper function to parse markdown-style links in text
  const parseMarkdownLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Add the link
      parts.push(
        <a
          key={`${match.index}-${match[1]}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-markdown-link"
        >
          {match[1]}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last link
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };
  
  return (
    <div className="open-source-card">
      <div className="open-source-header">
        <div className="open-source-title-row">
          <div className="open-source-icon">
            <img src={logo} alt={`${project} logo`} />
          </div>
          <div className="open-source-title-content">
            <h3 className="open-source-project">{project}</h3>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="open-source-url"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
      
      <p className="open-source-summary">{summary}</p>
      
      <ul className="open-source-highlights">
        {highlights.map((highlight, index) => (
          <li key={index} className="highlight-item">
            <span className="highlight-text">
              {parseMarkdownLinks(highlight)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}