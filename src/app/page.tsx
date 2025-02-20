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
            <section
                id="about"
                className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
                    about.
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 md:col-start-2">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                I&apos;m a fresh graduate currently working as a
                                manufacturing technician at HP Inc., though my
                                true passion lies in software engineering and
                                data science. Based in Seattle, WA, I thrive in an office
                                environment where I can engage with technology
                                and innovative ideas. I&apos;ve also had the
                                opportunity to work with Parchment—a startup in
                                Austin, TX—which further fueled my drive to grow
                                in the tech space.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                My approach to problem-solving is methodical: I
                                break challenges down into smaller tasks and
                                tackle them steadily and consistently. I believe
                                in exploring different perspectives and
                                embracing failures as valuable learning
                                opportunities. 
                            </p>
                        </div>
                    </div>
                </div>

                {/* <br /> */}
                <br />
                <br />

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 md:col-start-2">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                In my free time, I pursue a range of activities
                                that keep both my mind and body active. I enjoy
                                playing sports, with basketball and golf being
                                my current focus, and I find creative
                                satisfaction in personal projects—most notably,
                                this portfolio website, which I&apos;m incredibly
                                proud of.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                Looking ahead, my ambition is to build the
                                capital and expertise necessary to launch my own
                                business. While I&apos;m still at the beginning of my
                                professional journey and eager to connect with
                                mentors and peers, I am committed to continuous
                                growth and innovation in every aspect of my
                                work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="contact"
                className="min-h-screen flex flex-col items-center justify-center px-4"></section>
        </div>
    );
}
