// import { useLocalStorage } from "usehooks-ts";

import { Project } from "../typings";

export default function Projects({ projects }: { projects: Project[] }) {
  // const [isDark] = useLocalStorage("darkMode", false);

  return (
    <div className="w-full py-8 text-slate-700">
      <h3 className="w-content text-center text-3xl font-bold  text-black dark:text-white md:text-6xl">
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project: Project) => (
          <div
            className={
              "flex h-[50vh] w-full flex-col rounded-3xl border-4 border-primary !bg-cover bg-center bg-no-repeat dark:border-secondary sm:h-[55vw] lg:h-[35vw] " +
              (project?.id === 3 || project?.id === 4 ? "hidden lg:flex" : "")
            }
            style={{
              background: "url('" + project?.image + "')",
            }}
            key={project?.id}
          >
            <div className="bg-blue bottom-0 mt-auto w-full rounded-b-2xl border-opacity-0 bg-primary bg-opacity-90  px-2 dark:bg-secondary dark:bg-opacity-90">
              <h3 className="title-font p-2 text-xl font-bold md:text-2xl">
                <a
                  className="hover:text-black hover:dark:text-black"
                  href={project?.url}
                >
                  {project?.name}
                </a>
              </h3>
              <p className="p-2 text-sm md:text-base">{project?.description}</p>
              <div className="flex flex-wrap justify-center text-slate-700 dark:text-slate-100">
                {project?.technologies.map((tech: string) => (
                  <span
                    className="m-1 rounded-full bg-slate-100 bg-opacity-70 p-2 text-xs hover:bg-opacity-100 dark:bg-slate-700 dark:bg-opacity-70 hover:dark:bg-opacity-100 md:text-sm"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
