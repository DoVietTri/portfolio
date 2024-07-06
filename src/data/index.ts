import { v4 as uuidv4 } from "uuid";
import { filter } from "lodash";

import { Experience, Project, SocialNetwork, Tech } from "@/interfaces";

// Projects
import Ubet from "@/assets/images/projects/ubet.png";
import Beanfun from "@/assets/images/projects/beanfun.png";
import LeadMarketing from "@/assets/images/projects/lead-marketing.png";
import TokenStand from "@/assets/images/projects/tokenstand.png";

// Socials
import Github from "@/assets/images/socials/github.svg";
import Internet from "@/assets/images/socials/internet.svg";
import Instagram from "@/assets/images/socials/instagram.svg";

// Companies
import Cowell from "@/assets/images/companies/co-well.jpg";
import HBLab from "@/assets/images/companies/hblab.png";
import Sotatek from "@/assets/images/companies/sotatek.png";
import University from "@/assets/images/companies/university.png";
import { TechEnum } from "@/enums";

export const experiences: Experience[] = [
  {
    elProps: {
      date: "4/2023 - present",
      contentStyle: {
        background: "linear-gradient(270deg, #2F9EDD 0%, #427EEB 100%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid #2F9EDD",
      },
      icon: Sotatek.src,
    },
    info: {
      companyName: "Sotatek JSC",
      companySite: "https://sotatek.com",
      role: "Frontend Developer",
    },
  },
  {
    elProps: {
      date: "6/2021 - 4/2023",
      contentStyle: {
        background:
          "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid #FF8008",
      },
      icon: HBLab.src,
    },
    info: {
      companyName: "HBLab JSC",
      companySite: "https://hblab.vn",
      role: "Frontend Developer",
    },
  },
  {
    elProps: {
      date: "6/2020 - 9/2020",
      contentStyle: { background: "rgba(32, 53, 50, .97)" },
      contentArrowStyle: { borderRight: "7px solid rgba(32, 53, 50, .97)" },
      icon: Cowell.src,
    },
    info: {
      companyName: "Co-well Asia",
      companySite: "https://co-well.vn",
      role: "Intership Developer",
    },
  },
  {
    elProps: {
      date: "9/2017 - 9/2021",
      contentStyle: { background: "#b41d24" },
      contentArrowStyle: { borderRight: "7px solid #b41d24" },
      icon: University.src,
    },
    info: {
      companyName: "HaNoi University of science and technology",
      companySite: "https://hust.edu.vn",
      role: "Student",
    },
  },
];

export const techs: Tech[] = [
  {
    type: TechEnum.NEXT_JS,
    title: "NextJS",
    bgColor: "#171717",
    link: "https://nextjs.org/",
  },
  {
    type: TechEnum.VUE_JS,
    title: "VueJS",
    bgColor: "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
    link: "https://vuejs.org/",
  },
  {
    type: TechEnum.REACT_JS,
    title: "ReactJS",
    bgColor: "rgb(88 196 220 / 1)",
    link: "https://react.dev/",
  },
  {
    type: TechEnum.JAVASCRIPT,
    title: "Javascript",
    bgColor: "rgb(88 196 220 / 1)",
    link: "https://devdocs.io/javascript/",
  },
  {
    type: TechEnum.TYPESCRIPT,
    title: "Typescript",
    bgColor: "#3178c6",
    link: "https://www.typescriptlang.org/",
  },
  {
    type: TechEnum.JOTAI,
    title: "Jotai",
    bgColor: "#171717",
    link: "https://jotai.org/",
  },
  {
    type: TechEnum.MATERIAL_UI,
    title: "Material UI",
    bgColor:
      "linear-gradient(90deg, hsl(210, 100%, 60%) 5%, hsl(210, 100%, 60%) 90%)",
    link: "https://mui.com/",
  },
  {
    type: TechEnum.ELEMENT_PLUS,
    title: "Element Plus",
    bgColor: "#409eff",
    link: "https://element-plus.org/en-US/",
  },
  {
    type: TechEnum.REDUX_SAGA,
    title: "Redux Saga",
    bgColor: "#86d46b",
    link: "https://redux-saga.js.org/",
  },
  {
    type: TechEnum.REDUX_TOOLKIT,
    title: "Redux Toolkit",
    bgColor: "#593d88",
    link: "https://redux-toolkit.js.org/",
  },
  {
    type: TechEnum.PINIA,
    title: "Pinia",
    bgColor: "-webkit-linear-gradient( 78deg, #f7d336 30%, #8ae99c )",
    link: "https://pinia.vuejs.org/",
  },
  {
    type: TechEnum.TANSTACK_QUERY,
    title: "TanStack Query",
    bgColor: "-webkit-linear-gradient( 78deg, #ef4444  30%, #f59e0b )",
  },
  {
    type: TechEnum.SWR,
    title: "SWR",
    bgColor: "#4b5563",
    link: "https://swr.vercel.app/",
  },
  {
    type: TechEnum.SOCKET_IO,
    title: "SocketIO",
    bgColor: "#25c2a0",
    link: "https://socket.io/",
  },
  {
    type: TechEnum.STYLED_COMPONENT,
    title: "Styled Component",
    bgColor: "linear-gradient(20deg, rgb(0, 0, 0), rgb(23, 25, 30))",
    link: "https://styled-components.com/",
  },
  {
    type: TechEnum.ETHERS,
    title: "Ethers JS",
    bgColor: "#2535a0",
    link: "https://docs.ethers.org/",
  },
];

