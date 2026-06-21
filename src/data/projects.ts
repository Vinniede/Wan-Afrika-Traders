import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'Large-Scale Irrigation Farm - Primary Site',
    category: 'irrigation',
    description: 'Successfully installed a comprehensive drip irrigation system for a 500-hectare commercial farm in rural Kenya. The system reduced water consumption by 65% and increased crop yield by 40%.',
    image: '/images/Irrigation sprinkler.jpeg',
    video: '/images/Large-Scale Irrigation Farm.mp4',
    galleryVideos: ['/images/Large-Scale Irrigation Farm 1.mp4'],
    location: 'Rift Valley, Kenya',
    completionDate: '2024-06-15',
    galleryImages: [
      '/images/Rain gun.jpeg',
      '/images/Rain hose pipe for irrigation.jpeg',
      '/images/Sprinkler.jpeg',
    ]
  },
  {
    id: 'proj-002',
    title: 'Industrial Water Treatment Plant',
    category: 'water-treatment',
    description: 'Designed and installed a state-of-the-art water treatment facility for a major manufacturing company. The system processes 10,000 liters per hour with 99.9% contaminant removal.',
    image: '/images/FRP Tank for water treatment.jpeg',
    video: '/images/Multi-Stage Water Purification System.mp4',
    location: 'Industrial Area, Nairobi, Kenya',
    completionDate: '2024-05-20',
    galleryImages: [
      '/images/Washable membrane, water treatment.jpeg',
      '/images/Mini RO system or under sink.jpeg',
    ]
  },
  {
    id: 'proj-003',
    title: 'Community Borehole Drilling Operations',
    category: 'borehole',
    description: 'Expert borehole drilling operations for rural water supply projects. Our advanced drilling techniques ensure efficient water access in challenging terrain.',
    image: '/images/Borehole covers.jpeg',
    video: '/images/Community Borehole drilling.mp4',
    location: 'Northern Kenya, Kenya',
    completionDate: '2024-03-15',
  },
  {
    id: 'proj-004',
    title: 'Community Borehole Pumping System',
    category: 'borehole',
    description: 'Installation of high-efficiency pumping systems for community boreholes. Provides reliable water distribution with minimal energy consumption.',
    image: '/images/Borehole covers.jpeg',
    video: '/images/Community Borehole pumping.mp4',
    location: 'Northern Kenya, Kenya',
    completionDate: '2024-03-18',
  },
  {
    id: 'proj-005',
    title: 'Community School Borehole Project',
    category: 'borehole',
    description: 'Complete water supply solution for rural school community. Ensures students and staff have access to clean, safe drinking water for improved health and hygiene.',
    image: '/images/Borehole covers.jpeg',
    video: '/images/Community School Borehole.mp4',
    location: 'Northern Kenya, Kenya',
    completionDate: '2024-03-20',
  },
  {
    id: 'proj-006',
    title: 'Shopping Mall Water System',
    category: 'commercial',
    description: 'Complete water supply, treatment, and distribution system for a large commercial shopping complex. Includes backup storage and emergency systems.',
    image: '/Projects/Shopping mall water system.jpeg',
    location: 'Nairobi, Kenya',
    completionDate: '2024-04-05',
    galleryImages: [
      '/images/Water meter.jpeg',
      '/images/Pressure gauge.jpeg',
      '/images/Gate valves.jpeg',
    ]
  },
  {
    id: 'proj-007',
    title: 'Vegetable Greenhouse Irrigation System',
    category: 'irrigation',
    description: 'Implemented precision drip and micro-sprinkler irrigation system for a high-tech greenhouse facility. Increased productivity by 35% with automated moisture monitoring.',
    image: '/images/Sprinkler 1.jpeg',
    video: '/images/Vegetable Greenhouse Irrigation.mp4',
    location: 'Central Highlands, Kenya',
    completionDate: '2024-02-28',
  },
  {
    id: 'proj-008',
    title: 'Estate Irrigation Landscape Project',
    category: 'irrigation',
    description: 'Designed and implemented a modern irrigation system for a residential estate community. Automated watering schedule optimized water usage while maintaining landscape beauty.',
    image: '/images/Rain gun 2.jpeg',
    video: '/images/Estate irrigation project.mp4',
    location: 'Karen, Nairobi, Kenya',
    completionDate: '2023-12-20',
  },
  {
    id: 'proj-009',
    title: 'Multi-Stage Water Purification System - Hotel Chain',
    category: 'water-treatment',
    description: 'Installed a comprehensive 5-stage water purification system for a major hotel chain with 500+ rooms. System ensures luxury-grade water quality throughout the facility.',
    image: '/images/Mini RO system or under sink.jpeg',
    location: 'Mombasa, Kenya',
    completionDate: '2024-01-15',
  },
  {
    id: 'proj-010',
    title: 'Residential Complex Water Network',
    category: 'commercial',
    description: 'Complete water infrastructure for a 2,000-unit residential complex. Includes treatment, storage, and distribution systems with real-time monitoring.',
    image: '/Projects/Residential Complex Water Network.jpeg',
    location: 'Westlands, Nairobi, Kenya',
    completionDate: '2023-11-10',
    galleryImages: [
      '/images/HDPE ball valve.jpeg',
      '/images/Electronic water meter.jpeg',
    ]
  },
  {
    id: 'proj-011',
    title: 'Community Borehole Network System',
    category: 'borehole',
    description: 'Comprehensive borehole network infrastructure serving multiple community water points. System includes drilling, pumping equipment, storage tanks, and distribution lines ensuring reliable water access for agricultural and domestic use.',
    image: '/Projects/Community Borehole Network.jpeg',
    location: 'Trans Nzoia County, Kenya',
    completionDate: '2024-02-10',
    galleryImages: [
      '/images/Borehole covers.jpeg',
      '/images/HDPE pipes.jpeg',
    ]
  },
  {
    id: 'proj-012',
    title: 'Large-Scale Irrigation System Expansion',
    category: 'irrigation',
    description: 'Expanded irrigation infrastructure for large-scale agricultural operations. Includes network of drip irrigation lines, rain guns, pumping stations, and automation controls optimizing water efficiency across 1,000+ hectares.',
    image: '/Projects/Irrigation system-projects.jpeg',
    location: 'Kitale, Trans Nzoia County, Kenya',
    completionDate: '2024-05-22',
    galleryImages: [
      '/images/Irrigation sprinkler.jpeg',
      '/images/Rain gun.jpeg',
      '/images/Drip irrigation tape-irrigation category.jpeg',
    ]
  },
  {
    id: 'proj-013',
    title: 'Advanced Sprinkler System Installation',
    category: 'irrigation',
    description: 'State-of-the-art sprinkler irrigation system for commercial horticultural operation. Features programmable controllers, multiple irrigation zones, and weather-responsive automation for optimal water utilization and crop management.',
    image: '/Projects/Sprinklers- projects.jpeg',
    location: 'Nairobi Agricultural Zone, Kenya',
    completionDate: '2024-03-28',
    galleryImages: [
      '/images/Sprinkler.jpeg',
      '/images/Rain gun 1.jpeg',
      '/images/Sprinkler 1.jpeg',
    ]
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'irrigation', label: 'Irrigation Projects' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'borehole', label: 'Borehole Projects' },
  { id: 'commercial', label: 'Commercial Projects' },
];

