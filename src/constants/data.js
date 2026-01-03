export const personalInfo = {
  name: 'Ibrahim Abdulwahab',
  title: 'Biomedical Engineer',
  tagline: 'Specialized in medical equipment maintenance and installation with over 6 years of experience in the healthcare sector',
  about: 'A passionate biomedical engineer dedicated to developing and maintaining medical equipment that contributes to saving lives and improving healthcare quality. I have extensive experience working with leading hospitals and medical companies, with a distinctive ability to solve complex technical problems and communicate effectively with medical and engineering teams.',
  email: 'Ibrahima.wahab2@gmail.com',
  phone: '+966545174784',
  location: 'Jeddah, Saudi Arabia',
  nationality: 'Eritrean',
  languages: ['Arabic', 'English'],
};

export const skills = {
  technical: [
    { name: 'Biomedical Equipment Maintenance', icon: 'Wrench' },
    { name: 'Ventilator Installation & Operation', icon: 'Wind' },
    { name: 'Dental Chair Maintenance', icon: 'Armchair' },
    { name: 'Mindray Pumps Training', icon: 'Syringe' },
  ],
  soft: [
    { name: 'Critical Thinking & Problem Solving', icon: 'Brain' },
    { name: 'Teamwork & Collaboration', icon: 'Users' },
    { name: 'Medical & Engineering Communication', icon: 'MessageSquare' },
    { name: 'Multi-Project Management', icon: 'FolderKanban' },
  ],
};

export const experiences = [
  {
    company: 'Medical Technology',
    role: 'Medical Sales Representative',
    period: '2023 - 2024',
    description: 'Responsible for promoting and selling medical equipment to healthcare facilities.',
    icon: 'Briefcase',
  },
  {
    company: 'Tamer',
    role: 'Respiratory Equipment Technician',
    period: '2021 - 2022',
    description: 'Installation and maintenance of respiratory department equipment including ventilators.',
    icon: 'Wind',
  },
  {
    company: 'Qarar Alkhobara',
    role: 'Chief Technician',
    period: '2021',
    description: 'Led a team of technicians in maintaining and repairing medical equipment.',
    icon: 'Users',
  },
  {
    company: 'Pioneer Medical Company',
    role: 'Biomedical Engineer',
    period: '2018 - 2020',
    description: 'Comprehensive biomedical engineering services including equipment maintenance, calibration, and training.',
    icon: 'Activity',
  },
];

export const education = {
  degree: 'Bachelor of Biomedical Engineering',
  university: 'Misr University for Science and Technology',
  courses: [
    'Biomedical Equipment Maintenance',
    'Dental Chair Maintenance',
    'Mindray Pumps Training',
  ],
};

export const projects = [
  {
    title: 'Medical Equipment Maintenance Management System',
    description: 'A comprehensive digital platform for tracking and scheduling medical equipment maintenance in hospitals, featuring automatic alerts, performance reports, and periodic maintenance records. Helps reduce downtime and ensure patient safety.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Notification System'],
    benefits: ['Improved maintenance efficiency', 'Cost savings', 'Extended equipment lifespan'],
    icon: 'Settings',
  },
  {
    title: 'Virtual Training System for Medical Equipment',
    description: 'An interactive 3D educational platform that allows engineers and technicians to practice maintaining complex medical equipment (such as ventilators and Mindray pumps) in a safe environment before handling real equipment.',
    technologies: ['WebGL', 'Three.js', 'React', 'Interactive Simulations'],
    benefits: ['Reduced maintenance errors', 'Safe training', 'Training cost savings'],
    icon: 'GraduationCap',
  },
];

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];
