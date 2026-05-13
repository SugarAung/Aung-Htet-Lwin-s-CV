export const personalInfo = {
  name: "Aung Htet Lwin",
  role: "DevOps / Cloud Engineer",
  tagline: "Infrastructure automation · Kubernetes · Cloud-native systems",
  email: "aunghtetlwin.atl@gmail.com",
  phone: "+66828386852",
  location: "Bangkok, Thailand",
  linkedin: "https://www.linkedin.com/in/aung-htet-lwin-671172236/",
  gitlab: "https://gitlab.com/aunghtetlwin.atl",
  bio: "DevOps and Cloud Engineer with hands-on experience in AWS, Kubernetes, Terraform, Docker, GitLab CI/CD, GitHub Actions, Linux, and cloud-native infrastructure projects. Skilled in infrastructure automation, containerized deployments, CI/CD workflows, observability, and secure cloud operations using CloudWatch, Grafana, HashiCorp Vault, AWS KMS, and Kubernetes RBAC. CNCF Kubestronaut with AWS, Terraform, and Kubernetes certifications, currently pursuing a Master of Computer Science at AIT.",
  highlights: [
    "CNCF Kubestronaut",
    "AIT Master's",
    "4+ yrs cloud exp",
    "English & Japanese (N3)",
  ],
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    group: "Container & Orchestration",
    items: ["Kubernetes", "Docker", "Amazon EKS", "Kubernetes RBAC", "Helm", "Istio"],
  },
  {
    group: "Infrastructure as Code",
    items: ["Terraform", "AWS CloudFormation", "HCP Packer"],
  },
  {
    group: "CI/CD",
    items: ["GitLab CI/CD", "GitHub Actions"],
  },
  {
    group: "Observability & Security",
    items: ["CloudWatch", "Grafana", "HashiCorp Vault", "AWS KMS"],
  },
  {
    group: "Languages & OS",
    items: ["Python", "Bash", "Java", "Linux"],
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "DevOps & Cloud Engineer Trainee",
    company: "HelloCloud.io",
    location: "Singapore",
    period: "Dec 2024 – Present",
    current: true,
    bullets: [
      "Designed and provisioned AWS infrastructure using Terraform (VPC, subnets, IAM, EC2, load balancers, CloudWatch, SSM, S3) to support repeatable cloud environments.",
      "Built and managed Amazon EKS environments for containerized microservices using Kubernetes Deployments, Services, Helm, and HPA.",
      "Built CI/CD workflows using GitLab CI/CD and GitHub Actions to automate build and deployment processes.",
      "Improved observability using CloudWatch and Grafana for monitoring and troubleshooting of cloud-native environments.",
      "Supported secure cloud operations through HashiCorp Vault, IAM policies, AWS KMS, Kubernetes RBAC, and Istio service mesh.",
      "Designed and evaluated centralized and distributed API gateway patterns using Consul and Kong Gateway across three business domains.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company: "KBTC Group of Companies",
    location: "Yangon",
    period: "Feb 2022 – Nov 2022",
    current: false,
    bullets: [
      "Provisioned and configured Microsoft Azure cloud accounts including user setup, access management, and permission configuration.",
      "Administered Azure Active Directory to manage identity and access control across organizational resources.",
      "Delivered Azure cloud fundamentals training and created technical documentation to support knowledge transfer and AZ-900 preparation.",
    ],
  },
  {
    title: "Software Developer",
    company: "GIC Myanmar",
    location: "Yangon",
    period: "Jan 2021 – Feb 2022",
    current: false,
    bullets: [
      "Contributed to software development projects applying SDLC practices to improve code quality and maintainability.",
      "Developed backend components using Java and PostgreSQL in collaborative environments with version control and code reviews.",
      "Gained exposure to Ruby on Rails and Angular through internal training and project work.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  gitlab: string;
  gradient: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    title: "HCP Packer AMI Distribution & Cross-Account S3 Logging",
    description:
      "Automated multi-region AMI build and distribution using HCP Packer Registry for production and staging image channels across Tokyo and Seoul. Designed a hub-and-spoke AWS architecture with HCP HVN, VPC peering, S3, KMS, CloudWatch, and SSM for secure cross-account logging.",
    tech: ["HCP Packer", "AWS", "S3", "KMS", "CloudWatch", "SSM", "Terraform"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/hcp-packer-ami-multi-build",
    gradient: "from-orange-950/60 to-amber-950/40",
    accentColor: "text-orange-400",
  },
  {
    title: "Multi-Domain API Gateway Architecture on Kubernetes",
    description:
      "Designed centralized and distributed API gateway patterns using Consul API Gateway and Kong Gateway across three business domains. Implemented multi-service traffic flow and domain-based gateway routing on Kubernetes.",
    tech: ["Kubernetes", "Kong Gateway", "Consul", "Terraform", "Helm"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/kong-distributed-api-gateway",
    gradient: "from-blue-950/60 to-indigo-950/40",
    accentColor: "text-blue-400",
  },
  {
    title: "EKS Cluster with Bookinfo Microservice Deployment",
    description:
      "Built an AWS EKS environment with Terraform including VPC networking, managed node groups, IAM roles, and kubeconfig automation. Implemented Kubernetes RBAC and deployed the Bookinfo microservices app with external LoadBalancer access.",
    tech: ["Amazon EKS", "Terraform", "Kubernetes", "RBAC", "Helm", "IAM"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/eks-cluster-with-terraform",
    gradient: "from-purple-950/60 to-violet-950/40",
    accentColor: "text-purple-400",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  featured?: boolean;
  color: string;
};

export const certifications: Certification[] = [
  {
    name: "CNCF Kubestronaut",
    issuer: "Linux Foundation",
    date: "Feb 2025",
    featured: true,
    color: "blue",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    date: "Sept 2025",
    color: "blue",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Linux Foundation",
    date: "Feb 2025",
    color: "blue",
  },
  {
    name: "Certified Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "Linux Foundation",
    date: "Feb 2025",
    color: "blue",
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "Linux Foundation",
    date: "Jan 2026",
    color: "blue",
  },
  {
    name: "Certified Kubernetes Security Associate (KCSA)",
    issuer: "Linux Foundation",
    date: "Jan 2026",
    color: "blue",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    color: "orange",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Dec 2025",
    color: "purple",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Apr 2022",
    color: "sky",
  },
  {
    name: "Japanese Language Proficiency Test (JLPT N3)",
    issuer: "Japan Educational Exchanges and Services",
    date: "Jan 2022",
    color: "red",
  },
  {
    name: "IT Passport (IP) Exam — ITPEC",
    issuer: "ITPEC, Japan",
    date: "Jan 2019",
    color: "gray",
  },
  {
    name: "Fundamental Engineering (FE) Exam — ITPEC",
    issuer: "ITPEC, Japan",
    date: "Jan 2019",
    color: "gray",
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "Asian Institute of Technology (AIT)",
    location: "Thailand",
    period: "Jan 2025 – Present",
    current: true,
  },
  {
    degree: "B.C.Sc (High Performance Computing)",
    institution: "University of Information Technology (UIT)",
    location: "Yangon, Myanmar",
    period: "Dec 2016 – Feb 2021",
    current: false,
  },
];
