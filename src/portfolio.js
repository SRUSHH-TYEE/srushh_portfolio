import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import splashAnimationDark from "./assets/lottie/splashAnimationDark"; // Rename to your file name for custom animation

// Splash Screen

const splashScreenDark = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimationDark,
  duration: 2000 // Set animation duration as per your animation
};
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Srushti Nayak",
  title: "Hello world! Srushti here",
  subTitle: (
    <>
      {emoji("🚀 AI/ML Engineer who loves turning raw data into intelligent systems.")}
      {emoji(" From building")}
      <span style={{ fontWeight: "bold", color: "#8fb352" }}> End to End ML pipelines </span>
      {emoji("to deploying")}
      <span style={{ fontWeight: "bold", color: "#8fb352" }}> AI at scale</span>
      {emoji(", I make machines see, think, and adapt, bringing deep learning and vision-language models to life.")}
      <br />
      {emoji("💡 When I'm not training models, I’m engineering")}
      <span style={{ fontWeight: "bold", color: "#8fb352" }}> scalable applications </span>
      {emoji(", blending ML with")}
      <span style={{ fontWeight: "bold", color: "#8fb352" }}> full-stack development.</span>
      <br />
      {emoji("🏆 Hackathon Winner | AI/ML Software Engineer | Graduate Teaching Assistant")}
    </>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iHKqR6v6isDPw6flKqgevKszm1OMrejK/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/SRUSHH-TYEE",
  linkedin: "https://www.linkedin.com/in/srushtinayak/",
  gmail: "srushtinayak.tech@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Alabama at Birmingham",
      logo: require("./assets/images/uablogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Graduate Teaching Assistance for Data Mining and Artificial Intelligence",
      descBullets: [
        "Coursework: Deep Learning, Database Systems, Advance Algorithms and Applications",
      ]
    },
    {
      schoolName: "L.D. College of Engineering- Gujarat Technological University",
      logo: require("./assets/images/ldcelogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "September 2019 - June 2023",
      desc: "Ranked top 5% in the program. Training and Placement Coordinator(Data Handling Head): Worked with student placement data. Managed data exchange with 100+ hiring companies and update of 1000+ student placement data.",
      descBullets: ["Coursework: Object Oriented Programming, Computer Networks, Data Strustures and Algorithms, Data Visualizations",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ML pipelines", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Fullstack development",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Structure and Algorithms",
      progressPercentage: "98%"
    },
    {
      Stack: "model training and optimization",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const skillsForskills={
  skills:[
    "Java", "Python", "Shell", "Bash", "javascript", "pytorch", "tensorflow", "linux", "docker", "react", "node", "matplotlib", "pandas", "numpy", "sklearn", "AWS", "mongoDB", "SQL"
  ]
}

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "University of Alabama at Birmingham",
      companylogo: require("./assets/images/uablogo.png"),
      date: "August 2024 – Present",
      desc: "Artificial Intelligence | Data Mining",
      descBullets: [
        "Mentored over 100 students in AI and data mining, bridging theory with real-world applications.",
        "Led hands-on experiments in clustering, text, image, and graph mining, enhancing practical understanding.",
        "Taught advanced AI topics, including search algorithms, evolutionary strategies, ACO, LLMs, VLMs, and generative models (diffusion, flows).",
        "Helped students to build AI solutions using generative AI APIs and deep learning frameworks like PyTorch and PyTorch Geometric."
      ]
    },
    {
      role: "Data Science and Machine Learning intern",
      company: "Two waites technologies",
      companylogo: require("./assets/images/twowaits_technologies_logo.jpeg"),
      date: "April 2022 – June 2022",
      descBullets: ["Accelerated ML model training and inference significantly using optimized TensorFlow models.",
"Fine-tuned deep learning models for sentiment analysis and text classification.",
"Implemented MLOps practices (MLflow, Docker) for automated model training, versioning, and deployment.",
"Conducted EDA and data preprocessing with Pandas, NumPy, and Matplotlib."
  ]
},
    {
      role: "Software Engineer Intern",
      company: "Infolabz",
      companylogo: require("./assets/images/infolabzlogo.png"),
      date: "December 2022 – July 2023",
      descBullets: [        
        "Processed user interaction data for ML model training",
        "Fine-tuned models to speed up personalized recommendations.",
        "Developed APIs with Django to serve real-time ML predictions.",
        "Managed database schemas using Django ORM and SQL for data storage.",
  ]
},
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My projects",
  subtitle: "Exploring Ideas, Building Solutions, and Innovating with Code",
  projects: [
    {
      images: [
        require("./assets/images/verdant1.png"),
        require("./assets/images/verdant2.png"),
        require("./assets/images/verdant3.png"),
        require("./assets/images/verdant4.png"),
      ],
      projectName: "Verdant",
      projectDesc: "End to End ML pipeline using FastAPI, Tensorflow, tf-serving, GCP, react",
      footerLink: [
        {
          name: "Have a look",
          url: "https://github.com/SRUSHH-TYEE/VerdantFresh--Detecting-Freshness-Enhancing-Quality"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Trippify",
      projectDesc: "Fullstack Carpooling web app focused on user safety using MERN stack",
      images:[
        require("./assets/images/trippifypic.png"),
        require("./assets/images/trippifypic2.png"),
        require("./assets/images/trippifypic3.png"),
        require("./assets/images/trippifypic4.png"),
      ],
      footerLink: [
        {
          name: "Have a look",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      images: [
        require("./assets/images/textutils1.png"),      
        require("./assets/images/textutils2.png"),      
        require("./assets/images/textutils3.png"),      
        require("./assets/images/textutils4.png"),      
      ],
      projectName: "Textutils",
      projectDesc: "Basic web application created with React js that allows a user to convert case of text, count the number of words and also work in dark and light modes",
      footerLink: [
        {
          name: "Live",
          url: "https://srushh-tyee.github.io/Textutils-react/"
        }
      ]
    },
    {
      images: [
        require("./assets/images/pressley1.png"),
        require("./assets/images/pressley2.png"),
        require("./assets/images/pressley3.png"),
        require("./assets/images/pressley4.png"),
        require("./assets/images/pressley5.png"),
      ],
      projectName: "Pressly",
      projectDesc: "feature rich news app",
      footerLink: [
        {
          name: "Have a look",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Innovate Alabama Entrepreneurship Hackathon",
      subtitle:
        "Winner",
      image: require("./assets/images/innovatealhackathon.png"),
      imageAlt: "UA hackathons logo",
      footerLink: [
        {
          name: "Highlights",
          url: "https://www.linkedin.com/posts/activity-7161946890278801408-8Wk8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgpwa0Br85FoVKvsgm09aqStDIs0E7EAtM"
        },
      ]
    },
    {
      title: "Amazon ML Summer School 2022",
      subtitle:
        "Studied advanced ML topics such as Supervised Learning, Reinforcement Learning, and Probabilistic Graphical Models. ",
      image: require("./assets/images/amazonlogo.webp"),
      imageAlt: "Amazon Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/srushtinayak_letter-of-acknowledge-amazonindiaml-activity-6976405496530366464-Il1n?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgpwa0Br85FoVKvsgm09aqStDIs0E7EAtM"
        }
      ]
    },

    {
      title: "NVIDIA- Building RAG Agents with LLMs",
      // subtitle: "Building RAG Agents with LLMs",
      image: require("./assets/images/nvidialogo.png"),
      imageAlt: "Nvidia Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "NVIDIA- Optimizing CUDA Machine Learning Codes With Nsight Profiling Tools ",
      // subtitle: "Optimizing CUDA Machine Learning Codes With Nsight Profiling Tools",
      image: require("./assets/images/nvidialogo.png"),
      imageAlt: "Nvidia Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's connect ☎️"),
  subtitle:
    "Hire me, have a coffee chat or just say Hi",
  number: "+1 2058157222",
  email_address: "srushtinayak.tech@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  splashScreenDark,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  skillsForskills
};
