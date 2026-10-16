export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface RecentBlog {
  title: string;
  date: string;
  text: string;
  url: string;
}

export const featuredBlogs: BlogArticle[] = [
  {
    id: '1',
    title: 'Top 5 Steel Detailing Mistakes That Lead to Fabrication Delays',
    date: '12/05/2025',
    excerpt: 'Understand the common oversights that cost time and money — and how to prevent them.',
    image: '/assets/images/blogs/top-5-steel-deatiling.png',
    slug: '/blog/steel-detailing-mistake',
  },
  {
    id: '2',
    title: 'Why Connection Design Should Start Early in the Project Lifecycle',
    date: '12/05/2025',
    excerpt: 'Explore how early connection planning improves buildability and avoids last-minute RFIs.',
    image: '/assets/images/blogs/why-connection-design.png',
    slug: '#',
  },
];

export const recentBlogs: RecentBlog[] = [
  {
    title: 'Tekla Structures vs AutoCAD – Which Is Right for Your Project?',
    date: '12/06/2025',
    text: 'We compare two leading platforms for steel detailing from a project productivity perspective.',
    url: '#',
  },
  {
    title: 'Understanding AISC & CISC Compliance: What It Means for Your Project',
    date: '12/06/2025',
    text: 'Break down the codes and read how compliance impacts fabrication, safety, and inspections.',
    url: '#',
  },
  {
    title: 'From Drawings to Data: How BIM Is Reshaping Steel Construction',
    date: '12/06/2025',
    text: 'Discover how BIM enhances coordination, reduces clashes, and supports real-time changes.',
    url: '#',
  },
  {
    title: 'How Structural Modeling Improves Approval Turnaround',
    date: '12/07/2025',
    text: 'Learn how real-time modeling accelerates approval timelines and reduces revisions.',
    url: '#',
  },
  {
    title: 'BIM vs CAD: Which One Fits Your Project Workflow?',
    date: '12/08/2025',
    text: 'We compare BIM and CAD approaches for modern project coordination.',
    url: '#',
  },
  {
    title: 'Understanding AISC & CISC Compliance: What It Means for Your Project',
    date: '12/06/2025',
    text: 'Break down the codes and read how compliance impacts fabrication, safety, and inspections.',
    url: '#',
  },
  {
    title: 'From Drawings to Data: How BIM Is Reshaping Steel Construction',
    date: '12/06/2025',
    text: 'Discover how BIM enhances coordination, reduces clashes, and supports real-time changes.',
    url: '#',
  },
  {
    title: 'How Structural Modeling Improves Approval Turnaround',
    date: '12/07/2025',
    text: 'Learn how real-time modeling accelerates approval timelines and reduces revisions.',
    url: '#',
  },
  {
    title: 'Understanding AISC & CISC Compliance: What It Means for Your Project',
    date: '12/06/2025',
    text: 'Break down the codes and read how compliance impacts fabrication, safety, and inspections.',
    url: '#',
  },
  {
    title: 'From Drawings to Data: How BIM Is Reshaping Steel Construction',
    date: '12/06/2025',
    text: 'Discover how BIM enhances coordination, reduces clashes, and supports real-time changes.',
    url: '#',
  },
  {
    title: 'How Structural Modeling Improves Approval Turnaround',
    date: '12/07/2025',
    text: 'Learn how real-time modeling accelerates approval timelines and reduces revisions.',
    url: '#',
  },
];
