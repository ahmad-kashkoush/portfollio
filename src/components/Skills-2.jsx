


import { skills } from '../data/skills.js';
import { useAnimateSides } from "../hooks/useAnimateNav";

// Extract core skills (first category - Frontend Development)
export const coreSkills = skills[0].skillsSection;

// Transform other categories into supporting skills format
export const supportingSkills = {
    backend: skills[1].skillsSection,
    concepts: skills[2].skillsSection,
    tools: skills[3].skillsSection,
};

// Helper function to render skill icons
const renderSkillIcon = (skill) => {
    if (skill.image) {
        return <img src={skill.image} alt={skill.name} className="w-6 h-6 mr-2" />;
    } else if (skill.icon) {
        return <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} className="w-6 h-6 mr-2" />;
    }
    return null;
};

export default function Skills() {
    const { visible, containerRef, visibleRef } = useAnimateSides();
    
    return (
        <section ref={containerRef} id="skills" className="skills py-16 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <h2 
                    className={`text-3xl font-bold text-center mb-12 left-translate ${
                        visible || visibleRef.current ? "get-from-side" : ""
                    }`}
                >
                    Skills
                </h2>

                {/* Core Skills with levels */}
                <div className="mb-12">
                    <h3 
                        className={`text-lg font-semibold mb-3 left-translate ${
                            visible || visibleRef.current ? "get-from-side" : ""
                        }`}
                    >
                        Frontend Development
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {coreSkills.map((skill, idx) => (
                            <div 
                                key={idx} 
                                className={`bg-[var(--bg-project-card)] p-3 rounded-xl shadow-md transition-all duration-300 hover:transform hover:scale-105 ${
                                    idx % 2 === 0 ? 'left-translate' : 'right-translate'
                                } ${visible || visibleRef.current ? "get-from-side" : ""}`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="flex items-center">
                                    {renderSkillIcon(skill)}
                                    <p className="font-medium text-sm">{skill.name}</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                                            visible || visibleRef.current ? 
                                            (skill.level === "Advanced"
                                                ? "bg-green-500 w-[90%]"
                                                : skill.level === "Intermediate"
                                                    ? "bg-blue-500 w-[70%]"
                                                    : "bg-gray-400 w-[50%]")
                                            : "w-0"
                                        }`}
                                        style={{ transitionDelay: `${idx * 0.1 + 0.3}s` }}
                                    ></div>
                                </div>
                                <p className="text-xs mt-1 text-gray-500">{skill.level}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supporting Skills with levels */}
                <div className="space-y-8">
                    {Object.entries(supportingSkills).map(([category, skills], categoryIdx) => (
                        <div key={categoryIdx}>
                            <h4 
                                className={`text-lg font-semibold mb-3 capitalize left-translate ${
                                    visible || visibleRef.current ? "get-from-side" : ""
                                }`}
                                style={{ animationDelay: `${categoryIdx * 0.2}s` }}
                            >
                                {category}
                            </h4>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {skills.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx} 
                                        className={`bg-[var(--bg-project-card)] p-3 rounded-xl shadow-md transition-all duration-300 hover:transform hover:scale-105 ${
                                            skillIdx % 2 === 0 ? 'left-translate' : 'right-translate'
                                        } ${visible || visibleRef.current ? "get-from-side" : ""}`}
                                        style={{ animationDelay: `${categoryIdx * 0.2 + skillIdx * 0.1}s` }}
                                    >
                                        <div className="flex items-center">
                                            {renderSkillIcon(skill)}
                                            <p className="font-medium text-sm">{skill.name}</p>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                                                    visible || visibleRef.current ? 
                                                    (skill.level === "Advanced"
                                                        ? "bg-green-500 w-[90%]"
                                                        : skill.level === "Intermediate"
                                                            ? "bg-blue-500 w-[70%]"
                                                            : "bg-gray-400 w-[50%]")
                                                    : "w-0"
                                                }`}
                                                style={{ transitionDelay: `${categoryIdx * 0.2 + skillIdx * 0.1 + 0.3}s` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs mt-1 text-gray-500">{skill.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
