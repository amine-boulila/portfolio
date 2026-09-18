export type ProjectCategory = 'All' | 'AI / ML' | 'Full-stack' | 'Cloud / DevOps';

export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  category: Exclude<ProjectCategory, 'All'>;
  architecture?: string;
  standout?: boolean;
};

export const projects: Project[] = [
  {
    id: 'attijari-idp',
    name: 'Attijari Bank — Intelligent Document Processing',
    eyebrow: 'AI-powered pipeline',
    description: 'A document-processing pipeline for extracting structured information from scanned mortgage documents.',
    problem: 'Turn scanned PDFs into reliable, structured data without sending sensitive documents to a hosted model.',
    contribution: 'OCR preprocessing, local LLM inference, full-stack service integration, persistence, and the production-oriented system shape.',
    technologies: ['Python', 'Tesseract OCR', 'Ollama', 'Qwen3', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'AI / ML',
    architecture: 'PDF → image preprocessing → OCR → local LLM → structured JSON → database / Excel',
    standout: true,
  },
  {
    id: 'agrovalplus',
    name: 'Agrovalplus',
    eyebrow: 'Full-stack platform',
    description: 'A full-stack agricultural and business platform built around real application workflows.',
    problem: 'Bring application flows, business data, and payment into one coherent product experience.',
    contribution: 'Full-stack architecture, React interfaces, Node.js services, MongoDB integration, and payment integration.',
    technologies: ['MERN stack', 'Node.js', 'React', 'MongoDB', 'Konnect'],
    category: 'Full-stack',
  },
  {
    id: 'optima-logistic',
    name: 'Optima Logistic',
    eyebrow: 'Business application',
    description: 'A logistics platform developed during an internship for practical business operations.',
    problem: 'Model logistics workflows in a maintainable web application with a usable operational interface.',
    contribution: 'Full-stack development, backend APIs, database integration, and business application delivery.',
    technologies: ['Next.js', 'Django', 'MySQL', 'Docker', 'Figma'],
    category: 'Full-stack',
  },
  {
    id: 'ai-llm-lab',
    name: 'AI / LLM Projects',
    eyebrow: 'Open-ended lab',
    description: 'An expandable space for experiments with LLMs, RAG, agents, local models, tool calling, and automation.',
    problem: 'Explore the engineering patterns that turn model capability into useful software.',
    contribution: 'Experiments and reusable building blocks across local inference, retrieval, agents, and automation.',
    technologies: ['LLMs', 'RAG', 'AI agents', 'Local models', 'Tool calling', 'Automation'],
    category: 'AI / ML',
  },
  {
    id: 'ai-insurance-agent',
    name: 'AI Insurance Agent',
    eyebrow: 'RAG-powered agent',
    description: 'A context-aware agent for personalized insurance policy recommendations.',
    problem: 'Make policy questions easier to resolve by combining semantic retrieval with LLM reasoning.',
    contribution: 'RAG pipeline, embeddings, vector search, and multi-turn agent behavior.',
    technologies: ['Python', 'RAG', 'NLP', 'LLMs', 'Vector search'],
    category: 'AI / ML',
  },
  {
    id: 'cloud-architecture',
    name: '3-Tier Cloud Architecture & Container Migration',
    eyebrow: 'AWS infrastructure',
    description: 'A highly available AWS architecture for moving a monolithic deployment toward containerized services.',
    problem: 'Create a more resilient deployment foundation with clear boundaries for compute, persistence, caching, and delivery.',
    contribution: 'Multi-AZ architecture, ECS container migration, RDS, S3, CloudFront, and infrastructure decisions.',
    technologies: ['AWS', 'VPC', 'ECS', 'RDS', 'S3', 'CloudFront', 'Docker', 'Cloudflare'],
    category: 'Cloud / DevOps',
  },
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform',
    eyebrow: 'Full-stack product',
    description: 'A Dockerized e-commerce platform with authentication, cart, payment integration, and a large product catalog.',
    problem: 'Bring core shopping flows and repeatable delivery into one maintainable application.',
    contribution: 'MERN application development, Dockerized services, and GitHub Actions CI/CD.',
    technologies: ['MERN stack', 'Docker', 'GitHub Actions', 'Payments'],
    category: 'Full-stack',
  },
];

export const skillGroups = [
  { label: 'Languages', index: '01', items: ['Java', 'C++', 'C', 'C#', 'Python', 'JavaScript', 'TypeScript'] },
  { label: 'Frontend', index: '02', items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Flutter'] },
  { label: 'Backend & APIs', index: '03', items: ['Node.js', 'NestJS', 'Express.js', 'Django', 'Spring Boot', '.NET', 'REST APIs', 'Microservices', 'RabbitMQ', 'Kafka'] },
  { label: 'AI / ML', index: '04', items: ['PyTorch', 'Scikit-learn', 'NLP', 'LLMs', 'RAG', 'YOLO', 'Ollama'] },
  { label: 'Data', index: '05', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'OpenSearch', 'Hadoop', 'Spark'] },
  { label: 'Cloud / DevOps', index: '06', items: ['AWS', 'Docker', 'Kubernetes', 'Docker Swarm', 'Linux', 'GitHub Actions', 'CI/CD'] },
];

export const experiences = [
  {
    period: '2026',
    company: 'Attijari Bank Tunisia',
    role: 'Software Engineering / AI Internship',
    focus: ['OCR', 'NLP', 'LLM-based document processing', 'Backend development', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    period: '2025',
    company: 'Optima Junior Entreprise / Optima Logistic',
    role: 'Software Engineering Internship',
    focus: ['Next.js', 'Django', 'MySQL', 'Business applications', 'Full-stack development'],
  },
  {
    period: '2024',
    company: 'Digital Research Center, Sfax',
    role: 'Research Internship — Distributed Systems',
    focus: ['C', 'Lamport clocks', 'Token ring', 'Leader election', 'Consensus', 'Fault tolerance'],
  },
];

export const buildTracks = [
  { title: 'AI Agents & LLM applications', status: 'Building', note: 'Turning model capabilities into useful workflows.' },
  { title: 'Cloud & DevOps', status: 'Learning', note: 'Making systems easier to ship, run, and reason about.' },
  { title: 'Full-stack architecture', status: 'Building', note: 'Designing product flows, APIs, and data systems with production in mind.' },
  { title: 'Open-source developer tools', status: 'Exploring', note: 'Small tools that make the next build better.' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Advanced' },
  { name: 'English', level: 'Advanced' },
  { name: 'Spanish', level: 'Basic' },
];