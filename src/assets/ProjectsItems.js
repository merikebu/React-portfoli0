
import Project1Img from "./images/project1-img.jpg";
import Project2Img from "./images/project2-img.jpg";
import Project3Img from "./images/project3-img.jpg";
import Project4Img from "./images/project4-img.jpg";

const ProjectsItems =[
  {
    id:1,
    projectImg:Project1Img,
    projectTitle:'Project 1',
    projectDescription:'Designed and developed a task management web application to help users organize and track their daily activities, featuring user authentication, task prioritization, and deadline notifications. Utilized React for the front-end, Node.js and Express for the back-end, and MongoDB for database integration, with RESTful APIs facilitating communication. Implemented real-time updates using WebSockets for collaborative task editing, optimized database queries to reduce task retrieval time by 20%, and deployed the application on AWS with CI/CD pipelines for seamless updates.',
  },
  {
    id:2,
    projectImg:Project2Img,
    projectTitle:'Project 2',
    projectDescription:'Built a cross-platform personal finance tracker to help users manage budgets, monitor expenses, and visualize spending trends with interactive charts. Leveraged Flutter for the mobile interface, Firebase for authentication, and SQLite for local data storage. Integrated Google Sheets API for importing and exporting financial data, enabled offline functionality for improved user experience, and achieved 95% user satisfaction in beta testing due to an intuitive and user-friendly design.',
  },
  {
    id:3,
    projectImg:Project3Img,
    projectTitle:'Project 3',
    projectDescription:'eveloped an interactive dashboard displaying real-time global COVID-19 statistics, trends, and predictions using public APIs. Built using Python, Flask, and Plotly for data visualization, with Bootstrap for responsive design and deployed on Heroku. Optimized API calls to reduce data fetch latency by 40%, visualized large datasets with dynamic charts and geographic heatmaps, and attracted over 5,000 monthly users during peak COVID-19 periods.',
  },
  {
    id:4,
    projectImg:Project4Img,
    projectTitle:'Project 4',
    projectDescription:'Created a personalized recommendation engine for an e-commerce platform to enhance user experience and increase sales. Built using Python, TensorFlow, and Pandas for model training and Flask for deploying the API, with integration on AWS SageMaker for scalability. Trained a collaborative filtering model to improve recommendation accuracy by 15%, seamlessly integrated the system with the platforms front-end, and increased average user session duration by 25% following implementation.',
  }
  
]
export default ProjectsItems;