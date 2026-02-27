const questions = [

/* ================================
1. OCI Autonomous Database (1–40)
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
  question: "A developer wants to query data using SQL tools like SQL Developer. Is this supported?",
  options: [
    "No",
    "Yes",
    "Only CLI",
    "Only API"
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
  question: "Which OCI service hosts Autonomous Database?",
  options: [
    "Compute",
    "Database Service",
    "Storage Gateway",
    "VCN"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "A company wants a highly available database without manual configuration. What feature helps?",
  options: [
    "Manual clustering",
    "Built-in high availability",
    "Single instance",
    "Local storage"
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
  question: "A startup wants to start small and increase resources later. What feature supports this?",
  options: [
    "Auto scaling",
    "Manual provisioning",
    "Fixed capacity",
    "Static compute"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which database version is used in Autonomous Database?",
  options: [
    "Oracle Database",
    "MySQL only",
    "PostgreSQL only",
    "MongoDB"
  ],
  answer: 0
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
  question: "Which security feature isolates workloads?",
  options: [
    "Database roles and policies",
    "Load balancer",
    "Subnet only",
    "Object storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which capability allows data import easily?",
  options: [
    "Data Load tool",
    "Manual upload",
    "FTP server",
    "DNS"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "A company wants minimal downtime for updates. What feature ensures this?",
  options: [
    "Automatic patching",
    "Manual maintenance",
    "Single node",
    "Static updates"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which component manages database users and roles?",
  options: [
    "Database security features",
    "VCN",
    "Subnet",
    "Gateway"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What is used to secure client connections?",
  options: [
    "TLS encryption",
    "FTP",
    "HTTP",
    "DNS"
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
  question: "Which feature protects database from unauthorized access?",
  options: [
    "Built-in security controls",
    "Public access",
    "Open ports",
    "No authentication"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database reduces operational overhead mainly through?",
  options: [
    "Automation",
    "Manual tasks",
    "External scripts",
    "Third-party tools"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which method allows developers to integrate apps with Autonomous Database?",
  options: [
    "Database APIs and drivers",
    "FTP",
    "DNS",
    "NAT"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "A BI team wants fast analytics queries. Which Autonomous option should they choose?",
  options: [
    "ATP",
    "ADW",
    "Compute",
    "Storage"
  ],
  answer: 1
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
  question: "Which component manages schema and tables?",
  options: [
    "Database engine",
    "VCN",
    "Subnet",
    "Gateway"
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

/* ================================
2. AI Fundamentals (41–90)
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
  topic: "UI Integration",
  question: "What does VBCS stand for?",
  options: [
    "Visual Builder Cloud Service",
    "Virtual Business Cloud Server",
    "Visual Backend Compute Service",
    "Virtual Builder Compute Stack"
  ],
  answer: 0
}

];
