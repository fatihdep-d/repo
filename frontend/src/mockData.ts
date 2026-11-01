export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}


// =========================
// PROJECTS
// =========================
// =========================
// PROJECTS
// =========================

const projects: Project[] = [
  {
    id: 1,
    title: "RingKita",
    category: "Mobile App",
    description:
      "RingKita adalah aplikasi manajemen sasana boxing yang membantu anggota melakukan pembayaran membership dan melakukan absensi latihan secara lebih mudah dan terorganisir.",
    tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/fatihdep-d/repo",
    image: "/ringkita.jpg",
  },
];
// =========================
// SKILLS
// =========================

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      {
        name: "HTML5 / CSS3",
        level: "Intermediate",
        percentage: 75,
      },
      {
        name: "JavaScript (ES6+)",
        level: "Intermediate",
        percentage: 70,
      },
      {
        name: "React.js",
        level: "Beginner",
        percentage: 55,
      },
      {
        name: "Next.js (App Router)",
        level: "Beginner",
        percentage: 50,
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
        percentage: 70,
      },
    ],
  },

  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        level: "Beginner",
        percentage: 55,
      },
      {
        name: "Express.js",
        level: "Intermediate",
        percentage: 60,
      },
      {
        name: "MySQL",
        level: "Intermediate",
        percentage: 65,
      },
      {
        name: "RESTful API Development",
        level: "Intermediate",
        percentage: 60,
      },
    ],
  },

  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      {
        name: "Git & GitHub",
        level: "Intermediate",
        percentage: 70,
      },
      {
        name: "Figma (UI/UX)",
        level: "Intermediate",
        percentage: 60,
      },
      {
        name: "Postman",
        level: "Intermediate",
        percentage: 65,
      },
      {
        name: "VS Code",
        level: "Intermediate",
        percentage: 80,
      },
    ],
  },
];


// =========================
// CERTIFICATES
// =========================

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025",
    credentialId: "DICODING-1092B3",
    verificationUrl:
      "https://www.netacad.com/certificates/?issuanceId=6ac482e2-0c92-4bab-94cb-6adc2f1ead08",
  },

  {
    id: 2,
    title: "Belajar Membuat Aplikasi Back-End Pemula",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    credentialId: "DICODING-208173",
    verificationUrl: "#",
  },

  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Maret 2025",
    credentialId: "FCC-RESPONSIVE-WD",
    verificationUrl: "#",
  },

  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "April 2025",
    credentialId: "FCC-JS-ALGO",
    verificationUrl: "#",
  },

  {
    id: 5,
    title: "Junior Web Developer",
    issuer: "BNSP / LSP Informatika",
    date: "Mei 2025",
    credentialId: "BNSP-JWD-2025",
    verificationUrl: "#",
  },
];


// =========================
// TESTIMONIALS
// =========================

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Muhammad Saad",
    role: "Kepala Sekolah",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Fatih menunjukkan semangat belajar yang baik dan memiliki ketertarikan yang kuat dalam bidang teknologi serta pengembangan aplikasi.",
  },

  {
    id: 2,
    name: "Ali Akbar",
    role: "Kepala Sekolah Sarpras",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Fatih memiliki kemauan untuk terus belajar dan mengembangkan kemampuan dalam bidang teknologi serta mampu bekerja sama dengan baik dalam berbagai kegiatan.",
  },

  {
    id: 3,
    name: "Farid Mawardi",
    role: "Kaprodi RPL",
    company: "SMK Telkom Makassar",
    avatar: "👨‍💻",
    stars: 5,
    quote:
      "Fatih memiliki ketertarikan yang baik terhadap pemrograman dan terus berusaha meningkatkan kemampuan dalam pengembangan aplikasi dan website.",
  },

  {
    id: 4,
    name: "Alif Anhar",
    role: "Guru Produktif RPL",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Fatih cukup aktif dalam mempelajari teknologi web dan menunjukkan perkembangan yang baik dalam mengerjakan tugas serta proyek pemrograman.",
  },

  {
    id: 5,
    name: "Oktavian",
    role: "Guru Produktif RPL",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Fatih memiliki semangat belajar yang baik dan terus berusaha mengembangkan kemampuan teknisnya dalam bidang Rekayasa Perangkat Lunak.",
  },
];


// =========================
// DELAY
// =========================

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// =========================
// GET PROJECTS
// =========================

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}


// =========================
// GET SKILLS
// =========================

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}


// =========================
// GET CERTIFICATES
// =========================

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}


// =========================
// GET TESTIMONIALS
// =========================

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}