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

  // PPR Pipes & Fittings
  {
    id: 'ppr-003',
    name: 'PPR Pipe PN20',
    category: 'ppr',
    description: 'Premium PPR pipe PN20 rated for high-pressure hot and cold water applications.',
    shortDescription: 'PPR pipe PN20 high-pressure',
    image: '/images/PPR pipe PN20.jpeg',
    features: ['PN20 rated', 'High pressure', 'Hot water capable', 'Long lifespan']
  },
  {
    id: 'ppr-004',
    name: 'PPR Pipes Standard',
    category: 'ppr',
    description: 'Standard polypropylene random copolymer pipes for residential and commercial use.',
    shortDescription: 'PPR pipes standard',
    image: '/images/PPR pipes.jpg',
    features: ['Standard grade', 'Chemical resistant', 'Flexible', 'Easy jointing']
  },
  {
    id: 'ppr-005',
    name: 'PPR Fittings Professional',
    category: 'ppr',
    description: 'Professional-grade PPR fittings with precision machining for reliable connections.',
    shortDescription: 'PPR fittings professional',
    image: '/images/PPR fittings.jpeg',
    features: ['Precision machined', 'Multiple sizes', 'Reliable seal', 'Compatible']
  },

  // CPVC Fittings
  {
    id: 'cpvc-001',
    name: 'CPVC & Fabricated Fittings',
    category: 'cpvc-fittings',
    description: 'Chlorinated PVC fittings with custom fabricated options for industrial applications.',
    shortDescription: 'CPVC fabricated fittings',
    image: '/images/CPVC and Fabricated Fittings.jpeg',
    features: ['Chemical resistant', 'Custom fabricated', 'High temperature', 'Industrial grade']
  },

  // PVC Products
  {
    id: 'pvc-004',
    name: 'PVC Pipes Standard',
    category: 'pvc-upvc',
    description: 'Standard pressure-rated PVC pipes for various water distribution applications.',
    shortDescription: 'PVC pipes standard',
    image: '/images/PVC pipes.jpg',
    features: ['Pressure rated', 'Wide availability', 'Easy installation', 'Affordable']
  },
  {
    id: 'pvc-005',
    name: 'PVC Fittings Complete Set',
    category: 'pvc-upvc',
    description: 'Comprehensive set of PVC fittings including elbows, tees, and connectors.',
    shortDescription: 'PVC fittings complete',
    image: '/images/Pvc fittings.jpeg',
    features: ['Complete variety', 'Easy assembly', 'Reliable', 'Quality construction']
  },

  // UPVC Products
  {
    id: 'upvc-001',
    name: 'UPVC Pipes Premium',
    category: 'pvc-upvc',
    description: 'Premium unplasticized PVC pipes for industrial and high-pressure applications.',
    shortDescription: 'UPVC pipes premium',
    image: '/images/uPVC pipes.jpeg',
    features: ['High pressure rated', 'Rigid construction', 'Chemical resistant', 'Long lasting']
  },
  {
    id: 'upvc-002',
    name: 'UPVC Fittings Set',
    category: 'pvc-upvc',
    description: 'Complete UPVC fitting set for pressure-rated applications.',
    shortDescription: 'UPVC fittings set',
    image: '/images/UPVC fittings.jpeg',
    features: ['Pressure rated', 'Multiple sizes', 'Quality assured', 'Easy connection']
  },

  // Additional HDPE Products
  {
    id: 'hdpe-004',
    name: 'HDPE Ball Valve Advanced',
    category: 'hdpe-pipes',
    description: 'Advanced HDPE ball valve with enhanced flow characteristics and durability.',
    shortDescription: 'HDPE ball valve advanced',
    image: '/images/HDPE ball valve 1.jpeg',
    features: ['Full bore', 'High flow', 'Durable', 'Long service life']
  },
  {
    id: 'hdpe-005',
    name: 'HDPE Ball Valve Premium',
    category: 'hdpe-pipes',
    description: 'Premium HDPE ball valve for critical water distribution applications.',
    shortDescription: 'HDPE ball valve premium',
    image: '/images/HDPE ball valve main.jpeg',
    features: ['Premium quality', 'Reliable seal', 'Industrial tested', 'Corrosion resistant']
  },
  {
    id: 'hdpe-006',
    name: 'HDPE Fittings System',
    category: 'hdpe-pipes',
    description: 'Complete HDPE fittings system including couplings, tees, and adapters.',
    shortDescription: 'HDPE fittings system',
    image: '/images/HDPE fittings.jpeg',
    features: ['Complete range', 'Easy assembly', 'Reliable', 'Cost-effective']
  },
  {
    id: 'hdpe-007',
    name: 'HDPE Male Adaptor',
    category: 'hdpe-pipes',
    description: 'HDPE male adaptor for connecting HDPE pipes to threaded fittings.',
    shortDescription: 'HDPE male adaptor',
    image: '/images/HDPE Male Adaptor.jpeg',
    features: ['Threaded connection', 'Easy installation', 'Reliable seal', 'Versatile']
  },
  {
    id: 'hdpe-008',
    name: 'HDPE Straight Tee',
    category: 'hdpe-pipes',
    description: 'HDPE straight tee for equal-sized pipe junctions in water systems.',
    shortDescription: 'HDPE straight tee',
    image: '/images/HDPE straight Tee.jpeg',
    features: ['Equal size', 'Smooth flow', 'Reliable', 'Easy connection']
  },

  // Water Pumps
  {
    id: 'pump-004',
    name: 'Domestic Water Pump 0.5HP',
    category: 'pumps',
    description: 'Compact domestic water pump perfect for small residential and commercial applications.',
    shortDescription: 'Domestic 0.5HP pump',
    image: '/images/0.5hp domestic pump.jpeg',
    features: ['0.5HP motor', 'Compact size', 'Quiet operation', 'Easy installation']
  },
  {
    id: 'pump-005',
    name: 'Centrifugal Pump Irrigation',
    category: 'irrigation',
    description: 'Heavy-duty centrifugal pump specially designed for agricultural irrigation systems.',
    shortDescription: 'Centrifugal irrigation pump',
    image: '/images/Irrigation - Centrifugal Water Pump.jpeg',
    features: ['Irrigation optimized', 'High capacity', 'Durable', 'Energy efficient']
  },
  {
    id: 'pump-006',
    name: 'Water Pump 370W',
    category: 'pumps',
    description: 'Efficient 370W water pump for general water supply and circulation applications.',
    shortDescription: '370W water pump',
    image: '/images/Water pump 370W.jpeg',
    features: ['370W power', 'Energy efficient', 'Reliable', 'Low noise']
  },

  // Water Treatment Equipment
  {
    id: 'wt-004',
    name: 'Water Filters System',
    category: 'water-treatment',
    description: 'Advanced water filtration system for removing sediment, chlorine, and contaminants.',
    shortDescription: 'Water filters system',
    image: '/images/Filters - water treatment.jpeg',
    features: ['Multi-stage filtration', 'Sediment removal', 'Chemical removal', 'Long filter life']
  },
  {
    id: 'wt-005',
    name: 'Reverse Osmosis Undersink System',
    category: 'water-treatment',
    description: 'Compact reverse osmosis system designed for undersink installation in kitchens.',
    shortDescription: 'Undersink RO system',
    image: '/images/Reverse osmosis undersink  - water treatment.jpeg',
    features: ['Undersink fit', 'Compact design', 'High purity water', 'Easy maintenance']
  },
  {
    id: 'wt-006',
    name: 'UV Sterilizer Water Treatment',
    category: 'water-treatment',
    description: 'Ultraviolet sterilizer for eliminating bacteria, viruses, and microorganisms in water.',
    shortDescription: 'UV sterilizer',
    image: '/images/UV steriliser - water treatment.jpeg',
    features: ['UV sterilization', 'Chemical-free', 'Energy efficient', 'Long lasting bulbs']
  },

  // Flanged Products
  {
    id: 'fitting-004',
    name: 'Flanged Adaptor Type 1',
    category: 'pvc-upvc',
    description: 'Flanged adaptor for seamless connection between flanged and threaded pipes.',
    shortDescription: 'Flanged adaptor type 1',
    image: '/images/Flanged adaptor 1.jpeg',
    features: ['Flanged design', 'Easy connection', 'Durable', 'Multiple sizes']
  },
  {
    id: 'fitting-005',
    name: 'Flanged Adaptor Metric',
    category: 'pvc-upvc',
    description: 'Metric-sized flanged adaptor for industrial and large-scale applications.',
    shortDescription: 'Flanged adaptor metric',
    image: '/images/Flanged adaptor m.jpeg',
    features: ['Metric sized', 'Industrial grade', 'Reliable', 'Precise fit']
  },
  {
    id: 'fitting-006',
    name: 'Flanged 45° Elbow',
    category: 'pvc-upvc',
    description: 'Flanged 45-degree elbow for directional pipe changes in water systems.',
    shortDescription: 'Flanged 45° elbow',
    image: '/images/Flanged 45° elbow.jpeg',
    features: ['45 degree angle', 'Smooth flow', 'Durable', 'Easy installation']
  },
  {
    id: 'fitting-007',
    name: 'Flanged Fabricated Straight Tee',
    category: 'pvc-upvc',
    description: 'Custom-fabricated flanged straight tee for equal-diameter pipe junctions.',
    shortDescription: 'Flanged straight tee',
    image: '/images/Flanged Fabricated Straight tee.jpeg',
    features: ['Fabricated quality', 'Precise fit', 'Reliable', 'Industrial rated']
  },
  {
    id: 'valve-017',
    name: 'Flanged Non-Return Valve Premium',
    category: 'valves',
    description: 'Premium flanged non-return valve for large-diameter industrial water systems.',
    shortDescription: 'Flanged NRV premium',
    image: '/images/Flanged non return valve 1.jpeg',
    features: ['Premium quality', 'Large capacity', 'Reliable backflow prevention', 'Industrial grade']
  },
  {
    id: 'fitting-008',
    name: 'Flanged Reducing Tee',
    category: 'pvc-upvc',
    description: 'Flanged reducing tee for connecting different-sized diameter pipes.',
    shortDescription: 'Flanged reducing tee',
    image: '/images/Flanged reducing Tee.jpeg',
    features: ['Size reduction', 'Smooth transition', 'Reliable', 'Easy connection']
  },
  {
    id: 'valve-018',
    name: 'Flanged Reducing Valves',
    category: 'valves',
    description: 'Flanged reducing valves for pressure management in large-diameter piping systems.',
    shortDescription: 'Flanged reducing valves',
    image: '/images/Flanged Reducing valves.jpeg',
    features: ['Pressure control', 'Flanged design', 'Adjustable', 'Industrial application']
  },
  {
    id: 'meter-005',
    name: 'Flanged Water Meter Premium',
    category: 'water-treatment',
    description: 'Premium flanged water meter for high-capacity industrial water measurement.',
    shortDescription: 'Flanged water meter premium',
    image: '/images/Flanged water meter 1.jpeg',
    features: ['Flanged connection', 'High accuracy', 'Large capacity', 'Industrial grade']
  },
  {
    id: 'fitting-009',
    name: 'Flanged Y Strainer',
    category: 'pvc-upvc',
    description: 'Flanged Y-strainer for filtering debris from water systems.',
    shortDescription: 'Flanged Y strainer',
    image: '/images/Flanged Y strainer.jpeg',
    features: ['Y-shaped design', 'Effective filtration', 'Easy cleaning', 'Durable']
  },
  {
    id: 'fitting-010',
    name: 'Flanges Weldon Premium',
    category: 'pvc-upvc',
    description: 'Premium weldon flanges for secure and permanent pipe connections.',
    shortDescription: 'Weldon flanges premium',
    image: '/images/Flanges weldon.jpeg',
    features: ['Welded design', 'Permanent connection', 'High strength', 'Industrial rated']
  },

  // Advanced Valves
  {
    id: 'valve-019',
    name: 'Brass & Stainless Steel Solenoid Valve',
    category: 'valves',
    description: 'Solenoid valve with brass body and stainless steel internals for automation applications.',
    shortDescription: 'Solenoid valve brass/steel',
    image: '/images/Brass and stainless steel solenoid valve.jpeg',
    features: ['Solenoid operated', 'Brass housing', 'Stainless internals', 'Automated control']
  },
  {
    id: 'valve-020',
    name: 'High Flow Float Valve',
    category: 'valves',
    description: 'High-capacity float valve for rapid water level control and tank filling.',
    shortDescription: 'High flow float valve',
    image: '/images/High flow float valve.jpeg',
    features: ['High flow rate', 'Float mechanism', 'Rapid response', 'Reliable']
  },
  {
    id: 'acc-003',
    name: 'Bolts and Nuts for Valves',
    category: 'parts-accessories',
    description: 'Complete set of fastening hardware including bolts and nuts for valve assembly.',
    shortDescription: 'Valve bolts & nuts',
    image: '/images/Bolts and nuts VALVES.jpeg',
    features: ['Stainless steel', 'Multiple sizes', 'Corrosion resistant', 'Quality hardware']
  },

  // Irrigation Equipment
  {
    id: 'irr-004',
    name: 'Irrigation Screen Filter',
    category: 'irrigation',
    description: 'Screen filter system for protecting irrigation equipment from debris and sediment.',
    shortDescription: 'Irrigation screen filter',
    image: '/images/Screen filter - irrigation.jpeg',
    features: ['Effective filtration', 'Protects equipment', 'Easy cleaning', 'Durable mesh']
  },
  {
    id: 'irr-005',
    name: 'Rain Gun Type 3',
    category: 'irrigation',
    description: 'Advanced rain gun for large-area irrigation with excellent coverage and distance.',
    shortDescription: 'Rain gun type 3',
    image: '/images/Rain Gun 3.jpeg',
    features: ['Long distance', 'Wide coverage', 'Adjustable', 'Durable construction']
  },
  {
    id: 'irr-006',
    name: 'Rain Gun Hose',
    category: 'irrigation',
    description: 'Heavy-duty hose specifically designed for rain gun and irrigation systems.',
    shortDescription: 'Rain gun hose',
    image: '/images/Rain gun hose.jpeg',
    features: ['High pressure rated', 'Durable', 'Weather resistant', 'Easy connection']
  },
  {
    id: 'irr-007',
    name: 'Rain Hose for Irrigation Standard',
    category: 'irrigation',
    description: 'Standard-duty irrigation hose for agricultural water distribution and drip systems.',
    shortDescription: 'Rain hose irrigation',
    image: '/images/Rain hose -irrigation.jpeg',
    features: ['Flexible', 'UV resistant', 'Cost-effective', 'Easy storage']
  },

  // Accessories
  {
    id: 'acc-004',
    name: 'Metallic Saddle Clamp',
    category: 'parts-accessories',
    description: 'Metallic saddle clamp for secure pipe mounting and support.',
    shortDescription: 'Metallic saddle clamp',
    image: '/images/Metallic Sandle clamp.jpeg',
    features: ['Metal construction', 'Secure grip', 'Multiple sizes', 'Easy installation']
  },
  {
    id: 'acc-005',
    name: 'Y Strainer Standard',
    category: 'parts-accessories',
    description: 'Standard Y-shaped strainer for debris removal and system protection.',
    shortDescription: 'Y strainer standard',
    image: '/images/Y strainer.jpeg',
    features: ['Effective filtering', 'Easy maintenance', 'Reliable', 'Durable construction']
  },
  {
    id: 'acc-006',
    name: 'Water Treatment Equipment Set',
    category: 'water-treatment',
    description: 'Complete water treatment equipment set for comprehensive home or small-scale applications.',
    shortDescription: 'Water treatment equipment',
    image: '/images/water treatment equipment.jpeg',
    features: ['Complete system', 'Multi-stage', 'Easy installation', 'Effective treatment']
  },
];

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'pumps', label: 'Pumps' },
  { id: 'hdpe-pipes', label: 'HDPE Pipes' },
  { id: 'pvc-upvc', label: 'PVC & UPVC' },
  { id: 'ppr', label: 'PPR' },
  { id: 'cpvc-fittings', label: 'CPVC Fittings' },
  { id: 'valves', label: 'Valves' },
  { id: 'irrigation', label: 'Irrigation' },
  { id: 'parts-accessories', label: 'Parts & Accessories' },
];

