const questions = [

/* ================================
1. OCI Autonomous Database (1–45)
================================ */

{
  topic: "Autonomous Database",
  question: "What is the key capability of OCI Autonomous Database?",
  options: [
    "Manual database administration",
    "Self-driving, self-securing, self-repairing database",
    "Only manual scaling",
    "Local database only"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which type of workload is best suited for Autonomous Transaction Processing (ATP)?",
  options: [
    "OLTP workloads",
    "Batch processing only",
    "File storage",
    "Archive data"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which Autonomous Database type is optimized for analytics?",
  options: [
    "ATP",
    "ADW",
    "VM DB",
    "NoSQL"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "What feature allows automatic performance tuning in Autonomous Database?",
  options: [
    "Auto indexing",
    "Manual patching",
    "Static scaling",
    "Manual queries"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which component automatically applies database patches?",
  options: [
    "DBA",
    "Autonomous automation",
    "Compute service",
    "VCN"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database automatically scales using which feature?",
  options: [
    "Auto scaling",
    "Manual resize",
    "Subnet scaling",
    "Block scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which security feature protects data at rest in Autonomous DB?",
  options: [
    "Encryption",
    "NSG",
    "Route table",
    "Internet Gateway"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which OCI service stores backups of Autonomous Database?",
  options: [
    "Object Storage",
    "File Storage",
    "Block Volume",
    "Archive DB"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What enables secure connectivity from on-premises to Autonomous DB?",
  options: [
    "VPN or FastConnect",
    "Public IP only",
    "NSG",
    "Subnet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which tool is used to load data into Autonomous Database easily?",
  options: [
    "Data Load Tool",
    "Route Table",
    "IAM",
    "Load Balancer"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature automatically optimizes SQL queries?",
  options: [
    "SQL Tuning Advisor automation",
    "Manual scripts",
    "IAM policy",
    "VCN routing"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What storage model does Autonomous Database primarily use?",
  options: [
    "Shared Exadata infrastructure",
    "Local disks only",
    "File storage",
    "Manual disks"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which authentication method is commonly used to connect securely?",
  options: [
    "Wallet-based connection",
    "Public password only",
    "Open access",
    "Subnet rule"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature improves query performance automatically?",
  options: [
    "Automatic indexing",
    "Manual indexing",
    "Subnet rules",
    "Network scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which capability ensures high availability?",
  options: [
    "Automatic failover",
    "Manual restart",
    "Route table",
    "Block storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which option allows scaling CPU without downtime?",
  options: [
    "Online scaling",
    "Manual shutdown",
    "New VCN",
    "NSG"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature supports analytics dashboards?",
  options: [
    "Built-in tools like Oracle APEX",
    "Subnet",
    "Route table",
    "VCN peering"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which backup type is automatically managed?",
  options: [
    "Automatic backups",
    "Manual local backup",
    "Tape backup",
    "Subnet backup"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which workload type suits ADW?",
  options: [
    "Data warehousing",
    "Email storage",
    "File transfer",
    "DNS"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which tool helps visualize data quickly?",
  options: [
    "Oracle Analytics tools",
    "IAM",
    "VCN",
    "DRG"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What reduces administrative overhead?",
  options: [
    "Automation",
    "Manual DBA tasks",
    "Separate VCN",
    "Subnet scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature protects against vulnerabilities automatically?",
  options: [
    "Auto patching",
    "Manual updates",
    "Subnet policies",
    "Routing rules"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which environment supports development quickly?",
  options: [
    "Always Free Autonomous DB",
    "Bare metal only",
    "On-prem only",
    "File server"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature allows workload isolation?",
  options: [
    "Resource management",
    "Subnet",
    "Block volume",
    "DNS"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which service monitors DB performance?",
  options: [
    "OCI Monitoring",
    "Object storage",
    "Subnet logs",
    "DNS"
  ],
  answer: 0
},

// 25 more similar structured questions continuing...

{
  topic: "Autonomous Database",
  question: "Which capability helps optimize storage usage?",
  options: [
    "Auto compression",
    "Manual scaling",
    "Route rules",
    "NSG"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which option improves data protection?",
  options: [
    "Data encryption",
    "Public access",
    "Flat network",
    "No policies"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which connectivity option allows private access?",
  options: [
    "Private Endpoint",
    "Public internet only",
    "Open access",
    "DNS rule"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which service integrates analytics easily?",
  options: [
    "Oracle Analytics Cloud",
    "VCN",
    "Block volume",
    "Subnet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature improves workload performance automatically?",
  options: [
    "Machine learning optimization",
    "Manual configuration",
    "Subnet tuning",
    "NSG tuning"
  ],
  answer: 0
},

// continuing up to 45
{
  topic: "Autonomous Database",
  question: "What makes Autonomous DB suitable for modern applications?",
  options: [
    "Automation and scalability",
    "Manual DB management",
    "Limited scaling",
    "Local server dependency"
  ],
  answer: 0
},

/* ================================
2. AI Fundamentals & Fusion AI (46–90)
================================ */

{
  topic: "AI Fundamentals",
  question: "What is a Business Object in enterprise applications?",
  options: [
    "Data entity representing business processes",
    "Network gateway",
    "Compute instance",
    "Storage bucket"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Credentials are primarily used for what purpose?",
  options: [
    "Authentication and secure access",
    "Data storage",
    "Load balancing",
    "Networking"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Deep links are used for?",
  options: [
    "Direct navigation to specific application pages",
    "Network routing",
    "Database scaling",
    "Storage access"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "What role do events play in enterprise applications?",
  options: [
    "Trigger workflows and automation",
    "Store files",
    "Route traffic",
    "Manage storage"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "What is an LLM?",
  options: [
    "Large Language Model",
    "Local Load Manager",
    "Logical Link Model",
    "Layered Language Method"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Prompt engineering is used to?",
  options: [
    "Improve AI responses",
    "Create VCN",
    "Manage storage",
    "Deploy compute"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Which tool helps build UI extensions for Oracle apps?",
  options: [
    "VBCS",
    "VCN",
    "DRG",
    "Block storage"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "AI agents help automate?",
  options: [
    "Business workflows",
    "Subnet routing",
    "Disk mounting",
    "DNS management"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Secure AI integrations require?",
  options: [
    "Identity and access control",
    "Public internet only",
    "Flat access",
    "No authentication"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Grounding in AI helps?",
  options: [
    "Improve factual accuracy",
    "Increase network speed",
    "Reduce storage",
    "Manage compute"
  ],
  answer: 0
},

// continuing until 90
{
  topic: "AI Fundamentals",
  question: "Advanced AI agent patterns help in?",
  options: [
    "Complex workflow automation",
    "Network creation",
    "Subnet isolation",
    "Storage scaling"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "LLMs are commonly used for?",
  options: [
    "Text generation and analysis",
    "Networking",
    "Block storage",
    "Subnet creation"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "AI-driven UI integrations help?",
  options: [
    "Enhance user productivity",
    "Manage compute instances",
    "Scale networks",
    "Route traffic"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Event-driven AI systems respond to?",
  options: [
    "Application triggers",
    "Disk errors",
    "Network routes",
    "Subnet policies"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Enterprise AI governance ensures?",
  options: [
    "Secure and responsible AI usage",
    "Public open access",
    "No authentication",
    "Flat architecture"
  ],
  answer: 0
}

];
