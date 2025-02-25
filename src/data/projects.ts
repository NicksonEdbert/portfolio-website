import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { SiTerraform, SiGithubactions, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

export const projects = [
    {
        title: "Minecraft Server Provisioner",
        description:
            "Minecraft Server Provisioner is an automated solution for building and deploying Minecraft servers effortlessly. Designed for server administrators, game hosts, and developers, this tool streamlines the entire setup process—from installing necessary dependencies to configuring server properties and launching a fully operational Minecraft server.",
        tags: ["AWS", "Terraform", "Github Actions", "Docker Compose"],
        link: "https://github.com/NicksonEdbert/Automated-Minecraft-Server",
        platforms: [
            { icon: FaAws, color: "#00A4EF" },
            { icon: SiTerraform },
            { icon: FaDocker, color: "#00A4EF" },
            { icon: SiGithubactions },
        ],
    },
    {
        title: "Calvin Church Website",
        description: "A Redesign of Calvin Church Website.",
        tags: ["Typescript", "React", "Next.js", "Vercel", "Tailwind"],
        link: "https://calvin-presbyterian.vercel.app/",
        platforms: [
            { icon: SiTypescript },
            { icon: FaReact, color: "#00A4EF" },
            { icon: RiNextjsFill },
            { icon: RiTailwindCssFill, color: "#00A4EF" },
            { icon: IoLogoVercel },
        ],
    },
];
