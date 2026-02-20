const questions = [

/* ================================
1. Identity and Access Management (1–10)
================================ */

{
  topic: "Identity and Access Management",
  question: "A DevOps team needs permission to manage compute instances only in the Dev compartment. The organization wants strict access control and no permissions outside Dev. What should be implemented?",
  options: [
    "Add users to tenancy admins",
    "Create DevOps group with manage instance-family policy in Dev compartment",
    "Give full root access",
    "Create new VCN"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A finance analyst requires read-only access to Object Storage buckets for reporting purposes. They must not modify or delete data. What is the best approach?",
  options: [
    "Dynamic group",
    "Group with inspect object-family policy",
    "Admin access",
    "Service Gateway"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "An OCI Function needs to securely access resources without storing credentials in code. What should be used?",
  options: [
    "IAM User",
    "Dynamic Group with policies",
    "Internet Gateway",
    "Load Balancer"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "Your organization wants centralized control across HR, Finance, and IT while maintaining separation of resources. What should be used?",
  options: [
    "Compartments with IAM policies",
    "Single subnet",
    "Block volumes",
    "Fault domains"
  ],
  answer: 0
},

{
  topic: "Identity and Access Management",
  question: "A security team wants only DB admins to manage Autonomous Databases. What is the correct setup?",
  options: [
    "Create DBAdmin group with manage database-family policy",
    "Use NAT Gateway",
    "Public subnet",
    "Multiple VCNs"
  ],
  answer: 0
},

{
  topic: "Identity and Access Management",
  question: "A new application needs limited access to read logs from Object Storage. What policy is best?",
  options: [
    "manage object-family",
    "read object-family",
    "inspect object-family",
    "full admin"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "Your organization wants compute instances to access OCI services securely without API keys. What should be used?",
  options: [
    "IAM Users",
    "Dynamic Groups",
    "Internet Gateway",
    "NSG"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A company wants to restrict developers from deleting resources accidentally. What policy approach should be used?",
  options: [
    "read-only policies",
    "manage all-resources",
    "admin role",
    "VCN separation"
  ],
  answer: 0
},

{
  topic: "Identity and Access Management",
  question: "A team needs permission only to view compute instances across tenancy. What should be assigned?",
  options: [
    "inspect instance-family",
    "manage instance-family",
    "use instance-family",
    "admin role"
  ],
  answer: 0
},

{
  topic: "Identity and Access Management",
  question: "A Dev team needs to start/stop instances but not create/delete them. What permission is required?",
  options: [
    "manage instance-family",
    "use instance-family",
    "inspect instance-family",
    "read instance-family"
  ],
  answer: 1
},

/* ================================
2. VCN & Subnets (11–20)
================================ */

{
  topic: "VCN",
  question: "A company deploys web, app, and DB tiers and wants strict isolation between them. What is the best design?",
  options: [
    "Single subnet",
    "Separate subnets for each tier",
    "Single VCN no rules",
    "Public subnet only"
  ],
  answer: 1
},

{
  topic: "VCN",
  question: "While designing a VCN, you must avoid overlap with on-prem networks. What is the first step?",
  options: [
    "Create load balancer",
    "Define CIDR block",
    "Create IAM",
    "Attach IGW"
  ],
  answer: 1
},

{
  topic: "VCN",
  question: "Two subnets must communicate internally without internet exposure. What must be configured?",
  options: [
    "Route + security rules",
    "Internet Gateway",
    "NAT Gateway",
    "Object Storage"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "Your company wants separate Dev, Test, Prod networks. What should be implemented?",
  options: [
    "Multiple VCNs",
    "Single subnet",
    "Single IAM group",
    "One AD"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "Traffic routing between subnets is controlled by which component?",
  options: [
    "Route Table",
    "NSG",
    "Block Volume",
    "IAM"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "A subnet should not have internet exposure but must communicate internally. What type is it?",
  options: [
    "Public subnet",
    "Private subnet",
    "Hybrid subnet",
    "External subnet"
  ],
  answer: 1
},

{
  topic: "VCN",
  question: "A company wants IP planning for future scalability. What concept defines IP range?",
  options: [
    "CIDR block",
    "NSG",
    "Route Table",
    "DRG"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "Applications across subnets need communication. What must allow it?",
  options: [
    "Security rules",
    "Object Storage",
    "Block volume",
    "IAM policy"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "To isolate workloads within same VCN, what should be used?",
  options: [
    "Subnets",
    "Block storage",
    "Object storage",
    "DNS"
  ],
  answer: 0
},

{
  topic: "VCN",
  question: "A company wants internet access only for web tier. What should be configured?",
  options: [
    "Public subnet for web tier only",
    "All subnets public",
    "No gateway",
    "Same subnet"
  ],
  answer: 0
},

/* ================================
3. NSG & Security (21–30)
================================ */

{
  topic: "NSG",
  question: "A web server must allow HTTP from internet but SSH only from admin IP. What rule is correct?",
  options: [
    "Allow all",
    "80 from 0.0.0.0/0, SSH from admin CIDR",
    "Block all",
    "Only SSH"
  ],
  answer: 1
},

{
  topic: "NSG",
  question: "Different firewall rules needed inside same subnet. What should be used?",
  options: [
    "NSG",
    "Route Table",
    "VCN",
    "CIDR"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "Instance-level security control is required. What solution fits?",
  options: [
    "NSG",
    "Subnet only",
    "Route Table",
    "Load Balancer"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "You want to allow DB access only from app tier. What should be configured?",
  options: [
    "NSG rule restricting source",
    "Internet Gateway",
    "Public subnet",
    "Object storage"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "A security team wants least privilege network rules. What should be applied?",
  options: [
    "Allow all traffic",
    "Restrictive NSG rules",
    "Public subnet",
    "Remove firewall"
  ],
  answer: 1
},

{
  topic: "NSG",
  question: "You want to block all inbound traffic except HTTPS. What should be done?",
  options: [
    "Allow 443 only",
    "Allow all",
    "Remove NSG",
    "Use NAT"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "Internal app communication should be secured. What is best?",
  options: [
    "NSG rules",
    "Internet Gateway",
    "Public IP",
    "CIDR"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "Which allows granular network policies at instance level?",
  options: [
    "NSG",
    "Route Table",
    "Subnet",
    "Tenancy"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "Security rules must allow app tier to DB tier. What is needed?",
  options: [
    "Ingress rule DB port from app subnet",
    "Public access",
    "IGW",
    "NAT"
  ],
  answer: 0
},

{
  topic: "NSG",
  question: "You want zero trust networking approach. What should you enforce?",
  options: [
    "Strict NSG rules",
    "Allow all",
    "Public subnet",
    "Flat network"
  ],
  answer: 0
},

/* ================================
4. Internet Gateway (31–40)
================================ */

{
  topic: "Internet Gateway",
  question: "A public server is unreachable despite public IP. What should be checked?",
  options: [
    "IGW + route rule",
    "Block storage",
    "IAM",
    "Fault domain"
  ],
  answer: 0
},

{
  topic: "Internet Gateway",
  question: "Which enables inbound/outbound internet access?",
  options: [
    "Internet Gateway",
    "Service Gateway",
    "NAT",
    "DRG"
  ],
  answer: 0
},

{
  topic: "Internet Gateway",
  question: "After IGW creation, what is required?",
  options: [
    "Route rule 0.0.0.0/0",
    "Restart VM",
    "New subnet",
    "Policy"
  ],
  answer: 0
},

{
  topic: "Internet Gateway",
  question: "Which workload needs IGW?",
  options: [
    "Public web app",
    "Private DB",
    "Internal API",
    "Backup storage"
  ],
  answer: 0
},

{
  topic: "Internet Gateway",
  question: "If no IGW route exists?",
  options: [
    "No internet access",
    "Instance stops",
    "Storage fails",
    "IAM fails"
  ],
  answer: 0
},

/* ================================
5. NAT Gateway (41–50)
================================ */

{
  topic: "NAT Gateway",
  question: "Private server needs internet updates without inbound access. What to use?",
  options: [
    "NAT Gateway",
    "IGW",
    "LB",
    "Service Gateway"
  ],
  answer: 0
},

{
  topic: "NAT Gateway",
  question: "Where is NAT used?",
  options: [
    "Private subnet",
    "Public subnet",
    "IAM",
    "Storage"
  ],
  answer: 0
},

{
  topic: "NAT Gateway",
  question: "Outbound traffic route should go to?",
  options: [
    "NAT Gateway",
    "DRG",
    "LB",
    "Object storage"
  ],
  answer: 0
},

{
  topic: "NAT Gateway",
  question: "Key benefit?",
  options: [
    "Secure outbound only",
    "Inbound access",
    "Storage",
    "Auth"
  ],
  answer: 0
},

{
  topic: "NAT Gateway",
  question: "Private instances hidden but updated?",
  options: [
    "NAT Gateway",
    "IGW",
    "Public IP",
    "VCN Peering"
  ],
  answer: 0
},

/* ================================
6. Service Gateway (51–55)
================================ */

{
  topic: "Service Gateway",
  question: "Private access to Object Storage without internet?",
  options: [
    "Service Gateway",
    "IGW",
    "NAT",
    "DRG"
  ],
  answer: 0
},

{
  topic: "Service Gateway",
  question: "Traffic stays within OCI backbone. Which gateway?",
  options: [
    "Service Gateway",
    "Internet Gateway",
    "NAT",
    "VPN"
  ],
  answer: 0
},

/* ================================
7. Load Balancer (56–65)
================================ */

{
  topic: "Load Balancer",
  question: "Distribute traffic across servers?",
  options: [
    "Load Balancer",
    "Block Storage",
    "VCN",
    "IAM"
  ],
  answer: 0
},

{
  topic: "Load Balancer",
  question: "Unhealthy server behavior?",
  options: [
    "Stops traffic",
    "Deletes instance",
    "Stops VCN",
    "Recreates subnet"
  ],
  answer: 0
},

{
  topic: "Load Balancer",
  question: "Health check is done by?",
  options: [
    "Health Check Policy",
    "IAM",
    "NSG",
    "Route"
  ],
  answer: 0
},

{
  topic: "Load Balancer",
  question: "High availability design?",
  options: [
    "Across fault domains",
    "Single instance",
    "Single subnet",
    "Single AD"
  ],
  answer: 0
},

/* ================================
8. Hybrid / Multi-cloud (66–80)
================================ */

{
  topic: "Hybrid Cloud",
  question: "OCI + Azure connection fails due to IP overlap. Issue?",
  options: [
    "CIDR overlap",
    "DNS",
    "IAM",
    "NSG"
  ],
  answer: 0
},

{
  topic: "Hybrid Cloud",
  question: "High bandwidth private connection?",
  options: [
    "FastConnect",
    "VPN",
    "IGW",
    "NAT"
  ],
  answer: 0
},

{
  topic: "Hybrid Cloud",
  question: "AWS equivalent of FastConnect?",
  options: [
    "Direct Connect",
    "Route53",
    "S3",
    "IAM"
  ],
  answer: 0
},

{
  topic: "Hybrid Cloud",
  question: "Azure equivalent?",
  options: [
    "ExpressRoute",
    "Blob",
    "VM",
    "NSG"
  ],
  answer: 0
},

/* ================================
9. AI Foundations & Fusion AI (81–100)
================================ */

{
  topic: "AI Foundations",
  question: "AI agent to summarize financial reports in Fusion?",
  options: [
    "OCI Generative AI",
    "Block storage",
    "VCN",
    "LB"
  ],
  answer: 0
},

{
  topic: "AI Foundations",
  question: "AI agent needs secure enterprise data access?",
  options: [
    "Data grounding",
    "Public subnet",
    "CIDR",
    "Route"
  ],
  answer: 0
},

{
  topic: "AI Foundations",
  question: "Conversational AI in HCM?",
  options: [
    "LLM service",
    "NAT",
    "Subnet",
    "IGW"
  ],
  answer: 0
},

{
  topic: "AI Foundations",
  question: "AI model accuracy improvement?",
  options: [
    "Fine-tuning",
    "CIDR",
    "NSG",
    "Route"
  ],
  answer: 0
},

{
  topic: "AI Foundations",
  question: "Prevent hallucinations?",
  options: [
    "Grounding",
    "Public access",
    "Flat network",
    "None"
  ],
  answer: 0
}, 

{
  topic: "Identity and Access Management",
  question: "A large enterprise is restructuring its cloud access strategy to enforce strict separation between development, testing, and production environments. The DevOps team requires full control over compute instances within the Dev compartment, but must not have visibility or access to other compartments. Additionally, the security team mandates adherence to least privilege principles and wants to avoid overly broad permissions such as tenancy-wide admin access. The organization also anticipates scaling the number of users and compartments in the future. What is the most appropriate solution to ensure secure, scalable, and restricted access?",
  options: [
    "Add users to tenancy administrators group",
    "Create a DevOps group with manage instance-family policy in Dev compartment",
    "Grant full root compartment access",
    "Create a new VCN"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A finance department needs access to view billing data, cost analysis reports, and usage metrics in the cloud environment. However, due to compliance requirements, they must not have permissions to modify any infrastructure or provision new resources. The organization expects this team to grow over time and wants a scalable solution that maintains strict read-only access. The cloud administrator must ensure no accidental privilege escalation occurs. What is the best approach?",
  options: [
    "Grant admin access to billing resources",
    "Create a group with read-only access to cost and usage resources",
    "Assign users to tenancy admin group",
    "Allow unrestricted access to all reports"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "An organization recently experienced a security incident involving compromised credentials. As a result, they want to enforce multi-factor authentication (MFA) across all users, including administrators. The solution should enhance security without significantly disrupting existing workflows. The organization also wants to ensure that no user can bypass MFA enforcement. What is the best implementation strategy?",
  options: [
    "Enable MFA optionally",
    "Enforce MFA at tenancy level for all users",
    "Disable password authentication",
    "Use only API keys"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A company is implementing role-based access control for different teams such as developers, network engineers, and database administrators. Each team should only have access to resources relevant to their job responsibilities. The solution must be easy to maintain and scalable as new teams are onboarded. What is the best approach?",
  options: [
    "Assign all users admin access",
    "Create groups with compartment-specific policies",
    "Allow access to root compartment",
    "Use shared credentials"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "An enterprise wants to integrate its existing corporate identity system with its cloud provider to enable single sign-on (SSO). Users should log in using their existing credentials, and user lifecycle management should remain centralized. What should be implemented?",
  options: [
    "Create local IAM users",
    "Use identity federation with external IdP",
    "Disable IAM policies",
    "Use only API authentication"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A support engineer needs temporary elevated privileges to troubleshoot a production issue. The organization wants to ensure that these privileges are revoked automatically after a certain period. The solution should avoid permanent privilege escalation. What is the best option?",
  options: [
    "Grant permanent admin access",
    "Use time-bound policies or dynamic groups",
    "Disable user after task",
    "Share root credentials"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "Applications running on compute instances need to access cloud resources securely without embedding credentials in code. The organization wants to follow best practices for credential management and avoid hardcoding secrets. What should be used?",
  options: [
    "Store credentials in config files",
    "Use instance principals with dynamic groups",
    "Share IAM user credentials",
    "Use public IP authentication"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A company must maintain audit logs for all user activities, including API calls and policy changes, for compliance and forensic purposes. The logs should be tamper-resistant and easily accessible for analysis. What service should be used?",
  options: [
    "Monitoring",
    "Audit service",
    "Object Storage",
    "Logging Analytics"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "A storage team needs permission to manage object storage buckets within a specific compartment but should not access compute or networking resources. The organization wants to enforce strict least privilege access. What policy should be created?",
  options: [
    "Allow manage all-resources",
    "Allow manage object-family in compartment",
    "Allow full tenancy access",
    "Allow read-only access to all resources"
  ],
  answer: 1
},

{
  topic: "Identity and Access Management",
  question: "Developers require programmatic access to cloud resources for automation scripts. The organization wants to avoid password-based authentication and ensure secure API access. What is the best approach?",
  options: [
    "Use username/password",
    "Use API signing keys",
    "Use public IP restriction",
    "Use SSH keys only"
  ],
  answer: 1
},

/* ================================
2. Networking (11–20)
================================ */

{
  topic: "Networking",
  question: "A company has deployed a web application with frontend servers in a public subnet and backend servers in a private subnet. The backend servers must access the internet for updates but should not be exposed to inbound internet traffic. The architecture must ensure secure outbound connectivity while maintaining isolation. What should be implemented?",
  options: [
    "Internet Gateway",
    "NAT Gateway",
    "Service Gateway",
    "Dynamic Routing Gateway"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "An organization requires a dedicated, high-bandwidth, and low-latency connection between its on-premises data center and its cloud environment. The connection should bypass the public internet and provide consistent performance. What is the best solution?",
  options: [
    "VPN Connect",
    "FastConnect",
    "Internet Gateway",
    "NAT Gateway"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "A highly available web application needs to distribute incoming traffic across multiple backend servers. The system should automatically detect unhealthy instances and route traffic only to healthy ones. What should be used?",
  options: [
    "NAT Gateway",
    "Load Balancer",
    "Service Gateway",
    "DRG"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "Private instances need to access Oracle Cloud services such as Object Storage without traversing the public internet. The organization wants to ensure secure and private connectivity. What should be used?",
  options: [
    "Internet Gateway",
    "Service Gateway",
    "NAT Gateway",
    "DRG"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "A network engineer needs to control traffic flow between subnets and enforce security rules. The solution must be stateful and easy to manage. What should be used?",
  options: [
    "Route Tables",
    "Security Lists",
    "IAM Policies",
    "Compartments"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "An organization wants to connect multiple VCNs within the same region for seamless communication. The solution should not require internet traversal. What is the best option?",
  options: [
    "Internet Gateway",
    "Local Peering Gateway",
    "NAT Gateway",
    "Service Gateway"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "A company wants to allow inbound internet traffic to its web servers hosted in a public subnet. What component is required?",
  options: [
    "NAT Gateway",
    "Internet Gateway",
    "Service Gateway",
    "DRG"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "An application requires DNS resolution within a VCN. The organization wants to ensure internal name resolution for instances. What should be used?",
  options: [
    "IAM",
    "VCN DNS Resolver",
    "Object Storage",
    "Load Balancer"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "A company wants to monitor network traffic and analyze flow logs for troubleshooting. What service should be enabled?",
  options: [
    "Object Storage",
    "VCN Flow Logs",
    "IAM",
    "Block Storage"
  ],
  answer: 1
},

{
  topic: "Networking",
  question: "A company needs secure communication between its cloud and on-premises network using encrypted tunnels over the internet. What should be used?",
  options: [
    "FastConnect",
    "VPN Connect",
    "Internet Gateway",
    "Service Gateway"
  ],
  answer: 1
},

/* ================================
3. Storage (21–30)
================================ */

{
  topic: "Storage",
  question: "A media company stores massive amounts of unstructured data such as videos and images. The data must be highly durable, accessible via HTTP, and support lifecycle policies for archiving older content. What storage solution should be used?",
  options: [
    "Block Volume",
    "Object Storage",
    "File Storage",
    "Boot Volume"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A database application requires low-latency, high-performance storage attached directly to compute instances. What should be used?",
  options: [
    "Object Storage",
    "Block Volume",
    "Archive Storage",
    "File Storage"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A team needs shared file storage accessible by multiple compute instances simultaneously. What is the best solution?",
  options: [
    "Block Volume",
    "File Storage Service",
    "Object Storage",
    "Boot Volume"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "An organization wants to archive infrequently accessed data at low cost. Retrieval time is not critical. What should be used?",
  options: [
    "Object Storage Standard",
    "Archive Storage",
    "Block Volume",
    "File Storage"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A company needs automatic backups of boot volumes for disaster recovery. What should be used?",
  options: [
    "Manual snapshots",
    "Boot Volume Backup Policy",
    "Object Storage",
    "File Storage"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A team wants to replicate object storage data across regions for disaster recovery. What feature should be used?",
  options: [
    "Local replication",
    "Cross-region replication",
    "Block storage cloning",
    "File system backup"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "An application needs storage that supports REST API access and metadata tagging. What is the best choice?",
  options: [
    "Block Volume",
    "Object Storage",
    "File Storage",
    "Boot Volume"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A database requires persistent storage even after instance termination. What should be used?",
  options: [
    "Ephemeral storage",
    "Block Volume",
    "Object Storage",
    "Archive Storage"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A company wants to encrypt data at rest automatically without managing keys manually. What should be used?",
  options: [
    "Disable encryption",
    "Use default encryption with managed keys",
    "Store unencrypted data",
    "Use only client-side encryption"
  ],
  answer: 1
},

{
  topic: "Storage",
  question: "A team needs to store logs that are frequently accessed and updated. What is the best option?",
  options: [
    "Archive Storage",
    "Object Storage Standard",
    "Block Volume",
    "File Storage"
  ],
  answer: 1
},

/* ================================
4. Compute & Scaling (31–40)
================================ */

{
  topic: "Compute",
  question: "A DevOps engineer needs to deploy an application that automatically scales based on CPU usage and traffic load. The solution must ensure high availability and cost efficiency. What should be implemented?",
  options: [
    "Manual scaling",
    "Autoscaling with instance pools",
    "Single VM deployment",
    "Bare metal only"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A company needs to run workloads requiring high performance and dedicated hardware. What compute option should be used?",
  options: [
    "VM instances",
    "Bare Metal instances",
    "Containers only",
    "Serverless functions"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "An application requires container orchestration and management. What should be used?",
  options: [
    "Compute instances",
    "Kubernetes (OKE)",
    "Object Storage",
    "Block Volume"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A company wants to run event-driven code without managing servers. What should be used?",
  options: [
    "VM instances",
    "Functions (Serverless)",
    "Bare metal",
    "Block storage"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A team needs to create identical compute instances quickly for scaling. What should be used?",
  options: [
    "Manual provisioning",
    "Instance configurations",
    "Object Storage",
    "IAM"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A company wants to reduce costs by shutting down idle instances automatically. What should be used?",
  options: [
    "Manual process",
    "Autoscaling policies",
    "IAM policies",
    "Object Storage"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A DevOps team needs to deploy applications using CI/CD pipelines. What service should be used?",
  options: [
    "Object Storage",
    "DevOps Service",
    "Block Volume",
    "VCN"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A company needs GPU-based instances for AI workloads. What should be used?",
  options: [
    "Standard VM",
    "GPU instances",
    "Object Storage",
    "Archive Storage"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A team wants to ensure high availability by distributing instances across fault domains. What should be done?",
  options: [
    "Single instance",
    "Deploy across multiple fault domains",
    "Use only one subnet",
    "Disable redundancy"
  ],
  answer: 1
},

{
  topic: "Compute",
  question: "A company needs to migrate workloads with minimal downtime. What approach should be used?",
  options: [
    "Cold migration",
    "Live migration tools",
    "Delete and recreate",
    "Manual setup"
  ],
  answer: 1
},

/* ================================
5. Monitoring, Security, DB (41–50)
================================ */

{
  topic: "Monitoring",
  question: "A company wants to track CPU utilization and trigger alerts when thresholds are exceeded. What should be used?",
  options: [
    "Object Storage",
    "Monitoring with alarms",
    "IAM",
    "VCN"
  ],
  answer: 1
},

{
  topic: "Monitoring",
  question: "An organization wants centralized logging and analysis. What service should be used?",
  options: [
    "Object Storage",
    "Logging and Logging Analytics",
    "Block Volume",
    "IAM"
  ],
  answer: 1
},

{
  topic: "Security",
  question: "A company wants to protect applications from SQL injection and XSS attacks. What should be used?",
  options: [
    "Load Balancer",
    "Web Application Firewall (WAF)",
    "NAT Gateway",
    "Service Gateway"
  ],
  answer: 1
},

{
  topic: "Security",
  question: "An organization wants to store and manage encryption keys securely. What should be used?",
  options: [
    "Object Storage",
    "Vault service",
    "Block Volume",
    "IAM"
  ],
  answer: 1
},

{
  topic: "Security",
  question: "A company wants vulnerability scanning for compute instances. What should be used?",
  options: [
    "Object Storage",
    "Vulnerability Scanning Service",
    "IAM",
    "VCN"
  ],
  answer: 1
},

{
  topic: "Database",
  question: "A company needs a fully managed, self-driving database with automatic tuning and scaling. What should be used?",
  options: [
    "Manual DB",
    "Autonomous Database",
    "Block Volume",
    "File Storage"
  ],
  answer: 1
},

{
  topic: "Database",
  question: "A team needs a NoSQL database for flexible schema applications. What should be used?",
  options: [
    "Autonomous DB",
    "NoSQL Database",
    "Block Volume",
    "Object Storage"
  ],
  answer: 1
},

{
  topic: "Database",
  question: "A company wants automated backups and patching for databases. What should be used?",
  options: [
    "Manual process",
    "Managed Database service",
    "Object Storage",
    "IAM"
  ],
 answer: 1
},

{
  topic: "Security",
  question: "A company wants to restrict traffic at subnet level using stateless rules. What should be used?",
  options: [
    "Security Lists",
    "NSGs",
    "IAM",
    "Compartments"
  ],
  answer: 0
},

{
  topic: "Monitoring",
  question: "A company wants to visualize metrics and logs in dashboards. What should be used?",
  options: [
    "Object Storage",
    "Monitoring dashboards",
    "IAM",
    "VCN"
  ],
  answer: 1
}

];
