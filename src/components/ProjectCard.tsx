import { IconType } from "react-icons";

export interface Platform {
    icon: IconType;
    color?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    platforms,
}: {
    title: string;
    description: string;
    tags: Array<string>;
    platforms: Platform[];
}) {
    return (
        <a
            target="_blank"
            className="block p-4 md:p-8 border border-[#969696] rounded-lg relative mb-20">
            <h3 className="text-xl md:text-2xl font-medium mb-4">{title}</h3>
            <p className="text-sm text-[#fefeff] mb-6">{description}</p>
            <div className="flex flex-wrap gap-4">
                {tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-sm text-[#969696]">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
                {platforms.map((Platform, i) => (
                    <Platform.icon
                        key={i}
                        className="text-xl"
                        style={Platform.color ? { color: Platform.color } : {}}
                    />
                ))}
            </div>
        </a>
    );
}
