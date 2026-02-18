const questions = [

/* =======================================================
   1. Cloud Engineering Basics
======================================================= */

{
  topic: "Cloud Engineering Basics",
  question: "What is cloud computing?",
  options: [
    "Running applications only on local servers",
    "Delivering computing services over the internet",
    "Installing software on personal laptops",
    "Using USB storage devices"
  ],
  answer: 1
},
{
  topic: "Cloud Engineering Basics",
  question: "Which of the following is an example of IaaS?",
  options: [
    "Oracle Autonomous Database",
    "Oracle Compute Instance",
    "Oracle SaaS ERP",
    "Oracle Email Service"
  ],
  answer: 1
},
{
  topic: "Cloud Engineering Basics",
  question: "What is the main benefit of elasticity in cloud?",
  options: [
    "Fixed capacity allocation",
    "Manual scaling only",
    "Ability to scale resources up or down automatically",
    "Permanent storage"
  ],
  answer: 2
},
{
  topic: "Cloud Engineering Basics",
  question: "Which responsibility belongs to customer in IaaS model?",
  options: [
    "Managing physical data center",
    "Managing virtualization layer",
    "Managing operating system and applications",
    "Managing Oracle backbone network"
  ],
  answer: 2
},
{
  topic: "Cloud Engineering Basics",
  question: "Scenario: A startup wants to launch an application quickly without buying hardware. What is the best approach?",
  options: [
    "Build private data center",
    "Use Oracle Cloud Infrastructure compute service",
    "Install software on desktops",
    "Avoid internet connectivity"
  ],
  answer: 1
},

/* =======================================================
   2. OCI Storage & Networking Basics
======================================================= */

{
  topic: "OCI Storage & Networking Basics",
  question: "Which OCI storage service is used for object storage like backups and archives?",
  options: [
    "Block Volume",
    "File Storage",
    "Object Storage",
    "Local NVMe"
  ],
  answer: 2
},
{
  topic: "OCI Storage & Networking Basics",
  question: "What is a VCN in OCI?",
  options: [
    "Virtual Cloud Network",
    "Virtual Compute Node",
    "Volume Control Network",
    "Virtual Container Network"
  ],
  answer: 0
},
{
  topic: "OCI Storage & Networking Basics",
  question: "Which component controls inbound and outbound traffic rules?",
  options: [
    "Compute Shape",
    "Security List",
    "Object Bucket",
    "Availability Domain"
  ],
  answer: 1
},
{
  topic: "OCI Storage & Networking Basics",
  question: "Which storage type is best for database high-performance workloads?",
  options: [
    "Object Storage",
    "Archive Storage",
    "Block Volume",
    "Email Storage"
  ],
  answer: 2
},
{
  topic: "OCI Storage & Networking Basics",
  question: "Scenario: You want a web server accessible from the internet. What is required?",
  options: [
    "Private Subnet only",
    "Public Subnet with Internet Gateway",
    "Archive Storage",
    "Local Laptop Access"
  ],
  answer: 1
},

/* =======================================================
   3. OCI AI Foundations Associate
======================================================= */

{
  topic: "OCI AI Foundations Associate",
  question: "What is Artificial Intelligence?",
  options: [
    "Human brain simulation using machines",
    "Manual data entry",
    "Basic spreadsheet calculation",
    "Physical networking hardware"
  ],
  answer: 0
},
{
  topic: "OCI AI Foundations Associate",
  question: "Which OCI service provides prebuilt AI services?",
  options: [
    "OCI Compute",
    "OCI AI Services",
    "OCI VCN",
    "OCI Block Volume"
  ],
  answer: 1
},
{
  topic: "OCI AI Foundations Associate",
  question: "Which is an example of Machine Learning?",
  options: [
    "Static HTML page",
    "Rule-based firewall",
    "Model learning from data patterns",
    "Manual backup"
  ],
  answer: 2
},
{
  topic: "OCI AI Foundations Associate",
  question: "What is OCI Generative AI used for?",
  options: [
    "Creating text or content using AI models",
    "Managing block volumes",
    "Routing network traffic",
    "Creating subnets"
  ],
  answer: 0
},
{
  topic: "OCI AI Foundations Associate",
  question: "Scenario: A company wants automatic document text extraction. Which OCI AI service helps?",
  options: [
    "OCI Vision",
    "OCI Language",
    "OCI Document Understanding",
    "OCI Networking"
  ],
  answer: 2
},

/* =======================================================
   4. OCI Analytics Cloud Basics
======================================================= */

{
  topic: "OCI Analytics Cloud Basics",
  question: "What is Oracle Analytics Cloud (OAC)?",
  options: [
    "Database engine",
    "Business intelligence and analytics service",
    "Compute service",
    "Network firewall"
  ],
  answer: 1
},
{
  topic: "OCI Analytics Cloud Basics",
  question: "OAC is mainly used for?",
  options: [
    "Data visualization and dashboards",
    "Subnet creation",
    "Object storage backup",
    "Operating system patching"
  ],
  answer: 0
},
{
  topic: "OCI Analytics Cloud Basics",
  question: "Which data source can OAC connect to?",
  options: [
    "Autonomous Database",
    "Local Excel file",
    "Cloud Applications",
    "All of the above"
  ],
  answer: 3
},
{
  topic: "OCI Analytics Cloud Basics",
  question: "What is a dashboard in OAC?",
  options: [
    "Physical server",
    "Visual representation of business metrics",
    "Block storage unit",
    "Firewall policy"
  ],
  answer: 1
},
{
  topic: "OCI Analytics Cloud Basics",
  question: "Scenario: A sales manager wants monthly revenue charts and KPIs. Which service should be used?",
  options: [
    "OCI Compute",
    "OCI Object Storage",
    "Oracle Analytics Cloud",
    "OCI VCN"
  ],
  answer: 2
},

/* =======================================================
   5. Oracle Cloud Database Services
======================================================= */

{
  topic: "Oracle Cloud Database Services",
  question: "What is Autonomous Database?",
  options: [
    "Manually managed database",
    "Self-driving, self-securing, self-repairing database",
    "Local desktop database",
    "Email database"
  ],
  answer: 1
},
{
  topic: "Oracle Cloud Database Services",
  question: "Bare Metal DB system means?",
  options: [
    "Database running directly on dedicated physical server",
    "Virtual machine only",
    "Shared laptop",
    "Object storage bucket"
  ],
  answer: 0
},
{
  topic: "Oracle Cloud Database Services",
  question: "Which service automatically handles patching and tuning?",
  options: [
    "Block Volume",
    "VCN",
    "Autonomous Database",
    "Internet Gateway"
  ],
  answer: 2
},
{
  topic: "Oracle Cloud Database Services",
  question: "Exadata is mainly used for?",
  options: [
    "High-performance database workloads",
    "File storage only",
    "DNS management",
    "Email service"
  ],
  answer: 0
},
{
  topic: "Oracle Cloud Database Services",
  question: "Scenario: A bank requires highest database performance and dedicated hardware. Which should they choose?",
  options: [
    "Object Storage",
    "Autonomous Database Shared",
    "Bare Metal DB or Exadata",
    "Local Excel sheet"
  ],
  answer: 2
}

];
