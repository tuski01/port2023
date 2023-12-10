"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/tuski01",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/sun6.18/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
