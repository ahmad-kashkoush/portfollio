/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Filter } from "./Filter";
import { useEffect } from "react";
import { ProjectsGallery } from "./ProjectsGallery";

/* eslint-disable react/prop-types */
const myProjects = [
  {
    id: 1,
    title: "project 1",
    tech: ["react", "sass"],
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "project 2",
    tech: ["javascript", "html", "css"],
    img: "https://picsum.photos/200/400",
  },
  {
    id: 3,
    title: "project 2",
    tech: ["javascript", "html", "css"],
    img: "/src/assets/Profile-Picture.jpeg",
  },
];

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
  function handleClickSelectedTap(value) {
    setSelectedTap(value === selectedTap ? null : value);
  }
  useEffect(() => {
    if (selectedTap === null || selectedTap === "all") setProjects(myProjects);
    else
      setProjects(
        myProjects.filter((proj) =>
          proj.tech.includes(selectedTap.toLowerCase())
        )
      );
  }, [selectedTap]);
  return (
    <section className="projects container" id="projects">
      <h2>projects </h2>
      <Filter tab={selectedTap} onClickTab={handleClickSelectedTap} />
      <ProjectsGallery projects={projects} />
    </section>
  );
}
