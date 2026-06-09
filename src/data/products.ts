import type { Product } from '../types';

export const products: Product[] = [
  // Water Treatment
  {
    id: 'wt-001',
    name: 'Industrial Water Treatment System',
    category: 'water-treatment',
    description: 'Advanced multi-stage water treatment system for industrial applications with high-capacity filtration.',
    shortDescription: 'Industrial multi-stage water treatment',
    image: '/images/FRP Tank for water treatment.jpeg',
    features: ['Multi-stage filtration', 'High capacity', 'Energy efficient', 'Automated monitoring']
  },
  {
    id: 'wt-002',
    name: 'Residential Water Purifier',
    category: 'water-treatment',
    description: 'Complete home water purification system with activated carbon filters and UV sterilization.',
    shortDescription: 'Home water purification system',
    image: '/images/Mini RO system or under sink.jpeg',
    features: ['UV sterilization', 'Carbon filtration', 'Compact design', 'Easy maintenance']
  },
  {
    id: 'wt-003',
    name: 'Reverse Osmosis Unit',
    category: 'water-treatment',
    description: 'High-efficiency reverse osmosis system for removing dissolved solids and contaminants.',
    shortDescription: 'Reverse osmosis water purification',
    image: '/images/Washable membrane, water treatment.jpeg',
    features: ['99.9% filtration', 'Low waste', 'Compact', 'Fast processing']
  },

  // Pumps
  {
    id: 'pump-001',
    name: 'Centrifugal Pump 5HP',
    category: 'pumps',
    description: 'Heavy-duty centrifugal pump suitable for agricultural and industrial water circulation.',
    shortDescription: '5HP centrifugal pump',
    image: '/images/0.5hp.jpeg',
    features: ['5HP motor', 'High flow rate', 'Durable construction', 'Easy maintenance']
  },
  {
    id: 'pump-002',
    name: 'Submersible Pump 2HP',
    category: 'pumps',
    description: 'Energy-efficient submersible pump for boreholes and deep wells.',
    shortDescription: 'Submersible borehole pump',
    image: '/images/0.5hp.jpeg',
    features: ['2HP motor', 'Deep well capability', 'Corrosion resistant', 'Quiet operation']
  },
  {
    id: 'pump-003',
    name: 'Solar Powered Pump System',
    category: 'pumps',
    description: 'Eco-friendly solar-powered pump system for remote locations and off-grid applications.',
    shortDescription: 'Solar pump system',
    image: '/images/0.5hp.jpeg',
    features: ['Solar powered', 'Low maintenance', 'Eco-friendly', 'Remote compatible']
  },

  // HDPE Pipes
  {
    id: 'hdpe-001',
    name: 'HDPE Pipe 50mm',
    category: 'hdpe-pipes',
    description: 'High-density polyethylene pipe for agricultural and water distribution networks.',
    shortDescription: '50mm HDPE pipe roll',
    image: '/images/HDPE pipes.jpeg',
    features: ['50mm diameter', 'High flexibility', 'Chemical resistant', 'Long lifespan']
  },
  {
    id: 'hdpe-002',
    name: 'HDPE Pipe 75mm',
    category: 'hdpe-pipes',
    description: 'Larger diameter HDPE pipe for main water distribution lines.',
    shortDescription: '75mm HDPE pipe roll',
    image: '/images/HDPE pipes.jpeg',
    features: ['75mm diameter', 'High capacity', 'Flexible', 'Cost-effective']
  },
  {
    id: 'hdpe-003',
    name: 'HDPE Pipe 100mm',
    category: 'hdpe-pipes',
    description: 'Large capacity HDPE pipe for irrigation and industrial applications.',
    shortDescription: '100mm HDPE pipe roll',
    image: '/images/HDPE pipes.jpeg',
    features: ['100mm diameter', 'High capacity', 'Durable', 'Weather resistant']
  },

  // PVC & UPVC
  {
    id: 'pvc-001',
    name: 'PVC Coupling 32mm',
    category: 'pvc-upvc',
    description: 'Standard PVC coupling for joining 32mm pipes.',
    shortDescription: 'PVC coupling 32mm',
    image: '/images/HDPE coupling.jpeg',
    features: ['32mm size', 'Easy installation', 'Durable', 'Cost-effective']
  },
  {
    id: 'pvc-002',
    name: 'UPVC Pipe 25mm',
    category: 'pvc-upvc',
    description: 'Unplasticized PVC pipe for pressure applications.',
    shortDescription: 'UPVC pressure pipe 25mm',
    image: '/images/Pvc ball valves.jpeg',
    features: ['25mm diameter', 'High pressure rated', 'Long lifespan', 'Corrosion resistant']
  },
  {
    id: 'pvc-003',
    name: 'PVC Fitting Set',
    category: 'pvc-upvc',
    description: 'Complete set of PVC fittings and connectors.',
    shortDescription: 'PVC fitting set',
    image: '/images/Ips fitting.jpeg',
    features: ['Multiple sizes', 'Complete set', 'Easy assembly', 'Quality assured']
  },

  // PPR Pipes
  {
    id: 'ppr-001',
    name: 'PPR Pipe 20mm',
    category: 'ppr',
    description: 'Polypropylene random copolymer pipe for hot and cold water applications.',
    shortDescription: 'PPR pipe 20mm',
    image: '/images/Ips tee.jpeg',
    features: ['20mm diameter', 'Hot water rated', 'Long lifespan', 'Easy installation']
  },
  {
    id: 'ppr-002',
    name: 'PPR Fitting Kit',
    category: 'ppr',
    description: 'Complete PPR fitting kit with all necessary connectors and adapters.',
    shortDescription: 'PPR fitting kit',
    image: '/images/HDPE Flanged adaptor.jpeg',
    features: ['Multiple fittings', 'Compatible sizes', 'High quality', 'Easy connection']
  },

  // Valves
  {
    id: 'valve-001',
    name: 'Ball Valve 2-inch',
    category: 'valves',
    description: 'Heavy-duty ball valve for water distribution and industrial applications.',
    shortDescription: 'Ball valve 2-inch',
    image: '/images/HDPE ball valve.jpeg',
    features: ['2-inch size', 'Full flow', 'Durable', 'Quick operation']
  },
  {
    id: 'valve-002',
    name: 'Check Valve 1-inch',
    category: 'valves',
    description: 'Precision check valve to prevent backflow in water systems.',
    shortDescription: 'Check valve 1-inch',
    image: '/images/Non return valve dual disc type.jpeg',
    features: ['1-inch size', 'Low pressure drop', 'Reliable', 'Easy maintenance']
  },
  {
    id: 'valve-003',
    name: 'Gate Valve 3-inch',
    category: 'valves',
    description: 'Industrial-grade gate valve for large pipeline applications.',
    shortDescription: 'Gate valve 3-inch',
    image: '/images/Gate valves.jpeg',
    features: ['3-inch size', 'Heavy-duty', 'Corrosion resistant', 'Long lifespan']
  },

  // Irrigation
  {
    id: 'irr-001',
    name: 'Drip Irrigation Kit',
    category: 'irrigation',
    description: 'Complete drip irrigation system with drippers, hoses, and connectors.',
    shortDescription: 'Drip irrigation kit',
    image: '/images/Rain hose pipe for irrigation.jpeg',
    features: ['Water efficient', 'Complete system', 'Easy installation', 'Adjustable drippers']
  },
  {
    id: 'irr-002',
    name: 'Sprinkler System',
    category: 'irrigation',
    description: 'Adjustable sprinkler system for large area irrigation.',
    shortDescription: 'Sprinkler irrigation system',
    image: '/images/Rain gun.jpeg',
    features: ['Wide coverage', 'Adjustable range', 'Durable heads', 'Easy setup']
  },
  {
    id: 'irr-003',
    name: 'Micro-Sprinkler',
    category: 'irrigation',
    description: 'Precision micro-sprinkler for targeted plant irrigation.',
    shortDescription: 'Micro-sprinkler',
    image: '/images/Sprinkler.jpeg',
    features: ['Precision control', 'Water saving', 'Long lasting', 'Easy maintenance']
  },

  // Air Release Valves
  {
    id: 'valve-004',
    name: 'Air Release Valve Standard',
    category: 'valves',
    description: 'Precision air release valve for removing air pockets from water distribution systems.',
    shortDescription: 'Air release valve',
    image: '/images/Air release valve.jpeg',
    features: ['Automatic air venting', 'Prevents airlock', 'Low maintenance', 'Durable']
  },
  {
    id: 'valve-005',
    name: 'Air Release Valve Single Orifice',
    category: 'valves',
    description: 'Single orifice air release valve for precise air management in pipelines.',
    shortDescription: 'Single orifice air release valve',
    image: '/images/Air release valve single orifice.jpeg',
    features: ['Single orifice design', 'High efficiency', 'Reliable operation', 'Easy installation']
  },
  {
    id: 'valve-006',
    name: 'Air Release Valve Dual',
    category: 'valves',
    description: 'Dual-chamber air release valve for large diameter piping systems.',
    shortDescription: 'Dual air release valve',
    image: '/images/Air release valve 1.jpeg',
    features: ['Dual chamber', 'High capacity', 'Corrosion resistant', 'Weather proof']
  },
  {
    id: 'valve-007',
    name: 'Air Release Valve Advanced',
    category: 'valves',
    description: 'Advanced air release valve with enhanced performance for industrial systems.',
    shortDescription: 'Advanced air release valve',
    image: '/images/Air release valve 2.jpeg',
    features: ['Enhanced performance', 'Quick response', 'Extended lifespan', 'Industrial grade']
  },
  {
    id: 'valve-008',
    name: 'Plastic Air Release Valve',
    category: 'valves',
    description: 'Lightweight plastic air release valve for agricultural and residential applications.',
    shortDescription: 'Plastic air release valve',
    image: '/images/Plastic Air release valve.jpeg',
    features: ['Lightweight', 'Cost-effective', 'Chemical resistant', 'Easy maintenance']
  },

  // Butterfly Valves
  {
    id: 'valve-009',
    name: 'Butterfly Valve Standard',
    category: 'valves',
    description: 'Standard butterfly valve for general water distribution and industrial flow control.',
    shortDescription: 'Butterfly valve',
    image: '/images/Butterfly valve.jpeg',
    features: ['Quick operation', 'Low torque', 'Compact design', 'Cost-effective']
  },
  {
    id: 'valve-010',
    name: 'Butterfly Valve Gear Operated',
    category: 'valves',
    description: 'Gear-operated butterfly valve for precise flow control in large diameter pipes.',
    shortDescription: 'Gear butterfly valve',
    image: '/images/Butterfly valve gear type.jpeg',
    features: ['Gear operated', 'Precise control', 'Heavy-duty', 'Reliable']
  },
  {
    id: 'valve-011',
    name: 'Butterfly Valve Gear Type Advanced',
    category: 'valves',
    description: 'Advanced gear-operated butterfly valve with improved torque and control characteristics.',
    shortDescription: 'Advanced gear butterfly valve',
    image: '/images/Butterfly valve gear type 1.jpeg',
    features: ['Advanced design', 'Smooth operation', 'Long lifespan', 'Industrial application']
  },

  // Specialized Valves
  {
    id: 'valve-012',
    name: 'Foot Valve PVC',
    category: 'valves',
    description: 'PVC foot valve with strainer for pump suction lines and deep well installations.',
    shortDescription: 'PVC foot valve with strainer',
    image: '/images/Pvc Foot valve.jpeg',
    features: ['Strainer included', 'Check valve function', 'Suction line rated', 'Easy maintenance']
  },
  {
    id: 'valve-013',
    name: 'Reducing Valve',
    category: 'valves',
    description: 'Pressure reducing valve to maintain consistent pressure throughout water systems.',
    shortDescription: 'Pressure reducing valve',
    image: '/images/Reducing valves.jpeg',
    features: ['Pressure regulation', 'Flow control', 'Adjustable setting', 'Durable']
  },
  {
    id: 'valve-014',
    name: 'Pressure Release Valve',
    category: 'valves',
    description: 'Safety pressure release valve to protect systems from over-pressure conditions.',
    shortDescription: 'Pressure relief valve',
    image: '/images/Pressure release valve.jpeg',
    features: ['Safety protection', 'Automatic operation', 'Adjustable pressure', 'Industrial grade']
  },
  {
    id: 'valve-015',
    name: 'Sluice Valve',
    category: 'valves',
    description: 'Heavy-duty sluice valve for water intake and discharge applications.',
    shortDescription: 'Sluice valve',
    image: '/images/Sluice valve.jpeg',
    features: ['Heavy-duty', 'Easy operation', 'Corrosion resistant', 'Long service life']
  },
  {
    id: 'valve-016',
    name: 'Flanged Non-Return Valve',
    category: 'valves',
    description: 'Flanged non-return valve to prevent backflow in large diameter piping systems.',
    shortDescription: 'Flanged non-return valve',
    image: '/images/Flanged non return valves.jpeg',
    features: ['Flanged connection', 'Backflow prevention', 'Large capacity', 'Industrial rated']
  },

  // Flanges and Couplings
  {
    id: 'fitting-001',
    name: 'Flanged Adaptor',
    category: 'pvc-upvc',
    description: 'Flanged adaptor for connecting flange pipes to standard pipes.',
    shortDescription: 'Flanged pipe adaptor',
    image: '/images/Flanged adaptor.jpeg',
    features: ['Versatile connection', 'Flange design', 'Durable', 'Easy installation']
  },
  {
    id: 'fitting-002',
    name: 'Threaded and Weldon Flanges',
    category: 'pvc-upvc',
    description: 'Combined threaded and weldon flanges for flexible piping connections.',
    shortDescription: 'Threaded & Weldon flanges',
    image: '/images/Threaded and Weldon Flanges.jpeg',
    features: ['Dual connection type', 'Flexible', 'High strength', 'Multiple sizes']
  },
  {
    id: 'fitting-003',
    name: 'VJ Coupling',
    category: 'pvc-upvc',
    description: 'VJ coupling for joining HDPE and PVC pipes in water distribution systems.',
    shortDescription: 'VJ pipe coupling',
    image: '/images/Vj coupling.jpeg',
    features: ['Easy assembly', 'Reliable seal', 'Multiple sizes', 'Cost-effective']
  },

  // Water Meters
  {
    id: 'meter-001',
    name: 'Electronic Water Meter',
    category: 'water-treatment',
    description: 'Digital water meter with electronic display for precise consumption measurement.',
    shortDescription: 'Electronic water meter',
    image: '/images/Electronic water meter.jpeg',
    features: ['Digital display', 'Accurate measurement', 'Easy reading', 'Durable']
  },
  {
    id: 'meter-002',
    name: 'Kent Water Meter 0.5 to 2',
    category: 'water-treatment',
    description: 'Kent brand water meter with flow range of 0.5 to 2 cubic meters per hour.',
    shortDescription: 'Kent water meter 0.5-2 m³/hr',
    image: '/images/Kent water meter 0.5 to 2.jpeg',
    features: ['Precision measurement', 'Wide flow range', 'Quality brand', 'Reliable']
  },
  {
    id: 'meter-003',
    name: 'Flanged Water Meter',
    category: 'water-treatment',
    description: 'Water meter with flanged connections for industrial and large-capacity systems.',
    shortDescription: 'Flanged water meter',
    image: '/images/Water meter Flanged.jpeg',
    features: ['Flanged connection', 'High capacity', 'Industrial grade', 'Accurate']
  },
  {
    id: 'meter-004',
    name: 'Super Meter Half Size',
    category: 'water-treatment',
    description: 'Compact super meter half-size for residential and small commercial applications.',
    shortDescription: 'Super meter half size',
    image: '/images/Plastic Super meter half.jpeg',
    features: ['Compact size', 'Easy installation', 'Durable', 'Cost-effective']
  },

  // Accessories
  {
    id: 'acc-001',
    name: 'Float Switch',
    category: 'water-treatment',
    description: 'Float switch for automatic water level detection and pump control.',
    shortDescription: 'Float level switch',
    image: '/images/Float switches.jpeg',
    features: ['Automatic operation', 'Reliable detection', 'Easy installation', 'Durable']
  },
  {
    id: 'acc-002',
    name: 'Borehole Covers',
    category: 'water-treatment',
    description: 'Protective borehole covers for safety and contamination prevention.',
    shortDescription: 'Borehole protective covers',
    image: '/images/Borehole covers.jpeg',
    features: ['Safety protection', 'Weather resistant', 'Easy installation', 'Durable']
  },

  // CPVC & Fabricated Fittings
  {
    id: 'cpvc-001',
    name: 'Fabricated Flanged Reducers',
    category: 'cpvc-fittings',
    description: 'Industrial-grade fabricated flanged reducers for connecting different diameter pipes with secure flange connections.',
    shortDescription: 'Fabricated flanged reducers',
    image: '/images/Fabricated flanged  reducers.jpeg',
    features: ['Multiple sizes', 'Flanged design', 'Industrial grade', 'Long lifespan']
  },
  {
    id: 'cpvc-002',
    name: 'Flanged 45° Elbow',
    category: 'cpvc-fittings',
    description: 'High-quality fabricated 45-degree elbows with flanged connections for directional changes in piping systems.',
    shortDescription: 'Flanged 45° elbow fitting',
    image: '/images/Flanged 45° elbow.jpeg',
    features: ['45-degree angle', 'Flanged connection', 'Durable construction', 'Flow efficient']
  },
  {
    id: 'cpvc-003',
    name: 'Flanged Fabricated Straight Tee',
    category: 'cpvc-fittings',
    description: 'Precision-engineered fabricated straight tee fitting with flanged connections for equal diameter branches.',
    shortDescription: 'Flanged straight tee',
    image: '/images/Flanged Fabricated Straight tee.jpeg',
    features: ['Straight configuration', 'Flanged design', 'High capacity', 'Three-way connection']
  },
  {
    id: 'cpvc-004',
    name: 'Flanged Reducing Tee',
    category: 'cpvc-fittings',
    description: 'Fabricated reducing tee with flanged connections for connecting pipes of different diameters with three-way junction.',
    shortDescription: 'Flanged reducing tee',
    image: '/images/Flanged reducing Tee.jpeg',
    features: ['Reducing design', 'Flanged connection', 'Multiple sizes', 'Versatile application']
  },

  // New Valves
  {
    id: 'valve-017',
    name: 'Brass and Stainless Steel Solenoid Valve',
    category: 'valves',
    description: 'Precision solenoid valve in brass and stainless steel construction for automatic flow control in water systems.',
    shortDescription: 'Solenoid valve brass/stainless',
    image: '/images/Brass and stainless steel solenoid valve.jpeg',
    features: ['Brass & stainless body', 'Electromagnetic control', 'Fast response', 'Long service life']
  },
  {
    id: 'valve-018',
    name: 'High Flow Float Valve',
    category: 'valves',
    description: 'Heavy-duty high-flow float valve for large capacity water level control in tanks and reservoirs.',
    shortDescription: 'High flow float valve',
    image: '/images/High flow float valve.jpeg',
    features: ['High flow capacity', 'Float operated', 'Reliable control', 'Easy installation']
  },

  // New Water Treatment Products
  {
    id: 'wt-004',
    name: 'Water Filter Cartridges Collection',
    category: 'water-treatment',
    description: 'Complete range of replacement water filter cartridges including carbon, sediment, and membrane filters for all water treatment systems.',
    shortDescription: 'Filter cartridges replacement set',
    image: '/images/Filters - water treatment.jpeg',
    features: ['Multiple cartridge types', 'Universal compatibility', 'High filtration', 'Easy replacement']
  },
  {
    id: 'wt-005',
    name: 'Pressure Gauge',
    category: 'water-treatment',
    description: 'Precision dual-scale pressure gauge for monitoring system pressure in water treatment and distribution applications.',
    shortDescription: 'System pressure gauge',
    image: '/images/Pressure gauge.jpeg',
    features: ['Dual scale (bar/psi)', 'Accurate reading', 'Brass connection', 'Easy installation']
  },

  // Additional Water Treatment Filters & Strainers
  {
    id: 'wt-009',
    name: 'Flanged Y Strainer',
    category: 'water-treatment',
    description: 'Industrial flanged Y-strainer for filtering debris and particles in water distribution piping systems.',
    shortDescription: 'Flanged Y-strainer filter',
    image: '/images/Flanged Y strainer.jpeg',
    features: ['Flanged connection', 'High capacity', 'Easy cleaning', 'Corrosion resistant']
  },

  // Additional Pumps
  {
    id: 'pump-004',
    name: 'Domestic Electric Water Pump 0.5HP',
    category: 'pumps',
    description: 'Compact and efficient 0.5HP electric water pump ideal for domestic water supply and small-scale applications.',
    shortDescription: '0.5HP electric pump',
    image: '/images/0.5hp domestic pump.jpeg',
    features: ['0.5HP motor', 'Compact design', 'Energy efficient', 'Easy installation']
  },

  // Additional Irrigation Products
  {
    id: 'irr-004',
    name: 'Screen Filter for Irrigation',
    category: 'irrigation',
    description: 'High-quality screen filter system for irrigation applications with replaceable mesh cartridge for debris removal.',
    shortDescription: 'Screen irrigation filter',
    image: '/images/Screen filter - irrigation.jpeg',
    features: ['Mesh screen filter', 'Replaceable cartridge', 'High flow rate', 'Easy maintenance']
  },

  // Additional CPVC & Fittings
  {
    id: 'cpvc-005',
    name: 'Metallic Sandle Clamps',
    category: 'cpvc-fittings',
    description: 'Heavy-duty metallic sandle clamps for secure pipe fastening and branch connections in various pipe diameters.',
    shortDescription: 'Metallic sandle clamps',
    image: '/images/Metallic Sandle clamp.jpeg',
    features: ['Multiple sizes', 'Corrosion resistant', 'Strong fastening', 'Easy installation']
  },
  {
    id: 'cpvc-006',
    name: 'Flanges Weldon',
    category: 'cpvc-fittings',
    description: 'Precision Weldon flange connections for CPVC and fabricated piping systems with reliable welding compatibility.',
    shortDescription: 'Weldon flange connector',
    image: '/images/Flanges weldon.jpeg',
    features: ['Weldon connection', 'Precision machined', 'Durable design', 'Industrial grade']
  },

  // Additional Water Treatment
  {
    id: 'wt-006',
    name: 'MPV Swimming Pool Tank',
    category: 'water-treatment',
    description: 'Complete swimming pool water treatment tank system with multiport valve for filtration and circulation.',
    shortDescription: 'Pool treatment tank MPV',
    image: '/images/Mpv swimming pool tank.jpeg',
    features: ['Multiport valve', 'High capacity', 'Complete system', 'Professional grade']
  },

  // Fasteners & Parts
  {
    id: 'part-001',
    name: 'Bolts and Nuts Fasteners Collection',
    category: 'parts-accessories',
    description: 'High-quality stainless steel bolts, nuts, and fasteners for valve assembly, piping systems, and equipment maintenance.',
    shortDescription: 'Stainless steel bolts & nuts set',
    image: '/images/Bolts and nuts VALVES.jpeg',
    features: ['Stainless steel', 'Multiple sizes', 'Corrosion resistant', 'Precision engineered']
  },

  // Additional HDPE Fittings
  {
    id: 'hdpe-004',
    name: 'HDPE Male Adaptor Set',
    category: 'hdpe-pipes',
    description: 'Complete set of HDPE male adaptors in multiple sizes for connecting HDPE pipes to threaded connections.',
    shortDescription: 'HDPE male adaptor collection',
    image: '/images/HDPE Male Adaptor.jpeg',
    features: ['Multiple sizes', 'Easy installation', 'Reliable seal', 'High capacity']
  },
  {
    id: 'hdpe-005',
    name: 'HDPE Straight Tee Collection',
    category: 'hdpe-pipes',
    description: 'Comprehensive set of HDPE straight tee fittings for equal diameter branch connections in irrigation and water distribution.',
    shortDescription: 'HDPE straight tee set',
    image: '/images/HDPE straight Tee.jpeg',
    features: ['Multiple sizes', 'Equal branch connection', 'Durable design', 'Flow efficient']
  },
  {
    id: 'hdpe-006',
    name: 'VJ Coupling HDPE Collection',
    category: 'hdpe-pipes',
    description: 'Complete range of VJ couplings for HDPE pipes with flanged connections for reliable water distribution.',
    shortDescription: 'VJ coupling HDPE set',
    image: '/images/Vj coupling HDPE.jpeg',
    features: ['Flanged design', 'Multiple sizes', 'Reliable seal', 'Industrial grade']
  },

  // Additional PPR Pipes
  {
    id: 'ppr-003',
    name: 'PPR Pipe PN20 Bulk Supply',
    category: 'ppr',
    description: 'High-capacity PPR pipes PN20 rated for hot and cold water applications with excellent pressure tolerance.',
    shortDescription: 'PPR pipe PN20 bulk',
    image: '/images/PPR pipe PN20.jpeg',
    features: ['PN20 pressure rated', 'Hot/cold water', 'Bulk supply', 'Long lifespan']
  },

  // Additional Water Treatment Systems
  {
    id: 'wt-007',
    name: 'UV Steriliser Water Treatment System',
    category: 'water-treatment',
    description: 'Complete UV sterilization system with pump, housing, and UV lamps for purifying water and eliminating microorganisms.',
    shortDescription: 'UV sterilizer system',
    image: '/images/UV steriliser - water treatment.jpeg',
    features: ['UV disinfection', 'Complete system', 'Pump included', 'High efficiency']
  },
  {
    id: 'wt-008',
    name: 'Undersink Reverse Osmosis Complete System',
    category: 'water-treatment',
    description: 'Compact undersink reverse osmosis system with UV sterilization, storage tank, and complete faucet assembly for residential use.',
    shortDescription: 'Undersink RO system complete',
    image: '/images/Reverse osmosis undersink  - water treatment.jpeg',
    features: ['UV sterilization', 'Storage tank', 'Easy installation', 'Compact design']
  },

  // Additional Valves
  {
    id: 'valve-021',
    name: 'Air Release Valve Double Orifice',
    category: 'valves',
    description: 'Dual orifice air release valve with enhanced performance for large capacity water distribution systems and industrial applications.',
    shortDescription: 'Double orifice air valve',
    image: '/images/Air release valve double orifice.jpeg',
    features: ['Double orifice design', 'High capacity', 'Reliable performance', 'Industrial rated']
  },
  {
    id: 'valve-022',
    name: 'HDPE Ball Valve Main',
    category: 'valves',
    description: 'Professional HDPE ball valve with clear center viewing window and manual handle for reliable flow control in water systems.',
    shortDescription: 'HDPE ball valve main',
    image: '/images/HDPE ball valve main.jpeg',
    features: ['HDPE body', 'Clear viewing window', 'Manual handle', 'Reliable operation']
  },

  // Additional Irrigation Equipment
  {
    id: 'irr-005',
    name: 'Main Irrigation Sprinkler System',
    category: 'irrigation',
    description: 'Professional-grade main irrigation sprinkler with adjustable coverage and easy setup for field and garden applications.',
    shortDescription: 'Main sprinkler system',
    image: '/images/Sprinkler main.jpeg',
    features: ['Adjustable coverage', 'Professional grade', 'Easy setup', 'Durable design']
  },

  // Additional Water Treatment Filter
  {
    id: 'wt-010',
    name: 'Brass Y Strainer Filter',
    category: 'water-treatment',
    description: 'Premium brass Y-strainer for filtering debris and sediment in water supply lines with easy drain and cartridge access.',
    shortDescription: 'Brass Y-strainer filter',
    image: '/images/Y strainer.jpeg',
    features: ['Brass construction', 'Easy drain access', 'High filtration', 'Durable filter']
  },
];

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'pumps', label: 'Pumps' },
  { id: 'hdpe-pipes', label: 'HDPE Pipes' },
  { id: 'pvc-upvc', label: 'PVC & UPVC' },
  { id: 'ppr', label: 'PPR' },
  { id: 'valves', label: 'Valves' },
  { id: 'irrigation', label: 'Irrigation' },
  { id: 'cpvc-fittings', label: 'CPVC & Fabricated Fittings' },
  { id: 'parts-accessories', label: 'Parts & Accessories' },
];


