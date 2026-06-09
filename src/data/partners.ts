export interface Partner {
  id: string;
  name: string;
  logo?: string;
  category: string;
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Aqua Systems',
    logo: '/partners/aqua-systems.png',
    category: 'Water Treatment Equipment',
  },
  {
    id: '2',
    name: 'Hydrotech Solutions',
    logo: '/partners/hydrotech.png',
    category: 'Pump Suppliers',
  },
  {
    id: '3',
    name: 'EcoFlow Industries',
    logo: '/partners/ecoflow.png',
    category: 'Irrigation Systems',
  },
  {
    id: '4',
    name: 'PipeCorp Africa',
    logo: '/partners/pipecorp.png',
    category: 'Pipe Manufacturers',
  },
  {
    id: '5',
    name: 'Valve Tech International',
    logo: '/partners/valve-tech.png',
    category: 'Industrial Valves',
  },
  {
    id: '6',
    name: 'Global Water Services',
    logo: '/partners/global-water.png',
    category: 'Water Logistics',
  },
  {
    id: '7',
    name: 'Sustainable Water Ltd',
    logo: '/partners/sustainable-water.png',
    category: 'Sustainability Partner',
  },
  {
    id: '8',
    name: 'African Tech Innovations',
    logo: '/partners/african-tech.png',
    category: 'Technology Partner',
  },
];
