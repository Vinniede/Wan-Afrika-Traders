import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'sol-001',
    title: 'Borehole Water Solutions',
    description: 'Complete borehole water systems from drilling, equipping, and rehabilitation to maintenance. We provide comprehensive solutions including submersible pump installation, water quality testing, storage systems integration, and ongoing maintenance to ensure reliable year-round water supply.',
    image: '/solutions/Borehole Solutions.jpeg',
    benefits: [
      'Reliable groundwater access',
      'Professional borehole equipping',
      'Solar pump integration available',
      'Complete water treatment options',
      'Preventive maintenance programs',
      'Cost-effective water supply'
    ],
    relatedProducts: ['pump-002', 'pump-003', 'wt-001', 'wt-003', 'valve-001']
  },
  {
    id: 'sol-002',
    title: 'Solar Water Pumping Solutions',
    description: 'Eco-friendly solar-powered water pumping systems that eliminate ongoing fuel costs and reduce carbon footprint. Our solar solutions include system design, professional installation, and maintenance for homes, farms, and industrial facilities.',
    image: '/solutions/Solar Water Pumping Solutions.jpeg',
    benefits: [
      'Zero operational fuel costs',
      'Eco-friendly renewable energy',
      'Minimal maintenance required',
      'Suitable for remote locations',
      'Long system lifespan',
      'Government incentives eligible'
    ],
    relatedProducts: ['pump-003', 'pump-002', 'hdpe-001', 'valve-001', 'irr-002']
  },
  {
    id: 'sol-003',
    title: 'Irrigation Solutions',
    description: 'Complete irrigation systems designed for maximum water efficiency and crop optimization. From precision drip irrigation for vegetables to large-scale sprinkler systems for farms and greenhouses, we provide customized solutions with automation capabilities.',
    image: '/solutions/Irrigation Solutions.jpeg',
    benefits: [
      'Up to 90% water efficiency',
      'Improved crop yields by 40-60%',
      'Reduced water bills significantly',
      'Automated irrigation scheduling',
      'Greenhouse-specific solutions',
      'Professional system design and installation'
    ],
    relatedProducts: ['irr-001', 'irr-002', 'irr-003', 'pump-002', 'hdpe-001']
  },
  {
    id: 'sol-004',
    title: 'Water Treatment Solutions',
    description: 'Advanced multi-stage water purification systems for homes, offices, and industries. Our treatment solutions remove contaminants, bacteria, viruses, and dissolved solids ensuring safe, clean drinking water meeting international standards.',
    image: '/solutions/Water Treatment Solutions.jpeg',
    benefits: [
      'Removes 99.9% of contaminants',
      'Safe certified drinking water',
      'Industrial-grade purification',
      'Multiple treatment technologies',
      'Minimal maintenance required',
      'Cost-effective long-term operation'
    ],
    relatedProducts: ['wt-001', 'wt-002', 'wt-003', 'acc-006', 'acc-007']
  },
  {
    id: 'sol-005',
    title: 'Water Distribution Systems',
    description: 'Engineered water network systems for residential estates, commercial complexes, and municipalities. Includes network design, HDPE pipeline installation, valve placement, and pressure management for optimal water delivery.',
    image: '/solutions/Water Distribution Systems.png',
    benefits: [
      'Minimized water loss and leakage',
      'Optimized water pressure throughout',
      'Wide service area coverage',
      'Professional valve installation',
      'Easy system maintenance access',
      'Scalable for future expansion'
    ],
    relatedProducts: ['hdpe-001', 'hdpe-002', 'hdpe-003', 'pvc-001', 'valve-001']
  },
  {
    id: 'sol-006',
    title: 'Building Plumbing Solutions',
    description: 'Complete internal plumbing systems for residential and commercial buildings. Our services cover cold water systems, hot water distribution, pipe installation, water meter installation, and preventive maintenance for apartments, offices, hotels, and shopping complexes.',
    image: '/solutions/Building Plumbing Solutions.jpeg',
    benefits: [
      'Code-compliant installations',
      'Hot and cold water systems',
      'Professional pipe routing',
      'Water meter integration',
      'Quick repair response',
      'Warranty on workmanship'
    ],
    relatedProducts: ['ppc-001', 'ppc-002', 'ppc-003', 'pvc-004', 'pvc-005']
  },
  {
    id: 'sol-007',
    title: 'Apartment Water Distribution Systems',
    description: 'Sophisticated water distribution solutions designed specifically for multi-story residential buildings. Features rising mains, floor-by-floor distribution, booster pump systems, and smart pressure balancing for consistent water delivery at all levels.',
    image: '/solutions/Apartment Water Distribution Systems.jpeg',
    benefits: [
      'Consistent pressure at all floors',
      'Booster pump automation',
      'Water level monitoring systems',
      'Pressure balancing technology',
      'Smart distribution control',
      'Reduced water waste'
    ],
    relatedProducts: ['pump-001', 'pump-004', 'hdpe-001', 'valve-001', 'ppr-001']
  },
  {
    id: 'sol-008',
    title: 'Water Storage Solutions',
    description: 'Comprehensive water storage systems including underground tanks, elevated storage structures, and pressurized containers. We handle installation, pressure management, level control systems, and maintenance for residential and commercial applications.',
    image: '/solutions/Water Storage Solutions m.jpeg',
    benefits: [
      'Multiple tank options available',
      'Professional installation',
      'Pressure control systems',
      'Automatic level monitoring',
      'Corrosion-resistant materials',
      'Long service life (20-30 years)'
    ],
    relatedProducts: ['hdpe-001', 'valve-001', 'valve-002', 'acc-001', 'ppc-001']
  },
  {
    id: 'sol-009',
    title: 'Booster Pump Systems',
    description: 'Automatic pressure boosting systems ensuring consistent water pressure throughout buildings and facilities. Features intelligent pump controllers, check valves, and monitoring systems for apartments, hotels, and commercial properties.',
    image: '/solutions/Booster Pump Systems.jpeg',
    benefits: [
      'Automatic pressure maintenance',
      'Reduced water pressure issues',
      'Smart pump controllers',
      'Energy-efficient operation',
      'Quiet system performance',
      'Minimal operator intervention'
    ],
    relatedProducts: ['pump-001', 'pump-002', 'pump-004', 'valve-001', 'valve-004']
  },
  {
    id: 'sol-010',
    title: 'Drainage & Sewer Solutions',
    description: 'Complete wastewater management systems including drainage design, sewer line installation, inspection chambers, and septic tank systems. We ensure proper waste disposal and environmental compliance for residential and commercial facilities.',
    image: '/solutions/Drainage & Sewer Solutions.jpeg',
    benefits: [
      'Proper wastewater management',
      'Environmental compliance',
      'Professional system design',
      'Inspection and maintenance access',
      'Long-lasting pipe materials',
      'Odor and pest prevention'
    ],
    relatedProducts: ['hdpe-001', 'ppc-001', 'valve-001', 'valve-003', 'hdpe-002']
  },
  {
    id: 'sol-011',
    title: 'Fire Fighting Water Systems',
    description: 'Specialized water systems designed for fire safety and emergency response. Includes hydrant installation, hose reel systems, dedicated fire pumps, and pressurized storage tanks meeting all fire safety codes and regulations.',
    image: '/solutions/Fire Fighting Water Systems.jpg',
    benefits: [
      'Code-compliant installations',
      'High-capacity fire pumps',
      'Reliable emergency response',
      'Professional system testing',
      'Regular maintenance programs',
      'Insurance requirements met'
    ],
    relatedProducts: ['pump-001', 'valve-003', 'hdpe-002', 'valve-001', 'acc-006']
  },
  {
    id: 'sol-012',
    title: 'Rainwater Harvesting Solutions',
    description: 'Sustainable water collection and management systems that capture roof runoff for storage, treatment, and use. Includes guttering, filtration, storage tanks, and distribution systems for residential and commercial properties.',
    image: '/solutions/Rainwater Harvesting Solutions.png',
    benefits: [
      'Reduced municipal water dependency',
      'Lower water bills',
      'Sustainable resource management',
      'Environmental conservation',
      'Backup water supply security',
      'Green building certification support'
    ],
    relatedProducts: ['hdpe-001', 'wt-002', 'wt-003', 'irr-001', 'valve-001']
  },
  {
    id: 'sol-013',
    title: 'Industrial Water Solutions',
    description: 'Heavy-duty water management systems for manufacturing plants, processing facilities, and industrial operations. Provides high-capacity pumping, treatment, recycling, and process water systems with continuous operation capabilities.',
    image: '/solutions/Industrial Water Systems.jpeg',
    benefits: [
      'High-capacity water handling',
      '24/7 continuous operation',
      'Process water optimization',
      'Water recycling capabilities',
      'Quality monitoring systems',
      'Compliance with regulations'
    ],
    relatedProducts: ['pump-001', 'wt-001', 'valve-003', 'hdpe-002', 'ppc-001']
  },
  {
    id: 'sol-014',
    title: 'Wastewater Treatment Solutions',
    description: 'Advanced wastewater treatment and recycling systems for environmental protection and resource recovery. Includes sewage treatment, effluent processing, and water recycling for facilities seeking sustainability and regulatory compliance.',
    image: '/solutions/Wastewater Treatment Solutions.jpeg',
    benefits: [
      'Environmental compliance assured',
      'Water recycling capabilities',
      'Reduced disposal costs',
      'Resource recovery potential',
      'Professional operation support',
      'Regulatory requirement fulfillment'
    ],
    relatedProducts: ['wt-001', 'wt-003', 'valve-001', 'pump-001', 'hdpe-001']
  },
  {
    id: 'sol-015',
    title: 'Swimming Pool Solutions',
    description: 'Complete pool water management systems including filtration, circulation, treatment, and maintenance. Ensures crystal-clear water, proper chemical balance, and safe swimming conditions for residential and commercial pools.',
    image: '/solutions/Swimming Pool Solutions.webp',
    benefits: [
      'Crystal-clear pool water',
      'Proper chemical balance',
      'Efficient circulation systems',
      'Algae prevention',
      'Professional maintenance',
      'Safe swimming conditions'
    ],
    relatedProducts: ['pump-001', 'pump-004', 'wt-001', 'wt-002', 'valve-002']
  },
  {
    id: 'sol-016',
    title: 'Environmental Water Management Solutions',
    description: 'Sustainable and eco-friendly water management focusing on conservation, efficiency, and environmental stewardship. Includes water audits, efficiency improvement programs, and conservation technologies for responsible water use.',
    image: '/solutions/Environmental Water Solutions.webp',
    benefits: [
      'Reduced water consumption',
      'Lower utility bills',
      'Environmental impact reduction',
      'Sustainability certification eligible',
      'Carbon footprint reduction',
      'Future-proof water systems'
    ],
    relatedProducts: ['pump-003', 'wt-002', 'irr-001', 'hdpe-001', 'acc-007']
  },
];

