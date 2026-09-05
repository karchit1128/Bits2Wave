export const problemStatements = [
  // --- SOFTWARE TRACKS ---
  {
    id: "PS1",
    title: "Real-Time Network Intrusion Dashboard",
    track: "software",
    category: "AI/ML & Security",
    difficulty: "EASY",
    overview: "Watch live network traffic, catch attacks using machine learning, and show alerts on a dashboard.",
    fullDetails: "Security teams need a way to spot malicious activity on a network as it happens rather than after the damage is done. This project involves continuously capturing live network traffic, applying a machine learning model to classify normal versus attack patterns, and surfacing detected threats in real time on a monitoring dashboard so operators can respond immediately."
  },
  {
    id: "PS69",
    title: "CareSync",
    track: "software",
    category: "AI & HealthTech",
    difficulty: "MEDIUM",
    overview: "A lightweight AI triage tool for clinics with poor internet connectivity and limited resources.",
    fullDetails: "Many clinics, especially in remote or under-resourced areas, lack reliable internet access and sufficient staff to triage incoming patients efficiently. CareSync is a lightweight AI-driven triage tool designed to run with minimal connectivity and hardware requirements, helping clinic staff quickly assess patient urgency and prioritize care using whatever limited data and infrastructure is available."
  },
  {
    id: "PS10",
    title: "SIM Swap & Suspicious Call Pattern Detection",
    track: "software",
    category: "AI/ML & Telecom Security",
    difficulty: "MEDIUM",
    overview: "Detects fraudulent SIM swaps and suspicious call patterns using machine learning.",
    fullDetails: "SIM swap fraud allows attackers to hijack a victim's phone number and bypass SMS-based authentication, while unusual call patterns can indicate scams or account takeovers. This project requires building a machine-learning system that analyzes SIM change events and call metadata to flag fraudulent SIM swaps and suspicious calling behavior in near real time."
  },
  {
    id: "PS20",
    title: "5G Network Security Misconfiguration Scanner",
    track: "software",
    category: "Wireless & Network Security",
    difficulty: "MEDIUM",
    overview: "Scans a simulated 5G network setup for common security misconfigurations.",
    fullDetails: "5G network deployments are complex, and misconfigured settings can leave gaps that attackers exploit. This project requires building a scanner that inspects a simulated 5G network setup against a checklist of known misconfiguration patterns (open ports, weak authentication settings, default credentials, insecure protocol configurations, etc.) and reports the issues it finds."
  },
  {
    id: "PS59",
    title: "CommShield",
    track: "software",
    category: "AI/ML & Zero-Day Security",
    difficulty: "HARD",
    overview: "An AI system that learns normal 5G/6G network behavior to catch brand-new (zero-day) attacks.",
    fullDetails: "Signature-based detection cannot catch attacks that have never been seen before. CommShield addresses this by learning a baseline of normal 5G/6G network behavior and flagging deviations from that baseline as potential zero-day threats, allowing previously unknown attack patterns to be detected without relying on a known-attack database."
  },
  {
    id: "PS9",
    title: "Deadline-Aware Cloud Task Continuity",
    track: "software",
    category: "Cloud Systems & Networking",
    difficulty: "MEDIUM",
    overview: "Predicts network degradation ahead of time and protects the progress of a time-critical cloud task.",
    fullDetails: "Time-critical cloud tasks — emergency evidence uploads, field-report syncs, inspection data — often begin under stable connectivity but fail mid-way when the network degrades, forcing a full restart. This project requires continuously monitoring latency, jitter, packet loss, uplink speed, remaining task size, and deadline, and when failure is predicted, taking preemptive action such as prioritizing critical data, checkpointing progress, compressing/dividing the remaining transfer, or switching connections."
  },
  {
    id: "PS11",
    title: "Timing Integrity for Distributed Observatories",
    track: "software",
    category: "Distributed Systems & DSP",
    difficulty: "HARD",
    overview: "Build a cooperative timing-integrity system that compares timestamps across distributed observing nodes.",
    fullDetails: "Distributed telescopes rely on extremely accurate timestamps for events like stellar occultations; clock drift, camera delay, or GNSS interference/spoofing can silently corrupt otherwise valid observations. This project requires building a network of observing nodes that compares GNSS time, local clock time, camera-trigger timestamps, and RF time exchange between nodes, identifies a drifting or spoofed node, and assigns every observation a timing-confidence score."
  },
  {
    id: "PS7-SW",
    title: "AEGIS-LINK: AI-Enabled Adaptive Anti-Jamming Software",
    track: "software",
    category: "AI/ML & Signal Processing",
    difficulty: "HARD",
    overview: "AI-driven anti-jamming framework that detects anomalous signal behavior and adapts transmission parameters.",
    fullDetails: "Wireless communication systems used in critical operations are vulnerable to signal jamming and interference. This project proposes an AI-driven anti-jamming framework using Software Defined Radio (SDR) for flexible spectrum control, FFT-based spectral analysis, ML-based classification of interference types, and adaptive frequency hopping within milliseconds."
  },
  {
    id: "PS50",
    title: "Federated Learning Across IoT Devices",
    track: "software",
    category: "IoT & Distributed AI",
    difficulty: "HARD",
    overview: "Trains a machine-learning model across many IoT devices without sharing raw data.",
    fullDetails: "Centralizing data from many IoT devices for training raises privacy and bandwidth concerns. This project requires implementing a federated learning system where each device trains a local model on its own data and only shares model updates, which are aggregated into a shared global model, without any raw data ever leaving the device."
  },
  {
    id: "PS57",
    title: "Local Real-Time Factory Sensor Anomaly Detection",
    track: "software",
    category: "Edge Computing & Industrial IoT",
    difficulty: "MEDIUM",
    overview: "Detects anomalies in factory sensor data locally and instantly, with no cloud round-trip.",
    fullDetails: "Sending every sensor reading to the cloud for anomaly detection introduces latency that is unacceptable on a factory floor where faults must be caught immediately. This project requires an on-device (edge) anomaly detection system that processes factory sensor streams locally and raises alerts instantly, without depending on a round trip to a cloud server."
  },
  {
    id: "PS60",
    title: "Disaster Coordination Web Platform",
    track: "software",
    category: "Web & Public Safety",
    difficulty: "EASY",
    overview: "A web platform for volunteers, authorities, and citizens to coordinate during a disaster.",
    fullDetails: "Disaster response is often hampered by poor coordination between citizens reporting needs, volunteers offering help, and authorities managing resources. This project requires building a web platform that brings these three groups together in one place, enabling requests, resource offers, and official updates to be shared and coordinated efficiently during a disaster."
  },
  {
    id: "PS12-NEW",
    title: "Conflict-Resolution Referee for Mobile Network Controllers",
    track: "software",
    category: "Mobile Networks & Simulation",
    difficulty: "MEDIUM",
    overview: "Simulates a mobile network with automated controllers and resolves conflicting antenna optimization commands.",
    fullDetails: "In a mobile network, multiple automated controllers may independently try to optimize for different goals — energy savings, coverage, interference — and can issue conflicting instructions to the same antenna at the same time. This project requires simulating such a multi-controller network and building a referee system that intercepts each proposed change, detects conflicts between controllers, and decides whether to approve, modify, delay, or reject the change."
  },
  {
    id: "PS29",
    title: "Coverage Dead-Zone Heatmap Tool",
    track: "software",
    category: "Wireless & Signal Propagation",
    difficulty: "EASY",
    overview: "Take a tower's location and transmit power as input and generate a signal coverage heatmap.",
    fullDetails: "Mobile network planners need a fast way to visualize coverage gaps without running a full field survey. This project requires modeling signal propagation (a simple path-loss model is enough) from a given tower's coordinates and power, then rendering the resulting coverage strength as a heatmap overlaid on a map."
  },
  {
    id: "PS8-SW",
    title: "Rural Coverage Gap Mapper",
    track: "software",
    category: "GIS & Telecom Planning",
    difficulty: "EASY",
    overview: "Identify underserved rural areas and suggest where new cell towers should be placed.",
    fullDetails: "Rural connectivity planning is often done manually and slowly. This project requires combining synthetic population/settlement data with existing tower coverage data to flag underserved regions, then suggesting candidate new tower sites that maximize population coverage gained per tower."
  },
  {
    id: "PS73",
    title: "BER Prediction Using Machine Learning",
    track: "software",
    category: "AI/ML & Signal Processing",
    difficulty: "EASY",
    overview: "Train an ML model to predict bit-error rate (BER) from communication-system parameters.",
    fullDetails: "Estimating BER analytically gets complex fast as more real-world factors are added. This project trains a regression/classification model on simulated or synthetic communication-link data to predict BER directly from system parameters (modulation type, SNR, bandwidth, channel conditions), giving a much faster estimate than a full analytical calculation."
  },
  {
    id: "PS30",
    title: "Antenna Gain/Bandwidth Predictor from Design Inputs",
    track: "software",
    category: "AI/ML & Antenna Engineering",
    difficulty: "MEDIUM",
    overview: "ML model predicts an antenna's gain and bandwidth directly from design parameters.",
    fullDetails: "Antenna design typically requires iterative electromagnetic simulation to determine gain and bandwidth for a given geometry. This project requires generating a dataset of antenna design parameters (patch dimensions, substrate properties, feed position) and their corresponding gain/bandwidth, then training a model to predict gain and bandwidth directly from new design inputs."
  },
  {
    id: "PS74",
    title: "Virtual IoT Device Emulator",
    track: "software",
    category: "IoT Simulation & Testing",
    difficulty: "MEDIUM",
    overview: "Emulate hundreds of IoT devices producing realistic sensor data, failures, and events.",
    fullDetails: "Testing IoT applications at scale is hard without access to hundreds of physical devices. This project requires building an emulator that can spin up large numbers of virtual devices, each generating configurable sensor data streams, simulated failures, and network events, so downstream IoT applications can be tested realistically."
  },
  {
    id: "PS75",
    title: "Cooperative IoT Fault Localization",
    track: "software",
    category: "IoT Systems & Algorithms",
    difficulty: "HARD",
    overview: "Identify the root-cause faulty device when multiple interacting IoT sensors report abnormal readings.",
    fullDetails: "When several sensors in an IoT network report anomalies at once, it's often one faulty device causing correlated effects rather than several independent failures. This project requires simulating a network of interacting sensors and building an algorithm that traces correlated abnormal readings back to the most likely root-cause device."
  },
  {
    id: "PS76",
    title: "IoT Sensor Reliability Scoring System",
    track: "software",
    category: "IoT Data Quality Engine",
    difficulty: "MEDIUM",
    overview: "Continuously assign a confidence score to each IoT sensor based on accuracy, noise, drift, and consensus.",
    fullDetails: "Not all sensor readings deserve equal trust — some sensors drift or degrade over time. This project requires building a scoring engine that tracks each sensor's historical accuracy, missing-data rate, noise level, drift, and agreement with nearby sensors, and continuously updates a reliability score per sensor."
  },
  {
    id: "PS23",
    title: "On-Device Signal Drop / Handover Predictor",
    track: "software",
    category: "Mobile Systems & Edge AI",
    difficulty: "MEDIUM",
    overview: "An on-device model predicts signal drops and handovers before they happen.",
    fullDetails: "Signal drops and handover failures degrade user experience, especially for latency-sensitive apps. This project requires training a lightweight, on-device model that uses recent signal-quality trends to predict an upcoming drop or handover event slightly before it happens, so an application can prepare (e.g., prebuffer or pre-fetch)."
  },
  {
    id: "PS66",
    title: "Acoustic Data Link — Sound-Based Data Transfer",
    track: "software",
    category: "Signal Processing & Audio",
    difficulty: "MEDIUM",
    overview: "Send data between two devices using sound waves (speaker to microphone) instead of Wi-Fi.",
    fullDetails: "In environments where Wi-Fi/Bluetooth is unavailable or restricted, audio can carry data between nearby devices. This project requires encoding data into an audio signal (e.g., via frequency-shift keying or similar), transmitting it through a speaker, and decoding it from a microphone on a receiving device."
  },
  {
    id: "PS64",
    title: "Deepfake Voice Detector for Live Calls",
    track: "software",
    category: "AI Speech & Security",
    difficulty: "MEDIUM",
    overview: "Detect AI-generated (deepfake) voices on live calls in real time and display a live trust score.",
    fullDetails: "Voice-cloning scams are a growing threat on voice calls. This project requires analyzing live (or streamed) call audio for artifacts characteristic of synthetic speech using a pretrained voice-spoofing detection model, continuously updating a trust score displayed to the user during the call."
  },
  {
    id: "PS72",
    title: "Unauthorized Radio Signal Classifier",
    track: "software",
    category: "DSP & RF Spectrum Security",
    difficulty: "HARD",
    overview: "Classify RF signals and flag unknown or unauthorized transmissions using simulated IQ samples.",
    fullDetails: "Spectrum monitoring needs to tell known, licensed signal types apart from rogue transmissions. This project requires building a classifier over captured (or SDR-simulated) RF IQ signal data that recognizes known modulation/signal classes (AM/FM/QPSK/QAM) and flags anything that doesn't match as unknown or unauthorized."
  },
  {
    id: "PS77",
    title: "Adaptive Equalizer for Wireless Channels",
    track: "software",
    category: "Signal Processing & Communications",
    difficulty: "HARD",
    overview: "Simulate a time-varying wireless channel and implement an adaptive equalizer (LMS/RLS) to fix channel distortion.",
    fullDetails: "Wireless channels distort signals in ways that change over time (multipath, fading), so a fixed equalizer isn't enough. This project requires simulating a time-varying channel and implementing an adaptive algorithm (e.g., LMS/RLS-based) that continuously adjusts equalizer coefficients to compensate for channel distortion."
  },

  // --- HARDWARE TRACKS ---
  {
    id: "PS1-HW",
    title: "Autonomous Motorized Antenna Beam-Tracker",
    track: "hardware",
    category: "Embedded & Robotics",
    difficulty: "HARD",
    overview: "Build a 2-axis motorized tracking mount that autonomously points a directional antenna at a moving beacon.",
    fullDetails: "High-gain directional antennas are essential for long-range links but fail if misaligned. This project requires constructing a servo-driven mechanical mount controlled by a microcontroller that continuously samples the Received Signal Strength Indicator (RSSI) from a mobile RF beacon and executes a gradient-ascent algorithm to maintain physical alignment."
  },
  {
    id: "PS2-HW",
    title: "Ground-Searching 'Foxhunt' Radio Direction Finder",
    track: "hardware",
    category: "RF Hardware & Rescue",
    difficulty: "MEDIUM",
    overview: "Handheld direction finder processing RSSI fluctuations to guide an operator directly toward a hidden beacon.",
    fullDetails: "Locating downed transmitters or emergency beacons requires translating invisible RF signals into human-readable directions. This project involves building a highly directional antenna wand coupled with a microcontroller that filters noisy RSSI data and provides real-time audiovisual feedback (pitch shifting or bar graphs) proportional to signal strength."
  },
  {
    id: "PS3-HW",
    title: "Sub-Terrestrial Soil Moisture Sensing via RF Attenuation",
    track: "hardware",
    category: "RF Sensors & Agriculture",
    difficulty: "MEDIUM",
    overview: "Build a non-invasive RF sensing chamber demonstrating microwave attenuation vs soil moisture.",
    fullDetails: "Traditional agricultural moisture sensors degrade rapidly due to galvanic corrosion. Because water has a high dielectric constant, it attenuates RF signals predictably. This project requires passing a Sub-GHz or 2.4 GHz signal through a soil chamber and calculating the volumetric water content entirely based on measured physical signal loss."
  },
  {
    id: "PS4-HW",
    title: "Through-Wall Presence Detection Radar",
    track: "hardware",
    category: "Radar & Microwave Systems",
    difficulty: "HARD",
    overview: "Interrogate a wall partition using a radar module to detect human presence without optical line-of-sight.",
    fullDetails: "Search and rescue or tactical operations require situational awareness through solid barriers. Because low-frequency microwaves penetrate standard building materials, this project requires calibrating an FMCW or CW radar to map the environment, filter out static wall reflections, and amplify moving targets on the other side."
  },
  {
    id: "PS5-HW",
    title: "Vehicular Platoon Anti-Collision Doppler Brake System",
    track: "hardware",
    category: "Automotive Radar & Control",
    difficulty: "HARD",
    overview: "Mount Doppler radar on a chassis to measure relative velocity and trigger emergency braking.",
    fullDetails: "Autonomous vehicle platooning requires sub-second braking reflexes to prevent cascading collisions. This hardware challenge utilizes a continuous-wave Doppler radar to measure the frequency shift of a lead vehicle. If the lead vehicle brakes hard, the hardware must physically override the trailing vehicle's motor controller before impact."
  },
  {
    id: "PS6-HW",
    title: "RESILINK GRID: Self-Healing Secure IoT Disaster Mesh Network",
    track: "hardware",
    category: "IoT Mesh & Emergency Comms",
    difficulty: "HARD",
    overview: "Design a secure, self-healing IoT mesh network using LoRa/Wi-Fi to sustain communication during disasters.",
    fullDetails: "Natural disasters frequently disable centralized communication systems, isolating distributed IoT sensors. This project proposes a resilient mesh-based IoT communication framework that autonomously maintains connectivity, performs self-healing routing around failed nodes, secures data using encryption, and tags GPS coordinates across ESP32/LoRa nodes.",
    hardwareReq: "ESP32 / LoRa modules, GPS module, Raspberry Pi edge gateway, power backup."
  },

  // --- HYBRID TRACKS (HARDWARE + AI/SOFTWARE) ---
  {
    id: "PS8-HYB",
    title: "Adaptive Communication System for Disaster-Resilient Networks",
    track: "hybrid",
    category: "Emergency Mesh & AI",
    difficulty: "MEDIUM",
    overview: "Portable, self-configuring communication node that maintains link without cellular or internet infrastructure.",
    fullDetails: "During natural disasters like earthquakes or floods, conventional towers fail. Develop a self-configuring, battery-backed communication node using embedded RF transceivers and intelligent routing logic to maintain mesh communication between rescue workers."
  },
  {
    id: "PS9-HYB",
    title: "TerraTrack — Real-Time Road Anomaly & Pothole Detection",
    track: "hybrid",
    category: "Embedded IoT & Mobile AI",
    difficulty: "MEDIUM",
    overview: "Crowdsourced accelerometer + GPS module on two-wheelers that detects potholes and triggers SOS alerts.",
    fullDetails: "Current municipal infrastructure lacks continuous road monitoring. Build an IoT device (accelerometer + GPS + LTE/ESP32) mounted on vehicles that uses on-edge signal classification to detect potholes, map road anomalies, and automatically dispatch SOS alerts upon impact."
  },
  {
    id: "PS10-HYB",
    title: "Intelligent Reconfigurable Wireless Device",
    track: "hybrid",
    category: "Smart RF & Adaptive Control",
    difficulty: "MEDIUM",
    overview: "A smart wireless device that detects environmental interference and automatically adjusts power, channel, and modulation.",
    fullDetails: "Wireless devices experience fading and interference when surroundings change. Propose a smart wireless hardware node that continuously senses channel conditions and uses embedded decision logic to dynamically adjust modulation schemes, frequency channels, and transmit power."
  },
  {
    id: "PS11-HYB",
    title: "ShieldLink: Autonomous Tactical Communication Relay Network",
    track: "hybrid",
    category: "Defense Tech & Autonomous Mesh",
    difficulty: "HARD",
    overview: "Tactical communication relay system that extends battlefield coverage in communication-denied defense scenarios.",
    fullDetails: "Modern defense operations require uninterrupted connectivity across harsh terrain. Develop autonomous mobile/drone relay nodes that evaluate signal strength and dynamically reposition themselves to preserve high-bandwidth encrypted data links between squads and command centers."
  },
  {
    id: "PS12-HYB",
    title: "Adaptive Emergency Drone Landing Beacon",
    track: "hybrid",
    category: "UAV & Smart Infrastructure",
    difficulty: "HARD",
    overview: "Smart landing beacon that communicates with distressed drones and enables safe emergency landings.",
    fullDetails: "Drone failures in smart cities pose severe safety risks. Design an external smart landing beacon equipped with wireless transceivers and sensors that communicates with drones suffering from low battery or GPS denial, selecting a safe landing pad and guiding the drone down autonomously."
  },
  {
    id: "PS13-HYB",
    title: "FORESTGUARD AI: Low-Power Acoustic Wildlife Intrusion Detection",
    track: "hybrid",
    category: "Edge AI & Environmental IoT",
    difficulty: "HARD",
    overview: "Low-power acoustic sensor node that classifies wildlife sounds via deep learning and sends cellular alerts.",
    fullDetails: "Forest-edge communities face severe human-wildlife conflicts. Develop an ultra-low-power acoustic sensing node (microphones + ESP32/Raspberry Pi + Solar) that runs on-device deep learning sound classification to distinguish animal threats from ambient noise and dispatch immediate 4G alerts."
  },
  {
    id: "PS14-HYB",
    title: "COVERAGE-AI: Wireless Signal Analytics & Optimization System",
    track: "hybrid",
    category: "Mobile Robotics & Signal Heatmaps",
    difficulty: "MEDIUM",
    overview: "Mobile-node (drone/AGV) signal mapping system that logs RSSI, builds heatmaps, and recommends tower sites.",
    fullDetails: "Deploy a mobile robot or drone equipped with RSSI measurement hardware to survey an area, send RF logs to a central system, generate a 3D signal strength heatmap, and run AI prediction models to suggest optimal repeater positions."
  },
  {
    id: "PS15-HYB",
    title: "SECURE-SHIELD AI: Secure Communication Monitoring & Anomaly Detection",
    track: "hybrid",
    category: "Cybersecurity & RF Monitoring",
    difficulty: "MEDIUM",
    overview: "AI-enabled wireless monitoring grid that detects rogue nodes, transmission spikes, and unauthorized traffic.",
    fullDetails: "Build a network of ESP32/LoRa monitor nodes that continuously inspect RF traffic patterns, pass data to an ML engine, and flag rogue nodes or message flooding attacks in real time."
  },
  {
    id: "PS16-HYB",
    title: "DELAYSMART: Store-and-Forward Resilient Network System",
    track: "hybrid",
    category: "Delay-Tolerant Networks (DTN)",
    difficulty: "MEDIUM",
    overview: "AI delay-tolerant networking system that stores packets during outages and predicts optimal transmission windows.",
    fullDetails: "In remote or space communications, links drop frequently. Build a hardware node with local SD storage that buffers messages during outages, uses AI models to predict when connectivity will restore, and bursts packets safely without data loss."
  }
];
