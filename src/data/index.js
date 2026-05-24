// ============================================================
// DATA FILE — Edit semua konten di sini
// ============================================================

export const profile = {
  name: 'Muhamad Fadil',
  nickname: 'Fadil',
  title: 'AI Engineer',
  tagline: 'Building the future, one commit at a time.',
  bio: `Halo! Saya Muhamad Fadil, mahasiswa Teknik Informatika yang passionate di bidang web development, kecerdasan buatan, dan desain digital. Saya percaya teknologi bukan sekadar alat — ini adalah bahasa baru untuk bercerita dan menciptakan dampak nyata.`,
  bioDetail: `Selain ngoding, saya berminat di bidang komunikasi dan aktif sebagai MC di berbagai event kampus, komunitas dan event - event lainnya. Saya suka bereksperimen dengan stack baru, mendesain antarmuka yang intuitif, dan berbagi ilmu lewat komunitas developer lokal.`,
  email: 'dilmuh@gmail.com',
  github: 'https://github.com/muhamadfadil316',
  linkedin: 'https://linkedin.com/in/muhamadfadil',
  instagram: 'https://instagram.com/fadilorsy',
  location: 'Jakarta, Indonesia',
  available: true,
}

export const skills = [
  { name: 'Frontend Development', icon: '⚡', level: 90, color: '#4F8EF7' },
  { name: 'UI/UX Design', icon: '🎨', level: 80, color: '#7C5CF6' },
  { name: 'Public Speaking', icon: '🎙️', level: 85, color: '#38bdf8' },
  { name: 'Artificial Intelligence', icon: '🤖', level: 75, color: '#a78bfa' },
  { name: 'Content Creation', icon: '✍️', level: 70, color: '#34d399' },
  { name: 'Backend Development', icon: '🔧', level: 65, color: '#fbbf24' },
]

export const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js',
  'Tailwind CSS', 'Python', 'PostgreSQL',
  'Figma', 'Git', 'Communication', 'Problem Solving',
]
  
export const projects = [
  {
    title: "Website Portfolio",
    description: "Website portfolio modern menggunakan React.js",
    image: "/images/projects/project1.jpg",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
  },

  {
    title: "UI Dashboard",
    description: "Dashboard admin modern dan responsive",
    image: "/images/projects/project2.jpg",
    tech: ["React", "Vite"],
    github: "#",
    demo: "#",
  },
];

