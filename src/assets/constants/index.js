import project2 from "../projects/box.png";
import project1 from "../projects/UnderDev.png";
import project3 from "../projects/Gradioo.png";

// Projects list
export const PROJECTS = [
  {
    title: "Podvelez Productivity",
    image: project1,
    description: "Productivity Notepad App",
    technologies: ["React", "NodeJS", "Tailwind"],
  },
  {
    title: "Computer Vision Box Detection",
    image: project2,
    description:
      "Project built for InfoStudio.ba, in which an image can be uploaded to a trained Ai model to detect boxes",
    technologies: ["Python", "Flask", "OpenCV"],
  },
  {
    title: "Gradio",
    image: project3,
    description:
      "A website able to convert grades (A,B,C,D) from Letters to Percentage (%).  ",
    technologies: ["Javascript", "HTML", "CSS"],
  },
];

// Expeerience
export const EXPERIENCES = [
  {
    year: "2024 Summer Internship",
    role: "Ai/Machine Learning Intern",
    company: "InfoStudio.ba",
    description: `As an AI intern at Info Studio, I contributed to the development of cutting edge computer vision and object detection technologies using python gaining experience in training computer vision models. During my Internship I actively participated in the training and hosting of computer vision models, collaborating with a team of skilled professionals.`,
    technologies: ["Flask", "OpenCV", "Javascript", "Python"],
  },
  {
    year: "2022 - 2023",
    role: "Freelance Frontend Developer",
    company: "SiteSensei.ca",
    description: `Helped Buisnesses with Web Developpement Products`,
    technologies: ["HTML", "Javascript", "CSS"],
  },
];

// Contact list
export const CONTACT = {
  adress: "Kingston Ontario Canada",
  phoneNo: "+1 343 580 4405",
  email: "alimansouri.dev@gmail.com",
};
