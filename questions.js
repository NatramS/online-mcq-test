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
}

];
