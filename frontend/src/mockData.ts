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


const projects: Project[] = [
  {
    id: 1,
    title: "RingKita - Mobile Attendance & Session Tracker",
    category: "Mobile App",
    description:
      "Aplikasi absensi berbasis mobile untuk pelacakan otomatis sisa sesi latihan member, pencatatan kehadiran, serta fitur pembelian paket latihan secara langsung.",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/portofolio.jpg",
  }
];


const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML5 / CSS3", level: "Intermediate", percentage: 75 },
      { name: "JavaScript (ES6+)", level: "Intermediate", percentage: 70 },
      { name: "React.js", level: "Beginner", percentage: 55 },
      { name: "Next.js (App Router)", level: "Beginner", percentage: 50 },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Beginner", percentage: 55 },
      { name: "Express.js", level: "Intermediate", percentage: 60 },
      { name: "MySQL", level: "Intermediate", percentage: 65 },
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
      { name: "Git & GitHub", level: "Intermediate", percentage: 70 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 60 },
      { name: "Postman", level: "Intermediate", percentage: 65 },
      { name: "VS Code", level: "Intermediate", percentage: 80 },
    ],
  },
];


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


const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Drs. Eko Prasetyo",
    role: "Kepala Jurusan RPL",
    company: "SMK Negeri 1",
    avatar: "👤",
    stars: 5,
    quote:
      "Fatih menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatif dan skill.",
  },
  {
    id: 2,
    name: "Rian Ardiansyah",
    role: "Teman Sekelas / Ketua Kelas",
    company: "XII RPL 1",
    avatar: "👨‍💻",
    stars: 5,
    quote:
      "Belajar kelompok bareng Fatih selalu asik. Dia pintar menjelaskan konsep pemrograman yang susah dengan bahasa yang gampang dimengerti oleh teman sekelas.",
  },
  {
    id: 3,
    name: "Siti Rahmawati",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Negeri 1",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Pemahaman Fatih terhadap framework Next.js dan Tailwind CSS v4 di usianya sekarang sangat mengagumkan. Proyek-proyeknya dikerjakan dengan sangat rapi.",
  },
];

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}