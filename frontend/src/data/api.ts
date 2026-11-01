const API_URL = "http://localhost:5000/api";

/* =========================
   INTERFACES
========================= */

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
  id: number;
  name: string;
  level: string;
  percentage: number;
  group_id: number;
  group_title: string;
  group_icon: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    percentage: number;
  }[];
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

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface DashboardStats {
  projects: number;
  skills: number;
  certificates: number;
  testimonials: number;
  contacts: number;
}

/* =========================
   HELPER
========================= */

async function fetchJson<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      text || `Request failed: ${response.status}`
    );
  }

  return response.json();
}

/* =========================
   PROJECTS - PUBLIC
========================= */

export async function fetchProjects(): Promise<Project[]> {
  const result = await fetchJson<{
    success: boolean;
    data: any[];
  }>(`${API_URL}/projects`);

  return result.data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    tech:
      typeof item.tech === "string"
        ? JSON.parse(item.tech)
        : item.tech || [],
    demoUrl: item.demo_url || "#",
    githubUrl: item.github_url || "#",
    image: item.image || "",
  }));
}

/* =========================
   PROJECTS - ADMIN CRUD
========================= */

export async function createProject(data: {
  title: string;
  category: string;
  description: string;
  tech: string[];
  demo_url: string;
  github_url: string;
  image: string;
}) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateProject(
  id: number,
  data: {
    title: string;
    category: string;
    description: string;
    tech: string[];
    demo_url: string;
    github_url: string;
    image: string;
  }
) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteProject(id: number) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   SKILLS - PUBLIC
========================= */

export async function fetchSkills(): Promise<SkillGroup[]> {
  const result = await fetchJson<{
    success: boolean;
    data: Skill[];
  }>(`${API_URL}/skills`);

  const grouped = new Map<string, SkillGroup>();

  result.data.forEach((skill) => {
    if (!grouped.has(skill.group_title)) {
      grouped.set(skill.group_title, {
        title: skill.group_title,
        icon: skill.group_icon || "💻",
        skills: [],
      });
    }

    // Memberikan nilai realistis jika persentase di database bernilai 0 atau kosong
    let val = Number(skill.percentage);
    if (!val || val === 0) {
      const nameLower = skill.name.toLowerCase();
      if (nameLower.includes("html") || nameLower.includes("css") || nameLower.includes("vs code")) {
        val = 80;
      } else if (nameLower.includes("javascript") || nameLower.includes("mysql") || nameLower.includes("express")) {
        val = 70;
      } else if (nameLower.includes("react") || nameLower.includes("node") || nameLower.includes("figma")) {
        val = 65;
      } else {
        val = 60;
      }
    }

    grouped.get(skill.group_title)!.skills.push({
      name: skill.name,
      level: skill.level,
      percentage: val,
    });
  });

  return Array.from(grouped.values());
}

/* =========================
   SKILLS - ADMIN CRUD
========================= */

export async function fetchAdminSkills(): Promise<Skill[]> {
  const result = await fetchJson<{
    success: boolean;
    data: Skill[];
  }>(`${API_URL}/skills`);

  return result.data;
}

export async function createSkill(data: {
  name: string;
  level: string;
  percentage: number;
  group_id: number;
}) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateSkill(
  id: number,
  data: {
    name: string;
    level: string;
    percentage: number;
    group_id: number;
  }
) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/skills/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteSkill(id: number) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/skills/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   CERTIFICATES - PUBLIC
========================= */

export async function fetchCertificates(): Promise<Certificate[]> {
  const result = await fetchJson<{
    success: boolean;
    data: any[];
  }>(`${API_URL}/certificates`);

  return result.data.map((item) => ({
    id: item.id,
    title: item.title,
    issuer: item.issuer,
    date: item.date,
    credentialId: item.credential_id,
    verificationUrl: item.verification_url || "#",
  }));
}

/* =========================
   CERTIFICATES - ADMIN CRUD
========================= */

export async function createCertificate(data: {
  title: string;
  issuer: string;
  date: string;
  credential_id: string;
  verification_url: string;
}) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/certificates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateCertificate(
  id: number,
  data: {
    title: string;
    issuer: string;
    date: string;
    credential_id: string;
    verification_url: string;
  }
) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/certificates/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteCertificate(id: number) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/certificates/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   TESTIMONIALS - PUBLIC
========================= */

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const result = await fetchJson<{
    success: boolean;
    data: Testimonial[];
  }>(`${API_URL}/testimonials`);

  return result.data;
}

/* =========================
   TESTIMONIALS - ADMIN CRUD
========================= */

export async function fetchAdminTestimonials(): Promise<Testimonial[]> {
  const result = await fetchJson<{
    success: boolean;
    data: Testimonial[];
  }>(`${API_URL}/testimonials`);

  return result.data;
}

export async function createTestimonial(data: {
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/testimonials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateTestimonial(
  id: number,
  data: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    stars: number;
    quote: string;
  }
) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/testimonials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteTestimonial(id: number) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/testimonials/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   MESSAGES - PUBLIC
========================= */

export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: ContactMessage;
  }>(`${API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

/* =========================
   MESSAGES - ADMIN
========================= */

export async function fetchMessages(): Promise<ContactMessage[]> {
  const result = await fetchJson<{
    success: boolean;
    data: ContactMessage[];
  }>(`${API_URL}/messages`);

  return result.data;
}

export async function deleteMessage(id: number) {
  return fetchJson<{
    success: boolean;
    message: string;
    data: any;
  }>(`${API_URL}/messages/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   DASHBOARD
========================= */

export async function fetchDashboardStats(): Promise<DashboardStats> {
  const result = await fetchJson<{
    success: boolean;
    data: DashboardStats;
  }>(`${API_URL}/dashboard/stats`);

  return result.data;
}