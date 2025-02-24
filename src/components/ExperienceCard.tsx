import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
}

export default function ExperienceCard({
    logo,
    company,
    position,
    date,
    location,
    highlights,
}: {
    logo: Logo;
    company: string;
    position: string;
    date: string;
    location: string;
    highlights: string;
}) {
    return (
        <div className="space-y-4 max-w-2xl mb-20">
            <div className="flex flex-col items-start space-y-1">
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="w-[100px] h-auto mb-10"
                />
                <p className="font-mono text-sm text-[#969696]">{company}</p>
            </div>
            <h3 className="text-4xl font-medium text-[#fefeff]">{position}</h3>
            <div className="flex justify-between text-sm text-[#fefeff]">
                <span>{date}</span>
                <span>{location}</span>
            </div>
            <p className="text-sm text-[#969696]">{highlights}</p>
            {/* <p className="text-sm text-[#969696]">
      Key achievements include implementing responsive designs, optimizing performance, and collaborating with cross-functional teams 
      to deliver high-quality software solutions.
    </p> */}
        </div>
    );
}
