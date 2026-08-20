/* Central content data for the site clone */

/* Admissions WhatsApp line — shown in the footer and on the contact page */
export const ADMISSIONS_WHATSAPP = {
  display: "+44 7529 721655",
  href: "https://wa.me/447529721655",
};

export type NavLink = { label: string; href: string };
export type MegaColumn = { heading: string; links: NavLink[] };
export type NavItem = { label: string; href: string; columns?: MegaColumn[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Study",
    href: "/study",
    columns: [
      {
        heading: "Courses",
        links: [
          { label: "Undergraduate", href: "/courses?level=Undergraduate" },
          { label: "Postgraduate", href: "/courses?level=Postgraduate" },
          { label: "Greenwich Online", href: "/courses" },
          { label: "Short courses", href: "/courses" },
          { label: "Degree apprenticeships", href: "/partnerships#apprenticeships" },
        ],
      },
      {
        heading: "Discover",
        links: [
          { label: "Open days", href: "/open-days" },
          { label: "Accommodation", href: "/study#accommodation" },
          { label: "Student life", href: "/study#why-greenwich" },
          { label: "Careers support", href: "/study#careers" },
          { label: "Our campuses", href: "/campuses" },
        ],
      },
      {
        heading: "Apply",
        links: [
          { label: "How to apply", href: "/study#apply" },
          { label: "Fees and funding", href: "/study#fees" },
          { label: "Scholarships and bursaries", href: "/study#fees" },
          { label: "Applicant support", href: "/contact" },
          { label: "Clearing", href: "/clearing" },
        ],
      },
    ],
  },
  {
    label: "Subjects",
    href: "/subjects",
    columns: [
      {
        heading: "Popular subjects",
        links: [
          { label: "Business and management", href: "/courses?subject=business-management" },
          { label: "Computing", href: "/courses?subject=computing" },
          { label: "Engineering", href: "/courses?subject=engineering" },
          { label: "Law", href: "/courses?subject=law" },
          { label: "Nursing", href: "/courses?subject=nursing" },
          { label: "Psychology", href: "/courses?subject=psychology" },
        ],
      },
      {
        heading: "More subjects",
        links: [
          { label: "Architecture", href: "/courses?subject=architecture" },
          { label: "Teacher training", href: "/courses?subject=teacher-training" },
          { label: "Pharmacy", href: "/courses?subject=pharmacy" },
          { label: "Forensic science", href: "/courses?subject=forensic-science" },
          { label: "Games development", href: "/courses?subject=games-development" },
          { label: "All subjects A–Z", href: "/subjects" },
        ],
      },
    ],
  },
  {
    label: "International",
    href: "/international",
    columns: [
      {
        heading: "International students",
        links: [
          { label: "Greenwich in your country", href: "/international#help" },
          { label: "Entry requirements", href: "/international#help" },
          { label: "Fees and scholarships", href: "/international#fees" },
          { label: "Visas and immigration", href: "/international#help" },
          { label: "English language support", href: "/international#other-ways" },
          { label: "Arrival and welcome", href: "/international#life" },
        ],
      },
      {
        heading: "Why Greenwich",
        links: [
          { label: "A London World Heritage campus", href: "/campuses" },
          { label: "150+ nationalities on campus", href: "/international#why" },
          { label: "Career-focused degrees", href: "/study#careers" },
          { label: "Get in touch", href: "/international#contact" },
        ],
      },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Partnerships", href: "/partnerships" },
];

/* ---------------- subjects ---------------- */

export type Subject = { name: string; slug: string };

export const SUBJECTS: Subject[] = [
  { name: "Accounting and finance", slug: "accounting-and-finance" },
  { name: "Architecture", slug: "architecture" },
  { name: "Biology and biomedical science", slug: "biology-biomedical" },
  { name: "Business and management", slug: "business-management" },
  { name: "Chemistry", slug: "chemistry" },
  { name: "Computer science and computing", slug: "computing" },
  { name: "Criminology", slug: "criminology" },
  { name: "Design", slug: "design" },
  { name: "Drama", slug: "drama" },
  { name: "Early years studies", slug: "early-years" },
  { name: "Economics", slug: "economics" },
  { name: "Education studies", slug: "education-studies" },
  { name: "Engineering", slug: "engineering" },
  { name: "English", slug: "english" },
  { name: "Environmental science", slug: "environmental-science" },
  { name: "Film and media", slug: "film-media" },
  { name: "Forensic science", slug: "forensic-science" },
  { name: "Games development", slug: "games-development" },
  { name: "Health and social care", slug: "health-social-care" },
  { name: "History", slug: "history" },
  { name: "Human nutrition and health", slug: "human-nutrition" },
  { name: "Human resources", slug: "human-resources" },
  { name: "International relations", slug: "international-relations" },
  { name: "Landscape architecture", slug: "landscape-architecture" },
  { name: "Law", slug: "law" },
  { name: "Logistics and supply chain management", slug: "logistics" },
  { name: "Marketing and advertising", slug: "marketing" },
  { name: "Mathematics", slug: "mathematics" },
  { name: "Midwifery", slug: "midwifery" },
  { name: "Nursing", slug: "nursing" },
  { name: "Paramedic science", slug: "paramedic-science" },
  { name: "PE, sport and exercise science", slug: "sport-exercise" },
  { name: "Pharmaceutical science", slug: "pharmaceutical-science" },
  { name: "Pharmacy", slug: "pharmacy" },
  { name: "Psychology", slug: "psychology" },
  { name: "Public health", slug: "public-health" },
  { name: "Science", slug: "science" },
  { name: "Social work", slug: "social-work" },
  { name: "Sociology", slug: "sociology" },
  { name: "Teacher training", slug: "teacher-training" },
  { name: "Tourism, hospitality and events", slug: "tourism-hospitality-events" },
];

/* ---------------- courses ---------------- */

export type Course = {
  title: string;
  level: "Undergraduate" | "Postgraduate";
  subject: string;
  mode: string;
  campus: string;
  accent: string;
};

export const COURSES: Course[] = [
  {
    title: "Law in Practice, LLB Hons",
    level: "Undergraduate",
    subject: "law",
    mode: "Full-time / Sandwich",
    campus: "Greenwich Campus",
    accent: "bg-royal",
  },
  {
    title: "Mathematics for Modern Applications, BSc Hons",
    level: "Undergraduate",
    subject: "mathematics",
    mode: "Full-time / Part-time",
    campus: "Greenwich Campus",
    accent: "bg-teal",
  },
  {
    title: "Computer Science, BSc Hons",
    level: "Undergraduate",
    subject: "computing",
    mode: "Full-time / Sandwich",
    campus: "Greenwich Campus",
    accent: "bg-sky",
  },
  {
    title: "Business Management, BA Hons",
    level: "Undergraduate",
    subject: "business-management",
    mode: "Full-time / Part-time",
    campus: "Greenwich Campus",
    accent: "bg-gold",
  },
  {
    title: "Adult Nursing, BSc Hons",
    level: "Undergraduate",
    subject: "nursing",
    mode: "Full-time",
    campus: "Avery Hill Campus",
    accent: "bg-alert",
  },
  {
    title: "International Business, MBA",
    level: "Postgraduate",
    subject: "business-management",
    mode: "Full-time / January start",
    campus: "Greenwich Campus",
    accent: "bg-navy",
  },
  {
    title: "Cyber Security, MSc",
    level: "Postgraduate",
    subject: "computing",
    mode: "Full-time / Part-time",
    campus: "Greenwich Campus",
    accent: "bg-royal",
  },
  {
    title: "Mechanical Engineering, BEng Hons",
    level: "Undergraduate",
    subject: "engineering",
    mode: "Full-time / Sandwich",
    campus: "Medway Campus",
    accent: "bg-teal",
  },
  {
    title: "Psychology, BSc Hons",
    level: "Undergraduate",
    subject: "psychology",
    mode: "Full-time / Part-time",
    campus: "Avery Hill Campus",
    accent: "bg-sky",
  },
  {
    title: "Pharmacy, MPharm Hons",
    level: "Undergraduate",
    subject: "pharmacy",
    mode: "Full-time",
    campus: "Medway Campus",
    accent: "bg-gold",
  },
  {
    title: "Architecture, BA Hons",
    level: "Undergraduate",
    subject: "architecture",
    mode: "Full-time",
    campus: "Greenwich Campus",
    accent: "bg-navy",
  },
  {
    title: "Criminology and Criminal Psychology, BSc Hons",
    level: "Undergraduate",
    subject: "criminology",
    mode: "Full-time / Part-time",
    campus: "Greenwich Campus",
    accent: "bg-alert",
  },
  {
    title: "Primary Education, BA Hons",
    level: "Undergraduate",
    subject: "teacher-training",
    mode: "Full-time",
    campus: "Avery Hill Campus",
    accent: "bg-royal",
  },
  {
    title: "Data Science and its Applications, MSc",
    level: "Postgraduate",
    subject: "computing",
    mode: "Full-time / Part-time",
    campus: "Greenwich Campus",
    accent: "bg-teal",
  },
  {
    title: "Marketing Management, MA",
    level: "Postgraduate",
    subject: "marketing",
    mode: "Full-time / January start",
    campus: "Greenwich Campus",
    accent: "bg-sky",
  },
  {
    title: "Games Design and Development, BSc Hons",
    level: "Undergraduate",
    subject: "games-development",
    mode: "Full-time / Sandwich",
    campus: "Greenwich Campus",
    accent: "bg-gold",
  },
  {
    title: "Civil Engineering, MSc",
    level: "Postgraduate",
    subject: "engineering",
    mode: "Full-time / Part-time",
    campus: "Medway Campus",
    accent: "bg-navy",
  },
  {
    title: "Public Health, MSc",
    level: "Postgraduate",
    subject: "public-health",
    mode: "Full-time / Part-time",
    campus: "Avery Hill Campus",
    accent: "bg-alert",
  },
  {
    title: "Forensic Science, BSc Hons",
    level: "Undergraduate",
    subject: "forensic-science",
    mode: "Full-time",
    campus: "Medway Campus",
    accent: "bg-royal",
  },
  {
    title: "Accounting and Finance, BA Hons",
    level: "Undergraduate",
    subject: "accounting-and-finance",
    mode: "Full-time / Sandwich",
    campus: "Greenwich Campus",
    accent: "bg-teal",
  },
];

/* ---------------- news ---------------- */

export type NewsItem = {
  tag: string;
  date: string;
  title: string;
  excerpt?: string;
  art: number;
  img: string;
};

export const NEWS: NewsItem[] = [
  {
    tag: "University",
    date: "22 July 2026",
    title: "University of Greenwich recognised as a Stonewall Trailblazer",
    excerpt:
      "Greenwich receives Stonewall's top accolade for its work on LGBTQ+ inclusion — one of only a handful of UK universities to be named a Trailblazer.",
    art: 1,
    img: "/images/real/news-1.jpg",
  },
  {
    tag: "Research",
    date: "18 July 2026",
    title: "New study reveals passport inequalities at airport borders",
    excerpt:
      "Research from our sociology team shows how travellers' experiences at borders differ sharply depending on the passport they hold.",
    art: 2,
    img: "/images/real/news-2.jpg",
  },
  {
    tag: "Events",
    date: "15 July 2026",
    title: "Greenwich hosts landmark Eze Foundation celebration",
    excerpt:
      "The Old Royal Naval College welcomed guests from across the UK for a celebration of community, culture and scholarship.",
    art: 0,
    img: "/images/real/news-3.jpg",
  },
  {
    tag: "Business",
    date: "11 July 2026",
    title: "Greenwich academic judges national business awards",
    excerpt:
      "A Greenwich Business School academic joined the judging panel for this year's national small business awards.",
    art: 4,
    img: "/images/real/news-4.jpg",
  },
  {
    tag: "Research",
    date: "8 July 2026",
    title: "Government outsourcing of migration services under the spotlight",
    excerpt:
      "A new report examines how outsourcing shapes the experiences of people moving through the UK immigration system.",
    art: 5,
    img: "/images/real/news-5.jpg",
  },
  {
    tag: "University",
    date: "2 July 2026",
    title: "Trailblazing collaboration with University of Kent moves forward",
    excerpt:
      "The formal agreement creating a new multi-university group for London and the South East takes effect on 1 August 2026.",
    art: 3,
    img: "/images/real/news-6.jpg",
  },
  {
    tag: "Students",
    date: "26 June 2026",
    title: "Engineering students win national design prize",
    excerpt:
      "A team from Medway Campus took first place in a UK-wide competition for sustainable engineering design.",
    art: 6,
    img: "/images/real/card-apprentice.jpg",
  },
  {
    tag: "Campus",
    date: "19 June 2026",
    title: "New £2m sports facilities open at Avery Hill",
    excerpt:
      "Students return in September to upgraded pitches, a refurbished gym and new changing facilities at our sports campus.",
    art: 8,
    img: "/images/real/campus-averyhill.jpg",
  },
  {
    tag: "Research",
    date: "12 June 2026",
    title: "Oscar-winning director cites Greenwich research as inspiration",
    excerpt:
      "Work by our film and media researchers helped shape the story behind this year's award-winning documentary.",
    art: 9,
    img: "/images/real/card-openday2.jpg",
  },
];

/* ---------------- campuses ---------------- */

export type Campus = {
  name: string;
  img: string;
  desc: string;
  travel: string;
  chips: string[];
  facilities: string[];
};

export const CAMPUSES: Campus[] = [
  {
    name: "Greenwich Campus",
    img: "/images/real/campus-greenwich.jpg",
    desc: "Study inside the baroque Old Royal Naval College — a UNESCO World Heritage Site on the banks of the Thames.",
    travel: "10 minutes to central London",
    chips: ["DLR", "Rail", "Riverboat"],
    facilities: [
      "Stockwell Street Library and roof gardens",
      "TV and radio studios",
      "Dreadnought student hub and gym",
      "Historic Painted Hall next door",
    ],
  },
  {
    name: "Avery Hill Campus",
    img: "/images/real/campus-averyhill.jpg",
    desc: "A leafy 86-acre campus around a Victorian mansion in Eltham — home to our sport, health and education facilities.",
    travel: "29 minutes to central London",
    chips: ["Rail", "Bus", "Parking"],
    facilities: [
      "Clinical skills labs and mock wards",
      "Sports pitches and £2m gym",
      "Student village accommodation",
      "TeachHub for trainee teachers",
    ],
  },
  {
    name: "Medway Campus",
    img: "/images/real/campus-medway.jpg",
    desc: "A historic naval base in Chatham Maritime, Kent, with specialist engineering, science and pharmacy labs.",
    travel: "45 minutes to central London",
    chips: ["Rail", "Bus", "Parking"],
    facilities: [
      "Engineering workshops and wind tunnel",
      "Pharmacy and forensic science labs",
      "Drill Hall Library",
      "Shared campus with University of Kent",
    ],
  },
];

/* ---------------- open days ---------------- */

export type OpenDay = {
  type: string;
  date: string;
  location: string;
  art: number;
};

export const OPEN_DAYS: OpenDay[] = [
  {
    type: "In-person Open Day",
    date: "Saturday 17 October 2026",
    location: "Greenwich Campus",
    art: 7,
  },
  {
    type: "Virtual Open Event",
    date: "Wednesday 12 November 2026",
    location: "Online",
    art: 5,
  },
  {
    type: "Campus Tours",
    date: "Saturday 6 December 2026",
    location: "All campuses",
    art: 8,
  },
];

/* ---------------- footer ---------------- */

export const FOOTER_COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "About Greenwich",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Our campuses", href: "/campuses" },
      { label: "Subjects and faculties", href: "/subjects" },
      { label: "News and events", href: "/news" },
      { label: "Open days", href: "/open-days" },
      { label: "Research", href: "/research" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Jobs at Greenwich", href: "https://www.gre.ac.uk/jobs" },
    ],
  },
  {
    heading: "Study with us",
    links: [
      { label: "Undergraduate", href: "/courses?level=Undergraduate" },
      { label: "Postgraduate", href: "/courses?level=Postgraduate" },
      { label: "International", href: "/international" },
      { label: "Greenwich Online", href: "/courses" },
      { label: "Short courses", href: "/courses" },
      { label: "Degree apprenticeships", href: "/partnerships#apprenticeships" },
      { label: "Clearing", href: "/clearing" },
    ],
  },
  {
    heading: "Useful links",
    links: [
      { label: "Accessibility", href: "#" },
      { label: "Legal information", href: "#" },
      { label: "Privacy and cookies", href: "#" },
      { label: "Freedom of Information", href: "#" },
      { label: "Modern Slavery Statement", href: "#" },
      { label: "Student terms and conditions", href: "#" },
      { label: "Report and support", href: "/contact" },
    ],
  },
];
