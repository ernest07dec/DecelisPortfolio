import { MiniProjectCard } from "./miniprojectcard/MiniProjectCard";
import { MiniProjectsList } from "../jsonfiles/MiniProjectsList";

export const MiniProjects = () => {
  const projects = MiniProjectsList;

  return (
    <div
      className="mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="900"
    >
      {/* MINI PROJECTS MAPPING */}
      {projects.map((project, index) => {
        // MINIPROJECT CARD
        return <MiniProjectCard project={project} key={index} />;
      })}
    </div>
  );
};
