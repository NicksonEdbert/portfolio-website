import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";

export default function Home() {
    return (
        <div className="bg-black">
            <section
                id="intro"
                className="min-h-screen flex flex-col items-center justify-center px-4">
                <p className="text-xl md:text-2xl text-gray-600 max-w-[750px] text-center">
                    I&apos;m a developer who loves creating meaningful digital
                    experiences, with a focus on tech, minimalism, and where
                    they intersect.
                </p>
            </section>
            <section
                id="project"
                className="min-h-screen flex flex-col items-center justify-center px-4">
                <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
                    Project
                </h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            platforms={project.platforms}
                        />
                    </div>
                ))}
            </section>
            <section
                id="experience"
                className="min-h-screen flex flex-col items-center justify-center px-4">
                <h2 className="text-4xl md:text-7xl font-medium mb-20 max-w-2xl">
                    Work Experience
                </h2>
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <ExperienceCard
                            logo={experience.logo}
                            company={experience.company}
                            position={experience.position}
                            date={experience.date}
                            location={experience.location}
                            highlights={experience.highlights}
                        />
                    </div>
                ))}
            </section>
            <section id="about"></section>
            <section id="contact"></section>
        </div>
    );
}
