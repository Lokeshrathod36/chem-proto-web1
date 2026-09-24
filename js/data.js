/**
 * =========================================================================
 * 🧪 CHEMISTRY PROTOTYPING PROJECT - CENTRAL CONFIGURATION DATA
 * Project: Preparation of Liquid Detergent
 * 
 * Students & PRN Numbers:
 * 1. Mahesh Ingle    - PRN: 202501070009
 * 2. Sahil Golait    - PRN: 202501070019
 * 3. Lokesh Rathod   - PRN: 202501070020
 * 4. Deepak Kulkarni - PRN: 202501070021
 * =========================================================================
 */

window.CHEM_PROJECT_DATA = {
  // ===== 1. PROJECT METADATA & GROUP MEMBERS =====
  project: {
    title: "PREPARATION OF LIQUID DETERGENT",
    subtitle: "Chemistry Prototyping Exhibition",
    badge: "CHEMISTRY PROTOTYPING",
    tagline: "Exploring the preparation, chemistry, process, applications and advantages of liquid detergent.",
    institution: "Department of Chemistry — School / College Science Exhibition",
    // <!-- STUDENTS MEMBERS LIST WITH PRN -->
    members: [
      { 
        name: "Mahesh Ingle", 
        prn: "202501070009", 
        id: "STU-01", 
        initials: "MI" 
      },
      { 
        name: "Sahil Golait", 
        prn: "202501070019", 
        id: "STU-02", 
        initials: "SG" 
      },
      { 
        name: "Lokesh Rathod", 
        prn: "202501070020", 
        id: "STU-03", 
        initials: "LR" 
      },
      { 
        name: "Deepak Kulkarni", 
        prn: "202501070021", 
        id: "STU-04", 
        initials: "DK" 
      }
    ]
  },

  // ===== 2. HERO & MEDIA PATHS CONFIGURATION =====
  media: {
    // <!-- ACTUAL GROUP PHOTO -->
    groupPhoto: "media/experiment-photos/Chemistry Project Group Photo.png",
    groupPhotoAlt: "Chemistry Project Group Photo — Mahesh Ingle, Sahil Golait, Lokesh Rathod, Deepak Kulkarni",
    
    // <!-- ACTUAL ANIMATED PROCESS VIDEO (TAB 3) -->
    processVideo: "media/experiment-videos/animated-video-chem_proto.mp4",
    processVideoPoster: "media/experiment-photos/Processing.png",

    // <!-- ACTUAL BLOCK DIAGRAM (TAB 4) -->
    blockDiagram: "media/experiment-photos/Block_diagram_Chem-proto.jpeg",
    blockDiagramTitle: "Block Diagram — Liquid Detergent Preparation Flow",
    blockDiagramDescription: "Schematic block representation detailing raw material inputs (Water, Coconut Oil, NaOH, Na₂CO₃, STPP, SLS, SLES), mixing sequences, controlled heating, homogenization, and final bottling stages.",

    // <!-- ACTUAL PROCESS FLOW DIAGRAM (TAB 4) -->
    processFlowDiagram: "media/experiment-photos/Screenshot 2026-09-01 233607.png",
    processFlowDiagramTitle: "Process Flow Diagram — Detailed Chemical Unit Operations",
    processFlowDiagramDescription: "Comprehensive chemical reaction and process flow schematic depicting sequential builder dissolution, stoichiometric saponification, surfactant micelle matrix integration, and quality assurance checkpoints.",

    // <!-- ACTUAL EXPERIMENT VIDEO (TAB 5) -->
    realExperimentVideo: "media/experiment-videos/our experimental video.mp4",
    realExperimentVideoTitle: "Our Experimental Video",
    realExperimentVideoDescription: "Watch our actual liquid detergent preparation experiment recorded directly during our laboratory session.",

    // <!-- ACTUAL EXPERIMENT PHOTOS (TAB 5) -->
    experimentPhotos: [
      {
        id: "measuring",
        title: "Weighing & Measuring",
        stageNum: "01",
        stageName: "Measuring",
        description: "Accurate volumetric and gravimetric measurement of deionized water, alkaline builders, and surfactant aliquots using laboratory precision glassware and analytical balances.",
        media: "media/experiment-photos/weighing.jpeg",
        observation: "Strict adherence to stoichiometric ratios ensured ideal formulation balance and active surfactant concentration."
      },
      {
        id: "mixing",
        title: "Aqueous Dissolution & Mixing",
        stageNum: "02",
        stageName: "Mixing",
        description: "Gradual addition and uniform dissolution of inorganic builders (Sodium Carbonate and STPP) in the aqueous solvent phase under continuous magnetic stirring.",
        media: "media/experiment-photos/mixing.jpeg",
        observation: "Inorganic salts dissolved completely to form a crystal-clear, alkaline electrolytic carrier matrix."
      },
      {
        id: "heating",
        title: "Controlled Heating & Activation",
        stageNum: "03",
        stageName: "Heating",
        description: "Controlled thermal activation of the mixture over a laboratory heating plate, facilitating rapid dissolution and smooth saponification of triglyceride fatty acids.",
        media: "media/experiment-photos/heating.jpeg",
        observation: "Temperature was carefully monitored to prevent thermal degradation of active surfactants and minimize evaporation."
      },
      {
        id: "processing",
        title: "Surfactant Blending & Homogenization",
        stageNum: "04",
        stageName: "Processing",
        description: "Incorporation of primary surfactant (SLS) and ethoxylated co-surfactant (SLES) with low-shear agitation to achieve homogeneous viscosity without foam entrapment.",
        media: "media/experiment-photos/Processing.png",
        observation: "The solution transitioned into a rich, clear micellar liquid detergent formulation with optimal rheology."
      },
      {
        id: "final-product",
        title: "Final Liquid Detergent Product",
        stageNum: "05",
        stageName: "Final Product",
        description: "The synthesized clear liquid detergent filled in labeled transparent laboratory containers, exhibiting high foaming power and excellent cleaning action.",
        media: "media/experiment-photos/Final_product.jpeg",
        observation: "Stable single-phase liquid detergent with outstanding lather stability, high clarity, and zero phase separation."
      }
    ]
  },

  // ===== 3. INGREDIENTS & CHEMICALS DATA (TAB 2) =====
  ingredients: [
    {
      id: "water",
      name: "Water",
      formula: "H₂O",
      commonName: "Distilled / Deionized Water",
      role: "Universal Solvent & Continuous Aqueous Carrier Phase",
      icon: "water-droplet",
      colorTag: "#0284c7",
      shortSummary: "Acts as the base medium in which all surfactants, builders, and additives dissolve and interact evenly.",
      details: {
        chemicalType: "Inorganic Polar Solvent",
        molecularWeight: "18.015 g/mol",
        functions: [
          "Dissolves ionic and polar constituents to create a uniform liquid matrix",
          "Controls the product's overall concentration and fluid viscosity",
          "Ensures rapid dispersion during domestic washing cycles"
        ],
        safetyAndHandling: "Completely neutral and safe. Laboratory deionized water prevents unintended hardness mineral interference.",
        roleInDetergent: "Serves as the carrier fluid (typically 60-80% of total liquid formulation) facilitating surfactant micelle mobility and active foaming."
      }
    },
    {
      id: "coconut-oil",
      name: "Coconut Oil",
      formula: "Triglycerides (chiefly Lauric Acid C₁₂H₂₄O₂)",
      commonName: "Natural Vegetable Oil Precursor",
      role: "Fatty Acid Source / Saponification Base",
      icon: "coconut",
      colorTag: "#0d9488",
      shortSummary: "Provides medium-chain fatty acid triglycerides (primarily lauric acid) converted into cleansing soaps and emollients.",
      details: {
        chemicalType: "Natural Triglyceride Ester",
        molecularWeight: "Variable (~650 g/mol avg)",
        functions: [
          "Reacts with alkali to generate natural sodium carboxylate soaps",
          "Provides rich, dense lather and mild skin conditioning properties",
          "Enhances biological degradability of the cleansing formulation"
        ],
        safetyAndHandling: "Natural non-hazardous organic material. Store at room temperature away from excessive oxidation.",
        roleInDetergent: "Undergoes alkaline hydrolysis (saponification) with sodium hydroxide to yield soap and glycerol, bolstering cleaning power."
      }
    },
    {
      id: "naoh",
      name: "Sodium Hydroxide",
      formula: "NaOH",
      commonName: "Caustic Soda / Lye",
      role: "Alkaline Saponification Agent & Neutralizer",
      icon: "flask-alkali",
      colorTag: "#e11d48",
      shortSummary: "Strong base required for saponifying fatty acids and neutralizing acidic surfactant precursors.",
      details: {
        chemicalType: "Strong Inorganic Alkali",
        molecularWeight: "39.997 g/mol",
        functions: [
          "Hydrolyzes triglyceride ester linkages in oils to produce soluble soaps",
          "Adjusts and buffers formulation pH to optimal alkaline cleansing levels",
          "Helps saponify and break down stubborn lipid-based soils"
        ],
        safetyAndHandling: "CAUTION: Corrosive base. Requires safety goggles, chemical-resistant gloves, and careful exothermic dilution.",
        roleInDetergent: "Essential reactant in base saponification and pH regulation, turning raw oils into active water-soluble cleaning salts."
      }
    },
    {
      id: "na2co3",
      name: "Sodium Carbonate",
      formula: "Na₂CO₃",
      commonName: "Washing Soda / Soda Ash",
      role: "Alkalinity Builder & Hardness Precipitant",
      icon: "crystal",
      colorTag: "#2563eb",
      shortSummary: "Provides alkaline buffering to soften wash water and neutralize acidic oily soil residues.",
      details: {
        chemicalType: "Inorganic Alkaline Salt",
        molecularWeight: "105.99 g/mol",
        functions: [
          "Precipitates dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions from hard water",
          "Maintains alkaline pH during washing, maximizing surfactant efficiency",
          "Helps emulsify greasy stains by saponifying free fatty acids"
        ],
        safetyAndHandling: "Mild irritant. Avoid inhalation of dust and direct eye contact. Non-toxic when diluted.",
        roleInDetergent: "Acts as a primary builder that prevents mineral interference, protecting surfactants from precipitating out of solution."
      }
    },
    {
      id: "stpp",
      name: "Sodium Tripolyphosphate",
      formula: "Na₅P₃O₁₀",
      commonName: "STPP / Tripolyphosphate",
      role: "Chelating & Water Softening Builder",
      icon: "shield-check",
      colorTag: "#7c3aed",
      shortSummary: "Sequestering agent that binds multivalent metal cations and keeps dirt particles suspended.",
      details: {
        chemicalType: "Polyphosphate Inorganic Salt",
        molecularWeight: "367.86 g/mol",
        functions: [
          "Sequestration of hard water minerals (Ca²⁺, Mg²⁺) into soluble coordination complexes",
          "Peptization and deflocculation: breaks down solid dirt aggregates into microscopic particles",
          "Antiredeposition: prevents dislodged soil from reattaching onto fabric fibers"
        ],
        safetyAndHandling: "Low toxicity, mild eye irritant. Handled under standard laboratory safety protocols.",
        roleInDetergent: "Dramatically boosts cleaning efficacy in varied water conditions by deactivating metallic ions and keeping dirt dispersed."
      }
    },
    {
      id: "sls",
      name: "Sodium Lauryl Sulfate",
      formula: "C₁₂H₂₅NaO₄S",
      commonName: "SLS / Sodium Dodecyl Sulfate",
      role: "Primary Anionic Surfactant & Foaming Agent",
      icon: "bubble-spray",
      colorTag: "#059669",
      shortSummary: "High-performance surfactant that dramatically lowers surface tension and encapsulates oily dirt.",
      details: {
        chemicalType: "Synthetic Anionic Alkyl Sulfate",
        molecularWeight: "288.38 g/mol",
        functions: [
          "Substantially reduces water's surface tension to enhance wetting",
          "Forms spherical micelles that trap hydrophobic grease molecules",
          "Generates instantaneous, high-volume lather and foam"
        ],
        safetyAndHandling: "Can cause mild skin or eye irritation in concentrated form. Dissolve gently to minimize airborne powder.",
        roleInDetergent: "Main workhorse surfactant providing robust grease lifting, soil detachment, and emulsification in the wash bath."
      }
    },
    {
      id: "sles",
      name: "Sodium Laureth Sulfate",
      formula: "C₁₂H₂₅(OCH₂CH₂)ₙOSO₃Na",
      commonName: "SLES / Sodium Lauryl Ether Sulfate",
      role: "Mild Co-Surfactant & Viscosity Booster",
      icon: "sparkle",
      colorTag: "#d97706",
      shortSummary: "Ethoxylated mild anionic surfactant offering superior skin compatibility, foam stability, and smooth texture.",
      details: {
        chemicalType: "Ethoxylated Anionic Surfactant",
        molecularWeight: "Variable (~376 g/mol avg)",
        functions: [
          "Provides gentle cleansing with lower irritation profile than unethoxylated sulfates",
          "Stabilizes rich, creamy foam and improves final liquid clarity",
          "Cooperates with electrolytes to build desirable product viscosity"
        ],
        safetyAndHandling: "Mild handling profile. Avoid concentrated eye contact; standard personal protective equipment applies.",
        roleInDetergent: "Acts as a synergistic co-surfactant that softens formulation harshness while optimizing rheology and lather longevity."
      }
    }
  ],

  // ===== 4. TIMELINE & PROCESS STEPS (TAB 3) =====
  timelineSteps: [
    {
      stepNumber: "01",
      title: "Measuring & Reagent Preparation",
      subheading: "Accurate Dispensing of Precursors",
      description: "Measure precise quantities of deionized water, coconut oil, builders (Na₂CO₃, STPP), and surfactants (SLS, SLES) using precision analytical balances and graduated glassware.",
      observation: "Strict stoichiometric control ensures ideal solubility, clarity, and balanced surfactant ratios.",
      equipment: "Analytical Balance, Beakers, Graduated Cylinders, Spatulas",
      safetyNote: "Wear safety goggles, laboratory coat, and nitrile gloves during chemical handling."
    },
    {
      stepNumber: "02",
      title: "Builder Dissolution & Initial Mixing",
      subheading: "Aqueous Phase Preparation",
      description: "Dissolve inorganic builders (Sodium Carbonate and STPP) in warm deionized water under continuous mechanical stirring.",
      observation: "Inorganic salts dissolve completely to yield a clear, alkaline electrolytic carrier solution.",
      equipment: "Magnetic Stirrer / Glass Rod, 1000 mL Borosilicate Beaker",
      safetyNote: "Add salts gradually to prevent localized agglomeration or exothermic splashing."
    },
    {
      stepNumber: "03",
      title: "Controlled Heating & Saponification / Emulsification",
      subheading: "Thermal Activation Phase",
      description: "Warm the mixture under controlled temperature while slowly introducing the saponified oil phase and stirring steadily.",
      observation: "Controlled temperature ensures complete homogenization without causing thermal degradation or boiling.",
      equipment: "Thermostatic Water Bath / Hot Plate, Thermometer",
      safetyNote: "Never overheat the vessel; keep temperature within the specified experimental boundary."
    },
    {
      stepNumber: "04",
      title: "Surfactant Blending & Homogenization",
      subheading: "Viscosity Stabilization & Neutralization",
      description: "Blend SLS and SLES smoothly into the matrix with low-shear agitation to minimize excessive froth formation, followed by pH stabilization.",
      observation: "The solution transitions into a viscous, crystal-clear micellar liquid detergent matrix.",
      equipment: "Low-Shear Paddle Stirrer, Calibrated Digital pH Meter",
      safetyNote: "Keep stirring speed steady and submerged to prevent foam overflow."
    },
    {
      stepNumber: "05",
      title: "Cooling, Quality Checks & Bottling",
      subheading: "Final Product Maturation",
      description: "Allow the liquid detergent to equilibrate to room temperature, conduct final clarity/pH/foam tests, and dispense into labeled containers.",
      observation: "Stable, high-clarity liquid detergent with excellent foaming ability and zero phase separation over time.",
      equipment: "Viscometer, pH Indicator / Probe, Labeled Storage Dispensers",
      safetyNote: "Seal storage bottles securely with appropriate chemical identification labels."
    }
  ],

  // ===== 5. APPLICATIONS & ADVANTAGES (TAB 6) =====
  applications: [
    {
      id: "laundry",
      title: "Apparel & Fabric Laundering",
      icon: "shirt",
      tag: "Textile Care",
      description: "Penetrates deep into woven fabric fibers to lift greasy sweat stains, mud, and everyday dirt particles without leaving powdery chalk residues."
    },
    {
      id: "surfaces",
      title: "Hard Surface & Floor Sanitation",
      icon: "sparkles",
      tag: "Household Surfaces",
      description: "Effectively emulsifies sticky grease and airborne dust on kitchen tiles, countertops, ceramic sinks, and polished flooring."
    },
    {
      id: "dishwashing",
      title: "Utensil & Dish Cleaning",
      icon: "utensils",
      tag: "Culinary Ware",
      description: "Quickly strips away polymerized cooking oils, stubborn butter residues, and food deposits from glass, stainless steel, and ceramic cookware."
    },
    {
      id: "general",
      title: "Multi-Purpose Domestic Cleaning",
      icon: "home",
      tag: "General Hygiene",
      description: "A versatile cleaning solution suitable for washable walls, bathroom fixtures, and domestic maintenance tasks requiring safe surface wetting."
    }
  ],

  advantages: [
    {
      title: "Instant Cold-Water Dissolution",
      icon: "zap",
      summary: "Unlike powder detergents that can leave insoluble clumps or white residue on dark fabrics, liquid detergents dissolve instantaneously at all temperatures."
    },
    {
      title: "Superior Oily Stain Removal",
      icon: "droplet-check",
      summary: "Direct application of concentrated liquid detergent right onto oily spots allows direct micellar penetration before the wash cycle begins."
    },
    {
      title: "Hard Water Tolerance",
      icon: "shield-check",
      summary: "Formulated with sequestering builders (STPP & Carbonates) that resist calcium/magnesium scum formation common with basic traditional bar soaps."
    },
    {
      title: "Precision Dispensing & Convenience",
      icon: "sliders",
      summary: "Liquid format allows effortless volumetric measuring, zero airborne inhalation of irritating chemical dust, and easy mechanical dispenser compatibility."
    },
    {
      title: "Educational Chemistry Insight",
      icon: "book-open",
      summary: "Serves as an exceptional model system for studying colloidal chemistry, critical micelle concentration (CMC), saponification, and interfacial tension reduction."
    },
    {
      title: "Tailorable Rheology & Gentle Touch",
      icon: "heart-handshake",
      summary: "Synergistic blending of SLS and ethoxylated SLES provides high foaming with minimized skin irritation compared to harsh industrial degreasers."
    }
  ],

  // ===== 6. QUIZ QUESTIONS & ANSWERS (TAB 7) =====
  quizQuestions: [
    {
      id: 1,
      type: "mcq",
      topic: "Chemical Formulas",
      question: "What is the chemical formula for Sodium Hydroxide, the alkaline base used in saponification?",
      options: ["NaOH", "Na₂CO₃", "NaCl", "NaHCO₃"],
      correctIndex: 0,
      explanation: "NaOH is the chemical formula for Sodium Hydroxide, a strong alkaline base that hydrolyzes ester bonds in oils to produce soluble soaps."
    },
    {
      id: 2,
      type: "mcq",
      topic: "Surfactant Chemistry",
      question: "What does the term 'Surfactant' stand for in chemical terminology?",
      options: [
        "Surface Active Agent",
        "Surface Action Antagonist",
        "Super Reacting Fluid",
        "Saponified Alkali Tincture"
      ],
      correctIndex: 0,
      explanation: "'Surfactant' is a contraction of 'Surface Active Agent'—substances that adsorb at fluid interfaces and dramatically reduce surface tension."
    },
    {
      id: 3,
      type: "mcq",
      topic: "Ingredients & Roles",
      question: "Which ingredient serves as a primary builder to sequester hard water minerals (Ca²⁺ and Mg²⁺)?",
      options: [
        "Sodium Tripolyphosphate (STPP)",
        "Coconut Oil",
        "Deionized Water",
        "Glycerol"
      ],
      correctIndex: 0,
      explanation: "STPP (Na₅P₃O₁₀) acts as a chelating and sequestering agent that binds calcium and magnesium ions into soluble complexes, preventing mineral interference."
    },
    {
      id: 4,
      type: "mcq",
      topic: "Mechanism of Cleaning",
      question: "How do surfactant molecules orient themselves when forming a micelle around an oily dirt droplet in water?",
      options: [
        "Hydrophobic tails point inward toward the oil; hydrophilic heads point outward toward water",
        "Hydrophilic heads point inward toward the oil; hydrophobic tails point outward toward water",
        "Both heads and tails point randomly in all directions",
        "Molecules line up in rigid parallel sheets with no curved structures"
      ],
      correctIndex: 0,
      explanation: "Surfactants are amphiphilic. Their non-polar hydrophobic tails insert into the oily dirt droplet, while polar hydrophilic heads interact favorably with the surrounding water."
    },
    {
      id: 5,
      type: "tf",
      topic: "Liquid vs Powder Detergents",
      question: "True or False: Liquid detergents generally dissolve more rapidly in cold water and leave fewer chalky residues than powder detergents.",
      options: ["True", "False"],
      correctIndex: 0,
      explanation: "True. Because the active ingredients are already in a liquid solution phase, they disperse instantaneously without clumping or leaving insoluble filler residues."
    },
    {
      id: 6,
      type: "mcq",
      topic: "Ingredients & Roles",
      question: "What is the primary role of Sodium Lauryl Sulfate (SLS) in the liquid detergent formulation?",
      options: [
        "Primary anionic surfactant for grease removal and foaming",
        "Hard water mineral precipitate",
        "Solvent and thermal stabilizer",
        "Fragrance fixative and colorant"
      ],
      correctIndex: 0,
      explanation: "SLS (C₁₂H₂₅NaO₄S) is a powerful anionic surfactant that lowers surface tension, lifts oily grime, and generates voluminous foam."
    },
    {
      id: 7,
      type: "mcq",
      topic: "Chemical Identification",
      question: "What is the chemical name for Washing Soda (Na₂CO₃)?",
      options: [
        "Sodium Carbonate",
        "Sodium Bicarbonate",
        "Sodium Chloride",
        "Sodium Nitrate"
      ],
      correctIndex: 0,
      explanation: "Na₂CO₃ is Sodium Carbonate (Washing Soda). Sodium Bicarbonate is NaHCO₃ (Baking Soda)."
    },
    {
      id: 8,
      type: "mcq",
      topic: "Saponification Reaction",
      question: "During saponification, triglycerides from oils react with an alkali (like NaOH) to produce soap and which byproduct?",
      options: ["Glycerol (Glycerin)", "Ethanol", "Sulfuric Acid", "Methane"],
      correctIndex: 0,
      explanation: "Alkaline hydrolysis of triglycerides cleaves ester bonds to yield fatty acid sodium salts (soap) and glycerol (propan-1,2,3-triol)."
    },
    {
      id: 9,
      type: "tf",
      topic: "Laboratory Safety",
      question: "True or False: When diluting concentrated Sodium Hydroxide (NaOH) with water, you must always wear protective eye goggles and gloves due to its caustic nature and exothermic dissolution.",
      options: ["True", "False"],
      correctIndex: 0,
      explanation: "True. Dissolving NaOH is strongly exothermic (releases heat) and can cause chemical burns; personal protective equipment is strictly mandatory."
    },
    {
      id: 10,
      type: "mcq",
      topic: "Surfactant Formulation",
      question: "Why is Sodium Laureth Sulfate (SLES) often combined synergistically with Sodium Lauryl Sulfate (SLS)?",
      options: [
        "SLES provides milder skin feel, foam stabilization, and improved formulation texture",
        "SLES converts the mixture into an explosive compound",
        "SLES solidifies the mixture into a brittle bar",
        "SLES completely eliminates the need for water"
      ],
      correctIndex: 0,
      explanation: "SLES contains ethoxy ether groups (-OCH₂CH₂-) that soften the harshness of SLS, enhancing skin compatibility, foam richness, and liquid clarity."
    },
    {
      id: 11,
      type: "mcq",
      topic: "Process Understanding",
      question: "Why is controlled, low-shear stirring used during the addition of surfactants in Tab 3 process?",
      options: [
        "To prevent uncontrolled froth and excessive foam entrapment in the vessel",
        "To cause the chemical bonds to permanently break down",
        "To speed up water evaporation completely",
        "To freeze the liquid into a gel"
      ],
      correctIndex: 0,
      explanation: "Vigorous high-shear stirring traps excessive air bubbles, creating unmanageable foam inside the mixing vessel and making accurate bottling difficult."
    },
    {
      id: 12,
      type: "tf",
      topic: "Water Chemistry",
      question: "True or False: Using deionized or distilled water in laboratory prototyping prevents unwanted calcium and magnesium mineral precipitation during preparation.",
      options: ["True", "False"],
      correctIndex: 0,
      explanation: "True. Deionized water eliminates background mineral ions that would otherwise prematurely consume builders or cause haziness in the prototype."
    }
  ]
};
