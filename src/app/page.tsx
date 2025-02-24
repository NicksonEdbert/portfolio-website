"use client";

import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections = [
    { id: "#intro", title: "Intro" },
    { id: "#project", title: "Project" },
    { id: "#experience", title: "Experience" },
    { id: "#about", title: "About" },
    { id: "#contact", title: "Contact" },
];

export default function Home() {
    const [loading, setLoading] = useState(true);

    // Loading Screen Timeout
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <div className="bg-black text-[#fefeff] flex flex-col min-h-screen">
            {/* Loading Screen */}
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        className="h-screen w-screen flex items-center justify-center bg-black"
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.5 },
                        }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center">
                            <motion.h1
                                className="text-[12vw] md:text-[8vw] font-medium leading-none"
                                animate={{
                                    opacity: [1, 0],
                                    y: [0, -20],
                                    transition: { duration: 0.5, delay: 1.5 },
                                }}>
                                Nickson Wang
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-grow">
                        {/* Header */}
                        <header></header>

                        {/* Deskstop Header */}
                        <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
                            <ul>
                                {sections.map(({ id, title }) => (
                                    <li key={id} className="mb-4 text-left">
                                        <a
                                            href={id}
                                            className="block text-[#969696] hover:text-gray-300">
                                            {title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Main Content */}
                        <main>
                            {/* Intro Section */}
                            <section
                                id="intro"
                                className="min-h-screen flex flex-col items-center justify-center px-4">
                                <p className="text-xl md:text-2xl max-w-[750px] text-center">
                                    I&apos;m a developer who loves creating
                                    meaningful digital experiences, with a focus
                                    on tech, minimalism, and where they
                                    intersect.
                                </p>
                            </section>

                            {/* Project Section */}
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

                            {/* Experience Section */}
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

                            {/* About Section */}
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
                                                I&apos;m a fresh graduate
                                                currently working as a
                                                manufacturing technician at HP
                                                Inc., though my true passion
                                                lies in software engineering and
                                                data science. Based in Seattle,
                                                WA, I thrive in an office
                                                environment where I can engage
                                                with technology and innovative
                                                ideas. I&apos;ve also had the
                                                opportunity to work with
                                                Parchment—a startup in Austin,
                                                TX—which further fueled my drive
                                                to grow in the tech space.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                                        <div className="space-y-8">
                                            <p className="text-sm text-[#fefeff]">
                                                My approach to problem-solving
                                                is methodical: I break
                                                challenges down into smaller
                                                tasks and tackle them steadily
                                                and consistently. I believe in
                                                exploring different perspectives
                                                and embracing failures as
                                                valuable learning opportunities.
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
                                                In my free time, I pursue a
                                                range of activities that keep
                                                both my mind and body active. I
                                                enjoy playing sports, with
                                                basketball and golf being my
                                                current focus, and I find
                                                creative satisfaction in
                                                personal projects—most notably,
                                                this portfolio website, which
                                                I&apos;m incredibly proud of.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                                        <div className="space-y-8">
                                            <p className="text-sm text-[#fefeff]">
                                                Looking ahead, my ambition is to
                                                build the capital and expertise
                                                necessary to launch my own
                                                business. While I&apos;m still
                                                at the beginning of my
                                                professional journey and eager
                                                to connect with mentors and
                                                peers, I am committed to
                                                continuous growth and innovation
                                                in every aspect of my work.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Section */}
                            <section
                                id="contact"
                                className="min-h-screen flex flex-col items-center justify-center px-4">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 md:col-start-2">
                                        <div className="space-y-8 max-w-2xl">
                                            <Image
                                                src="/portrait_bw.png"
                                                alt="portrait"
                                                className="w-[350px] h-auto"
                                            />
                                            <p className="text-xl md:text-xl text-[#fefeff] underline">
                                                nicksonedbert@gmail.com
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <div className="relative">
                                                    <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                                                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                                                </div>
                                                <p className="text-l text-[#969696]">
                                                    Looking for new
                                                    opportunities.
                                                </p>
                                            </div>
                                            <div className="flex gap-8 pt-8">
                                                <a
                                                    href="https://www.linkedin.com/in/nicksonedbert/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm">
                                                    LinkedIn
                                                </a>
                                                <a
                                                    href="https://github.com/NicksonEdbert"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm">
                                                    GitHub
                                                </a>
                                                {/* <a
                                    href="https://x.com/charanjson"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm">
                                    X [Twitter]
                                </a> */}
                                                <a
                                                    href="https://instagram.com/nicksonedbert"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm">
                                                    Instagram
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
