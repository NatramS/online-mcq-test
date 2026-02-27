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
  question: "ATP is mainly used for?",
  options: [
    "OLTP workloads",
    "Analytics workloads",
    "File storage",
    "Networking"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "ADW is mainly designed for?",
  options: [
    "Transaction processing",
    "Analytics and data warehousing",
    "DNS services",
    "Email hosting"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database runs on which infrastructure?",
  options: [
    "Standard VM",
    "Exadata infrastructure",
    "Local server",
    "Tape storage"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Which feature allows compute resources to scale automatically?",
  options: [
    "Auto Backup",
    "Auto Scaling",
    "Auto Routing",
    "Auto Storage"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Data encryption in Autonomous Database occurs?",
  options: [
    "Only manually",
    "Automatically at rest and in transit",
    "Only during backup",
    "Not encrypted"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Which component is required for secure DB connection?",
  options: [
    "Wallet",
    "FTP",
    "SMTP",
    "Public login"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which feature creates automatic backups?",
  options: [
    "Auto Backup",
    "Archive logs",
    "Manual export",
    "Snapshot tool"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "SQL queries in browser can be executed using?",
  options: [
    "SQL Worksheet",
    "IAM",
    "DNS",
    "Vault"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Automatic indexing improves?",
  options: [
    "Performance",
    "Networking",
    "DNS",
    "Routing"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database reduces?",
  options: [
    "Operational overhead",
    "Network speed",
    "Storage size",
    "DNS usage"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which OCI service monitors metrics?",
  options: [
    "OCI Monitoring",
    "FTP",
    "IAM",
    "DNS"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database lifecycle state includes?",
  options: [
    "Available",
    "Disconnected",
    "Router",
    "Subnet"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Scaling compute resources happens?",
  options: [
    "Online",
    "Only offline",
    "Never",
    "Manual reboot"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Backups are stored in?",
  options: [
    "Object Storage",
    "Block Storage",
    "Local disk",
    "Tape"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Private connectivity is enabled using?",
  options: [
    "Private endpoint",
    "FTP",
    "SMTP",
    "DNS"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Security updates are applied?",
  options: [
    "Automatically",
    "Manually",
    "Never",
    "Only yearly"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database stop/start helps in?",
  options: [
    "Cost optimization",
    "Networking",
    "Storage",
    "DNS"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB is a?",
  options: [
    "Managed service",
    "Local DB",
    "Manual DB",
    "Standalone DB"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Automatic SQL optimization is done using?",
  options: [
    "Self tuning",
    "Manual tuning",
    "External tool",
    "Static configuration"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Alerts are created using?",
  options: [
    "OCI Alarms",
    "FTP",
    "DNS",
    "SMTP"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Data loading can be done using?",
  options: [
    "Data Load Tool",
    "Only CLI",
    "Only FTP",
    "Manual copy"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Automatic patching improves?",
  options: [
    "Security",
    "Routing",
    "DNS",
    "Subnet"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "SQL Developer connectivity supported?",
  options: [
    "Yes",
    "No",
    "Only CLI",
    "Only API"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Backup retention ensures?",
  options: [
    "Data recovery",
    "Networking",
    "Routing",
    "DNS"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Exadata provides?",
  options: [
    "High performance",
    "Low speed",
    "Manual scaling",
    "No storage"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database automates?",
  options: [
    "Management tasks",
    "Networking",
    "Router setup",
    "DNS config"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which model reduces DBA effort?",
  options: [
    "Automation",
    "Manual process",
    "Scripted",
    "External"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which OCI tool manages secrets?",
  options: [
    "Vault",
    "DNS",
    "FTP",
    "SMTP"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Storage scaling is?",
  options: [
    "Online",
    "Offline only",
    "Manual only",
    "Unavailable"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB provides?",
  options: [
    "High availability",
    "Single instance only",
    "Manual failover",
    "No redundancy"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database compute measured in?",
  options: [
    "OCPU",
    "RAM",
    "Disk",
    "GPU"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Dedicated deployment provides?",
  options: [
    "Isolated infrastructure",
    "Shared only",
    "Public network",
    "Manual install"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database restore uses?",
  options: [
    "Backup",
    "Scaling",
    "DNS",
    "Routing"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Monitoring dashboards show?",
  options: [
    "Performance metrics",
    "Router logs",
    "Disk repair",
    "DNS records"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Automatic tuning affects?",
  options: [
    "SQL performance",
    "Routing",
    "DNS",
    "Firewall"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB helps organizations?",
  options: [
    "Reduce operational effort",
    "Increase manual work",
    "Remove monitoring",
    "Disable backups"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Workload type selected during?",
  options: [
    "Database creation",
    "Deletion",
    "Backup",
    "Migration"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database supports?",
  options: [
    "Analytics and transactions",
    "Only storage",
    "Only networking",
    "Only DNS"
  ],
  answer: 0
},

/* ================================
2. AI Topics (51–90)
================================ */

{
  topic: "AI Basics",
  question: "AI helps organizations by?",
  options: [
    "Automating decisions",
    "Deleting databases",
    "Managing routers",
    "Creating subnets"
  ],
  answer: 0
},
{
  topic: "AI Basics",
  question: "Machine learning means?",
  options: [
    "Learning from data",
    "Networking automation",
    "Disk optimization",
    "Router configuration"
  ],
  answer: 0
},
{
  topic: "AI Basics",
  question: "Business objects represent?",
  options: [
    "Entities like customers or orders",
    "Routers",
    "Switches",
    "Disks"
  ],
  answer: 0
},
{
  topic: "AI Basics",
  question: "AI model accuracy depends on?",
  options: [
    "Quality of data",
    "Router speed",
    "Disk size",
    "Network cables"
  ],
  answer: 0
},
{
  topic: "AI Basics",
  question: "AI models are trained using?",
  options: [
    "Datasets",
    "Subnets",
    "VMs",
    "Gateways"
  ],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "Secure authentication uses?",
  options: [
    "Tokens",
    "Public access",
    "FTP",
    "Anonymous login"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "RBAC stands for?",
  options: [
    "Role Based Access Control",
    "Routing Backup Access Control",
    "Resource Based Archive Control",
    "Remote Backup Access"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "Secrets should be stored in?",
  options: [
    "Secrets manager",
    "Public repository",
    "Email",
    "DNS"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "API security ensures?",
  options: [
    "Authorized access",
    "Public access",
    "Open internet",
    "No authentication"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "Encryption protects?",
  options: [
    "Sensitive data",
    "DNS",
    "Routing",
    "Switch ports"
  ],
  answer: 0
},

{
  topic: "Deep Links",
  question: "Deep links enable?",
  options: [
    "Direct navigation inside apps",
    "Router configuration",
    "Disk mount",
    "Subnet creation"
  ],
  answer: 0
},
{
  topic: "Events",
  question: "Events are used to trigger?",
  options: [
    "Automated workflows",
    "Router resets",
    "Disk deletion",
    "Manual login"
  ],
  answer: 0
},
{
  topic: "Events",
  question: "Webhook is used for?",
  options: [
    "Event notifications",
    "Storage resize",
    "Subnet routing",
    "DNS reset"
  ],
  answer: 0
},
{
  topic: "Deep Links",
  question: "Deep links improve?",
  options: [
    "User experience",
    "Disk speed",
    "Routing",
    "Firewall"
  ],
  answer: 0
},
{
  topic: "Events",
  question: "Event-driven architecture reacts to?",
  options: [
    "Events",
    "Subnets",
    "VM reboots",
    "Router failures"
  ],
  answer: 0
},

{
  topic: "LLM",
  question: "LLM stands for?",
  options: [
    "Large Language Model",
    "Local Logic Manager",
    "Learning Layer Module",
    "Large Learning Machine"
  ],
  answer: 0
},
{
  topic: "LLM",
  question: "LLMs process?",
  options: [
    "Natural language",
    "Routing tables",
    "Disk blocks",
    "Firewall rules"
  ],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Prompt engineering improves?",
  options: [
    "AI responses",
    "Networking",
    "Storage",
    "Firewall"
  ],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Few-shot prompting uses?",
  options: [
    "Examples",
    "Routers",
    "Switches",
    "Subnets"
  ],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Zero-shot prompting uses?",
  options: [
    "No examples",
    "Many examples",
    "Routers",
    "VM templates"
  ],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Hallucination in AI means?",
  options: [
    "Incorrect output generated by AI",
    "Router crash",
    "Disk failure",
    "DNS issue"
  ],
  answer: 0
},
{
  topic: "LLM",
  question: "RAG stands for?",
  options: [
    "Retrieval Augmented Generation",
    "Rapid AI Gateway",
    "Routing AI Group",
    "Remote AI Generator"
  ],
  answer: 0
},
{
  topic: "UI Integration",
  question: "VBCS stands for?",
  options: [
    "Visual Builder Cloud Service",
    "Virtual Backend Cloud",
    "Visual Business Compute",
    "Virtual Builder Service"
  ],
  answer: 0
},
{
  topic: "UI Integration",
  question: "VBCS helps build?",
  options: [
    "Web applications visually",
    "Routers",
    "Disks",
    "Gateways"
  ],
  answer: 0
},
{
  topic: "UI Integration",
  question: "AI chatbots integrate into?",
  options: [
    "Applications",
    "Routers",
    "Switches",
    "Storage"
  ],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "AI agent is?",
  options: [
    "Autonomous software component",
    "Router",
    "Disk",
    "Subnet"
  ],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Multi-agent systems mean?",
  options: [
    "Multiple agents working together",
    "Multiple routers",
    "Multiple disks",
    "Multiple VMs"
  ],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Agents interact with?",
  options: [
    "Tools and APIs",
    "Routers",
    "Disks",
    "DNS"
  ],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Agent workflows enable?",
  options: [
    "Automation",
    "Manual work",
    "Networking",
    "Routing"
  ],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Tool-using agents can?",
  options: [
    "Call external systems",
    "Only respond",
    "Only store",
    "Only route"
  ],
  answer: 0
}
/* ================================
3. Additional Questions (91–110)
================================ */

{
  topic: "Autonomous Database",
  question: "Autonomous Database eliminates the need for?",
  options: [
    "Manual database management",
    "Internet access",
    "Applications",
    "Users"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which feature helps detect performance issues automatically?",
  options: [
    "Automatic monitoring",
    "Manual scripts",
    "FTP logs",
    "Email alerts only"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which option allows scaling CPU during workload spikes?",
  options: [
    "Auto Scaling",
    "Auto Backup",
    "Auto Networking",
    "Auto DNS"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database supports connection through?",
  options: [
    "Secure TLS connection",
    "Telnet",
    "FTP",
    "SMTP"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database cloning is useful for?",
  options: [
    "Testing and development",
    "Deleting data",
    "Networking setup",
    "DNS configuration"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which feature protects against failures?",
  options: [
    "High availability architecture",
    "Manual failover",
    "Single node setup",
    "Local backups only"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which OCI service integrates with Autonomous Database for alerts?",
  options: [
    "Notifications service",
    "DNS service",
    "Email server",
    "FTP service"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Workload management ensures?",
  options: [
    "Efficient resource allocation",
    "Router configuration",
    "Disk formatting",
    "Subnet routing"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database simplifies?",
  options: [
    "Database administration",
    "Hardware assembly",
    "Network cabling",
    "Disk manufacturing"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which tool helps visualize database performance?",
  options: [
    "Performance Hub",
    "Router dashboard",
    "DNS monitor",
    "Storage logs"
  ],
  answer: 0
},

{
  topic: "AI Basics",
  question: "AI systems analyze?",
  options: [
    "Large amounts of data",
    "Only networking traffic",
    "Only DNS queries",
    "Disk partitions"
  ],
  answer: 0
},
{
  topic: "AI Basics",
  question: "Predictive analytics uses?",
  options: [
    "Machine learning models",
    "Routers",
    "Subnets",
    "Switches"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "API keys should be?",
  options: [
    "Stored securely",
    "Shared publicly",
    "Posted in code repositories",
    "Sent through email"
  ],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "Access policies help?",
  options: [
    "Control user permissions",
    "Increase disk size",
    "Configure routers",
    "Restart VMs"
  ],
  answer: 0
},
{
  topic: "Deep Links",
  question: "Deep links can open?",
  options: [
    "Specific app pages",
    "Routers",
    "Databases directly",
    "VM consoles"
  ],
  answer: 0
},
{
  topic: "Events",
  question: "Event notifications can trigger?",
  options: [
    "Serverless functions",
    "Disk formatting",
    "Manual login",
    "Network shutdown"
  ],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Clear prompts help models?",
  options: [
    "Generate accurate responses",
    "Increase storage",
    "Configure routers",
    "Reduce networking"
  ],
  answer: 0
},
{
  topic: "LLM",
  question: "LLMs are commonly used for?",
  options: [
    "Chatbots and text generation",
    "Disk management",
    "Router firmware",
    "Subnet allocation"
  ],
  answer: 0
},
{
  topic: "UI Integration",
  question: "AI integration in UI improves?",
  options: [
    "User interaction",
    "Disk performance",
    "Routing tables",
    "DNS latency"
  ],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "AI agents can automate?",
  options: [
    "Business workflows",
    "Router hardware",
    "Disk production",
    "Network cables"
  ],
  answer: 0
}
];
