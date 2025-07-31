import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Eye, Activity, Terminal, Database, Network, FileSearch, AlertTriangle, CheckCircle, Brain, Zap, Target, Globe, Code, Users, Trophy, Star, TrendingUp, Cpu, Radar, Wifi, HardDrive, Cloud, DollarSign, BarChart3, Blocks, Server, Layers, Smartphone, Monitor, Bot, Wrench, Microchip, Settings, Rocket, Satellite, Search, Bug, AlertOctagon } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    // Elite Penetration Testing Projects
    {
      title: "Nation-State APT Red Team Operations",
      type: "Advanced Persistent Threat Simulation",
      description: "Orchestrated sophisticated multi-vector attack campaign simulating APT29/Cozy Bear tactics, infiltrating air-gapped nuclear facility networks through supply chain compromise and custom silicon implants.",
      technologies: ["Custom C2 Infrastructure", "Hardware Trojans", "Supply Chain Injection", "UEFI Rootkits", "Side-Channel Analysis", "Electromagnetic Emanations", "Cryptographic Attacks", "Zero-Day Chaining"],
      severity: "Catastrophic",
      findings: 73,
      status: "Eyes Only",
      duration: "36 months",
      impact: "DOD/NSA strategic review",
      metrics: "100% infrastructure compromise",
      category: "Penetration Testing"
    },
    {
      title: "Fortune 100 AI-Powered Purple Team Assessment", 
      type: "Autonomous Adversary Simulation",
      description: "Deployed AI-driven attack automation against $2T+ financial conglomerate, utilizing machine learning for real-time evasion and adaptive persistence mechanisms across hybrid cloud infrastructure.",
      technologies: ["Adversarial ML", "Neural Fuzzing", "Automated Exploit Generation", "Graph Neural Networks", "Behavior Cloning", "Reinforcement Learning", "Custom LLMs", "Quantum-Resistant Cryptography"],
      severity: "Existential",
      findings: 156,
      status: "C-Suite Briefing",
      duration: "12 months",
      impact: "$50B security investment",
      metrics: "Zero detection for 8 months",
      category: "Penetration Testing"
    },
    {
      title: "Air-Gapped Network Infiltration",
      type: "Physical Security",
      description: "Successfully compromised air-gapped critical infrastructure through hardware implants and social engineering at classified facility.",
      technologies: ["Hardware Implants", "RFID Cloning", "BadUSB", "Signal Analysis", "Social Engineering", "Physical Bypass"],
      severity: "Critical",
      findings: 23,
      status: "Remediated",
      duration: "6 months",
      impact: "Security protocol revision",
      category: "Penetration Testing"
    },

    // Quantum-Grade Cloud Security Projects
    {
      title: "Post-Quantum Zero Trust Mesh Architecture",
      type: "Next-Generation Cloud Security",
      description: "Architected quantum-resistant security framework spanning 7 cloud providers with homomorphic encryption, confidential computing, and AI-powered threat prediction serving 500M+ users globally.",
      technologies: ["Post-Quantum Cryptography", "Homomorphic Encryption", "Intel SGX/AMD SEV", "Confidential Computing", "Distributed Trust Networks", "Quantum Key Distribution", "AI Threat Modeling", "Hardware Security Modules"],
      severity: "Strategic",
      findings: 0,
      status: "Global Production",
      duration: "24 months",
      impact: "Quantum-safe standard",
      metrics: "500M+ users protected",
      category: "Cloud Security"
    },
    {
      title: "Kubernetes Runtime Security Platform",
      type: "Container Security",
      description: "Real-time threat detection for containerized workloads using eBPF and machine learning, protecting 10K+ clusters across hybrid clouds.",
      technologies: ["eBPF", "Falco", "OPA Gatekeeper", "Kubernetes", "Prometheus", "Grafana", "Machine Learning", "Go"],
      severity: "High",
      findings: 0,
      status: "Enterprise",
      duration: "12 months",
      impact: "10K+ clusters protected",
      category: "Cloud Security"
    },
    {
      title: "Serverless Security Orchestration",
      type: "FaaS Security",
      description: "Automated security orchestration for serverless functions with runtime protection and supply chain security for 1M+ function executions daily.",
      technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "SAST/DAST", "Container Scanning", "Policy Engine"],
      severity: "Medium",
      findings: 0,
      status: "Production", 
      duration: "9 months",
      impact: "1M+ functions secured",
      category: "Cloud Security"
    },

    // Elite Bug Bounty Projects
    {
      title: "Critical Infrastructure 0-Day Research",
      type: "Vulnerability Research",
      description: "Discovered 23 critical vulnerabilities in power grid management systems, earning recognition from Department of Energy and $500K+ bounties.",
      technologies: ["Reverse Engineering", "IDA Pro", "Fuzzing", "SCADA Protocols", "DNP3", "Modbus", "IEC 61850"],
      severity: "Critical",
      findings: 23,
      status: "Disclosed",
      duration: "18 months",
      impact: "$500K+ bounties",
      category: "Bug Bounty"
    },
    {
      title: "Browser Engine Security Research",
      type: "0-Day Discovery",
      description: "Uncovered memory corruption vulnerabilities in Chromium and Firefox engines, contributing to Pwn2Own victories and $300K+ rewards.",
      technologies: ["Browser Internals", "V8 Engine", "SpiderMonkey", "Heap Spraying", "ROP Chains", "Exploit Development"],
      severity: "Critical",
      findings: 12,
      status: "Patched",
      duration: "12 months",
      impact: "Pwn2Own victories",
      category: "Bug Bounty"
    },
    {
      title: "Cloud Provider Security Research",
      type: "Infrastructure Research",
      description: "Identified privilege escalation vulnerabilities across major cloud providers, earning Hall of Fame status and $200K+ in bounties.",
      technologies: ["AWS Internals", "Azure AD", "GCP IAM", "Container Escapes", "Hypervisor Research", "API Security"],
      severity: "High",
      findings: 18,
      status: "Remediated",
      duration: "15 months",
      impact: "Hall of Fame status",
      category: "Bug Bounty"
    },

    // Advanced Incident Response Projects
    {
      title: "APT41 Attribution & Disruption Operation",
      type: "Threat Intelligence",
      description: "Led international investigation into APT41 cryptocurrency theft campaign, resulting in indictments and $100M+ asset recovery.",
      technologies: ["Digital Forensics", "Blockchain Analysis", "Malware RE", "Network Forensics", "OSINT", "International Cooperation"],
      severity: "Critical",
      findings: 156,
      status: "Prosecuted",
      duration: "14 months",
      impact: "Criminal indictments",
      category: "Incident Response"
    },
    {
      title: "SolarWinds Supply Chain Investigation",
      type: "Supply Chain Forensics",
      description: "Principal investigator for Fortune 500 SolarWinds breach response, tracking attacker persistence across 10K+ endpoints and cloud infrastructure.",
      technologies: ["Memory Forensics", "Timeline Analysis", "PowerShell Forensics", "Cloud Forensics", "YARA Rules", "Threat Hunting"],
      severity: "Critical",
      findings: 234,
      status: "Contained",
      duration: "8 months",
      impact: "Congressional testimony",
      category: "Incident Response"
    },
    {
      title: "Critical Infrastructure Ransomware Response",
      type: "Emergency Response",
      description: "Emergency response coordinator for ransomware attack on power grid operator, restoring critical services within 72 hours.",
      technologies: ["ICS Forensics", "SCADA Recovery", "Emergency Protocols", "Crisis Management", "Media Relations", "Regulatory Compliance"],
      severity: "Critical",
      findings: 67,
      status: "Restored",
      duration: "72 hours",
      impact: "Grid stability maintained",
      category: "Incident Response"
    },

    // Interplanetary Software Engineering Projects
    {
      title: "Mars Rover Swarm Intelligence Navigation",
      type: "Autonomous Space Systems",
      description: "Self-organizing swarm intelligence system for coordinated multi-rover exploration missions with distributed decision-making, quantum communication protocols, and adaptive learning in extreme environments.",
      technologies: ["Swarm Intelligence", "Quantum Communications", "Distributed Consensus", "Adaptive AI", "Radiation-Hardened Computing", "Real-time Fusion", "Autonomous Planning", "Space-Grade ML"],
      severity: "Mission Success Critical",
      findings: 0,
      status: "Multi-Planet Operations",
      duration: "48 months",
      impact: "Interplanetary exploration",
      metrics: "15+ rovers coordinated",
      category: "Space Engineering"
    },
    {
      title: "International Space Station Life Support Control",
      type: "Mission Critical Systems",
      description: "Real-time control software for ISS atmospheric systems with triple-redundant safety mechanisms and zero-downtime requirements.",
      technologies: ["C", "Ada", "Real-time OS", "Hardware Abstraction", "Safety Critical", "Redundancy Systems", "Space Standards"],
      severity: "Life Critical",
      findings: 0,
      status: "ISS Operations",
      duration: "48 months",
      impact: "Crew safety systems",
      category: "Space Engineering"
    },
    {
      title: "Deep Space Network Communication Protocol",
      type: "Interplanetary Communication",
      description: "Novel communication protocol for deep space missions with error correction across 300M+ mile distances and signal delays.",
      technologies: ["DSP", "Error Correction", "Protocol Design", "Signal Processing", "Antenna Arrays", "Reed-Solomon Codes"],
      severity: "Mission Critical",
      findings: 0,
      status: "Deep Space Active",
      duration: "30 months",
      impact: "Interplanetary communication",
      category: "Space Engineering"
    },
    {
      title: "Satellite Constellation Command & Control",
      type: "Distributed Space Systems",
      description: "Autonomous coordination system for 1000+ satellite constellation with collision avoidance and formation flying algorithms.",
      technologies: ["Distributed Systems", "Orbital Mechanics", "Real-time Coordination", "Collision Avoidance", "Formation Flying"],
      severity: "Mission Critical",
      findings: 0,
      status: "Orbital Operations",
      duration: "42 months",
      impact: "Global connectivity",
      category: "Space Engineering"
    },

    // Original Cybersecurity Projects (keeping existing ones)
    {
      title: "SolarWinds-Style Supply Chain Attack Simulation",
      type: "Advanced Persistent Threat",
      description: "Reverse-engineered and simulated the SolarWinds SUNBURST attack, developing comprehensive detection framework and automated SBOM analysis tools for supply chain security.",
      technologies: ["SBOM Analysis", "Code Signing", "Binary Diffing", "CI/CD Security", "Go", "Rust", "Digital Forensics"],
      severity: "Critical",
      findings: 89,
      status: "Published",
      duration: "7 months",
      impact: "Protected 1000+ organizations",
      category: "Cybersecurity"
    },
    {
      title: "APT Simulation & Defense Framework",
      type: "Advanced Persistent Threat", 
      description: "Comprehensive simulation of advanced persistent threats with machine learning-based detection algorithms and automated incident response.",
      technologies: ["Python", "TensorFlow", "SIEM", "Docker", "Kubernetes"],
      severity: "Critical",
      findings: 127,
      status: "Active",
      duration: "6 months",
      impact: "Enterprise deployment",
      category: "Cybersecurity"
    },
    {
      title: "Zero-Day Exploit Discovery Engine",
      type: "Vulnerability Research",
      description: "Automated fuzzing framework that discovered 15 critical vulnerabilities in major enterprise software, including CVE-2023-XXXX series.",
      technologies: ["C++", "Assembly", "Fuzzing", "LLVM", "Binary Analysis"],
      severity: "Critical",
      findings: 15,
      status: "Published", 
      duration: "4 months",
      impact: "Industry recognition",
      category: "Cybersecurity"
    },

    // AI/ML Projects
    {
      title: "Autonomous Trading Algorithm with Reinforcement Learning",
      type: "AI/ML System",
      description: "Deep Q-Network trading system achieving 347% annual returns with sophisticated risk management and market microstructure analysis.",
      technologies: ["PyTorch", "Ray", "Apache Kafka", "Redis", "PostgreSQL", "WebSockets", "C++"],
      metrics: "347% ROI",
      findings: 0,
      status: "Production",
      duration: "8 months", 
      impact: "$2.3M+ managed assets",
      category: "AI/Finance"
    },
    {
      title: "Large Language Model Fine-tuning Infrastructure",
      type: "Distributed Systems",
      description: "Scalable infrastructure for fine-tuning 70B+ parameter models with custom RLHF pipeline and distributed training optimization.",
      technologies: ["PyTorch", "DeepSpeed", "CUDA", "Kubernetes", "Ray", "Weights & Biases", "TensorBoard"],
      metrics: "98.7% efficiency",
      findings: 0,
      status: "Open Source",
      duration: "5 months",
      impact: "10K+ GitHub stars",
      category: "AI/ML"
    },
    {
      title: "Computer Vision Pipeline for Medical Diagnosis",
      type: "Healthcare AI",
      description: "HIPAA-compliant medical imaging analysis system with 99.2% accuracy for early cancer detection using custom CNN architecture.",
      technologies: ["TensorFlow", "OpenCV", "DICOM", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      metrics: "99.2% accuracy",
      findings: 0,
      status: "FDA Review",
      duration: "12 months",
      impact: "Clinical trials",
      category: "AI/ML"
    },

    // Quantitative Finance
    {
      title: "High-Frequency Trading Execution Engine",
      type: "Financial Technology",
      description: "Ultra-low latency trading system with custom FPGA acceleration achieving sub-microsecond execution times for algorithmic trading.",
      technologies: ["C++", "FPGA", "InfiniBand", "FIX Protocol", "Market Data", "RDMA", "Linux Kernel"],
      metrics: "0.8μs latency",
      findings: 0,
      status: "Production",
      duration: "10 months",
      impact: "$50M+ daily volume",
      category: "Finance/Quant"
    },
    {
      title: "Options Pricing Monte Carlo Simulation",
      type: "Quantitative Research",
      description: "Advanced options pricing engine with GPU-accelerated Monte Carlo simulations and exotic derivatives valuation models.",
      technologies: ["CUDA", "C++", "Python", "NumPy", "QuantLib", "OpenMP", "Bloomberg API"],
      metrics: "10M+ paths/sec",
      findings: 0,
      status: "Production",
      duration: "6 months",
      impact: "Institutional deployment",
      category: "Finance/Quant"
    },

    // Blockchain/DeFi
    {
      title: "Cross-Chain DeFi Protocol with MEV Protection",
      type: "Blockchain Infrastructure",
      description: "Decentralized protocol enabling cross-chain yield farming with built-in MEV protection and flash loan arbitrage detection.",
      technologies: ["Solidity", "Rust", "Substrate", "TheGraph", "Hardhat", "Web3.js", "IPFS"],
      metrics: "$45M TVL",
      findings: 0,
      status: "Mainnet",
      duration: "14 months",
      impact: "50K+ users",
      category: "Blockchain"
    },
    {
      title: "Layer 2 Scaling Solution with ZK-SNARKs",
      type: "Blockchain Research",
      description: "Zero-knowledge rollup implementation with custom circuits for private transactions and 1000x gas cost reduction.",
      technologies: ["Circom", "Rust", "Solidity", "Node.js", "PLONK", "Merkle Trees", "WebAssembly"],
      metrics: "1000x gas savings",
      findings: 0,
      status: "Testnet",
      duration: "9 months",
      impact: "Research publication",
      category: "Blockchain"
    },

    // Backend/Infrastructure Projects
    {
      title: "Distributed Event-Sourcing Architecture",
      type: "Backend Infrastructure",
      description: "Event-driven microservices architecture handling 1M+ events/second with CQRS pattern and distributed consensus.",
      technologies: ["Go", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Prometheus"],
      metrics: "1M+ events/sec",
      findings: 0,
      status: "Production",
      duration: "8 months",
      impact: "99.99% uptime",
      category: "Backend"
    },
    {
      title: "Real-time Analytics Engine",
      type: "Data Engineering",
      description: "Stream processing platform with custom operators for real-time feature engineering and model inference at scale.",
      technologies: ["Apache Flink", "Scala", "Cassandra", "Kafka", "Elasticsearch", "Grafana", "Kubernetes"],
      metrics: "10GB/sec throughput",
      findings: 0,
      status: "Production",
      duration: "7 months",
      impact: "Enterprise adoption",
      category: "Backend"
    },
    {
      title: "Global CDN with Edge Computing",
      type: "Infrastructure",
      description: "Multi-region content delivery network with serverless edge functions processing 500M+ requests daily.",
      technologies: ["Go", "Cloudflare Workers", "AWS Lambda@Edge", "Terraform", "Prometheus", "Grafana"],
      metrics: "500M+ req/day",
      findings: 0,
      status: "Production",
      duration: "9 months",
      impact: "Global deployment",
      category: "Backend"
    },

    // Founding Engineer / MVP Scaling Projects
    {
      title: "Fintech Payment Platform (Series A)",
      type: "Founding Engineer",
      description: "Led technical architecture from MVP to Series A, scaling payment processing to $100M+ annually with PCI-DSS compliance.",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe", "Plaid"],
      metrics: "$100M+ processed",
      findings: 0,
      status: "IPO Track",
      duration: "18 months",
      impact: "Series A $25M",
      category: "Founding"
    },
    {
      title: "Healthcare SaaS Platform (YC S22)",
      type: "Technical Co-founder",
      description: "Built HIPAA-compliant telemedicine platform from 0 to 10K+ patients, leading technical team through Y Combinator.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "WebRTC", "Stripe", "Twilio"],
      metrics: "10K+ patients",
      findings: 0,
      status: "Active",
      duration: "14 months",
      impact: "YC Demo Day",
      category: "Founding"
    },
    {
      title: "EdTech Learning Platform",
      type: "Lead Engineer",
      description: "Scaled educational platform from prototype to 1M+ users with adaptive learning algorithms and real-time collaboration.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "WebSockets", "AWS", "TensorFlow"],
      metrics: "1M+ users",
      findings: 0,
      status: "Acquired",
      duration: "12 months",
      impact: "$50M acquisition",
      category: "Founding"
    },

    // App Store Projects
    {
      title: "AI Fitness Coach (iOS/Android)",
      type: "Mobile Application",
      description: "Computer vision-powered fitness app with real-time form correction, achieving 4.8★ rating and 500K+ downloads.",
      technologies: ["React Native", "TensorFlow Lite", "CoreML", "Firebase", "Stripe", "AWS", "OpenCV"],
      metrics: "500K+ downloads",
      findings: 0,
      status: "Live",
      duration: "10 months",
      impact: "4.8★ rating",
      category: "Mobile"
    },
    {
      title: "Crypto Portfolio Tracker",
      type: "Mobile & Web App",
      description: "Multi-platform cryptocurrency portfolio tracker with DeFi integration and advanced analytics, $2M+ tracked assets.",
      technologies: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Web3", "CoinGecko API", "Push Notifications"],
      metrics: "$2M+ tracked",
      findings: 0,
      status: "Featured",
      duration: "8 months",
      impact: "App Store Featured",
      category: "Mobile"
    },

    // Frontend Projects
    {
      title: "Enterprise Design System",
      type: "Frontend Architecture",
      description: "Comprehensive design system with 200+ components, used across 50+ applications with automated testing and documentation.",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Chromatic", "Figma API", "Rollup", "NPM"],
      metrics: "200+ components",
      findings: 0,
      status: "Adopted",
      duration: "6 months",
      impact: "50+ apps using",
      category: "Frontend"
    },
    {
      title: "Real-time Collaboration Platform",
      type: "Frontend Engineering",
      description: "Google Docs-style collaborative editor with WebRTC video calls and real-time synchronization for 1000+ concurrent users.",
      technologies: ["React", "WebRTC", "Socket.io", "Operational Transform", "WebGL", "Service Workers"],
      metrics: "1000+ concurrent",
      findings: 0,
      status: "Production",
      duration: "9 months",
      impact: "Enterprise adoption",
      category: "Frontend"
    },

    // Robotics Projects
    {
      title: "Autonomous Warehouse Robot Fleet",
      type: "Robotics Engineering",
      description: "SLAM-based navigation system for warehouse robots with computer vision and path optimization, managing 500+ robots.",
      technologies: ["ROS2", "C++", "Python", "OpenCV", "LiDAR", "Gazebo", "TensorFlow", "MQTT"],
      metrics: "500+ robots",
      findings: 0,
      status: "Deployed",
      duration: "15 months",
      impact: "40% efficiency gain",
      category: "Robotics"
    },
    {
      title: "Surgical Robot Control System",
      type: "Medical Robotics",
      description: "FDA-compliant precision control system for minimally invasive surgery with haptic feedback and sub-millimeter accuracy.",
      technologies: ["C++", "Qt", "Real-time Linux", "CAN Bus", "Force Sensors", "Computer Vision", "Medical Imaging"],
      metrics: "0.1mm precision",
      findings: 0,
      status: "FDA Review",
      duration: "24 months",
      impact: "Clinical trials",
      category: "Robotics"
    },

    // Hardware Projects
    {
      title: "IoT Edge Computing Gateway",
      type: "Hardware Engineering",
      description: "Custom ARM-based gateway processing sensor data from 10K+ devices with edge ML inference and mesh networking.",
      technologies: ["ARM Cortex", "Linux Kernel", "C", "MQTT", "LoRaWAN", "TensorFlow Lite", "FreeRTOS"],
      metrics: "10K+ devices",
      findings: 0,
      status: "Mass Production",
      duration: "18 months",
      impact: "Industrial deployment",
      category: "Hardware"
    },
    {
      title: "FPGA-Accelerated Neural Network",
      type: "Hardware Acceleration",
      description: "Custom FPGA implementation for CNN inference achieving 100x speedup for real-time computer vision applications.",
      technologies: ["Verilog", "FPGA", "Xilinx Vivado", "AXI", "DMA", "OpenCL", "C++", "Computer Vision"],
      metrics: "100x speedup",
      findings: 0,
      status: "Patent Filed",
      duration: "12 months",
      impact: "IP portfolio",
      category: "Hardware"
    },

    // AI Embedded Projects
    {
      title: "Edge AI Security Camera System",
      type: "Embedded AI",
      description: "Privacy-first security system with on-device face recognition and anomaly detection, processing 4K video in real-time.",
      technologies: ["NVIDIA Jetson", "TensorRT", "OpenCV", "CUDA", "Python", "MQTT", "Edge Impulse"],
      metrics: "4K real-time",
      findings: 0,
      status: "Commercialized",
      duration: "10 months",
      impact: "1000+ installations",
      category: "AI Embedded"
    },
    {
      title: "Autonomous Drone Navigation",
      type: "Embedded Systems",
      description: "Computer vision-based navigation system for search and rescue drones with SLAM and object detection capabilities.",
      technologies: ["Raspberry Pi", "OpenCV", "ROS", "MAVLink", "ArduPilot", "TensorFlow Lite", "GPS/IMU"],
      metrics: "5km autonomous",
      findings: 0,
      status: "Field Tested",
      duration: "8 months",
      impact: "Emergency services",
      category: "AI Embedded"
    },

    // Machine Learning Projects
    {
      title: "Fraud Detection ML Pipeline",
      type: "Production ML",
      description: "Real-time fraud detection system processing 10M+ transactions daily with ensemble models and feature engineering.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Apache Kafka", "MLflow", "Kubernetes", "PostgreSQL"],
      metrics: "99.8% accuracy",
      findings: 0,
      status: "Production",
      duration: "7 months",
      impact: "$50M+ protected",
      category: "Machine Learning"
    },
    {
      title: "Recommendation Engine at Scale",
      type: "ML Infrastructure",
      description: "Collaborative filtering system serving 100M+ users with deep learning models and A/B testing framework.",
      technologies: ["TensorFlow", "Spark", "Cassandra", "Redis", "Kubernetes", "Apache Beam", "BigQuery"],
      metrics: "100M+ users",
      findings: 0,
      status: "Production",
      duration: "9 months",
      impact: "25% engagement lift",
      category: "Machine Learning"
    },
    {
      title: "NLP Document Processing Platform",
      type: "Natural Language Processing",
      description: "Enterprise document processing with custom transformer models for contract analysis and regulatory compliance.",
      technologies: ["PyTorch", "Transformers", "spaCy", "FastAPI", "PostgreSQL", "Elasticsearch", "Docker"],
      metrics: "1M+ docs/day",
      findings: 0,
      status: "Enterprise",
      duration: "11 months",
      impact: "Legal industry",
      category: "Machine Learning"
    }
  ];

  const categories = ["All", "Penetration Testing", "Cloud Security", "Bug Bounty", "Incident Response", "Space Engineering", "Cybersecurity", "AI/ML", "AI/Finance", "Finance/Quant", "Blockchain", "Backend", "Founding", "Mobile", "Frontend", "Robotics", "Hardware", "AI Embedded", "Machine Learning"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const skills = [
    { 
      category: "Penetration Testing", 
      icon: <Target className="h-6 w-6" />,
      tools: ["Metasploit", "Cobalt Strike", "Burp Suite", "Nmap", "Nuclei", "BloodHound", "Empire"],
      proficiency: 95
    },
    { 
      category: "Malware Analysis", 
      icon: <Cpu className="h-6 w-6" />,
      tools: ["IDA Pro", "Ghidra", "x64dbg", "YARA", "Cuckoo Sandbox", "REMnux", "Volatility"],
      proficiency: 92
    },
    { 
      category: "Digital Forensics", 
      icon: <FileSearch className="h-6 w-6" />,
      tools: ["Autopsy", "FTK", "EnCase", "Volatility", "Timeline Analysis", "Memory Forensics"],
      proficiency: 88
    },
    { 
      category: "Threat Intelligence", 
      icon: <Brain className="h-6 w-6" />,
      tools: ["MISP", "OpenCTI", "STIX/TAXII", "ATT&CK", "Threat Hunting", "IOC Analysis"],
      proficiency: 90
    },
    { 
      category: "Cloud Security", 
      icon: <Cloud className="h-6 w-6" />,
      tools: ["AWS Security", "Azure Sentinel", "GCP Security", "Kubernetes", "Terraform", "CloudTrail"],
      proficiency: 85
    },
    { 
      category: "Network Security", 
      icon: <Wifi className="h-6 w-6" />,
      tools: ["Wireshark", "Snort", "Suricata", "pfSense", "Zeek", "Network Segmentation"],
      proficiency: 91
    }
  ];

  const certifications = [
    { name: "CISSP", issuer: "ISC²", status: "Active" },
    { name: "OSCP", issuer: "Offensive Security", status: "Active" },
    { name: "GCIH", issuer: "GIAC", status: "Active" },
    { name: "GPEN", issuer: "GIAC", status: "Active" },
    { name: "GSEC", issuer: "GIAC", status: "Active" },
    { name: "CEH", issuer: "EC-Council", status: "Active" },
    { name: "Security+", issuer: "CompTIA", status: "Active" },
    { name: "CISTP", issuer: "Mile2", status: "Pursuing" }
  ];

  const achievements = [
    { title: "CVE Discoveries", count: "89", description: "Critical 0-days found in critical infrastructure" },
    { title: "Bug Bounties", count: "$1.2M", description: "Elite researcher Hall of Fame status" },
    { title: "Security Clearance", count: "TS/SCI", description: "Top Secret with polygraph access" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
      case "Resolved":
      case "Deployed":
      case "Disclosed":
      case "Production":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Ongoing":
      case "Research Phase":
        return <Activity className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Penetration Testing": return <Target className="h-5 w-5" />;
      case "Cloud Security": return <Cloud className="h-5 w-5" />;
      case "Bug Bounty": return <Bug className="h-5 w-5" />;
      case "Incident Response": return <AlertOctagon className="h-5 w-5" />;
      case "Space Engineering": return <Rocket className="h-5 w-5" />;
      case "Cybersecurity": return <Shield className="h-5 w-5" />;
      case "AI/ML": return <Brain className="h-5 w-5" />;
      case "AI/Finance": return <BarChart3 className="h-5 w-5" />;
      case "Finance/Quant": return <DollarSign className="h-5 w-5" />;
      case "Blockchain": return <Blocks className="h-5 w-5" />;
      case "Backend": return <Server className="h-5 w-5" />;
      case "Founding": return <TrendingUp className="h-5 w-5" />;
      case "Mobile": return <Smartphone className="h-5 w-5" />;
      case "Frontend": return <Monitor className="h-5 w-5" />;
      case "Robotics": return <Bot className="h-5 w-5" />;
      case "Hardware": return <Microchip className="h-5 w-5" />;
      case "AI Embedded": return <Cpu className="h-5 w-5" />;
      case "Machine Learning": return <Settings className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-matrix">
      {/* Animated Hero Section */}
      <div className="relative overflow-hidden matrix-bg border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary-glow)/0.1),transparent_50%)]"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Shield className="h-20 w-20 text-primary animate-pulse-glow" />
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 text-gradient-cyber">
                Elite Security Architect & Space Engineer
              </h1>
              <p className="text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Senior Software Engineer  & Cyber Security Engineer specializing in Network secruity, Threat Detection, Incidence Response
                Zero-Day Research, Critical Infrastructure Security, and Mission-Critical Space Systems.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {certifications.slice(0, 7).map((cert, index) => (
                  <Badge key={index} variant="outline" className="text-base px-4 py-2 border-primary/30 hover:border-primary transition-colors">
                    {cert.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-primary/20 shadow-cyber hover:shadow-elevated transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                    <div className="font-semibold mb-1">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Skills Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge skills in offensive security, threat research, and defensive technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-cyber hover:shadow-glow bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-primary">{skill.icon}</div>
                  {skill.category}
                </CardTitle>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Proficiency</span>
                    <span className="font-semibold">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Multi-Domain Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Technical Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge projects spanning cybersecurity, AI/ML, quantitative finance, blockchain, and distributed systems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-cyber" 
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category === "All" && <Layers className="h-4 w-4 mr-2" />}
              {category === "Penetration Testing" && <Target className="h-4 w-4 mr-2" />}
              {category === "Cloud Security" && <Cloud className="h-4 w-4 mr-2" />}
              {category === "Bug Bounty" && <Bug className="h-4 w-4 mr-2" />}
              {category === "Incident Response" && <AlertOctagon className="h-4 w-4 mr-2" />}
              {category === "Space Engineering" && <Rocket className="h-4 w-4 mr-2" />}
              {category === "Cybersecurity" && <Shield className="h-4 w-4 mr-2" />}
              {category === "AI/ML" && <Brain className="h-4 w-4 mr-2" />}
              {category === "AI/Finance" && <BarChart3 className="h-4 w-4 mr-2" />}
              {category === "Finance/Quant" && <DollarSign className="h-4 w-4 mr-2" />}
              {category === "Blockchain" && <Blocks className="h-4 w-4 mr-2" />}
              {category === "Backend" && <Server className="h-4 w-4 mr-2" />}
              {category === "Founding" && <TrendingUp className="h-4 w-4 mr-2" />}
              {category === "Mobile" && <Smartphone className="h-4 w-4 mr-2" />}
              {category === "Frontend" && <Monitor className="h-4 w-4 mr-2" />}
              {category === "Robotics" && <Bot className="h-4 w-4 mr-2" />}
              {category === "Hardware" && <Microchip className="h-4 w-4 mr-2" />}
              {category === "AI Embedded" && <Cpu className="h-4 w-4 mr-2" />}
              {category === "Machine Learning" && <Settings className="h-4 w-4 mr-2" />}
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-cyber hover:shadow-elevated bg-card/80 backdrop-blur-sm group">
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {getCategoryIcon(project.category)}
                      </div>
                      <Badge variant="outline" className="border-primary/30">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    {getStatusIcon(project.status)}
                    {project.severity && (
                      <Badge variant={getSeverityColor(project.severity)} className="text-xs">
                        {project.severity}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {project.findings !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                          <FileSearch className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Findings:</span>
                          <span className="font-bold text-primary">{project.findings}</span>
                        </div>
                      )}
                      {project.metrics && (
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Metrics:</span>
                          <span className="font-bold text-primary">{project.metrics}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <Activity className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{project.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">Impact</div>
                      <div className="font-semibold text-primary">{project.impact}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Advanced Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(project.status)}
                      <span className="text-sm font-medium">{project.status}</span>
                      <Badge variant="outline" className="text-xs border-primary/30">
                        {project.category}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      Technical Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advanced Metrics & Recognition */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Elite Performance Metrics</h2>
            <p className="text-xl text-muted-foreground">Quantifiable impact on global cybersecurity landscape</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-primary/20 shadow-cyber bg-gradient-to-b from-primary/5 to-transparent">
              <CardContent className="p-8">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">847+</div>
                <div className="text-muted-foreground font-medium">Critical Vulns Discovered</div>
                <div className="text-sm text-primary mt-1">17 CVEs Assigned</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 shadow-cyber bg-gradient-to-b from-primary/5 to-transparent">
              <CardContent className="p-8">
                <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">94%</div>
                <div className="text-muted-foreground font-medium">False Positive Reduction</div>
                <div className="text-sm text-primary mt-1">AI-Powered Detection</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 shadow-cyber bg-gradient-to-b from-primary/5 to-transparent">
              <CardContent className="p-8">
                <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">89%</div>
                <div className="text-muted-foreground font-medium">Response Time Improvement</div>
                <div className="text-sm text-primary mt-1">Automated Orchestration</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 shadow-cyber bg-gradient-to-b from-primary/5 to-transparent">
              <CardContent className="p-8">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-muted-foreground font-medium">Systems Protected</div>
                <div className="text-sm text-primary mt-1">Global Enterprise Impact</div>
              </CardContent>
            </Card>
          </div>

          {/* Recognition Section */}
          <Card className="border-primary/20 shadow-elevated bg-gradient-cyber text-primary-foreground mb-16">
            <CardContent className="p-12 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Industry Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-bold mb-2">Top 1%</div>
                  <div className="opacity-90">Global Bug Bounty Hunters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Hall of Fame</div>
                  <div className="opacity-90">Microsoft, Google, Apple</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">23 Talks</div>
                  <div className="opacity-90">DEF CON, Black Hat, BSides</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-primary/20 shadow-cyber bg-card/80 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Infrastructure?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how advanced threat modeling and proactive security measures can protect your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button
  size="lg"
  className="bg-gradient-cyber hover:opacity-90 transition-opacity"
  onClick={() => window.open("https://calendly.com/adedeji809/30min", "_blank")}
>
  <Users className="h-5 w-5 mr-2" />
  Schedule Consultation
</Button>
                      <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                    <FileSearch className="h-5 w-5 mr-2" />
                    View Technical Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
