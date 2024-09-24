export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Skills",
    description: "I strive to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-Stack Developer with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Next.js Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ultimate- StudentFlow",
    des: "StudentFlow is like Stack Overflow, where you can ask and answer questions, upvote/downvote content, manage saved items, and interact with a community.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg"],
    link: "https://studentflow.vercel.app/",
  },
  {
    id: 2,
    title: "3D- Brainwave-AI",
    des: "An immersive AI chat web application featuring a dynamic 3D landing page This project showcases advanced  design principles.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/fm.svg"],
    link: "https://brainwave-ai-agency.vercel.app/",
  },
  {
    id: 3,
    title: "Modern- HooBank",
    des: "HooBank is a sleek and modern banking website landing page designed to offer a seamless digital banking experience.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/fm.svg"],
    link: "https://hoo-bank-landing-page-gold.vercel.app/",
  },
  {
    id: 4,
    title: "Blublogs Web App",
    des: "Blublogs is a dynamic blogging platform enabling users to create, edit, and manage blogs with a rich text editor, explore content by category, and engage through likes and saves.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/app-write.svg"],
    link: "https://blublogs.vercel.app/",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Working with M.Rehman was an absolute pleasure. His expertise in React and Next.js\n significantly accelerated our project timeline. What impressed me most was his ability\n to translate complex technical concepts into user-friendly interfaces. His attention to\n detail and commitment to delivering high-quality code sets him apart. I highly recommend\n M.Rehman for any web development project!",
    name: "Alex Thompson",
    title: "CTO, InnoTech Solutions",
    img: "/c1.svg",
  },
  {
    id: 2,
    quote:
      "Working with M.Rehman Waraich was a game-changer for our healthcare application. His full-stack skills ensured a robust, scalable backend while his UI/UX design created an interface that even our less tech-savvy users find easy to navigate. Rehman's attention to detail and user-centric approach have dramatically improved our patient engagement rates.",
    name: "Sophia Lee",
    title: "Product Manager, HealthTech Innovations",
    img: "/c2.svg",
  },
  {
    id: 3,
    quote:
      "M.Rehman's technical prowess is truly exceptional. His mastery of React.js, Next.js, and\n Tailwind CSS resulted in a sleek, responsive frontend, while his backend skills with Express.js\n and Node.js ensured robust server-side functionality. What sets him apart is his ability to\n seamlessly integrate TypeScript, enhancing code quality and maintainability. His problem-solving\n skills and dedication to meeting deadlines made him an invaluable asset to our project. M.Rehman\n doesn't just write code; he crafts efficient, scalable solutions.",
    name: "Emily Chen",
    title: "Founder, EduLearn Platforms",
    img: "/c3.svg",
  },
  {
    id: 4,
    quote:
      "M.Rehman Waraich's contribution to our sustainable technology dashboard was nothing short of extraordinary. His full-stack JavaScript skills enabled us to create a real-time data visualization platform that's both powerful and user-friendly. Rehman's UI/UX design approach perfectly balanced complex data representation with intuitive user interactions. His work has significantly enhanced our ability to communicate the impact of green technologies to our stakeholders.",
    name: "Olivia Chen",
    title: "Co-founder, GreenTech Innovations",
    img: "/c4.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer ",
    desc: "At Engimatix, I take care of all the planning, implementation, and optimization of frontend development processes and improve user interaction with real-time updates.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Figma UI/UX Designer",
    desc: "At DesignFlow Solutions, Designed and prototyped user-friendly interfaces using Figma, focusing on creating intuitive user experiences for web and mobile applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "NextJS Developer",
    desc: "At AutomForest AI, Built full-stack web applications using Next.js, enabling server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "At TechVibe Solutions, Developed and maintained scalable backend systems using Node.js and Express.js, ensuring smooth integration with MongoDB databases for efficient data management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/rehmanwaraich07/",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/reachrehman/",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/reachrehman/",
  },
  {
    id: 4,
    img: "/upwork.svg",
    url: "https://www.upwork.com/freelancers/~01c387b6c817417d39",
  },
];
