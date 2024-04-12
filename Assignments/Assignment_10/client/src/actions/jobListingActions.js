// actions/jobListingActions.js

const jobPosts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Looking for a Full Stack Developer to join our dynamic team, focusing on both frontend and backend development using modern frameworks and technologies.',
      lastUpdated: '1 day ago',
      applyLink: 'https://example.com/jobs/full-stack-developer',
    },
    {
      id: 2,
      title: 'Big Data Engineer',
      description: 'Seeking a Big Data Engineer to analyze large datasets and contribute to our data-driven solutions. Proficiency in Hadoop, Spark, and related technologies expected.',
      lastUpdated: '2 days ago',
      applyLink: 'https://example.com/jobs/big-data-engineer',
    },
    // Add more jobs as needed
    {
      id: 3,
      title: 'UI/UX Designer',
      description: 'Inviting a creative UI/UX Designer to design intuitive user interfaces and enhance user experience. A strong portfolio of successful UX and other technical projects is essential.',
      lastUpdated: 'Just now',
      applyLink: 'https://example.com/jobs/ui-ux-designer',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      description: 'Looking for a DevOps Engineer to work with development teams and IT staff to oversee code releases and deployments.',
      lastUpdated: '4 days ago',
      applyLink: 'https://example.com/jobs/devops-engineer',
    },
    {
      id: 5,
      title: 'Project Manager',
      description: 'Eager to onboard a Project Manager with exceptional organizational skills to oversee project timelines, deliverables, and team coordination. PMP certification is a plus.',
      lastUpdated: '3 hours ago',
      applyLink: 'https://example.com/jobs/project-manager',
  },
  {
      id: 6,
      title: 'Blockchain Developer',
      description: 'Seeking a Blockchain Developer to design innovative blockchain-based solutions. Experience with Ethereum and smart contract development is required.',
      lastUpdated: '2 days ago',
      applyLink: 'https://example.com/jobs/blockchain-developer',
  },
  {
      id: 7,
      title: 'Cloud Engineer',
      description: 'Looking for a Cloud Engineer with expertise in designing, deploying, and managing cloud infrastructure. Familiarity with AWS, Azure, or Google Cloud is essential.',
      lastUpdated: '5 days ago',
      applyLink: 'https://example.com/jobs/cloud-engineer',
  },
  {
      id: 8,
      title: 'Data Scientist',
      description: 'Data Scientist needed to analyze vast amounts of raw information to find patterns that will help improve our company. Proficiency in machine learning algorithms and Python is key.',
      lastUpdated: '1 week ago',
      applyLink: 'https://example.com/jobs/data-scientist',
  },
  {
      id: 9,
      title: 'Information Security Analyst',
      description: 'Inviting an Information Security Analyst to safeguard our computer networks and systems. Knowledge of various security frameworks and risk management is required.',
      lastUpdated: 'Just now',
      applyLink: 'https://example.com/jobs/information-security-analyst',
  },
  {
      id: 10,
      title: 'Technical Support Engineer',
      description: 'Technical Support Engineer position open for individuals passionate about solving technical problems and assisting customers with product inquiries and issues.',
      lastUpdated: '3 days ago',
      applyLink: 'https://example.com/jobs/technical-support-engineer',
  },
  {
      id: 11,
      title: 'UX Researcher',
      description: 'Seeking a UX Researcher to inform the design of our digital products through thorough research and user testing. Previous experience in a UX research role is preferred.',
      lastUpdated: 'Yesterday',
      applyLink: 'https://example.com/jobs/ux-researcher'
   }
  ];
export const setJobListings = (jobs) => {
    return {
      type: 'SET_JOB_LISTINGS',
      payload: jobPosts,
    };
  };
  