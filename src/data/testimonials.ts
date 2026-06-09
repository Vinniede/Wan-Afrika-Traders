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
    name: 'Ahmed Hassan',
    company: 'Green Valley Farms',
    title: 'Farm Director',
    content: 'Wan Afrika Traders transformed our irrigation system. Their equipment is reliable, and the support team is exceptional. We\'ve seen a 40% improvement in efficiency.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Zainab Okonkwo',
    company: 'Lagos Water Services',
    title: 'Operations Manager',
    content: 'Working with Wan Afrika has been a game-changer for our water treatment operations. The quality of their products and timely delivery is unmatched in the region.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Kwame Mensah',
    company: 'BuildRight Construction',
    title: 'Project Manager',
    content: 'From industrial valves to HDPE pipes, Wan Afrika provides everything we need. Their technical expertise helped us complete our projects on schedule and within budget.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Amara Diallo',
    company: 'Senegal Manufacturing Co.',
    title: 'Procurement Lead',
    content: 'Outstanding quality and competitive pricing. Wan Afrika Traders has been our trusted partner for over two years. Highly recommended for any water solution needs.',
    rating: 5,
  },
];
