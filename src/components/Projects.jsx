/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Filter } from "./Filter";
import { useEffect } from "react";
import { ProjectsGallery } from "./ProjectsGallery";
import { myProjects } from "/public/myProjects";
import { useAnimateSides } from "../hooks/useAnimateNav";
/* eslint-disable react/prop-types */

export default function Projects() {
  /* TODO
    - ✅ Create A Heading
    - ✅ Create A filter bar
    - ✅Create A Projects view
    - ✅ create an array of project objects that will be viewed 
    - Style 
    - Add States
    */

  const [selectedTap, setSelectedTap] = useState(null);
  const [projects, setProjects] = useState([]);
  const { visible, containerRef, visibleRef } = useAnimateSides();
  function handleClickSelectedTap(value) {
    if (value.toLowerCase() === selectedTap.toLowerCase) return;
    setSelectedTap(value);
  }
  useEffect(() => {
    if (selectedTap === null || selectedTap === "all") setProjects(myProjects);
    else
      setProjects(
        myProjects.filter((proj) =>
          proj.filter.includes(selectedTap.toLowerCase())
        )
      );
  }, [selectedTap]);
  return (
    <section ref={containerRef} className="projects " id="projects">
      <div className="container projects-container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          projects{" "}
        </h2>
        <Filter tab={selectedTap} onClickTab={handleClickSelectedTap} />
        <ProjectsGallery projects={projects} />
      </div>
    </section>
  );
}
