export type ProjectCategory =
  "All" | "AI / ML" | "Full-stack" | "Cloud / DevOps";

export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  category: Exclude<ProjectCategory, "All">;
  architecture?: string;
  details?: string[];
  focus?: string[];
  liveUrl?: string;
  standout?: boolean;
};

export const projects: Project[] = [
  {
    id: "attijari-idp",
    name: "Attijari Bank — Intelligent Document Processing",
    eyebrow: "AI-powered pipeline",
    description:
      "An end-to-end document intelligence pipeline designed to extract structured information from scanned mortgage documents. The system combines OCR, local LLM inference, and structured data processing to transform unstructured PDF documents into reliable JSON and Excel outputs.",
    problem:
      "Turn scanned PDFs into reliable, structured data without sending sensitive documents to a hosted model.",
    contribution:
      "OCR preprocessing, local LLM inference, full-stack service integration, persistence, and the production-oriented system shape.",
    technologies: [
      "Python",
      "Tesseract OCR",
      "Ollama",
      "Qwen3",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    details: [
      "PDF-to-image preprocessing and OCR using Tesseract for French and Arabic documents.",
      "Local LLM inference with Qwen3 for semantic field extraction.",
      "Structured JSON generation with predefined schemas and validation rules.",
      "Extraction of mortgage-related information such as account references, loan amounts, property details, areas, dates, and equipment.",
      "FastAPI backend with PostgreSQL for document tracking and result storage.",
      "Redis-based processing workflow for asynchronous document handling.",
      "Dockerized architecture integrating the API, worker, database, and supporting services.",
    ],
    focus: ["OCR", "LLM", "NLP", "Document AI", "Backend", "Automation"],
    category: "AI / ML",
    architecture:
      "PDF → image preprocessing → OCR → local LLM → structured JSON → database / Excel",
    standout: true,
  },
  {
    id: "agrovalplus",
    name: "Agrovalplus",
    eyebrow: "Full-stack platform",
    description:
      "A full-stack agricultural and business management platform developed around real-world workflows, connecting business operations with a modern web interface.",
    problem:
      "Bring application flows, business data, and payment into one coherent product experience.",
    contribution:
      "Full-stack architecture, React interfaces, Node.js services, MongoDB integration, and payment integration.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Konnect",
      "Git",
    ],
    details: [
      "Developed full-stack features for managing agricultural and business-related workflows.",
      "Designed responsive interfaces for different user interactions and operational needs.",
      "Built REST API endpoints connecting the frontend with backend services.",
      "Implemented database models and business logic for managing application data.",
      "Integrated payment functionality through Konnect.",
      "Worked within a team environment through Optima Junior Entreprise, contributing to the development and delivery of the platform.",
    ],
    focus: [
      "Full-stack Development",
      "REST APIs",
      "Business Applications",
      "Payments",
    ],
    liveUrl: "https://www.agrovalplus.tn/en",
    category: "Full-stack",
  },
  {
    id: "optima-logistic",
    name: "Optima Logistic",
    eyebrow: "Business application",
    description:
      "A logistics management platform developed during an internship to support practical business operations, combining fleet-related workflows, reporting, and employee mobility features.",
    problem:
      "Model logistics workflows in a maintainable web application with a usable operational interface.",
    contribution:
      "Full-stack development, backend APIs, database integration, and business application delivery.",
    technologies: ["Next.js", "Django", "Python", "MySQL", "REST API", "Figma"],
    details: [
      "Developed backend services with Django and REST APIs.",
      "Built a web interface using Next.js for logistics workflows.",
      "Implemented MySQL database models and data management.",
      "Developed a carpooling module connecting employees and mobility requests.",
      "Integrated business data and workflows into a unified platform.",
      "Worked with Figma designs to translate UI concepts into functional interfaces.",
      "Contributed to production-oriented features during a professional internship.",
    ],
    focus: [
      "Full-stack Development",
      "Backend",
      "Business Logic",
      "Logistics",
      "Database Design",
    ],
    liveUrl: "https://www.instafret.com/home",
    category: "Full-stack",
  },
  {
    id: "ai-llm-lab",
    name: "AI / LLM Projects",
    eyebrow: "Open-ended lab",
    description:
      "An evolving collection of experiments exploring how modern AI models can be integrated into practical software systems, from local LLM inference to autonomous agents and retrieval-based applications.",
    problem:
      "Explore the engineering patterns that turn model capability into useful software.",
    contribution:
      "Experiments and reusable building blocks across local inference, retrieval, agents, and automation.",
    technologies: [
      "Python",
      "TypeScript",
      "LLMs",
      "RAG",
      "Ollama",
      "Embeddings",
      "Vector Databases",
      "AI Agents",
    ],
    details: [
      "Built applications around Large Language Models and local model inference.",
      "Experimented with Retrieval-Augmented Generation (RAG).",
      "Designed AI agents capable of using external tools and executing multi-step workflows.",
      "Implemented tool calling and structured model interactions.",
      "Explored local LLM deployment with Ollama.",
      "Experimented with embeddings, vector search, and knowledge retrieval.",
      "Built prototypes around document processing and information extraction.",
      "Explored agent orchestration and workflow-based AI systems.",
      "Tested different approaches for improving reliability, context handling, and structured outputs.",
    ],
    focus: [
      "Generative AI",
      "LLM Applications",
      "RAG",
      "AI Agents",
      "Automation",
    ],
    category: "AI / ML",
  },
  {
    id: "ai-insurance-agent",
    name: "AI Insurance Agent",
    eyebrow: "RAG-powered agent",
    description:
      "A context-aware AI agent designed to assist users in understanding insurance needs and identifying relevant policy options based on their profile, requirements, and available knowledge.",
    problem:
      "Make policy questions easier to resolve by combining semantic retrieval with LLM reasoning.",
    contribution:
      "RAG pipeline, embeddings, vector search, and multi-turn agent behavior.",
    technologies: [
      "Python",
      "LLM",
      "RAG",
      "Embeddings",
      "Vector Database",
      "FastAPI",
    ],
    details: [
      "Conversational agent capable of understanding user requirements and maintaining context across interactions.",
      "Retrieval-Augmented Generation (RAG) pipeline for grounding responses in insurance knowledge.",
      "Document ingestion and semantic retrieval for policy-related information.",
      "Context-aware recommendations based on user-provided constraints.",
      "Structured agent workflow separating retrieval, reasoning, and response generation.",
      "Designed with a focus on reducing hallucinations and keeping responses grounded in available insurance documentation.",
    ],
    focus: ["Generative AI", "RAG", "AI Agents", "NLP", "LLM Applications"],
    category: "AI / ML",
  },
  {
    id: "cloud-architecture",
    name: "3-Tier Cloud Architecture & Container Migration",
    eyebrow: "AWS infrastructure",
    description:
      "A production-oriented AWS architecture designed to demonstrate the migration of a traditional monolithic application toward a scalable, containerized infrastructure.",
    problem:
      "Create a more resilient deployment foundation with clear boundaries for compute, persistence, caching, and delivery.",
    contribution:
      "Multi-AZ architecture, ECS container migration, RDS, S3, CloudFront, and infrastructure decisions.",
    technologies: [
      "AWS",
      "VPC",
      "EC2",
      "Application Load Balancer",
      "RDS",
      "Docker",
      "IAM",
      "CloudWatch",
    ],
    category: "Cloud / DevOps",
    details: [
      "Designed a 3-tier architecture separating the presentation, application, and database layers.",
      "Containerized application services using Docker.",
      "Deployed services on AWS with isolated networking and security boundaries.",
      "Configured load balancing and horizontal scaling for application workloads.",
      "Designed private and public subnets using AWS networking best practices.",
      "Integrated monitoring, health checks, and fault-tolerant infrastructure.",
      "Structured the migration approach to progressively move from a monolithic deployment toward independent services.",
    ],
    focus: [
      "Cloud Architecture",
      "AWS",
      "Docker",
      "Scalability",
      "DevOps",
      "Infrastructure",
    ],
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    eyebrow: "Full-stack product",
    description:
      "A containerized e-commerce platform designed to cover the complete customer journey, from authentication and product discovery to cart management and payment.",
    problem:
      "Bring core shopping flows and repeatable delivery into one maintainable application.",
    contribution:
      "MERN application development, Dockerized services, and GitHub Actions CI/CD.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Payment Integration",
    ],
    details: [
      "Implemented user authentication and account management.",
      "Built product catalog and product detail workflows.",
      "Developed shopping cart and order management.",
      "Integrated payment processing.",
      "Designed backend APIs for products, users, carts, and orders.",
      "Added database persistence for application and transaction data.",
      "Containerized the application and its services using Docker.",
      "Designed the application to handle a large product catalog efficiently.",
    ],
    focus: [
      "Full-stack Development",
      "E-commerce",
      "Authentication",
      "Payments",
      "Docker",
    ],
    liveUrl: "https://forjaw.com/",
    category: "Full-stack",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    index: "01",
    items: ["Java", "C++", "C", "C#", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    index: "02",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Flutter"],
  },
  {
    label: "Backend & APIs",
    index: "03",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Django",
      "Spring Boot",
      ".NET",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "Kafka",
    ],
  },
  {
    label: "AI / ML",
    index: "04",
    items: ["PyTorch", "Scikit-learn", "NLP", "LLMs", "RAG", "YOLO", "Ollama"],
  },
  {
    label: "Data",
    index: "05",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "OpenSearch",
      "Hadoop",
      "Spark",
    ],
  },
  {
    label: "Cloud / DevOps",
    index: "06",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Docker Swarm",
      "Linux",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

export const experiences = [
  {
    period: "Jun 2026 – Aug 2026",
    company: "Attijari Bank, Tunis",
    role: "AI Engineering Intern",
    focus: ["Qwen LLM", "LoRA", "OCR", "Redis", "PostgreSQL", "Async workers"],
    details: [
      "Fine-tuned a Qwen LLM via LoRA on bilingual banking mortgage dossiers to extract structured entities, amounts, and dates, lifting extraction accuracy to ~92%.",
      "Deployed the model into the manual document-review workflow, cutting reviewer time by ~40%.",
      "Orchestrated an end-to-end OCR → LLM → validation pipeline on Redis queues and PostgreSQL with async workers and retry logic, processing 500+ documents/day at ~30% fewer failed jobs.",
    ],
  },
  {
    period: "Jun 2025 – Aug 2025",
    company: "Optima Logistics, Tunis",
    role: "Software Engineering Intern",
    focus: [
      "Django",
      "REST APIs",
      "Digital wallet",
      "MySQL",
      "Query optimization",
    ],
    details: [
      "Shipped a secure digital wallet module in Django with REST APIs, enabling multi-currency transactions for 1,000+ users.",
      "Refactored database schemas and query patterns, cutting average query latency by ~150ms and improving endpoint response times by ~25% under load.",
    ],
  },
  {
    period: "Jul 2024",
    company: "Digital Research Center, Sfax",
    role: "Research Intern — Distributed Systems",
    focus: [
      "C",
      "Lamport clocks",
      "Token ring",
      "Leader election",
      "Consensus",
    ],
    details: [
      "Implemented distributed synchronization algorithms in C, including Lamport clocks, token ring, and leader election, validating correctness on a simulated 20-node cluster across 15+ failure scenarios.",
      "Authored a comparative technical report benchmarking 5 consensus and fault-tolerance algorithms on latency and recovery time.",
    ],
  },
];

export const buildTracks = [
  {
    title: "AI Agents & LLM Systems",
    status: "Building",
    note: "Building tool-using agents, RAG pipelines, and applications around local and hosted LLMs.",
  },
  {
    title: "Cloud & DevOps",
    status: "Learning",
    note: "Deepening my skills in Docker, Kubernetes, AWS, CI/CD, and production-oriented infrastructure.",
  },
  {
    title: "Developer Tools",
    status: "Building",
    note: "Creating reusable libraries and tools that solve practical problems for developers.",
  },
  {
    title: "Distributed & Data Systems",
    status: "Exploring",
    note: "Exploring event-driven architectures, data pipelines, messaging, and distributed systems.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Advanced" },
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Basic" },
];