export const mcEvents = [
  {
    id: 1,
    title: 'Studi Banding STT Terpadu Nurul Fikri X Universitas Negeri Jakarta',
    event: 'Sharing Inspiratif',
    date: 'Juli 2025',
    description: 'MC acara Sharing Inspiratif (Study Banding) BEM STT Terpadu Nurul Fikri dengan Universitas Negeri Jakarta dengan peserta total 100+ dari kedua belah pihak.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    id: 2,
    title: 'Studi Banding BEM STT Terpadu Nurul Fikri X LP3I Depok',
    event: 'Studi Banding',
    date: 'Juli 2025',
    description: 'MC Study Banding BEM STT Terpadu Nurul Fikri dengan BEM LP3I Depok dengan peserta total 100+ dari kedua belah pihak',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80',
  },
  {
    id: 3,
    title: 'Workshop AI for Beginners',
    event: 'Google Developer Student Club',
    date: 'Agustus 2024',
    description: 'Pembawa acara workshop intensif AI & Machine Learning untuk mahasiswa semester awal.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
  },
  {
    id: 4,
    title: 'Wisuda & Gala Dinner',
    event: 'Universitas Teknologi Bandung',
    date: 'Juli 2024',
    description: 'MC resmi acara wisuda fakultas dan gala dinner dengan 1000+ tamu undangan.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  },
  {
    id: 5,
    title: 'Seminar Nasional Teknologi',
    event: 'BEM Universitas',
    date: 'Mei 2024',
    description: 'Moderator dan MC seminar nasional "Future of Work in AI Era" dengan pembicara dari Google & Tokopedia.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
  },
  {
    id: 6,
    title: 'Malam Kesenian & Budaya',
    event: 'Himpunan Mahasiswa IF',
    date: 'Maret 2024',
    description: 'MC acara seni budaya tahunan himpunan mahasiswa dengan penampilan 30+ unit kegiatan mahasiswa.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
  },
]

export const experiences = [
  {
    id: 1,
    role: 'Kepala Departemen Hubungan Masyarakat',
    org: 'BEM STT Terpadu Nurul Fikri',
    period: '2026 — Sekarang',
    type: 'Organisasi',
    description: 'Memimpin departemen Hubungan Masyarakat, mengembangkan platform digital BEM, dan mengelola tim.',
    color: '#4F8EF7',
  },
  {
    id: 2,
    role: 'Staf Departemen Hubungan Masyarakat',
    org: 'BEM STT Terpadu Nurul Fikri',
    period: '2025',
    type: 'Organisasi',
    description: 'Media Sosial Specialist: Meningkatkan engagement media sosial BEM sebesar 50% dalam 6 bulan dengan konten kreatif dan strategi digital.',
    color: '#7C5CF6',
  },
  {
    id: 3,
    role: 'Staf Divisi Hubungan Masyarakat',
    org: 'Forum Genre Kabupaten Bogor',
    period: '2026 - 2028',
    type: 'Organisasi',
    description: 'Media partner dan sponsorship coordinator untuk acara tahunan Forum Genre Kabupaten Bogor dengan 500+ peserta remaja. Membangun kemitraan dengan 20+ organisasi lokal untuk mendukung acara.',
    color: '#38bdf8',
  },
  {
    id: 4,
    role: 'Staf Administrasi BagianLogistik',
    org: 'Polres Bogor Cibinong',
    period: '2023',
    type: 'Perusahaan Pemerintah',
    description: 'Mengelola surat menyurat dan administrasi logistik untuk operasional kepolisian di wilayah Bogor. Meningkatkan efisiensi proses administrasi sebesar 30% dengan sistem digitalisasi.',
    color: '#fbbf24',
  },
  {
    id: 5,
    role: 'Staff Divisi IT',
    org: 'Panitia Dies Natalis Universitas',
    period: 'Januari 2024',
    type: 'Kepanitiaan',
    description: 'Mengelola sistem registrasi online dan livestreaming acara untuk 3000+ peserta.',
    color: '#34d399',
  },
  {
    id: 6,
    role: 'Peserta — Bangkit Academy',
    org: 'Google, GoTo & Traveloka',
    period: '2023',
    type: 'Program',
    description: 'Program intensif Machine Learning path selama 5 bulan. Capstone project: aplikasi deteksi penyakit tanaman.',
    color: '#a78bfa',
  },
]

export const hobbies = [
  { name: 'Community Building', icon: '🌐', desc: 'Wadah kumpul, kolaborasi, & seru-seruan bareng' }, // Pengganti Coding
  { name: 'Desain', icon: '🎨', desc: 'Figma & motion design' },
  { name: 'Musik', icon: '🎧', desc: 'Lo-fi, indie, electronic' },
  { name: 'Volunteering', icon: '🤝', desc: 'Aktif di komunitas & kegiatan sosial' },
  { name: 'Networking', icon: '☕', desc: 'Ngobrol santai & bangun relasi baru' },
  { name: 'Public Speaking', icon: '🎙️', desc: 'Workshop & seminar' },
  { name: 'Editing', icon: '🎬', desc: 'Video & motion graphics' },
  { name: 'Membaca', icon: '📚', desc: 'Tech, sci-fi, self-dev' },
]

export const musicFavorites = [
  { title: 'Berpayung Tuhan', artist: 'Nadin Amizah', genre: 'Folk / Pop', mood: 'Melancholic' },
  { title: 'Ocean Eyes', artist: 'Billie Eilish', genre: 'Alt-Pop', mood: 'Dreamy' },
  { title: 'Kita Usahakan Rumah Itu', artist: 'Sal Priadi', genre: 'Indie Pop', mood: 'Hopeful' },
  { title: '2112', artist: 'Reality Club', genre: 'Indie Rock', mood: 'Energetic' },
  { title: 'Ah', artist: 'Nadin Amizah', genre: 'Folk / Pop', mood: 'Deep' },
  { title: 'Wildflower', artist: 'Billie Eilish', genre: 'Alt-Pop', mood: 'Sad / Chill' },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]
