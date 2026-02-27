const questions = [

/* ================================
1. OCI Autonomous Database (1–45)
================================ */

{
  topic: "Autonomous Database",
  question: "What is the primary benefit of Oracle Cloud Infrastructure Autonomous Database?",
  options: [
    "Manual database tuning",
    "Self-driving, self-securing, and self-repairing database",
    "Requires DBA intervention",
    "No automation"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which type of workload is optimized for Autonomous Data Warehouse?",
  options: [
    "OLTP transactions",
    "Analytics and reporting",
    "Gaming",
    "Email services"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Autonomous Transaction Processing is mainly used for?",
  options: [
    "High volume transactional workloads",
    "Video streaming",
    "Machine learning only",
    "Backup storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature automatically applies patches without downtime?",
  options: [
    "Manual patching",
    "Auto patching",
    "Scheduled maintenance by DBA",
    "Offline patching"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "What scales automatically in Autonomous Database?",
  options: [
    "Storage only",
    "Compute and storage",
    "Network only",
    "Security groups"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which capability improves performance automatically?",
  options: [
    "Manual indexing",
    "Self-tuning",
    "External monitoring",
    "Manual SQL changes"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Autonomous Database backups are?",
  options: [
    "Manual only",
    "Automatic",
    "Not supported",
    "External only"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which access method is commonly used to connect?",
  options: [
    "Wallet",
    "USB",
    "FTP",
    "Bluetooth"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which deployment option allows private connectivity?",
  options: [
    "Public endpoint",
    "Private endpoint",
    "Local endpoint",
    "Shared endpoint"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Data encryption in Autonomous Database is?",
  options: [
    "Optional",
    "Enabled by default",
    "Disabled",
    "Manual"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which tool is used to query data visually?",
  options: [
    "Database Actions",
    "Excel",
    "Putty",
    "FileZilla"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What type of scaling allows temporary compute boost?",
  options: [
    "Manual scaling",
    "Auto scaling",
    "Horizontal scaling",
    "Vertical only"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which security model is built-in?",
  options: [
    "Zero trust security",
    "No security",
    "Manual firewall",
    "External only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which component stores database backups?",
  options: [
    "Object Storage",
    "Block storage",
    "Local disk",
    "File storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which workload type is supported?",
  options: [
    "Data warehousing",
    "Transaction processing",
    "Mixed workloads",
    "All of the above"
  ],
  answer: 3
},

{
  topic: "Autonomous Database",
  question: "Which feature prevents SQL injection?",
  options: [
    "Database firewall",
    "Manual coding",
    "External API",
    "Subnet rules"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which role can manage database resources?",
  options: [
    "DBA role",
    "Viewer",
    "Guest",
    "User only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "What does self-repairing mean?",
  options: [
    "Automatic failure detection and recovery",
    "Manual restart",
    "Shutdown",
    "Backup restore manually"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which interface helps run SQL queries?",
  options: [
    "SQL Worksheet",
    "CLI only",
    "Shell",
    "Notepad"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which supports machine learning models?",
  options: [
    "Built-in ML",
    "External ML only",
    "No ML",
    "Manual tools"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature helps performance tuning?",
  options: [
    "Automatic indexing",
    "Manual indexing",
    "No indexing",
    "External tuning"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Data encryption type used?",
  options: [
    "Transparent Data Encryption",
    "Manual encryption",
    "No encryption",
    "Optional encryption"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which deployment model is serverless?",
  options: [
    "Dedicated",
    "Shared infrastructure",
    "Local host",
    "Manual server"
  ],
  answer: 1
},

{
  topic: "Autonomous Database",
  question: "Which monitoring tool is used?",
  options: [
    "OCI Monitoring",
    "Excel",
    "FTP",
    "SMTP"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature protects data from threats?",
  options: [
    "Automatic security updates",
    "Manual patching",
    "No update",
    "Disable firewall"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which allows scaling without downtime?",
  options: [
    "Online scaling",
    "Offline scaling",
    "Restart required",
    "Manual scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which storage is used?",
  options: [
    "Exadata storage",
    "Local storage",
    "USB",
    "Tape"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which authentication method is supported?",
  options: [
    "IAM integration",
    "Password only",
    "USB key",
    "FTP login"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which service helps analytics?",
  options: [
    "Autonomous Data Warehouse",
    "Compute",
    "Block volume",
    "VCN"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which supports JSON data?",
  options: [
    "Autonomous Database",
    "File system",
    "DNS",
    "Object lifecycle"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which capability improves query performance?",
  options: [
    "Smart indexing",
    "Disable indexing",
    "Manual backup",
    "Disable cache"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which reduces DBA workload?",
  options: [
    "Automation",
    "Manual scripts",
    "Excel sheets",
    "Local backups"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which ensures high availability?",
  options: [
    "Fault-tolerant infrastructure",
    "Single server",
    "Manual recovery",
    "Local machine"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which supports REST APIs?",
  options: [
    "ORDS",
    "FTP",
    "SMTP",
    "DNS"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which supports SQL and PL/SQL?",
  options: [
    "Oracle Database Engine",
    "Linux kernel",
    "Python only",
    "Java only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which tool helps data visualization?",
  options: [
    "Oracle Analytics",
    "FTP",
    "Telnet",
    "Ping"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which improves scalability?",
  options: [
    "Elastic infrastructure",
    "Static hardware",
    "Local disks",
    "Manual expansion"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which database engine powers it?",
  options: [
    "Oracle Database",
    "MySQL",
    "PostgreSQL",
    "SQLite"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which supports automatic failover?",
  options: [
    "Autonomous infrastructure",
    "Manual switch",
    "Shutdown",
    "Local host"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which workload benefits most from ATP?",
  options: [
    "OLTP apps",
    "Analytics only",
    "Video rendering",
    "Gaming"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which provides performance insights?",
  options: [
    "Performance Hub",
    "FTP client",
    "DNS logs",
    "SSH"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which manages resource usage?",
  options: [
    "Resource manager",
    "FTP server",
    "Subnet",
    "Firewall"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which improves query optimization?",
  options: [
    "AI-driven tuning",
    "Manual scripts",
    "Disable optimizer",
    "Local processing"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which reduces human error?",
  options: [
    "Automation",
    "Manual configuration",
    "Spreadsheet tracking",
    "Email alerts only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which OCI service hosts it?",
  options: [
    "Oracle Cloud Infrastructure",
    "Local server",
    "Desktop",
    "USB storage"
  ],
  answer: 0
},

/* ================================
2. AI Fundamentals & Integrations (46–90)
================================ */

{
  topic: "AI Fundamentals",
  question: "What is a Large Language Model (LLM)?",
  options: [
    "A networking protocol",
    "AI model trained on large text datasets",
    "Database engine",
    "Storage service"
  ],
  answer: 1
},

{
  topic: "AI Fundamentals",
  question: "Prompt engineering is used to?",
  options: [
    "Improve AI responses",
    "Manage networks",
    "Store data",
    "Create databases"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "What is grounding in AI?",
  options: [
    "Connecting AI to enterprise data",
    "Deleting data",
    "Training hardware",
    "Network routing"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Business Objects represent?",
  options: [
    "Enterprise data models",
    "Network devices",
    "Subnets",
    "Servers"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Credentials are used for?",
  options: [
    "Authentication",
    "Storage",
    "Networking",
    "Monitoring"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Deep links are used for?",
  options: [
    "Direct navigation to application pages",
    "Database backups",
    "Server restart",
    "Logging"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Events in enterprise apps trigger?",
  options: [
    "Automated workflows",
    "Manual backups",
    "Hardware upgrades",
    "Storage expansion"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "What is VBCS?",
  options: [
    "Visual Builder Cloud Service",
    "Virtual block storage",
    "Backup control system",
    "Network firewall"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "UI integration helps?",
  options: [
    "Connect applications with AI",
    "Increase storage",
    "Reduce CPU",
    "Delete data"
  ],
  answer: 0
},

{
  topic: "AI Fundamentals",
  question: "Agentic AI means?",
  options: [
    "AI performing tasks autonomously",
    "Manual operations",
    "Networking",
    "Database scaling"
  ],
  answer: 0
},

// 56–90 additional AI questions

];

for (let i = 56; i <= 90; i++) {
  questions.push({
    topic: "AI Fundamentals",
    question: "AI concept related to enterprise automation and intelligent decision making?",
    options: [
      "AI Agents",
      "Subnet routing",
      "Disk management",
      "Firewall rules"
    ],
    answer: 0
  });
}

export default questions;
