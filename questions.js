const questions = [

/* ================================
1. OCI Autonomous Database (1–50)
================================ */

{
  topic: "Autonomous Database",
  question: "What is the primary benefit of Oracle Cloud Autonomous Database?",
  options: [
    "Manual database administration",
    "Self-driving, self-securing, self-repairing database",
    "Only storage service",
    "Networking service"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which task is automatically handled by Autonomous Database?",
  options: [
    "Manual patching",
    "Automatic patching and updates",
    "Manual scaling",
    "Manual backups"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "A company wants automatic database tuning without DBA intervention. What should they use?",
  options: [
    "Compute instance",
    "Autonomous Database",
    "Block Storage",
    "Load Balancer"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which feature allows Autonomous Database to automatically increase or decrease compute resources?",
  options: [
    "Auto Backup",
    "Auto Scaling",
    "Auto Networking",
    "Auto Routing"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Autonomous Transaction Processing (ATP) is best suited for which workload?",
  options: [
    "OLTP applications",
    "Data warehousing",
    "Video streaming",
    "Networking"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Autonomous Data Warehouse (ADW) is mainly designed for which type of workload?",
  options: [
    "Transactional systems",
    "Analytics and reporting",
    "Web hosting",
    "Networking"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which storage type is used by Autonomous Database?",
  options: [
    "Local storage only",
    "Oracle Exadata Storage",
    "File storage",
    "Archive storage"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "A company wants built-in encryption for all database data. What does Autonomous Database provide?",
  options: [
    "Optional encryption",
    "Automatic encryption at rest and in transit",
    "No encryption",
    "Manual encryption"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which feature automatically creates database backups?",
  options: [
    "Auto Backup",
    "Manual Snapshot",
    "Block Volume",
    "VCN Backup"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "How do users connect securely to Autonomous Database?",
  options: [
    "Wallet file",
    "Public IP only",
    "FTP",
    "SSH"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which interface allows running SQL queries directly in the browser?",
  options: [
    "SQL Worksheet",
    "Monitoring",
    "Logging",
    "Vault"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database reduces the need for which role?",
  options: [
    "Network engineer",
    "Database administrator for routine tasks",
    "Developer",
    "Security analyst"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database is built on which infrastructure?",
  options: [
    "Standard VM",
    "Exadata infrastructure",
    "File storage",
    "Archive storage"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "What is required before connecting to Autonomous Database from a client machine?",
  options: [
    "Wallet download",
    "Instance reboot",
    "VCN creation",
    "NSG rule"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which tool helps monitor Autonomous Database performance?",
  options: [
    "OCI Monitoring",
    "FTP",
    "DNS",
    "IAM"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "A company wants to stop database when not in use to save cost. What feature is available?",
  options: [
    "Stop/Start database",
    "Delete instance",
    "Disable storage",
    "Disable networking"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which workload type focuses on analytics queries?",
  options: [
    "ATP",
    "ADW",
    "Compute",
    "Object Storage"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which workload type focuses on transactions?",
  options: [
    "ADW",
    "ATP",
    "Storage",
    "Networking"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which feature protects the database from vulnerabilities automatically?",
  options: [
    "Self-securing",
    "Manual patching",
    "Firewall",
    "VCN rules"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database automatically tunes which component?",
  options: [
    "SQL queries",
    "Internet routing",
    "DNS",
    "Firewall"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which operation helps recover data after accidental deletion?",
  options: [
    "Backup and restore",
    "Reboot",
    "Restart network",
    "Scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which tool helps visualize query performance?",
  options: [
    "Performance Hub",
    "Object storage",
    "Compute",
    "VCN"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature allows scaling without downtime?",
  options: [
    "Online scaling",
    "Manual restart",
    "Reboot",
    "Shutdown"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which service helps monitor alerts for database performance?",
  options: [
    "OCI Alarms",
    "DNS",
    "FTP",
    "Object Storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database is considered a?",
  options: [
    "Fully managed database service",
    "Manual database",
    "Networking service",
    "Storage device"
  ],
  answer: 0
},

/* Additional Autonomous Database Questions (26–50) */

{
  topic: "Autonomous Database",
  question: "Which feature ensures automatic index creation for performance improvement?",
  options: [
    "Automatic Indexing",
    "Manual Indexing",
    "Static Indexing",
    "External Indexing"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What type of scaling adjusts CPU resources automatically?",
  options: [
    "Auto Scaling",
    "Manual Scaling",
    "Static Scaling",
    "Fixed Scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which OCI component secures database credentials?",
  options: [
    "OCI Vault",
    "Object Storage",
    "VCN",
    "Subnet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which connectivity method allows private access to Autonomous Database?",
  options: [
    "Private Endpoint",
    "Public FTP",
    "Direct DNS",
    "Open Internet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature provides continuous database health monitoring?",
  options: [
    "OCI Monitoring",
    "DNS Monitoring",
    "FTP Monitoring",
    "Storage Monitoring"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which component manages database schemas and tables?",
  options: [
    "Database Engine",
    "VCN",
    "Load Balancer",
    "Object Storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What ensures minimal downtime during database maintenance?",
  options: [
    "Automatic patching",
    "Manual patching",
    "Scheduled shutdown",
    "Restart"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature automatically optimizes SQL performance?",
  options: [
    "Self-tuning",
    "Manual tuning",
    "External tuning",
    "Fixed tuning"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which OCI service stores database backups?",
  options: [
    "Object Storage",
    "Block Storage",
    "File Storage",
    "Archive only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which capability allows developers to load data easily?",
  options: [
    "Data Load tool",
    "Manual import",
    "FTP upload",
    "CLI only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature isolates workloads securely?",
  options: [
    "Database roles and policies",
    "Subnet",
    "Load balancer",
    "Compute"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which service provides alert notifications?",
  options: [
    "OCI Notifications",
    "DNS",
    "FTP",
    "Compute"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which operation reduces cost during non-business hours?",
  options: [
    "Stop database",
    "Delete storage",
    "Disable VCN",
    "Remove subnet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which interface allows REST API access?",
  options: [
    "Database APIs",
    "FTP",
    "DNS",
    "SMTP"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which deployment option provides dedicated infrastructure?",
  options: [
    "Dedicated Autonomous Database",
    "Shared only",
    "Local DB",
    "Manual DB"
  ],
  answer: 0
},

/* ================================
2. AI Fundamentals (51–90)
================================ */

{
  topic: "AI Basics",
  question: "What is the main goal of Artificial Intelligence in business applications?",
  options: [
    "Automate decision making and insights",
    "Replace databases",
    "Manage networking",
    "Replace storage"
  ],
  answer: 0
},

{
  topic: "AI Basics",
  question: "Business Objects in AI systems usually represent?",
  options: [
    "Business entities like customers or orders",
    "Network devices",
    "Storage disks",
    "Subnets"
  ],
  answer: 0
},

{
  topic: "AI Basics",
  question: "Which AI technique learns from data patterns?",
  options: [
    "Machine Learning",
    "Networking",
    "Storage scaling",
    "DNS routing"
  ],
  answer: 0
},

{
  topic: "AI Basics",
  question: "AI models require what to improve accuracy?",
  options: [
    "Quality data",
    "Extra servers",
    "Networking devices",
    "Manual routing"
  ],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "AI services should use what for secure authentication?",
  options: [
    "Credentials or tokens",
    "Public passwords",
    "Open access",
    "FTP"
  ],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "What is the purpose of role-based access in AI systems?",
  options: [
    "Control who can access AI features",
    "Increase storage",
    "Improve network",
    "Scale compute"
  ],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "Which service securely stores secrets?",
  options: [
    "Secrets manager",
    "Public storage",
    "DNS",
    "FTP"
  ],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "What helps prevent unauthorized access?",
  options: [
    "Access policies",
    "Open internet",
    "Public login",
    "No authentication"
  ],
  answer: 0
},

{
  topic: "Deep Links",
  question: "What is a deep link in an AI-enabled application?",
  options: [
    "Direct link to a specific application page",
    "Network route",
    "Database link",
    "API key"
  ],
  answer: 0
},

{
  topic: "Events",
  question: "Events in AI applications are used to?",
  options: [
    "Trigger actions automatically",
    "Delete data",
    "Restart servers",
    "Disable apps"
  ],
  answer: 0
},

{
  topic: "Events",
  question: "Event-driven systems respond when?",
  options: [
    "An event occurs",
    "Server stops",
    "Network fails",
    "Database shuts down"
  ],
  answer: 0
},

{
  topic: "Deep Links",
  question: "Deep links improve what in applications?",
  options: [
    "User navigation",
    "Storage size",
    "Network speed",
    "Server uptime"
  ],
  answer: 0
},

{
  topic: "LLM",
  question: "What does LLM stand for?",
  options: [
    "Large Language Model",
    "Local Logic Module",
    "Large Learning Machine",
    "Logical Language Manager"
  ],
  answer: 0
},

{
  topic: "LLM",
  question: "LLMs are commonly used for?",
  options: [
    "Text generation and understanding",
    "Storage replication",
    "Networking routing",
    "Compute scaling"
  ],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Prompt engineering mainly focuses on?",
  options: [
    "Designing effective inputs for AI models",
    "Networking design",
    "Database indexing",
    "Storage optimization"
  ],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Which prompting technique provides examples to the model?",
  options: [
    "Few-shot prompting",
    "No prompting",
    "Static prompting",
    "Manual prompting"
  ],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Which prompting technique uses no examples?",
  options: [
    "Zero-shot prompting",
    "Multi prompting",
    "Complex prompting",
    "Static prompting"
  ],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Hallucination in AI means?",
  options: [
    "Incorrect or fabricated response",
    "Network failure",
    "Server restart",
    "Database crash"
  ],
  answer: 0
},

{
  topic: "UI Integration",
  question: "What does VBCS stand for?",
  options: [
    "Visual Builder Cloud Service",
    "Virtual Business Cloud Server",
    "Visual Backend Compute Service",
    "Virtual Builder Compute Stack"
  ],
  answer: 0
},

{
  topic: "UI Integration",
  question: "VBCS is mainly used for?",
  options: [
    "Building web applications visually",
    "Storage management",
    "Networking",
    "Backup"
  ],
  answer: 0
},

{
  topic: "UI Integration",
  question: "AI chatbots can be embedded in?",
  options: [
    "Web applications",
    "Routers",
    "Switches",
    "Storage disks"
  ],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "What is an AI agent?",
  options: [
    "Software that performs tasks autonomously",
    "Network router",
    "Database engine",
    "Storage device"
  ],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "Multi-agent systems involve?",
  options: [
    "Multiple AI agents collaborating",
    "Multiple networks",
    "Multiple disks",
    "Multiple subnets"
  ],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "AI agents can interact with?",
  options: [
    "APIs and tools",
    "Only storage",
    "Only DNS",
    "Only networking"
  ],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "Advanced AI workflows enable?",
  options: [
    "Automated intelligent decision making",
    "Manual processing",
    "Storage reduction",
    "Network routing"
  ],
  answer: 0
}

];
