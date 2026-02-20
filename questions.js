const questions = [

/* ================================
1. Identity and Access Management
================================ */

{
  topic: "Identity and Access Management",
  question: "A cloud administrator wants only the DevOps team to create and manage compute instances inside the Dev compartment. What is the best approach?",
  options: [
    "Add users directly to the tenancy",
    "Create a group DevOps and attach a policy allowing manage instance-family in the Dev compartment",
    "Assign administrator role to all developers",
    "Create a new VCN for DevOps users"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "A new employee joined your company and needs read-only access to Object Storage buckets. What should you configure?",
  options: [
    "Create a dynamic group",
    "Create a group and attach a policy allowing inspect object-family",
    "Create a new tenancy",
    "Attach Internet Gateway"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Your security team wants to ensure only database admins can manage DB systems. What should be implemented?",
  options: [
    "Separate Availability Domains",
    "Create DBAdmin group with policy manage database-family",
    "Create a NAT Gateway",
    "Move database to another subnet"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "You want OCI services like Functions to access resources securely without storing credentials. What should be used?",
  options: [
    "IAM Users",
    "Dynamic Groups with policies",
    "Internet Gateway",
    "VCN Peering"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "A company wants centralized access control for multiple departments. Which OCI feature helps organize permissions efficiently?",
  options: [
    "Compartments and IAM policies",
    "Block Volumes",
    "Fault Domains",
    "Load Balancer"
  ],
  answer: 0
},

/* ================================
2. VCN
================================ */

{
  topic: "VCN",
  question: "A company is deploying a three-tier application (web, app, database). How should the network be designed?",
  options: [
    "Single subnet for all tiers",
    "Separate subnets within a VCN for each tier",
    "Different tenancy for each tier",
    "Only public subnet"
  ],
  answer: 1
},
{
  topic: "VCN",
  question: "Your team wants to control traffic routing between subnets. Which OCI component should be configured?",
  options: [
    "Route Table",
    "IAM Policy",
    "Block Volume",
    "Object Storage"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "You are creating a new VCN for production deployment. What is the first step?",
  options: [
    "Create a Load Balancer",
    "Define CIDR block for the network",
    "Create IAM policy",
    "Attach NAT Gateway"
  ],
  answer: 1
},
{
  topic: "VCN",
  question: "Two applications in different subnets need communication. What must allow this?",
  options: [
    "Correct route rules and security rules",
    "Separate tenancy",
    "New Object Storage bucket",
    "Block storage expansion"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "Your organization wants separate environments for testing and production networks. What should you implement?",
  options: [
    "Multiple VCNs",
    "Single subnet",
    "Single IAM group",
    "Only one availability domain"
  ],
  answer: 0
},

/* ================================
3. Security Lists / NSG / CIDR
================================ */

{
  topic: "Network Security and Subnets",
  question: "A web server must allow HTTP traffic from the internet but restrict SSH access only to admin IPs. What should you configure?",
  options: [
    "Ingress rule TCP 80 from 0.0.0.0/0 and SSH from admin CIDR",
    "Allow all traffic",
    "Remove security list",
    "Create new tenancy"
  ],
  answer: 0
},
{
  topic: "Network Security and Subnets",
  question: "You want different firewall rules for two instances inside the same subnet. What should be used?",
  options: [
    "NSG",
    "Internet Gateway",
    "Fault Domain",
    "Route Table"
  ],
  answer: 0
},
{
  topic: "Network Security and Subnets",
  question: "A company wants to allocate IP range for their OCI network architecture. Which concept defines the IP range?",
  options: [
    "CIDR Block",
    "Load Balancer Policy",
    "Dynamic Group",
    "Backend Set"
  ],
  answer: 0
},
{
  topic: "Network Security and Subnets",
  question: "Database servers must not be accessible from the internet. Where should they be placed?",
  options: [
    "Public Subnet",
    "Private Subnet",
    "Internet Gateway",
    "Public Load Balancer"
  ],
  answer: 1
},
{
  topic: "Network Security and Subnets",
  question: "A security engineer wants granular control over instance-level security. Which solution is best?",
  options: [
    "Network Security Groups",
    "Only route tables",
    "Multiple VCNs",
    "Object Storage rules"
  ],
  answer: 0
},

/* ================================
4. Internet Gateway
================================ */

{
  topic: "Internet Gateway",
  question: "Your public web server is not reachable from the internet even though it has a public IP. What should you verify?",
  options: [
    "Internet Gateway attached and route table configured",
    "Block Volume attached",
    "IAM policies updated",
    "Fault domain changed"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Which component enables resources in a public subnet to communicate with the internet?",
  options: [
    "Internet Gateway",
    "Service Gateway",
    "NAT Gateway",
    "Dynamic Group"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "After creating an Internet Gateway, what additional configuration is required?",
  options: [
    "Update route table with destination 0.0.0.0/0",
    "Create block volume",
    "Restart instance",
    "Change compartment"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Which workload typically requires an Internet Gateway?",
  options: [
    "Public web applications",
    "Private database server",
    "Backup storage",
    "Internal API"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "If a route table does not contain a rule to Internet Gateway, what happens?",
  options: [
    "Internet access fails",
    "Instance stops",
    "Storage fails",
    "IAM fails"
  ],
  answer: 0
},

/* ================================
5. NAT Gateway
================================ */

{
  topic: "NAT Gateway",
  question: "Your private application server needs internet access for software updates but must not allow inbound traffic. What should you configure?",
  options: [
    "NAT Gateway",
    "Internet Gateway",
    "Load Balancer",
    "Service Gateway"
  ],
  answer: 0
},
{
  topic: "NAT Gateway",
  question: "Where is NAT Gateway mainly used?",
  options: [
    "Private Subnets",
    "Public Subnets",
    "IAM Policies",
    "Object Storage"
  ],
  answer: 0
},
{
  topic: "NAT Gateway",
  question: "A route table should direct outbound internet traffic to which target for private instances?",
  options: [
    "NAT Gateway",
    "DRG",
    "Service Gateway",
    "Load Balancer"
  ],
  answer: 0
},
{
  topic: "NAT Gateway",
  question: "Which benefit does NAT Gateway provide?",
  options: [
    "Secure outbound connectivity",
    "Inbound access",
    "Storage encryption",
    "User authentication"
  ],
  answer: 0
},
{
  topic: "NAT Gateway",
  question: "Your security team wants private servers hidden from the internet while still downloading updates. What should be implemented?",
  options: [
    "NAT Gateway",
    "Internet Gateway",
    "Public IP",
    "VCN Peering"
  ],
  answer: 0
},

/* ================================
6. Compartments / AD / FD
================================ */

{
  topic: "Compartments and Domains",
  question: "Your organization wants to separate resources by department such as Finance and HR. What should be used?",
  options: [
    "Compartments",
    "VCN",
    "Subnets",
    "Internet Gateway"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "An application must be deployed across physically separate data centers for high availability. Which feature helps?",
  options: [
    "Availability Domains",
    "Security Lists",
    "IAM Groups",
    "Object Storage"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "To reduce risk of hardware failure affecting all instances in one AD, what should you distribute?",
  options: [
    "Fault Domains",
    "IAM Users",
    "VCN CIDR",
    "Policies"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Your company wants environment-based isolation like Dev, Test, Prod. What should be created?",
  options: [
    "Separate Compartments",
    "Separate Block Volumes",
    "Separate Route Tables",
    "Separate Load Balancers"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "For maximum application availability within one AD, how should compute instances be deployed?",
  options: [
    "Across multiple Fault Domains",
    "Same Fault Domain",
    "Single Instance",
    "Single Subnet"
  ],
  answer: 0
},

/* ================================
7. Tenancy
================================ */

{
  topic: "Tenancy",
  question: "Your company just signed up for OCI and received an account representing the entire organization. What is this called?",
  options: [
    "Tenancy",
    "Subnet",
    "VCN",
    "Load Balancer"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Where are top-level policies generally created?",
  options: [
    "Root Compartment",
    "Subnet",
    "Block Storage",
    "Route Table"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "An enterprise wants centralized billing and governance. Which OCI concept manages this?",
  options: [
    "Tenancy",
    "Availability Domain",
    "CIDR",
    "NSG"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Which component is the highest level container for OCI resources?",
  options: [
    "Tenancy",
    "Compartment",
    "Subnet",
    "VCN"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "A company wants to organize projects under the same account with shared governance. Which structure helps?",
  options: [
    "Compartments within a tenancy",
    "Multiple Internet Gateways",
    "Multiple CIDR blocks",
    "Multiple NAT gateways"
  ],
  answer: 0
},

/* ================================
8. Load Balancer
================================ */

{
  topic: "Load Balancer",
  question: "Your application must distribute traffic across multiple compute instances. Which service is used?",
  options: [
    "Load Balancer",
    "Block Storage",
    "IAM Policy",
    "VCN"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "A backend set contains:",
  options: [
    "Backend servers",
    "Policies",
    "Compartments",
    "Subnets"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "If one server becomes unhealthy, what will Load Balancer do?",
  options: [
    "Stop sending traffic to that server",
    "Delete instance",
    "Restart VCN",
    "Change CIDR"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "Which component checks health of backend servers?",
  options: [
    "Health Check Policy",
    "IAM Policy",
    "NAT Gateway",
    "Fault Domain"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "For highly available applications, backend servers should be deployed:",
  options: [
    "Across multiple fault domains",
    "Single instance",
    "Single subnet",
    "One compartment"
  ],
  answer: 0
},

/* ================================
9. Load Balancer Policies
================================ */

{
  topic: "Load Balancer Policies",
  question: "A company wants highest performance load balancing algorithm. Which policy is best?",
  options: [
    "Gold",
    "Silver",
    "Bronze",
    "Basic"
  ],
  answer: 0
},
{
  topic: "Load Balancer Policies",
  question: "For medium traffic production applications, which policy is commonly used?",
  options: [
    "Silver",
    "Gold",
    "Bronze",
    "Free tier"
  ],
  answer: 0
},
{
  topic: "Load Balancer Policies",
  question: "A development environment with minimal traffic should use:",
  options: [
    "Bronze",
    "Gold",
    "Silver",
    "Enterprise"
  ],
  answer: 0
},
{
  topic: "Load Balancer Policies",
  question: "Which policy provides highest resource allocation?",
  options: [
    "Gold",
    "Silver",
    "Bronze",
    "Standard"
  ],
  answer: 0
},
{
  topic: "Load Balancer Policies",
  question: "A production e-commerce site expecting heavy traffic spikes should select:",
  options: [
    "Gold Policy",
    "Bronze Policy",
    "Single backend",
    "No load balancer"
  ],
  answer: 0
},

/* ================================
10. Storage
================================ */

{
  topic: "Storage Services",
  question: "A VM requires persistent disk storage similar to a hard drive. Which OCI service is used?",
  options: [
    "Block Storage",
    "Object Storage",
    "File Storage",
    "Archive Storage"
  ],
  answer: 0
},
{
  topic: "Storage Services",
  question: "A shared storage system is required for multiple compute instances. What should be used?",
  options: [
    "File Storage",
    "Block Storage",
    "Object Storage",
    "Boot Volume"
  ],
  answer: 0
},
{
  topic: "Storage Services",
  question: "A company wants to store backups and large unstructured data like logs and images. Which is best?",
  options: [
    "Object Storage",
    "Block Storage",
    "Local Disk",
    "Subnet"
  ],
  answer: 0
},
{
  topic: "Storage Services",
  question: "For long-term archival data with infrequent access, which tier is recommended?",
  options: [
    "Archive Storage",
    "Block Storage",
    "File Storage",
    "Boot Volume"
  ],
  answer: 0
},
{
  topic: "Storage Services",
  question: "A team wants scalable storage for application data accessed by multiple instances simultaneously. What should they use?",
  options: [
    "File Storage Service",
    "Block Volume only",
    "Single VM disk",
    "CIDR block"
  ],
  answer: 0
}

];
