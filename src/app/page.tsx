import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/projects";

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
            <section id="experience"></section>
            <section id="about"></section>
            <section id="contact"></section>
        </div>
    );
}
