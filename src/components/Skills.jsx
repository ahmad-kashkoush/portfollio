import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from "../data/skills";
import { useAnimateSides } from "../hooks/useAnimateNav";

function Skills() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  return (
    <section ref={containerRef} id="skills" className="skills">
      <div className="container projects-container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Skills{" "}
        </h2>
        <div className="row skills">
          <div className="max-w-full">
            {skills &&
              skills.map((item, idx) => (
                <SkillSection skillBlock={item} key={idx} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillSection({ skillBlock }) {
  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 ">
      <h3 className="col-span-full uppercase text-2xl text-center">
        {skillBlock?.skillsDescription}
      </h3>
      {skillBlock?.skillsSection &&
        skillBlock?.skillsSection.map((skill, idx) => (
          <SkillItem skill={skill} key={idx} />
        ))}
    </ul>
  );
}
function SkillItem({ skill }) {
  return (
    <div className="m-8">
      <li className="m-2 flex items-center flex-wrap">
        <p>
          <span className="font-bold text-[1.7rem] tracking-wide ">
            {skill?.name[0]}
          </span>
          <span
            className="mr-2"
            style={{
              letterSpacing: "1px",
            }}
          >
            {skill?.name.slice(1)}:
          </span>
          </p>
          {skill.icon && (
            <span>
              <img src={`https://skillicons.dev/icons?i=${skill.icon}`} />
            </span>
          )}
        {skill.image && (
          <span>
            <img width={50} height={50} src={skill.image} />
          </span>
        )}
      </li>
      <ProgressBar
        completed={skill?.rate}
        maxCompleted={100}
        customLabel={`${skill?.rate} %`}
        className="wrapper"
        bgColor={"#147efb"}
        animateOnRender={true}
        initCompletedOnAnimation={0}
      />
    </div>
  );
}
export default Skills;
