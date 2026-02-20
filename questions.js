const questions = [

/* ================================
1. Identity and Access Management
================================ */

{
  topic: "Identity and Access Management",
  question: "Scenario: Your company wants only the cloud operations team to create and manage VCNs in a specific compartment while developers should only launch compute instances. What should you configure?",
  options: [
    "Create two separate tenancies",
    "Create IAM groups and attach compartment-level policies",
    "Create multiple VCNs",
    "Assign public IPs to all users"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Scenario: A new intern joined your cloud team and needs read-only access to all OCI resources for auditing. What is the best approach?",
  options: [
    "Add the user to Administrators group",
    "Create a group with inspect permissions",
    "Give tenancy full access",
    "Create a new compartment"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Scenario: You want to restrict database administrators so they can manage databases but not networking components. What should you implement?",
  options: [
    "IAM policies limiting access to database-family",
    "Create separate availability domain",
    "Attach NAT gateway",
    "Use object storage"
  ],
  answer: 0
},
{
  topic: "Identity and Access Management",
  question: "Scenario: Multiple teams are working on the same OCI tenancy. You want to logically group users by roles like DevOps, Security, and Networking. What should you use?",
  options: [
    "VCNs",
    "Groups",
    "Subnets",
    "Route tables"
  ],
  answer: 1
},
{
  topic: "Identity and Access Management",
  question: "Scenario: Your organization wants centralized identity management integrated with corporate login. Which OCI feature supports this?",
  options: [
    "Federation with identity provider",
    "Internet Gateway",
    "Load Balancer",
    "Object Storage"
  ],
  answer: 0
},

/* ================================
2. VCN
================================ */

{
  topic: "VCN",
  question: "Scenario: A company wants to host a multi-tier application where web, app, and database tiers are isolated but communicate internally. What should be designed?",
  options: [
    "Single subnet architecture",
    "Multiple subnets inside one VCN",
    "Separate tenancies",
    "Only NSGs"
  ],
  answer: 1
},
{
  topic: "VCN",
  question: "Scenario: During VCN creation, the network team must ensure future subnet expansion. What should they carefully design?",
  options: [
    "IAM groups",
    "CIDR block planning",
    "Object storage",
    "Backend sets"
  ],
  answer: 1
},
{
  topic: "VCN",
  question: "Scenario: Two applications in different subnets must communicate privately within OCI. What enables this communication?",
  options: [
    "VCN internal routing",
    "Internet Gateway",
    "Public IP",
    "Object Storage"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "Scenario: Your organization wants complete network isolation between production and development environments. What is recommended?",
  options: [
    "Separate VCNs",
    "Same subnet",
    "Same route table",
    "Shared public IP"
  ],
  answer: 0
},
{
  topic: "VCN",
  question: "Scenario: Network engineers need to control how traffic flows between subnets and gateways. Which component manages this?",
  options: [
    "Route Tables",
    "Block Volumes",
    "IAM Policies",
    "Object Storage"
  ],
  answer: 0
},

/* ================================
3. Security Lists / NSG / CIDR Subnets
================================ */

{
  topic: "Security and Subnets",
  question: "Scenario: Your web server must allow traffic from the internet on port 443 but block all other ports. What should you configure?",
  options: [
    "Ingress rule allowing TCP 443",
    "Egress rule only",
    "Remove route table",
    "Attach NAT gateway"
  ],
  answer: 0
},
{
  topic: "Security and Subnets",
  question: "Scenario: Two applications run in the same subnet but require different security rules. What is the best solution?",
  options: [
    "Create new VCN",
    "Use Network Security Groups",
    "Use same security list",
    "Delete subnet"
  ],
  answer: 1
},
{
  topic: "Security and Subnets",
  question: "Scenario: A database server must only allow connections from an application server. What is the best security approach?",
  options: [
    "Allow 0.0.0.0/0",
    "Allow application subnet CIDR",
    "Attach internet gateway",
    "Use public subnet"
  ],
  answer: 1
},
{
  topic: "Security and Subnets",
  question: "Scenario: You are designing subnet IP ranges for future scaling of workloads. What should be carefully selected?",
  options: [
    "CIDR block allocation",
    "IAM policies",
    "Object storage bucket",
    "Fault domain"
  ],
  answer: 0
},
{
  topic: "Security and Subnets",
  question: "Scenario: A backend database should not be accessible from the internet. Which design is correct?",
  options: [
    "Public subnet",
    "Private subnet",
    "Internet Gateway",
    "Public IP"
  ],
  answer: 1
},

/* ================================
4. Internet Gateway
================================ */

{
  topic: "Internet Gateway",
  question: "Scenario: Your web application must be accessible globally from the internet. Which OCI component is required?",
  options: [
    "Internet Gateway",
    "Service Gateway",
    "DRG",
    "Block Storage"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Scenario: Even after attaching an Internet Gateway, users cannot access the web server. What is most likely missing?",
  options: [
    "Route table rule",
    "IAM group",
    "Object storage",
    "Fault domain"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Scenario: A public subnet must route traffic to the internet. Which route rule destination should be used?",
  options: [
    "0.0.0.0/0",
    "10.0.0.0/16",
    "192.168.1.0/24",
    "172.16.0.0/16"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Scenario: A compute instance has a public IP but still cannot access the internet. What should you verify?",
  options: [
    "Internet Gateway and route table",
    "Block volume",
    "Object storage",
    "IAM policies"
  ],
  answer: 0
},
{
  topic: "Internet Gateway",
  question: "Scenario: Which resource must the Internet Gateway be attached to?",
  options: [
    "VCN",
    "Subnet",
    "Instance",
    "Backend set"
  ],
  answer: 0
},

/* ================================
5. NAT Gateway
================================ */

{
  topic: "NAT Gateway",
  question: "Scenario: A private application server needs to download software updates from the internet but should not accept inbound traffic. What should be used?",
  options: [
    "Internet Gateway",
    "NAT Gateway",
    "DRG",
    "Service Gateway"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "Scenario: Which subnet typically uses NAT Gateway?",
  options: [
    "Public subnet",
    "Private subnet",
    "Management subnet",
    "Load balancer subnet"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "Scenario: What is the main benefit of NAT Gateway?",
  options: [
    "Inbound internet traffic",
    "Secure outbound internet access",
    "User authentication",
    "Database replication"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "Scenario: What type of IP does an instance behind NAT typically use?",
  options: [
    "Public IP",
    "Private IP",
    "Reserved IP",
    "Floating IP"
  ],
  answer: 1
},
{
  topic: "NAT Gateway",
  question: "Scenario: Which route rule destination is typically used with NAT?",
  options: [
    "0.0.0.0/0",
    "Private subnet CIDR",
    "Service CIDR",
    "VCN CIDR"
  ],
  answer: 0
},

/* ================================
6. Compartments / AD / FD
================================ */

{
  topic: "Compartments and Domains",
  question: "Scenario: Your organization wants separate environments for Dev, Test, and Production with controlled access. What should you use?",
  options: [
    "Compartments",
    "Subnets",
    "NSGs",
    "Load balancers"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Scenario: You want high availability by distributing instances across isolated hardware within one availability domain. What should you use?",
  options: [
    "Fault Domains",
    "Compartments",
    "Tenancies",
    "CIDR blocks"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Scenario: OCI regions contain multiple data centers known as:",
  options: [
    "Availability Domains",
    "Fault Domains",
    "Subnets",
    "Tenancies"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Scenario: Security teams want resource-level access control between departments. What is the recommended design?",
  options: [
    "Separate compartments",
    "Separate VCNs",
    "Separate load balancers",
    "Separate gateways"
  ],
  answer: 0
},
{
  topic: "Compartments and Domains",
  question: "Scenario: A production system must survive hardware failure within a data center. What architecture helps?",
  options: [
    "Multiple fault domains",
    "Single subnet",
    "Single instance",
    "Single compartment"
  ],
  answer: 0
},

/* ================================
7. Tenancy
================================ */

{
  topic: "Tenancy",
  question: "Scenario: When a company signs up for OCI, what is automatically created?",
  options: [
    "Tenancy",
    "Subnet",
    "Instance",
    "Load balancer"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Scenario: The root compartment exists inside:",
  options: [
    "Tenancy",
    "VCN",
    "Subnet",
    "Region"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Scenario: Where are IAM policies generally defined?",
  options: [
    "Tenancy level",
    "Subnet level",
    "Instance level",
    "Load balancer level"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Scenario: Billing and resource limits are associated with:",
  options: [
    "Tenancy",
    "Subnet",
    "Route table",
    "NSG"
  ],
  answer: 0
},
{
  topic: "Tenancy",
  question: "Scenario: A large organization wants centralized management of all OCI resources. What is the top-level container?",
  options: [
    "Tenancy",
    "Compartment",
    "Subnet",
    "AD"
  ],
  answer: 0
},

/* ================================
8. Load Balancer / Backend
================================ */

{
  topic: "Load Balancer",
  question: "Scenario: A web application must distribute traffic across multiple application servers automatically. What should be used?",
  options: [
    "Load Balancer",
    "NAT Gateway",
    "Service Gateway",
    "DRG"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "Scenario: Backend servers are grouped inside:",
  options: [
    "Backend Set",
    "Subnet",
    "VCN",
    "NSG"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "Scenario: Health checks in a load balancer are used to:",
  options: [
    "Monitor backend server availability",
    "Create subnets",
    "Assign IAM roles",
    "Create CIDR blocks"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "Scenario: Traffic must be routed only to healthy instances. What feature ensures this?",
  options: [
    "Health Check Policy",
    "IAM Policy",
    "Object Storage",
    "Fault Domain"
  ],
  answer: 0
},
{
  topic: "Load Balancer",
  question: "Scenario: You deploy two backend servers across different ADs for resilience. What benefit do you get?",
  options: [
    "High availability",
    "Lower storage",
    "More IAM policies",
    "Reduced CIDR"
  ],
  answer: 0
},

/* ================================
9. Load Balancer Policies
================================ */

{
  topic: "Load Balancer Policies",
  question: "Scenario: Your application needs maximum performance and advanced features. Which load balancer shape is suitable?",
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
  question: "Scenario: A medium workload application requiring moderate performance should use:",
  options: [
    "Silver",
    "Gold",
    "Bronze",
    "Free"
  ],
  answer: 0
},
{
  topic: "Load Balancer Policies",
  question: "Scenario: A small test application with minimal traffic should use:",
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
  question: "Scenario: Which policy provides the highest throughput?",
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
  question: "Scenario: Selecting the correct load balancer shape mainly impacts:",
  options: [
    "Performance and cost",
    "IAM policies",
    "Subnet CIDR",
    "Object storage"
  ],
  answer: 0
},

/* ================================
10. Storage Services
================================ */

{
  topic: "OCI Storage",
  question: "Scenario: A VM requires additional disk for application data. Which storage should you attach?",
  options: [
    "Block Storage",
    "Object Storage",
    "File Storage",
    "Archive Storage"
  ],
  answer: 0
},
{
  topic: "OCI Storage",
  question: "Scenario: Multiple compute instances need shared file access. Which service is best?",
  options: [
    "File Storage",
    "Block Storage",
    "Object Storage",
    "Boot Volume"
  ],
  answer: 0
},
{
  topic: "OCI Storage",
  question: "Scenario: Storing application backups and logs at scale requires:",
  options: [
    "Object Storage",
    "Block Volume",
    "NSG",
    "Route table"
  ],
  answer: 0
},
{
  topic: "OCI Storage",
  question: "Scenario: Long-term archival storage with low cost should use:",
  options: [
    "Archive Storage",
    "Block Storage",
    "File Storage",
    "Boot Volume"
  ],
  answer: 0
},
{
  topic: "OCI Storage",
  question: "Scenario: Boot disk of a compute instance in OCI is stored in:",
  options: [
    "Boot Volume",
    "Object Storage",
    "File Storage",
    "Archive Storage"
  ],
  answer: 0
}

];
