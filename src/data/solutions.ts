import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'sol-001',
    title: 'Irrigation Solutions',
    description: 'Complete irrigation systems designed for maximum water efficiency and crop yield. From drip irrigation to large-scale sprinkler systems.',
    image: '/images/Rain gun.jpeg',
    benefits: [
      'Water efficiency up to 90%',
      'Reduced water bills',
      'Improved crop yield',
      'Automated irrigation options',
      'Custom system design',
    ],
    relatedProducts: ['irr-001', 'irr-002', 'irr-003', 'pump-002', 'hdpe-001']
  },
  {
    id: 'sol-002',
    title: 'Water Treatment Solutions',
    description: 'Advanced water purification systems for residential, commercial, and industrial applications. Removes contaminants and ensures safe water supply.',
    image: '/images/FRP Tank for water treatment.jpeg',
    benefits: [
      'Removes 99.9% of contaminants',
      'Safe drinking water',
      'Industrial-grade purification',
      'Cost-effective operation',
      'Minimal waste generation',
    ],
    relatedProducts: ['wt-001', 'wt-002', 'wt-003', 'pump-001', 'valve-002']
  },
  {
    id: 'sol-003',
    title: 'Borehole Solutions',
    description: 'Complete borehole installation and maintenance solutions. Including submersible pumps, filtration, and distribution systems.',
    image: '/images/HDPE pipes.jpeg',
    benefits: [
      'Reliable water source',
      'Minimal maintenance',
      'High capacity extraction',
      'Professional installation',
      'Ongoing support',
    ],
    relatedProducts: ['pump-002', 'pump-003', 'pvc-002', 'valve-001', 'valve-003']
  },
  {
    id: 'sol-004',
    title: 'Water Distribution Systems',
    description: 'Efficient water distribution networks for residential and commercial complexes. Designed for minimal water loss and maximum coverage.',
    image: '/images/Gate valves.jpeg',
    benefits: [
      'Reduced water loss',
      'Wide coverage area',
      'Pressure regulation',
      'Quality assurance',
      'Easy maintenance',
    ],
    relatedProducts: ['hdpe-001', 'hdpe-002', 'hdpe-003', 'pvc-001', 'valve-001']
  },
  {
    id: 'sol-005',
    title: 'Industrial Water Systems',
    description: 'Heavy-duty water management systems for manufacturing, processing, and industrial facilities.',
    image: '/images/Pressure gauge.jpeg',
    benefits: [
      'High capacity handling',
      'Continuous operation',
      'Quality monitoring',
      'Compliance ready',
      'Expert maintenance',
    ],
    relatedProducts: ['pump-001', 'wt-001', 'valve-003', 'hdpe-002', 'pvc-002']
  },
  {
    id: 'sol-006',
    title: 'Environmental Water Solutions',
    description: 'Sustainable water management solutions focused on environmental conservation and resource protection.',
    image: '/images/Rain hose pipe for irrigation.jpeg',
    benefits: [
      'Eco-friendly technology',
      'Solar integration',
      'Water conservation',
      'Reduced carbon footprint',
      'Future-proof systems',
    ],
    relatedProducts: ['pump-003', 'wt-002', 'irr-001', 'hdpe-001', 'ppr-001']
  },
];

