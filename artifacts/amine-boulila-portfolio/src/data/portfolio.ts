export type ProjectCategory = 'All' | 'AI / ML' | 'Full-stack' | 'Backend';

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
    contribution: 'OCR preprocessing, local LLM inference, backend APIs, persistence, and the production-oriented system shape.',
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
    category: 'Backend',
  },
];

export const skillGroups = [
  { label: 'Languages', index: '01', items: ['Java', 'C++', 'C', 'C#', 'Python', 'JavaScript', 'TypeScript'] },
  { label: 'Frontend', index: '02', items: ['React', 'Next.js', 'Flutter'] },
  { label: 'Backend', index: '03', items: ['Node.js', 'Django', 'FastAPI', '.NET', 'REST APIs', 'GraphQL'] },
  { label: 'AI / ML', index: '04', items: ['PyTorch', 'Scikit-learn', 'NLP', 'LLMs', 'RAG', 'YOLO', 'Ollama'] },
  { label: 'Data', index: '05', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Hadoop'] },
  { label: 'Cloud / DevOps', index: '06', items: ['AWS', 'Docker', 'Linux', 'Git', 'CI/CD'] },
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
];

export const buildTracks = [
  { title: 'AI Agents & LLM applications', status: 'Building', note: 'Turning model capabilities into useful workflows.' },
  { title: 'Cloud & DevOps', status: 'Learning', note: 'Making systems easier to ship, run, and reason about.' },
  { title: 'Backend architecture', status: 'Building', note: 'Designing APIs and data flows with production in mind.' },
  { title: 'Open-source developer tools', status: 'Exploring', note: 'Small tools that make the next build better.' },
];