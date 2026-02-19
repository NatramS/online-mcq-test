const questions = [

/* ================================
1. Identity and Access Management
================================ */

{
  topic: "Identity and Access Management",
  question: "What is the primary purpose of OCI IAM?",
  options: [
    "To create virtual machines",
    "To manage user authentication and authorization",
    "To monitor network traffic",
    "To manage storage volumes"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "What is required to grant access to a user in OCI?",
  options: [
    "Policy",
    "Subnet",
    "Load Balancer",
    "Fault Domain"
  ],
  answer: 0
},
{
  topic: "Identity and Access Management",
  question: "Which component defines a set of permissions in OCI?",
  options: [
    "Group",
    "Policy",
    "Tenancy",
    "VCN"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Users in OCI must belong to which entity to inherit permissions?",
  options: [
    "Subnet",
    "Group",
    "VCN",
    "Block Volume"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Scenario: You want developers to manage compute instances but not networking. What should you configure?",
  options: [
    "Create separate VCN",
    "Create IAM policy allowing manage instance-family",
    "Create new tenancy",
    "Attach internet gateway"
  ],
  answer: 1
},

/* ================================
2. VCN
================================ */

{
  topic: "VCN",
  question: "What is a VCN in OCI?",
  options: [
    "Virtual Cloud Network",
    "Virtual Compute Node",
    "Volume Control Node",
    "Virtual Cluster Network"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "VCN is similar to which AWS service?",
  options: [
    "EC2",
    "VPC",
    "S3",
    "IAM"
  ],
  answer: 1
},
{
  topic: "VCN",
  question: "Which component allows communication between subnets?",
  options: [
    "Route Table",
    "Object Storage",
    "Block Volume",
    "Policy"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "What is mandatory when creating a VCN?",
  options: [
    "CIDR block",
    "Load Balancer",
    "IAM policy",
    "Fault Domain"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "Scenario: You need to isolate production and development workloads. What should you use?",
  options: [
    "Single subnet",
    "Multiple VCNs or subnets",
    "Same security list",
    "Same route table"
  ],
  answer: 1
},

/* ================================
3. Security Groups (Security Lists)
================================ */

{
  topic: "Security Groups",
  question: "Security Lists in OCI control:",
  options: [
    "Storage size",
    "Network traffic",
    "User login",
    "Compartment quota"
  ],
  answer: 1
},
{
  topic: "Security Groups",
  question: "Ingress rule controls:",
  options: [
    "Outgoing traffic",
    "Incoming traffic",
    "Block storage",
    "IAM users"
  ],
  answer: 1
},
{
  topic: "Security Groups",
  question: "Egress rule controls:",
  options: [
    "Incoming traffic",
    "Outgoing traffic",
    "Load balancer health",
    "Tenancy settings"
  ],
  answer: 1
},
{
  topic: "Security Groups",
  question: "Security List is applied at:",
  options: [
    "Instance level",
    "Subnet level",
    "Tenancy level",
    "Policy level"
  ],
  answer: 1
},
{
  topic: "Security Groups",
  question: "Scenario: You want to allow HTTP traffic from internet to web server. What should you allow?",
  options: [
    "Ingress TCP 80 from 0.0.0.0/0",
    "Egress TCP 22",
    "Block all traffic",
    "Remove route table"
  ],
  answer: 0
},

/* ================================
4. NSG
================================ */

{
  topic: "NSG",
  question: "NSG stands for:",
  options: [
    "Network Security Group",
    "Node Storage Group",
    "Network Subnet Gateway",
    "Node Service Gateway"
  ],
  answer: 0
},
{
  topic: "NSG",
  question: "NSG is applied at:",
  options: [
    "Subnet level",
    "Instance VNIC level",
    "Tenancy level",
    "Block volume level"
  ],
  answer: 1
},
{
  topic: "NSG",
  question: "Main advantage of NSG over Security List?",
  options: [
    "More granular control",
    "Faster storage",
    "More IAM policies",
    "More compartments"
  ],
  answer: 0
},
{
  topic: "NSG",
  question: "NSG allows:",
  options: [
    "Stateless and Stateful rules",
    "Only IAM policies",
    "Only route tables",
    "Only block storage"
  ],
  answer: 0
},
{
  topic: "NSG",
  question: "Scenario: Two instances in same subnet need different security rules. What should you use?",
  options: [
    "Separate VCN",
    "NSG",
    "Same security list",
    "New tenancy"
  ],
  answer: 1
},

/* ================================
5. CIDR / Public / Private
================================ */

{
  topic: "CIDR and Subnets",
  question: "CIDR defines:",
  options: [
    "IP address range",
    "Storage type",
    "User role",
    "Load balancing"
  ],
  answer: 0
},
{
  topic: "CIDR and Subnets",
  question: "Private subnet does NOT have:",
  options: [
    "Route table",
    "Public IP",
    "Security list",
    "CIDR"
  ],
  answer: 1
},
{
  topic: "CIDR and Subnets",
  question: "Public subnet requires:",
  options: [
    "Internet Gateway",
    "Block volume",
    "IAM policy",
    "Object storage"
  ],
  answer: 0
},
{
  topic: "CIDR and Subnets",
  question: "Which CIDR is valid?",
  options: [
    "10.0.0.0/16",
    "500.0.0.0/16",
    "999.1.1.1/24",
    "10.0.0.0/50"
  ],
  answer: 0
},
{
  topic: "CIDR and Subnets",
  question: "Scenario: You want DB server not accessible from internet. What should you use?",
  options: [
    "Public subnet",
    "Private subnet",
    "Internet Gateway",
    "Public IP"
  ],
  answer: 1
},

/* ================================
6. Internet Gateway
================================ */

{
  topic: "Internet Gateway",
  question: "Internet Gateway allows:",
  options: [
    "Private communication",
    "Internet access",
    "Storage expansion",
    "IAM authentication"
  ],
  answer: 1
},
{
  topic: "Internet Gateway",
  question: "It must be attached to:",
  options: [
    "VCN",
    "Subnet",
    "Instance",
    "Block Volume"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Route rule for internet traffic should target:",
  options: [
    "NAT",
    "Internet Gateway",
    "Service Gateway",
    "DRG"
  ],
  answer: 1
},
{
  topic: "Internet Gateway",
  question: "Without route table rule pointing to IG:",
  options: [
    "Internet works",
    "Internet fails",
    "IAM fails",
    "Storage fails"
  ],
  answer: 1
},
{
  topic: "Internet Gateway",
  question: "Scenario: Web server not reachable from internet. What should you check first?",
  options: [
    "IAM policy",
    "Internet Gateway & route table",
    "Block storage",
    "Fault domain"
  ],
  answer: 1
},

/* ================================
7. NAT Gateway
================================ */

{
  topic: "NAT Gateway",
  question: "NAT Gateway allows:",
  options: [
    "Inbound internet traffic",
    "Outbound internet traffic only",
    "Storage encryption",
    "IAM role assignment"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "NAT is used with:",
  options: [
    "Public subnet",
    "Private subnet",
    "Tenancy",
    "Object storage"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "Instances using NAT require:",
  options: [
    "Public IP",
    "Private IP only",
    "Block volume",
    "IAM group"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "NAT improves:",
  options: [
    "Security",
    "Storage performance",
    "IAM control",
    "Fault domain isolation"
  ],
  answer: 0
},
{
  topic: "NAT Gateway",
  question: "Scenario: Private app server needs OS updates from internet. What should you use?",
  options: [
    "Internet Gateway",
    "NAT Gateway",
    "No gateway",
    "Load balancer"
  ],
  answer: 1
},

/* ================================
8. Compartments / AD / FD
================================ */

{
  topic: "Compartments and Domains",
  question: "Compartments are used for:",
  options: [
    "Logical isolation of resources",
    "Storage replication",
    "Network routing",
    "Public IP assignment"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Availability Domain represents:",
  options: [
    "Physical data center",
    "User group",
    "Policy rule",
    "Storage type"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Fault Domain provides:",
  options: [
    "Hardware isolation within AD",
    "User access control",
    "Storage expansion",
    "Internet connectivity"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Best practice for production resources?",
  options: [
    "Single compartment",
    "Separate compartments",
    "No AD selection",
    "Single fault domain"
  ],
  answer: 1
},
{
  topic: "Compartments and Domains",
  question: "Scenario: You want high availability within one AD. What should you use?",
  options: [
    "Multiple Fault Domains",
    "Single Fault Domain",
    "Same server",
    "No AD"
  ],
  answer: 0
},

/* ================================
9. Tenancy
================================ */

{
  topic: "Tenancy",
  question: "Tenancy in OCI represents:",
  options: [
    "Entire cloud account",
    "Subnet",
    "Block storage",
    "Route table"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Root compartment is:",
  options: [
    "Top level compartment",
    "Subnet",
    "Policy",
    "Gateway"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Policies are created at:",
  options: [
    "Tenancy level",
    "Subnet level",
    "Block level",
    "Instance level"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Only one tenancy per:",
  options: [
    "User",
    "Organization",
    "Subnet",
    "VCN"
  ],
  answer: 1
},
{
  topic: "Tenancy",
  question: "Scenario: You want separate billing for different departments. What should you use?",
  options: [
    "Separate compartments",
    "Separate VCN",
    "Separate subnet",
    "Separate fault domain"
  ],
  answer: 0
},

/* ================================
10. Load Balancer & Storage
================================ */

{
  topic: "Load Balancer and Storage",
  question: "Load Balancer distributes:",
  options: [
    "User authentication",
    "Traffic across backend servers",
    "Storage volumes",
    "IAM roles"
  ],
  answer: 1
},
{
  topic: "Load Balancer and Storage",
  question: "Backend set contains:",
  options: [
    "Policies",
    "Backend servers",
    "VCN",
    "Compartment"
  ],
  answer: 1
},
{
  topic: "Load Balancer and Storage",
  question: "Block Storage is used for:",
  options: [
    "Structured object storage",
    "VM disk storage",
    "IAM policies",
    "Routing"
  ],
  answer: 1
},
{
  topic: "Load Balancer and Storage",
  question: "Object Storage is ideal for:",
  options: [
    "VM boot disk",
    "Backup and archival",
    "Fault domain isolation",
    "VCN routing"
  ],
  answer: 1
},
{
  topic: "Load Balancer and Storage",
  question: "Scenario: You need highly available web application. What should you use?",
  options: [
    "Single server",
    "Load Balancer with multiple backend servers",
    "Single subnet",
    "Single fault domain"
  ],
  answer: 1
}

];