const filterable = (ts: TechEnum[]) =>
  filter(techs, (tech) => ts.includes(tech.type));

export const projects: Project[] = [
  {
    index: uuidv4(),
    title: "Beanfun",
    description:
      "Beanfun! Allows you to find people with similar interests and form a team to participate together",
    domain: "https://www.beanfun.com",
    image: Beanfun,
    techStacks: filterable([
      TechEnum.VUE_JS,
      TechEnum.PINIA,
      TechEnum.TANSTACK_QUERY,
      TechEnum.ELEMENT_PLUS,
    ]),
  },
  {
    index: uuidv4(),
    title: "Ubet",
    description:
      "UBet | Crypto Sports Betting & Casino Platform - Bitcoin & Ethereum",
    domain: "https://ubet.io",
    image: Ubet,
    techStacks: filterable([
      TechEnum.NEXT_JS,
      TechEnum.TYPESCRIPT,
      TechEnum.JOTAI,
      TechEnum.SWR,
      TechEnum.SOCKET_IO,
      TechEnum.MATERIAL_UI,
    ]),
  },
  {
    index: uuidv4(),
    title: "Lead Marketing",
    description:
      "Lead Marketing | Marketing system website & sale funnel builder for small and medium enterprise",
    domain: "https://www.lead-ltd.co.jp",
    image: LeadMarketing,
    techStacks: filterable([
      TechEnum.REACT_JS,
      TechEnum.TYPESCRIPT,
      TechEnum.REDUX_SAGA,
      TechEnum.MATERIAL_UI,
    ]),
  },
  {
    index: uuidv4(),
    title: "Token Stand",
    description:
      "Token Stand Network is a place that gathers the most famous decentralized protocols for your best profit-making with haste and totally secured system. Swapping, staking, making orders, all on a professional decentralized platform.",
    domain: "https://tokenstand.finance",
    image: TokenStand,
    techStacks: filterable([
      TechEnum.NEXT_JS,
      TechEnum.TYPESCRIPT,
      TechEnum.REDUX_TOOLKIT,
      TechEnum.STYLED_COMPONENT,
      TechEnum.ETHERS,
    ]),
  },
  {
    index: uuidv4(),
    title: "Ltra",
    description: "Live Traffic Platform ",
    image: TokenStand,
    techStacks: filterable([
      TechEnum.REACT_JS,
      TechEnum.REDUX_SAGA,
      TechEnum.MATERIAL_UI,
    ]),
  },
];

export const socialNetworks: SocialNetwork[] = [
  {
    title: "Facebook",
    icon: Internet,
    link: "https://www.facebook.com/tri.doviet.3/",
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/DoVietTri",
  },
  {
    title: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/tridoviet/",
  },
];
