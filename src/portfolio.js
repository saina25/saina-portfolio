/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Saina's Portfolio",
  description:
    "Bridging the gap between theory and innovation by building scalable AI systems and end-to-end products designed for social and technical excellence.",
  og: {
    title: "Saina Roy Portfolio",
    type: "website",
    url: "https://github.com/saina25",
  },
};

//Home Page
const greeting = {
  title: "Saina Roy",
  logo_name: "Saina Roy",
  nickname: "saina25",
  subTitle:
    "Bridging the gap between theory and innovation by building scalable AI systems and end-to-end products designed for social and technical excellence.",
  resumeLink:
    "/resume.pdf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/saina25",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/saina25",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saina25/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saina25.roy@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "ML & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Deep Learning models (CNNs) for medical imagery classification and early diagnosis",
        "⚡ Building NLP-based applications for resume screening and extracting keywords for ATS compatibility",
        "⚡ Pre-processing and augmenting large datasets using Python, Pandas, NumPy, and Scikit-learn",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#ED8B00",
          },
        },
      ],
    },
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive user interfaces and interactive web applications using HTML5, CSS3, and JavaScript",
        "⚡ Developing data-driven dashboards and interactive web apps using Streamlit",
        "⚡ Ensuring cross-browser compatibility and dynamic user engagement for frontend architectures",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/anonymous_coder469/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/saina25_roy",
    },
    {
      siteName: "codingninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.naukri.com/code360/profile/6680ae0f-21bc-4382-a71e-1132d297ac40",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Bachelor of Technology - Computer Science and Engineering",
      logo_path: "lpu_logo.png",
      alt_name: "LPU",
      duration: "August 2023 - Present",
      descriptions: [
        "⚡ Current CGPA: 8.87",
        "⚡ Studying core Computer Science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and AI.",
        "⚡ Exploring Advanced Python for ML & AI and building Generative AI applications.",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "South Point High School",
      subtitle: "Intermediate & Matriculation",
      logo_path: "school_logo.png",
      alt_name: "South Point High School",
      duration: "April 2020 - March 2023",
      descriptions: [
        "⚡ Intermediate (Class XII): Achieved 88% (April 2022 - March 2023).",
        "⚡ Matriculation (Class X): Achieved 96.2% (April 2020 - March 2021).",
        "⚡ Developed a strong foundational knowledge in science, mathematics, and analytical problem-solving.",
      ],
      website_link: "https://southpoint.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Build Generative AI Apps",
      subtitle: "- Udemy",
      logo_path: "Build_Generative_AI_Apps.png", 
      certificate_link: "https://drive.google.com/drive/folders/1O_-worjF65jxGtfLhGgH-cw7QO1KRvyz",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Master Generative AI",
      subtitle: "- Udemy",
      logo_path: "Master_Generative_AI.png", 
      certificate_link: "https://drive.google.com/drive/folders/1O_-worjF65jxGtfLhGgH-cw7QO1KRvyz",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Advanced Python for ML & AI",
      subtitle: "- CSE Pathshala",
      logo_path: "Advanced_Python_for_ML_&_AI.png", 
      certificate_link: "https://drive.google.com/drive/folders/1O_-worjF65jxGtfLhGgH-cw7QO1KRvyz",
      alt_name: "CSE Pathshala",
      color_code: "#000000",
    },
    {
      title: "Network Communication",
      subtitle: "- University of Colorado",
      logo_path: "Network_Communication.png", 
      certificate_link: "https://drive.google.com/drive/folders/1O_-worjF65jxGtfLhGgH-cw7QO1KRvyz",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships, Training, and Volunteerships",
  description:
    "I have gained hands-on experience in frontend architecture and advanced machine learning through intensive internships and training programs. I am also deeply committed to community service and continuous learning through volunteer work and cloud programs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships & Training",
      work: true,
      experiences: [
        {
          title: "Intern (Frontend Architecture)",
          company: "Edunet Foundation (IBM SkillsBuild & AICTE)",
          company_url: "",
          logo_path: "ibm_logo.png", // Safe dummy image
          duration: "August 2025 - September 2025",
          location: "Remote",
          description:
            "Completed an intensive 6-week internship focused on modern web technologies and frontend architecture. Developed and deployed 'QuizQuest,' an interactive web-based quiz application, ensuring cross-browser compatibility and dynamic user engagement. Tech stacks used: HTML5, CSS3, JavaScript.",
          color: "#1F70C1", 
        },
        {
          title: "Trainee (Advanced Python for ML & AI)",
          company: "CSE Pathshala",
          company_url: "",
          logo_path: "cse_pathshala.png", // Safe dummy image
          duration: "June 2025 - July 2025",
          location: "Remote",
          description:
            "Immersed in 35+ hours of Live Summer Training on 'Advanced Python for ML & AI'. Performed satisfactorily in all assigned tasks and final assessments, demonstrating proficiency in Python libraries for data processing and machine learning algorithms.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Participant & Champion Milestone Achiever",
          company: "Google Cloud Arcade Facilitator Program",
          company_url: "",
          logo_path: "gcp_logo.png", // Safe dummy image included in template
          duration: "September, 2024",
          location: "Remote",
          description:
            "Participated in the Google Cloud Arcade Facilitator program. Gained extensive hands-on experience with Cloud Computing, Google Cloud Platform (GCP) infrastructure, and cloud-native tools by completing various interactive labs and technical challenges.",
          color: "#4285F4",
        },
        {
          title: "Volunteer English Teacher",
          company: "Khola Haowa (NGO)",
          company_url: "",
          logo_path: "ngo.png", // Safe dummy image
          duration: "June, 2024",
          location: "West Bengal, India",
          description:
            "Volunteered at Khola Haowa, a local non-profit organization, teaching English to underprivileged children. Focused on building foundational language skills, improving communication abilities, and fostering a positive, encouraging learning environment.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My work spans across Deep Learning, Machine Learning, NLP, and Front-End Web Development. I am passionate about building intuitive applications and leveraging AI to solve real-world problems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description: "A collection of my top technical projects, machine learning models, and web applications.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "quiz-quest",
      name: "QuizQuest & Stylewalk Web Apps",
      createdAt: "2025-10-05T00:00:00Z",
      description: "Built responsive, dynamic web applications including a gamified single-page quiz experience and an e-commerce landing page using HTML5, CSS3, JavaScript, and Bootstrap.",
      url: "https://github.com/saina25/QuizQuest",
    },
    {
      id: "pneumodetect-ai",
      name: "PneumoDetect AI",
      createdAt: "2025-09-18T00:00:00Z",
      description: "Engineered a Deep Learning web application utilizing TensorFlow, Keras, and Streamlit to classify chest X-ray images, effectively distinguishing between Normal and Pneumonia cases for early medical diagnosis.",
      url: "https://github.com/saina25/PneumoDetect-AI",
    },
    {
      id: "ai-resume-analyzer",
      name: "AI Resume Analyzer",
      createdAt: "2025-09-12T00:00:00Z",
      description: "Developed an intelligent NLP-powered application using Python, Streamlit, and PyPDF2 to automate resume screening, extracting key skills to tailor candidate profiles to specific job descriptions.",
      url: "https://github.com/saina25/AI-Resume-Analyser",
    },
    {
      id: "iris-classification",
      name: "Iris Classification Model",
      createdAt: "2025-08-16T00:00:00Z",
      description: "Built a machine learning model using KNN that classifies iris flowers into three species based on their sepal and petal measurements using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.",
      url: "https://github.com/saina25/iris-classification",
    },
    {
      id: "movie-recommendation",
      name: "Content-Based Movie Recommendation System",
      createdAt: "2025-07-07T00:00:00Z",
      description: "Designed a machine learning recommendation engine using Scikit-learn and Pandas to suggest highly relevant movies based on content similarity, deployed via an interactive Streamlit dashboard.",
      url: "https://github.com/saina25/Content-Based-Movie-Recommender-System",
    },
    {
      id: "process-monitor",
      name: "Real-Time Process Monitoring Dashboard",
      createdAt: "2025-03-27T00:00:00Z",
      description: "Collaborated to build an intuitive desktop application utilizing Python, Tkinter, Psutil, and NetworkX to dynamically monitor and visualize system performance metrics in real-time.",
      url: "https://github.com/saina25/real-time-process-monitoring-dashboard",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_avatar.png", 
    description:
      "I am available on almost every social media platform. Feel free to reach out to me for any queries, collaborations, or opportunities related to Machine Learning, AI, or Front-End Web Development!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kolkata, West Bengal, India",
    locality: "Kolkata",
    country: "India",
    region: "West Bengal",
    postalCode: "700039",
    streetAddress: "212A Picnic Garden Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Kolkata",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91-7439853879",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
