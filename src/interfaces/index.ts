import { TechEnum } from "@/enums";
import { StaticImageData } from "next/image";
import { VerticalTimelineElementProps } from "react-vertical-timeline-component";

export interface Experience {
  elProps?: VerticalTimelineElementProps;
  info: {
    companyName: string;
    companyDescription?: string;
    companySite: string;
    role:
      | "Frontend Developer"
      | "Backend Developer"
      | "Full-Stack Developer"
      | "Intership Developer"
      | "Student";
  };
}

export interface Tech {
  type: TechEnum;
  title: string;
  bgColor: string;
  link?: string;
  icon?: StaticImageData;
}

export interface Project {
  index: string;
  title: string;
  description: string;
  domain?: string;
  image: StaticImageData;
  techStacks: Tech[];
}

export interface SocialNetwork {
  title: string;
  icon: StaticImageData;
  link: string;
}
