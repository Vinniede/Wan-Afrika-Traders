export interface Testimonial {
  id: string;
  name: string;
  company: string;
  title: string;
  content: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Samuel Kipchoge',
    company: 'Green Valley Farms',
    title: 'Farm Director',
    content: 'Waan Afrika Water Solution transformed our irrigation system. Their equipment is reliable, and the support team is exceptional. We\'ve seen a 40% improvement in efficiency.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Grace Wanjiru',
    company: 'Lagos Water Services',
    title: 'Operations Manager',
    content: 'Working with Waan Afrika Water Solution has been a game-changer for our water treatment operations. The quality of their products and timely delivery is unmatched in the region.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Ochieng',
    company: 'BuildRight Construction',
    title: 'Project Manager',
    content: 'From industrial valves to HDPE pipes, Waan Afrika Water Solution provides everything we need. Their technical expertise helped us complete our projects on schedule and within budget.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Amelia Mwaipaja',
    company: 'Senegal Manufacturing Co.',
    title: 'Procurement Lead',
    content: 'Outstanding quality and competitive pricing. Waan Afrika Water Solution has been our trusted partner for over two years. Highly recommended for any water solution needs.',
    rating: 5,
  },
];
