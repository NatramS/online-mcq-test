const questions = [

/* ================================
1. Autonomous Database Basics (1–10)
================================ */

{
  topic: "Autonomous Database Basics",
  question: "What is Oracle Autonomous Database in Oracle Cloud Infrastructure?",
  options: [
    "A manually managed database service",
    "A self-driving, self-securing, and self-repairing database service",
    "A storage service",
    "A networking service"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Basics",
  question: "Which feature automatically tunes queries and indexes in Autonomous Database?",
  options: [
    "Manual DBA tuning",
    "Self-tuning capability",
    "VCN optimization",
    "Compute scaling"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Basics",
  question: "Which type of workload is Autonomous Transaction Processing (ATP) mainly designed for?",
  options: [
    "OLTP applications",
    "Data warehousing",
    "Backup storage",
    "File management"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Basics",
  question: "Which Autonomous Database type is optimized for analytics and reporting?",
  options: [
    "ATP",
    "ADW",
    "Block Storage",
    "Object Storage"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Basics",
  question: "A company wants automatic patching without downtime. What feature provides this?",
  options: [
    "Manual upgrade",
    "Autonomous patching",
    "Backup policy",
    "Compute scaling"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Basics",
  question: "What is a key benefit of Autonomous Database?",
  options: [
    "Requires full-time DBA management",
    "Manual scaling only",
    "Automated operations and reduced administration",
    "No security features"
  ],
  answer: 2
},

{
  topic: "Autonomous Database Basics",
  question: "Autonomous Database runs on which infrastructure in OCI?",
  options: [
    "Exadata infrastructure",
    "Block storage servers",
    "Object storage cluster",
    "Compute instances only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Basics",
  question: "Which feature protects data automatically in Autonomous Database?",
  options: [
    "Automatic encryption",
    "Manual encryption",
    "Optional encryption",
    "No encryption"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Basics",
  question: "A startup wants a database that manages backups automatically. Which service should they use?",
  options: [
    "Compute DB",
    "Autonomous Database",
    "Manual Oracle DB",
    "File storage DB"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Basics",
  question: "Which database operations are automated in Autonomous Database?",
  options: [
    "Patching, backup, tuning",
    "Only storage",
    "Only networking",
    "Only monitoring"
  ],
  answer: 0
},

/* ================================
2. Deployment & Connectivity (11–20)
================================ */

{
  topic: "Autonomous Database Deployment",
  question: "Before creating an Autonomous Database, what must be selected first?",
  options: [
    "Compartment",
    "Block volume",
    "Load balancer",
    "DNS zone"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "Which network access option allows secure private connectivity to Autonomous Database?",
  options: [
    "Public endpoint only",
    "Private endpoint with VCN",
    "Internet gateway",
    "Object storage"
  ],
  answer: 1
},

{
  topic: "Autonomous Database Deployment",
  question: "A developer wants to connect using SQL Developer. What is required?",
  options: [
    "Wallet file",
    "Block storage",
    "VCN peering",
    "Compute instance"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "Which file contains credentials and connection details for Autonomous DB connection?",
  options: [
    "Wallet",
    "Route table",
    "Security list",
    "API gateway"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "Which protocol is commonly used to connect securely to Autonomous Database?",
  options: [
    "TCP with TLS",
    "FTP",
    "HTTP",
    "SMTP"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "A company wants internal application servers to access Autonomous Database privately. What should be used?",
  options: [
    "Private endpoint",
    "Public internet access",
    "Load balancer",
    "Object storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "What is required to download the Autonomous Database wallet?",
  options: [
    "Database password",
    "Public IP",
    "Subnet",
    "IAM policy only"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "Which tool can be used to manage Autonomous Database through browser?",
  options: [
    "Database Actions",
    "Compute console",
    "Storage explorer",
    "Route manager"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "A DBA wants to connect from an on-premises network securely. What option is recommended?",
  options: [
    "VPN or FastConnect",
    "Public FTP",
    "NAT gateway only",
    "Block volume"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Deployment",
  question: "Which component controls who can create Autonomous Databases?",
  options: [
    "IAM policies",
    "Route tables",
    "VCN",
    "Block volume"
  ],
  answer: 0
},

/* ================================
3. Scaling, Backup, and Management (21–30)
================================ */

{
  topic: "Autonomous Database Management",
  question: "A company experiences sudden workload spikes and wants the database to scale automatically. What feature should be enabled?",
  options: [
    "Auto scaling",
    "Manual resize",
    "Storage scaling only",
    "Compute restart"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "Which resource can be scaled independently in Autonomous Database?",
  options: [
    "CPU and storage",
    "Only CPU",
    "Only network",
    "Only subnet"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "Autonomous Database backups are stored where?",
  options: [
    "Object Storage",
    "Block Volume",
    "Local disk",
    "File system"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "What type of backups are automatically performed?",
  options: [
    "Daily automatic backups",
    "Manual backups only",
    "No backups",
    "Weekly manual backups"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "A team wants to restore the database to a previous point in time. What feature helps?",
  options: [
    "Point-in-time recovery",
    "Recreate database",
    "New subnet",
    "VCN cloning"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "Which console feature allows performance monitoring?",
  options: [
    "Database metrics and monitoring",
    "Object lifecycle",
    "Network logs",
    "DNS manager"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "A DBA wants to stop the database to save cost temporarily. What action is possible?",
  options: [
    "Stop and start Autonomous DB",
    "Delete database",
    "Detach storage",
    "Shutdown VCN"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "Which feature improves query performance automatically?",
  options: [
    "Automatic indexing",
    "Manual indexing only",
    "Storage tuning",
    "Network tuning"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "Which dashboard shows SQL performance details?",
  options: [
    "Performance Hub",
    "IAM console",
    "VCN dashboard",
    "Object storage UI"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Management",
  question: "A team wants alerts when database CPU usage is high. What should be configured?",
  options: [
    "Monitoring alarms",
    "VCN logs",
    "Storage rules",
    "Route rules"
  ],
  answer: 0
},

/* ================================
4. Security & Use Cases (31–40)
================================ */

{
  topic: "Autonomous Database Security",
  question: "How is data protected at rest in Autonomous Database?",
  options: [
    "Automatic encryption",
    "Manual encryption",
    "Optional encryption",
    "No encryption"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "Which service manages encryption keys in OCI?",
  options: [
    "OCI Vault",
    "VCN",
    "Block storage",
    "DNS"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "A company wants to restrict access to Autonomous Database only from specific IP addresses. What should be configured?",
  options: [
    "Access control list",
    "Block storage",
    "Object storage rule",
    "Compute scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "Which authentication method can be used for secure database access?",
  options: [
    "Database users and IAM integration",
    "Public login",
    "Anonymous access",
    "Open access"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "A financial company needs secure data analytics with minimal administration. What should they use?",
  options: [
    "Autonomous Data Warehouse",
    "Manual database",
    "File storage",
    "Block storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "A retail application requires fast transaction processing. Which database type is suitable?",
  options: [
    "Autonomous Transaction Processing",
    "Data Warehouse",
    "Archive storage",
    "File storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "Which feature helps detect and fix vulnerabilities automatically?",
  options: [
    "Self-securing capability",
    "Manual patching",
    "VCN firewall",
    "Load balancer"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "Which OCI service helps control who can manage Autonomous Databases?",
  options: [
    "IAM",
    "VCN",
    "DNS",
    "Object storage"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "A company wants to audit database activity. What should be enabled?",
  options: [
    "Database auditing",
    "Object lifecycle",
    "Network route",
    "Storage scaling"
  ],
  answer: 0
},

{
  topic: "Autonomous Database Security",
  question: "What is the main advantage of Autonomous Database for organizations?",
  options: [
    "Reduced operational effort with automation",
    "Manual management required",
    "No scaling support",
    "No security"
  ],
  answer: 0
}

];
