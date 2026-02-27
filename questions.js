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
  question: "Which feature allows compute resources to scale automatically?",
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
  question: "ATP is mainly used for?",
  options: [
    "OLTP workloads",
    "Analytics",
    "Streaming",
    "Networking"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "ADW is mainly used for?",
  options: [
    "Transactions",
    "Analytics workloads",
    "Email servers",
    "Networking"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database runs on which infrastructure?",
  options: [
    "Standard VM",
    "Exadata",
    "Local disk",
    "Tape storage"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Data in Autonomous Database is encrypted?",
  options: [
    "Manually",
    "Automatically at rest and transit",
    "Not encrypted",
    "Optional only"
  ],
  answer: 1
},
{
  topic: "Autonomous Database",
  question: "Which feature creates backups automatically?",
  options: [
    "Auto Backup",
    "Snapshot",
    "Manual export",
    "Archive tool"
  ],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Secure connection requires?",
  options: [
    "Wallet",
    "FTP",
    "Public login",
    "Telnet"
  ],
  answer: 0
},

/* 11–50 */

{
  topic: "Autonomous Database",
  question: "Which tool allows SQL queries in browser?",
  options: ["SQL Worksheet","Monitoring","Logging","Vault"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Automatic indexing improves?",
  options: ["Performance","Storage","Network","Security"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous Database reduces operational?",
  options: ["Automation overhead","Networking","Storage","DNS"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which service monitors metrics?",
  options: ["OCI Monitoring","FTP","IAM","DNS"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database lifecycle state includes?",
  options: ["Available","Broken","Networked","Detached"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Scaling compute happens?",
  options: ["Online","Offline only","Never","Manual reboot"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Backups stored in?",
  options: ["Object Storage","Block Storage","Local Disk","Tape"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which interface allows REST access?",
  options: ["API","FTP","SMTP","DNS"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Security updates applied?",
  options: ["Automatically","Manually","Never","Quarterly manual"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database workload isolation handled by?",
  options: ["Roles and policies","Subnet","VCN","Gateway"],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature optimizes SQL automatically?",
  options: ["Self tuning","Manual tuning","External tuning","Static tuning"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Private connectivity uses?",
  options: ["Private endpoint","FTP","Public DNS","SMTP"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database stop/start helps?",
  options: ["Cost saving","Security","Networking","Storage"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB belongs to?",
  options: ["Managed service","Local DB","Manual DB","Standalone DB"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which component manages tables?",
  options: ["Database engine","Subnet","VCN","Load balancer"],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Alerts are generated using?",
  options: ["OCI Alarms","DNS","FTP","IAM"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Data loading can be done using?",
  options: ["Data Load Tool","FTP only","CLI only","Manual import"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Automatic patching improves?",
  options: ["Security","Network","Storage","Bandwidth"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Schema management done by?",
  options: ["Database","VCN","Gateway","Subnet"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "SQL Developer can connect?",
  options: ["Yes","No","Only CLI","Only API"],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Automatic tuning affects?",
  options: ["SQL performance","DNS","Networking","Storage"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Backup retention ensures?",
  options: ["Data recovery","Network speed","Scaling","Routing"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Exadata provides?",
  options: ["High performance","Low network","Manual storage","DNS"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "ADW mainly supports?",
  options: ["Analytics queries","OLTP","Streaming","Routing"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "ATP supports?",
  options: ["Transactions","Analytics","Logging","Routing"],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which feature enables continuous monitoring?",
  options: ["Monitoring service","DNS","FTP","Email"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database restore uses?",
  options: ["Backup","Scaling","DNS","Routing"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Client connection secured with?",
  options: ["TLS","FTP","HTTP","SMTP"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB automates?",
  options: ["Management tasks","Networking","Storage buying","DNS"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Which model reduces DBA work?",
  options: ["Automation","Manual","External","Scripted"],
  answer: 0
},

{
  topic: "Autonomous Database",
  question: "Which OCI tool manages secrets?",
  options: ["Vault","DNS","FTP","Email"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Scaling storage is?",
  options: ["Online","Offline only","Manual only","Unavailable"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Autonomous DB provides?",
  options: ["High availability","Single point","Manual failover","No HA"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Database compute measured in?",
  options: ["OCPU","RAM","Disk","GPU"],
  answer: 0
},
{
  topic: "Autonomous Database",
  question: "Dedicated deployment provides?",
  options: ["Isolated infrastructure","Shared only","Public network","Manual setup"],
  answer: 0
},

/* ================================
2. AI Topics (51–90)
================================ */

{
  topic: "AI Basics",
  question: "AI helps businesses by?",
  options: ["Automating decisions","Deleting data","Managing routers","Replacing storage"],
  answer: 0
},
{
  topic: "AI Basics",
  question: "Machine learning is?",
  options: ["Learning from data","Networking tool","Storage system","Firewall"],
  answer: 0
},
{
  topic: "AI Basics",
  question: "Business objects represent?",
  options: ["Entities like orders","Routers","Switches","Disks"],
  answer: 0
},
{
  topic: "AI Basics",
  question: "AI accuracy depends on?",
  options: ["Data quality","Network speed","Disk size","Router"],
  answer: 0
},
{
  topic: "AI Basics",
  question: "AI models are trained using?",
  options: ["Datasets","Subnets","Routers","VMs"],
  answer: 0
},

{
  topic: "Credentials & Security",
  question: "Secure authentication uses?",
  options: ["Tokens","Open access","Public login","FTP"],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "RBAC stands for?",
  options: ["Role Based Access Control","Resource Backup Access","Routing Backup Access","Role Backup"],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "Secrets should be stored in?",
  options: ["Secrets Manager","Public repo","Email","DNS"],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "API security ensures?",
  options: ["Authorized access","Open internet","Public routing","Manual login"],
  answer: 0
},
{
  topic: "Credentials & Security",
  question: "Encryption protects?",
  options: ["Sensitive data","DNS","Routing","Switch"],
  answer: 0
},

{
  topic: "Deep Links",
  question: "Deep links allow?",
  options: ["Direct navigation","Router config","Disk mounting","Subnet creation"],
  answer: 0
},
{
  topic: "Events",
  question: "Events trigger?",
  options: ["Automated workflows","Storage resize","DNS reset","Router reboot"],
  answer: 0
},
{
  topic: "Events",
  question: "Webhook is used for?",
  options: ["Event notifications","Disk creation","Subnet change","Router config"],
  answer: 0
},
{
  topic: "Deep Links",
  question: "Deep links improve?",
  options: ["User experience","Storage speed","Routing","DNS"],
  answer: 0
},
{
  topic: "Events",
  question: "Event-driven architecture reacts to?",
  options: ["Events","Storage","Routers","VM reboot"],
  answer: 0
},

{
  topic: "LLM",
  question: "LLM stands for?",
  options: ["Large Language Model","Local Logic Module","Large Logic Manager","Learning Machine"],
  answer: 0
},
{
  topic: "LLM",
  question: "LLMs process?",
  options: ["Natural language","Networking data","Routing tables","Disk sectors"],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Prompt engineering improves?",
  options: ["Model responses","Storage","Routing","Firewall"],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Few-shot prompting uses?",
  options: ["Examples","No examples","Routers","Disks"],
  answer: 0
},
{
  topic: "Prompt Engineering",
  question: "Zero-shot prompting uses?",
  options: ["No examples","Many examples","Routers","VMs"],
  answer: 0
},

{
  topic: "Prompt Engineering",
  question: "Hallucination means?",
  options: ["Incorrect output","Router failure","Disk crash","DNS error"],
  answer: 0
},
{
  topic: "LLM",
  question: "RAG stands for?",
  options: ["Retrieval Augmented Generation","Random AI Generation","Routing AI Gateway","Rapid AI Growth"],
  answer: 0
},
{
  topic: "UI Integration",
  question: "VBCS stands for?",
  options: ["Visual Builder Cloud Service","Virtual Backend Cloud","Visual Business Compute","Virtual Builder"],
  answer: 0
},
{
  topic: "UI Integration",
  question: "VBCS helps build?",
  options: ["Web apps visually","Routers","Disks","Subnets"],
  answer: 0
},
{
  topic: "UI Integration",
  question: "AI chatbots integrate into?",
  options: ["Applications","Routers","Switches","Storage"],
  answer: 0
},

{
  topic: "AI Agent Patterns",
  question: "AI agent is?",
  options: ["Autonomous software","Router","Disk","Subnet"],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Multi-agent systems mean?",
  options: ["Agents working together","Routers working","Disks working","VM scaling"],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Agents interact with?",
  options: ["Tools and APIs","Routers","Disks","DNS"],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Agent workflow enables?",
  options: ["Automation","Manual work","Storage","Routing"],
  answer: 0
},
{
  topic: "AI Agent Patterns",
  question: "Tool-using agents can?",
  options: ["Call external systems","Only respond","Only store","Only route"],
  answer: 0
}

];
