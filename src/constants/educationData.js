export const BLOG_CATEGORIES = [
  "All",
  "Disease Prevention",
  "Emergency First Aid",
  "Public Health Alerts",
  "Mental Health",
  "Maternal & Child Health",
  "Nutrition & Lifestyle",
  "Infectious Diseases",
  "Community Health",
];

export const MOCK_ARTICLES = [
  {
    id: "1",
    title: "How to Perform CPR: A Step-by-Step Guide for Beginners",
    slug: "how-to-perform-cpr",
    excerpt: "Knowing how to react in a cardiac emergency can save a life. Learn the basic steps of hands-only CPR and when to use them.",
    author: "Dr. Sarah Mitchell",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Emergency First Aid",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    featured: true,
    content: `
      <p>Cardiac arrest can happen to anyone at any time. When it occurs, the heart stops pumping blood to the brain and other vital organs. Every second counts.</p>
      <br/>
      <h3 class="text-xl font-bold mb-4">Why CPR Matters</h3>
      <p>Cardiopulmonary Resuscitation (CPR) keeps blood flowing to vital organs until professional help arrives. It can double or triple a person's chance of survival.</p>
      <br/>
      <h3 class="text-xl font-bold mb-4">Step 1: Check the Scene</h3>
      <p>Ensure the environment is safe for you and the victim. Tap their shoulder and shout, "Are you okay?"</p>
      <br/>
      <h3 class="text-xl font-bold mb-4">Step 2: Call for Help</h3>
      <p>If they don't respond, call emergency services immediately or ask someone else to do it.</p>
      <br/>
      <h3 class="text-xl font-bold mb-4">Step 3: Perform Compressions</h3>
      <p>Place the heel of one hand in the center of the chest and the other hand on top. Push hard and fast—at least 2 inches deep and 100-120 beats per minute.</p>
    `,
    tags: ["CPR", "Emergency", "Safety"],
    medicallyReviewed: true,
    reviewer: "Dr. Alan Grant",
  },
  {
    id: "2",
    title: "Understanding Seasonal Flu Trends in 2026",
    slug: "seasonal-flu-trends-2026",
    excerpt: "This year's flu season has shown unique patterns. Discover how to protect your family and recognize early symptoms.",
    author: "Dr. James Wilson",
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "Public Health Alerts",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Flu trends are changing due to global weather shifts...</p>",
    tags: ["Flu", "Viral", "Prevention"],
    medicallyReviewed: true,
    reviewer: "Dr. Sarah Mitchell",
  },
  {
    id: "3",
    title: "Mental Wellness: Daily Habits for a Balanced Mind",
    slug: "mental-wellness-daily-habits",
    excerpt: "In a fast-paced world, maintaining mental health is crucial. These simple daily habits can help reduce stress and anxiety.",
    author: "Grace Hopper",
    date: "May 08, 2026",
    readTime: "6 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Meditation and mindfulness are key pillars of mental health...</p>",
    tags: ["Wellness", "Stress", "Habits"],
  },
  {
    id: "4",
    title: "Nutrition Guide: Foods that Boost Your Immune System",
    slug: "immune-boosting-foods",
    excerpt: "What you eat directly impacts your body's ability to fight off infections. Here are the top 10 immune-boosting foods.",
    author: "Elena Rodriguez",
    date: "May 05, 2026",
    readTime: "10 min read",
    category: "Nutrition & Lifestyle",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Vitamin C, zinc, and elderberry are proven to support immunity...</p>",
    tags: ["Diet", "Immunity", "Nutrition"],
  },
  {
    id: "5",
    title: "Maternal Health: Essential Care During the First Trimester",
    slug: "maternal-health-first-trimester",
    excerpt: "The first 12 weeks are critical for fetal development. Learn about necessary supplements, diet changes, and signs to watch for.",
    author: "Dr. Maria Santos",
    date: "May 03, 2026",
    readTime: "12 min read",
    category: "Maternal & Child Health",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Prenatal care starts before conception but becomes vital in the first trimester...</p>",
    tags: ["Pregnancy", "Maternal", "Health"],
  },
  {
    id: "6",
    title: "Community Health: Building Resilient Neighborhoods",
    slug: "community-health-resilience",
    excerpt: "Health starts where we live, learn, work, and play. Discover how community initiatives are improving longevity.",
    author: "Robert Chen",
    date: "May 01, 2026",
    readTime: "7 min read",
    category: "Community Health",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Local health projects have shown a 20% increase in wellness scores...</p>",
    tags: ["Community", "Social", "Wellness"],
  },
  {
    id: "7",
    title: "Infectious Diseases: The Global Fight Against Malaria",
    slug: "global-fight-malaria",
    excerpt: "New vaccines and prevention strategies are changing the landscape of malaria control. A deep dive into current progress.",
    author: "Dr. Kevin Lee",
    date: "April 28, 2026",
    readTime: "15 min read",
    category: "Infectious Diseases",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: "<p>Malaria remains one of the world's oldest and deadliest enemies...</p>",
    tags: ["Malaria", "Infection", "Global Health"],
  },
];

export const DISEASE_UPDATES = [
  {
    id: "u1",
    title: "Cholera Outbreak Prevention",
    severity: "Critical",
    date: "May 14, 2026",
    description: "New cases reported in the border regions. Ensure water is boiled or treated before consumption.",
  },
  {
    id: "u2",
    title: "Malaria Trends",
    severity: "Moderate",
    date: "May 12, 2026",
    description: "Slight increase in cases due to early rains. Use mosquito nets and apply repellent.",
  },
  {
    id: "u3",
    title: "Seasonal Allergy Alert",
    severity: "Low",
    date: "May 11, 2026",
    description: "High pollen counts expected this week. Keep windows closed during early morning hours.",
  },
];
