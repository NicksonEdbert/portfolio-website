import { FcLinux } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaBitcoin, FaWindows } from "react-icons/fa";

export const projects = [
    {
        title: "Wiki",
        description:
            "A command-line tool to get Wikipedia summaries in your terminal - Powered By Gemini AI",
        tags: ["Python", "Snapcraft", "WinGet", "Gemini AI"],
        link: "https://charanravi-online.github.io/wiki-project",
        platforms: [{ icon: FaWindows, color: "#00A4EF" }, { icon: FcLinux }],
    },
    {
        title: "BTC Converter",
        description:
            "A Basic Bitcoin to Fiat converter with price feeds from Coindesk",
        tags: ["Python", "JavaScript", "HTML", "CSS"],
        link: "https://rates.bitcoin.org.hk/",
        platforms: [
            { icon: TbWorld, color: "#4285F4" },
            // { icon: FaBitcoin, color: "#F7931A" }
        ],
    },
    // {
    //   title: "BotPool",
    //   description: "An X (Twitter) bot that responds to mentions with witty Deadpool-style quips and one-liners",
    //   tags: ["Python", "X", "Twitter API"],
    //   link: "https://github.com/charanravi-online/BotPool",
    //   platforms: [
    //     { icon: FaXTwitter, color: "#fefeff" }
    //   ]
    // }
];
