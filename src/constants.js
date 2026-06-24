// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restapi from './assets/tech_logo/restapi.png';
import JWT from './assets/tech_logo/JWT.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import Cloudinary from './assets/tech_logo/Cloudinary.png';
import docker from './assets/tech_logo/docker.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Experience Section Logo's
import free from './assets/company_logo/Free.jpg';
import Codec from './assets/company_logo/codec.jpg';
import AAI from './assets/company_logo/AAI.png';
import acmegrade from './assets/company_logo/acmegrade.jpg';

// Education Section Logo's
import AKTU from './assets/education_logo/AKTU.png';
import BTEUP from './assets/education_logo/BTEUP.jpg';
import BSEB from './assets/education_logo/BSEB.jpg';

// Project Section Logo's
import social from './assets/work_logo/social.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import E_learning from './assets/work_logo/E_learning.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'RestApi', logo: restapi},
      { name: 'JWT ', logo: JWT},
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Cloudinary', logo: Cloudinary},
      { name: 'Docker', logo: docker},
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: free,
    role: "Freelance Full Stack Developer",
    company: "Independent/Self-Employed",
    date: "June 2026 - Present",
    desc: "Built and deployed a production-grade business management platform for a content creator client — currently live and in active use. Architected full-stack app using MongoDB, Express.js, React.js, Node.js, and Tailwind CSS Built an admin dashboard with complete CRUD operations and role-based JWT authentication Developed a CMS for content upload, editing, and deletion Implemented subscriber management system with cold email campaign automation Handled end-to-end deployment with protected routes and secure API design",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Claudinary",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Resand",
      "JSON Web Token (JWT)",
    ],
  },
  {
    id: 1,
    img: Codec,
    role: "MERN Stack Developer",
    company: "Codec Technologies India",
    date: "April 2025 - September 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 2,
    img: AAI,
    role: "Intern – Airport Authority of India (AAI)",
    company: "Lal Bahadur Shastri International Airport, Varanasi",
    date: "(09-09-24 – 20-10-24)",
    desc: "During my internship at the Airport Authority of India (AAI), Lal Bahadur Shastri International Airport, I gained practical exposure to airport operations, IT infrastructure, and engineering systems. I learned about server networks, database management, and enterprise software, while also developing knowledge of security protocols, communication systems, and real-time monitoring. Working with IT engineers enhanced my skills in network configuration, troubleshooting, teamwork, and problem-solving within large-scale technical environments.",
    skills: [
      "IT Infrastructure",
      "Networking",
      "Troubleshooting",
      "Server Managemen",
      "Database",
      "Software Systems in Aviation",
      "Problem-Solving",
      "Professional Collaboration",
      "Communication",

    ],
  },
  {
    id: 3,
    img: acmegrade,
    role: "Web Development",
    company: "Acmegrade",
    date: "(12-12-23 – 12-01-24)",
    desc: "Enthusiast with comprehensive training and internship experience from the ACMEGrade program. Proficient in a wide range of web technologies, including HTML, CSS, JavaScript, PHP, and Node.js. Experienced in both front-end and back-end development.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: AKTU,
    school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    date: "Sept 2022 - sept 2025",
    grade: "6.89 CGPA",
    desc: "Completed B.Tech in Computer Science and Engineering from Saraswati Higher Education & Technical College of Engineering (SHEAT), Varanasi. Gained strong knowledge in computer science fundamentals, software development, and modern technologies. Completed projects and workshops, enhancing programming, problem-solving, and collaborative skills, while developing a keen interest in web development and software engineering.",
    degree: "Bachelor of Technology – B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: BTEUP,
    school: "Board of Technical Education (Uttar Pradesh)",
    date: "JUN 2019 - SEPT 2022",
    grade: "75.2%",
    desc: "I have completed my Diploma in Computer Science and Engineering from the Board of Technical Education, Uttar Pradesh, Lucknow. During this program, I gained a strong foundation in programming, computer networks, operating systems, and database management systems. I also worked on practical labs and mini-projects, which helped me develop problem-solving skills and hands-on technical expertise. This diploma served as the stepping stone for my lateral entry into B.Tech, and it played an important role in shaping my interest in software development and computer science.",
    degree: "Diploma (Computer Science and Engineering)",
  },
  {
    id: 2,
    img: BSEB,
    school: "L.B.T Collage, Buxar (Bihar)",
    date: "Apr 2017 - March 2018",
    grade: "47%",
    desc: "I have completed my 12th (Intermediate) in Physics, Mathematics, and Chemistry (PMC) from L.B.T. College, Buxar, Bihar. This academic background provided me with a strong base in analytical thinking, logical reasoning, and problem-solving, which further supported my journey into computer science and engineering.",
    degree: "Intermediate (12th) – Physics, Mathematics, Chemistry",
  },
  {
    id: 3,
    img: BSEB,
    school: "POINT EDUCATION HIGH SCHOOL MOHANIA KAIMUR",
    date: "Apr 2015 - March 2016",
    grade: "57%",
    desc: "I have completed my 10th (Secondary Education) from Point Education High School, Mohania, Kaimur. This stage of my education provided me with the fundamental academic knowledge and discipline that laid the foundation for my higher studies in science and technology.",
    degree: "Secondary School (10th)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Video Editor Portfolio Website",
    description:
      "Developed a full-stack portfolio platform for a professional video editor to showcase projects, attract clients, and manage content efficiently. Built a secure admin dashboard with authentication, project management, image uploads, subscriber management, and contact handling. Integrated Cloudinary for media storage and MongoDB for scalable data management while ensuring a responsive user experience across all devices.",
    image: social,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Admin Dashboard",
      "Project Management",
      "Cloudinary Uploads",
      "JWT Authentication",
      "Subscriber Management",
      "Contact Form Integration",
    ],
    github: "",
    webapp: "https://google.com",
  },

  {
    id: 1,
    title: "NovaWeb Agency Website",
    description:
      "Developed a modern web agency platform designed to showcase services, generate leads, and attract potential clients. Built using Next.js with a focus on performance, responsive design, SEO optimization, and user experience. The platform includes service pages, pricing plans, project showcases, and contact management features.",
    image: csprepLogo,
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "SEO",
    ],
    keyFeatures: [
      "Lead Generation System",
      "Service Showcase",
      "Project Portfolio",
      "Pricing Plans",
      "Contact Management",
      "SEO Optimization",
    ],
    github: "",
    webapp: "",
  },

  {
    id: 2,
    title: "E-Learning Platform",
    description:
      "Built a full-stack learning management platform that enables students to access educational content and allows administrators to manage courses efficiently. Implemented authentication, course management, enrollment systems, and role-based access control.",
    image: E_learning,
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Course Management",
      "Student Enrollment",
      "Admin Dashboard",
      "Authentication System",
      "Protected Routes",
      "Role-Based Access",
    ],
    github: "https://github.com/Rishabhkasyap/e-learning-platform",
    webapp: "",
  },

  {
    id: 3,
    title: "Social Media Platform",
    description:
      "Developed a full-stack social networking platform that allows users to create posts, interact through comments and likes, manage profiles, and upload media content. Designed with scalability and responsive user experience in mind.",
    image: npmLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Cloudinary",
      "JWT Authentication",
    ],
    keyFeatures: [
      "User Authentication",
      "Post Creation",
      "Comments & Likes",
      "Media Uploads",
      "Profile Management",
      "Responsive Design",
    ],
    github: "https://github.com/Rishabhkasyap/social-media-website",
    webapp: "",
  },

  {
    id: 4,
    title: "CS Prep Platform",
    description:
      "Created an online preparation platform for GATE and UGC NET aspirants. The system allows students to attempt quizzes, practice previous year questions, track performance, and analyze detailed results.",
    image: taskremLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
    ],
    keyFeatures: [
      "Mock Test System",
      "Quiz Generator",
      "Previous Year Questions",
      "Performance Analytics",
      "Progress Tracking",
      "Student Dashboard",
    ],
    github: "",
    webapp: "",
  },

  {
    id: 5,
    title: "Doctor Appointment Booking System",
    description:
      "Developed a healthcare appointment management platform that enables patients to find doctors, schedule appointments, and manage booking information through an intuitive and responsive interface.",
    image: webverLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
    ],
    keyFeatures: [
      "Doctor Listings",
      "Appointment Scheduling",
      "Patient Dashboard",
      "Booking Management",
      "Responsive Interface",
      "User Authentication",
    ],
    github: "",
    webapp: "",
  },
];

