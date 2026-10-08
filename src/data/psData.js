export const hardwarePS = [
  {
    "id": "PS1",
    "title": "Autonomous Motorized Antenna Beam-Tracker",
    "track": "HARDWARE",
    "description": "Build a closed-loop, 2-axis motorized tracking mount that autonomously points a directional antenna at a moving beacon to maintain maximum signal strength.",
    "details": "High-gain directional antennas are essential for long-range links but fail if misaligned. This project requires constructing a servo-driven mechanical mount controlled by a microcontroller that continuously samples the Received Signal Strength Indicator (RSSI) from a mobile RF beacon and executes a gradient-ascent algorithm to maintain physical alignment."
  },
  {
    "id": "PS2",
    "title": "Ground-Searching \"Foxhunt\" Radio Direction Finder",
    "track": "HARDWARE",
    "description": "Design a handheld, ergonomic search-and-rescue direction finder that processes rapid RSSI fluctuations to guide an operator directly toward a hidden beacon (useful for avalanche/landslide rescue).",
    "details": "Locating downed transmitters or emergency beacons requires translating invisible RF signals into human-readable directions. This project involves building a highly directional antenna wand coupled with a microcontroller that filters noisy RSSI data and provides real-time audiovisual feedback (pitch shifting or bar graphs) proportional to signal strength."
  },
  {
    "id": "PS3",
    "title": "Sub-Terrestrial Soil Moisture Sensing via RF Attenuation",
    "track": "HARDWARE",
    "description": "Build a non-invasive RF sensing chamber to demonstrate the monotonic relationship between microwave signal attenuation and soil moisture content.",
    "details": "Traditional agricultural moisture sensors degrade rapidly due to galvanic corrosion. Because water has a high dielectric constant, it attenuates RF signals predictably. This project requires passing a Sub-GHz or 2.4 GHz signal through a soil chamber and calculating the volumetric water content entirely based on the measured physical signal loss."
  },
  {
    "id": "PS4",
    "title": "Through-Wall Presence Detection",
    "track": "HARDWARE",
    "description": "Interrogate a drywall or plywood partition using a radar module to detect human presence and biological micro-movements without optical line-of-sight.",
    "details": "Search and rescue or tactical operations require situational awareness through solid barriers. Because low-frequency microwaves penetrate standard building materials, this project requires calibrating an FMCW or CW radar to map the environment, filter out static wall reflections, and amplify the moving targets located on the other side."
  },
  {
    "id": "PS5",
    "title": "Vehicular Platoon Anti-Collision Doppler Brake System",
    "track": "HARDWARE",
    "description": "Mount a Doppler radar on a mobile chassis to continuously measure relative velocity and automatically engage reverse thrust when a rapid negative velocity shift is detected.",
    "details": "Autonomous vehicle platooning requires sub-second braking reflexes to prevent cascading collisions. This hardware challenge utilizes a continuous-wave Doppler radar to measure the frequency shift of a lead vehicle. If the lead vehicle brakes hard, the hardware must physically override the trailing vehicle’s motor controller before impact."
  },
  {
    "id": "PS6",
    "title": "Self-Healing Secure IoT Disaster Mesh Network (RESILINK GRID)",
    "track": "HARDWARE",
    "description": "Design and develop a secure, self-healing IoT mesh network capable of sustaining reliable communication during disaster scenarios where conventional infrastructure has failed. The system must maintain data integrity, location awareness, and network continuity even in the presence of node failures or large-scale disruption.",
    "details": "Natural disasters frequently disable centralized communication systems, isolating distributed IoT sensors that are critical for early warning and situational awareness. This project proposes a resilient mesh-based IoT communication framework that autonomously maintains connectivity and secures transmitted data across affected regions. Requirements: automatic mesh formation without manual configuration, self-healing routing to bypass failed/disconnected nodes, secure communication using encryption/authentication, real-time sensor data transmission, GPS location tagging, and resilience against partial network collapse. Hardware Required: ESP32 or similar IoT nodes, LoRa/WiFi mesh communication modules, GPS module, edge gateway device (Raspberry Pi or equivalent), power backup modules, monitoring workstation."
  },
  {
    "id": "PS7",
    "title": "Adaptive Communication System for Disaster-Resilient Networks",
    "track": "HYBRID",
    "description": "During natural disasters such as earthquakes, floods, or landslides, conventional communication infrastructure may become unavailable due to power failures, damaged towers, network congestion, or loss of backhaul connectivity.",
    "details": "Develop a portable, self-configuring communication node capable of establishing and maintaining communication between users/devices in the absence of conventional cellular or internet infrastructure."
  },
  {
    "id": "PS8",
    "title": "TerraTrack — Road Anomaly Detection",
    "track": "HYBRID",
    "description": "Current municipal infrastructure lacks a continuous, crowdsourced method for real-time road anomaly detection, leaving two-wheeler riders vulnerable to accidents and delaying critical SOS emergency responses.",
    "details": "Build a system (typically accelerometer + GPS + connectivity module on a two-wheeler) that detects road anomalies such as potholes in real time, crowdsources this data, and can trigger SOS alerts for accident scenarios."
  },
  {
    "id": "PS9",
    "title": "Intelligent Reconfigurable Wireless Device",
    "track": "HYBRID",
    "description": "Wireless devices often experience weak signals and interference when their surroundings or network conditions change.",
    "details": "Propose a smart wireless device that can detect these changes and automatically adjust its communication settings (channel, power, modulation, etc.) to maintain a strong, reliable, and energy-efficient connection."
  },
  {
    "id": "PS10",
    "title": "ShieldLink: Autonomous Tactical Communication Relay Network (Defense)",
    "track": "HYBRID",
    "description": "Modern defense operations rely heavily on uninterrupted communication between soldiers, unmanned systems, and command centers operating in dynamic and communication-denied environments. Conventional communication networks are vulnerable to terrain obstructions, infrastructure damage, signal degradation, and electronic interference, often resulting in delayed information exchange and reduced mission effectiveness.",
    "details": "Develop an autonomous tactical communication relay system capable of dynamically extending communication coverage, maintaining secure connectivity between distributed units, and adapting to changing operational conditions to ensure reliable battlefield communication in infrastructure-limited environments."
  },
  {
    "id": "PS11",
    "title": "Adaptive Emergency Drone Landing Beacon",
    "track": "HYBRID",
    "description": "As autonomous drones become an integral part of smart cities and critical services, unexpected failures such as communication loss, GPS denial, or battery depletion pose significant safety risks. Current drone systems lack intelligent external infrastructure that can support emergency landing decisions in real time.",
    "details": "Design a smart landing assistance system capable of communicating with distressed drones, identifying safe landing zones, and enabling reliable emergency landings through adaptive wireless communication and intelligent decision-making."
  },
  {
    "id": "PS12",
    "title": "Low-Power Acoustic Wildlife Intrusion Detection System (FORESTGUARD AI)",
    "track": "HYBRID",
    "description": "Design and develop a low-power acoustic-based animal intrusion detection system capable of identifying wildlife movement in forest regions and transmitting alerts through a cellular remote sensing network. The system must utilize deep learning classification techniques to distinguish animal sounds from environmental noise while ensuring energy-efficient operation for remote deployment.",
    "details": "Forest-edge communities and sensitive ecological zones require early detection of animal intrusion to prevent human-wildlife conflict and protect biodiversity. This project proposes an acoustic sensing framework that uses deep learning models to classify animal sounds and relay intrusion alerts over a cellular communication network. Requirements: continuous acoustic monitoring via low-power sensors, on-device DL classification, noise filtering to reduce false detections, cellular-based remote data transmission, solar-powered energy-efficient operation, real-time alert generation, and scalable deployment. Hardware Required: Low-power acoustic sensor (microphone array), edge AI processing unit (ESP32/Raspberry Pi/low-power MCU), cellular communication module (4G/LTE), solar power unit with battery backup, central monitoring dashboard."
  },
  {
    "id": "PS13",
    "title": "Intelligent Wireless Coverage Analytics and Optimization System (COVERAGE-AI)",
    "track": "HYBRID",
    "description": "Design and develop an AI-enabled wireless signal mapping system capable of measuring, analyzing, and visualizing signal strength distribution across a defined area. The system must identify weak coverage zones and recommend optimal transmitter or tower placement to enhance network performance.",
    "details": "Efficient wireless network deployment requires accurate knowledge of signal strength distribution across an environment. This project proposes a mobile-node-based signal mapping framework that collects RSSI data across different locations and uses AI techniques to predict weak zones and optimize infrastructure placement. Requirements: real-time RSSI measurement and logging, mobility-enabled data collection (drone/AGV/manual), signal strength heatmap generation, AI-based prediction of weak coverage zones, and recommendation of optimal tower/repeater placement. Hardware Required: ESP32 with RSSI measurement capability, wireless communication module (WiFi/LoRa), mobile platform (drone, AGV, or manual mobility setup), laptop for data logging/visualization, power supply units."
  },
  {
    "id": "PS14",
    "title": "Intelligent Secure Communication Monitoring and Anomaly Detection System (SECURE-SHIELD AI)",
    "track": "HYBRID",
    "description": "Design and develop an AI-enabled secure communication system capable of detecting anomalous behavior within a wireless network. The system must monitor communication patterns in real time and identify abnormal message frequency, unauthorized nodes, or suspicious transmission activity to enhance network security.",
    "details": "Wireless communication networks are vulnerable to malicious nodes, abnormal traffic behavior, and unauthorized access. This project proposes an intelligent monitoring framework that applies machine learning techniques to detect irregular communication patterns and flag potential security threats in real time. Requirements: continuous monitoring of traffic patterns, detection of abnormal message frequency/transmission spikes, identification of unknown/unauthorized nodes, ML-based anomaly detection trained on normal behavior, and real-time alert generation. Hardware Required: ESP32 communication nodes, laptop or monitoring workstation, wireless communication modules (WiFi/LoRa/BLE), power supply units."
  },
  {
    "id": "PS15",
    "title": "Intelligent Store-and-Forward Resilient Network System",
    "track": "HYBRID",
    "description": "Design and develop an AI-enabled delay-tolerant communication system capable of maintaining reliable data exchange in environments with intermittent or unstable connectivity. The system must intelligently predict optimal transmission windows, store data during network outages, and forward it once connectivity is restored.",
    "details": "In remote regions, disaster zones, and space communication scenarios, continuous network connectivity cannot be guaranteed. This project proposes a delay-tolerant networking framework that uses intelligent prediction models and store-and-forward mechanisms to ensure reliable communication despite frequent disconnections. Requirements: detection of intermittent network availability, store-and-forward data mechanism during link failures, AI-based prediction of optimal transmission timing, simulation of network drops, reliable packet delivery despite high delay, and efficient memory/power management. Hardware Required: ESP32 communication nodes, local storage module (SD card or onboard flash), wireless communication modules (WiFi/LoRa), power supply units."
  },
  {
    "id": "PS16",
    "title": "Communication-Aware Motion Safety",
    "track": "HARDWARE",
    "description": "Develop a system that predicts whether a planned movement of a remote-controlled vehicle will break the minimum communication link requirements — before the movement is executed — and takes preventive action.",
    "details": "Remote-controlled heavy machinery loses control and video links when it turns behind terrain, crosses another machine, or enters an obstructed radio path, often triggering an emergency stop and a lengthy restart. This project requires building a scaled remote-vehicle system controlled by a microcontroller that combines location, direction, planned path, antenna measurements, and live network indicators (RSSI, latency, packet loss, video quality) to predict failure risk before the vehicle enters a communication shadow, and to trigger a preventive action such as switching antennas, changing route, or stopping safely."
  },
  {
    "id": "PS17",
    "title": "Ground-Based GPS Backup",
    "track": "HARDWARE",
    "description": "Build a ground-based positioning system that locates a person, vehicle, or device using nearby wireless stations when GPS is unavailable.",
    "details": "GPS becomes weak or inaccurate indoors, between tall structures, or during disruptions. This project requires setting up three or more fixed wireless stations at known locations and a movable receiver controlled by a microcontroller (ESP32) that estimates its distance from each station and calculates its approximate position through trilateration, displaying it on a simple map in real time."
  },
  {
    "id": "PS18",
    "title": "Self-Updating Radio Map for Hazardous Zones",
    "track": "HARDWARE",
    "description": "Build a system that uses operational vehicles themselves to continuously update a site’s radio coverage map and detect newly formed communication dead zones.",
    "details": "Radio coverage maps in mines and construction zones go stale as terrain and machinery shift, and technicians often can’t enter active risk zones to re-survey manually. This project requires mounting a rover or mobile communication node that records its position together with RSSI, latency, packet loss, and throughput, builds a continuously updated radio-quality map, detects when a new obstruction creates a weak region, and recommends a safer route or improved antenna/relay position."
  },
  {
    "id": "PS19",
    "title": "Dual-Path Wireless Internet Continuity",
    "track": "HARDWARE",
    "description": "Develop a system that uses two wireless paths to keep a home’s internet connection stable when one path becomes unreliable.",
    "details": "Rural fixed-wireless broadband depends on a single radio link to a tower, which can weaken due to obstacles, terrain, or heavy traffic. This project requires setting up two ESP32 boards or Wi-Fi routers representing two independent towers feeding one receiver node representing a home, continuously checking the quality of both links, selecting the better one when one weakens, using both together when extra reliability is needed, and preserving an ongoing transfer during the switch."
  },
  {
    "id": "PS20",
    "title": "Multi-Hop LoRa Mesh with Dynamic Congestion Avoidance",
    "track": "HARDWARE",
    "description": "Sub-surface mining tunnels suffer from extreme non-line-of-sight (NLOS) signal attenuation, high multipath reflections, and a lack of GPS timing, leading to network partitioning and high packet loss during emergencies.",
    "details": "Design a decentralized, asynchronous mesh routing protocol over sub-GHz LoRa transceivers that dynamically optimizes link paths based on Received Signal Strength Indicator (RSSI) gradients, packet error rates, and channel hop counts, without relying on any centralized coordination or GPS timing."
  },
  {
    "id": "PS21",
    "title": "Non-Intrusive Pipeline Corrosion Monitor",
    "track": "HARDWARE",
    "description": "Buried and insulated chemical pipelines suffer from localized pitting and wall-thinning that conventional external point sensors fail to map across long spans.",
    "details": "Build an intrinsically safe IoT sensor node driving low-power Electromagnetic Acoustic Transducers (EMAT) to excite guided Lamb waves along the pipe wall, running dispersion-curve analysis locally on the node to flag corrosion defects without requiring physical access to the pipe interior."
  },
  {
    "id": "PS22",
    "title": "Autonomous Water Reservoir Sludge Profiler",
    "track": "HARDWARE",
    "description": "Sediment buildup in municipal water tanks and settling ponds decreases storage capacity and contaminates drinking supply, yet mapping sludge depth usually requires manual dredging surveys.",
    "details": "Design a floating, buoyancy-controlled robotic acoustic sensor node that periodically submerges, maps the multi-point sludge layer profile using high-frequency sonar, resurfaces, and transmits the resulting bathymetric matrix via LoRaWAN."
  },
  {
    "id": "PS23",
    "title": "Multi-Gas Leak Triangulation System for Industrial Plants",
    "track": "HARDWARE",
    "description": "Most gas detectors only say a leak happened, not where. Build a distributed sensor grid that localizes the leak source from concentration patterns across nodes — like RSSI trilateration, but with diffusing gas instead of radio signal.",
    "details": "This project requires deploying 4-6 gas sensor nodes (MQ-series or electrochemical sensors) on ESP32/STM32 microcontrollers, each performing calibrated gas sensing and sending time-synced readings over WiFi/BLE/LoRa to a central gateway (Raspberry Pi or laptop). The technical core is a localization algorithm — either weighted-centroid (source approximated as the concentration-weighted average of node positions), gradient-ascent (following rising concentration between neighboring nodes), or time-of-detection (triangulating from detection order/delay across nodes). The system must also filter basic false positives such as a drifting sensor versus an actual leak."
  },
  {
    "id": "PS24",
    "title": "Noise-Pollution Mapping Network with Source Direction-Finding",
    "track": "HARDWARE",
    "description": "Standard noise monitors just log dB levels. Build a network of nodes that also estimate the bearing to the dominant noise source at each location, using mic-array signal processing — turning scattered dB readings into an actual noise-source map.",
    "details": "This project requires deploying 4-6 distributed nodes, each carrying a small microphone array (3-4 mics spaced a few cm apart) on an ESP32/Raspberry Pi, communicating over WiFi/LoRa to a central gateway. Each node must sample audio from its mic array and perform on-node direction-of-arrival (DOA) estimation — either time-difference-of-arrival (TDOA) between mic pairs via cross-correlation, or a beamforming (delay-and-sum) sweep to find the peak energy direction — alongside continuous dB level logging. A central dashboard overlays the dB heatmap with directional arrows per node (or a triangulated source point where two or more nodes agree) on a site map, with basic filtering to reject transient or irrelevant noise such as wind gusts or node self-noise."
  }
];
export const softwarePS = [
  {
    "id": "PS25",
    "title": "Real-Time Network Intrusion Dashboard",
    "track": "SOFTWARE",
    "description": "Watch live network traffic, catch attacks using machine learning, and show alerts on a dashboard.",
    "details": "Security teams need a way to spot malicious activity on a network as it happens rather than after the damage is done. This project involves continuously capturing live network traffic, applying a machine-learning model to classify normal versus attack patterns, and surfacing detected threats in real time on a monitoring dashboard so operators can respond immediately."
  },
  {
    "id": "PS26",
    "title": "AEGIS-LINK: AI-Enabled Adaptive Anti-Jamming Communication System",
    "track": "SOFTWARE",
    "description": "Design and develop an AI-enabled adaptive communication system capable of detecting intentional or unintentional signal jamming and autonomously mitigating its effects. The system must identify interference patterns in real time and dynamically switch frequencies using intelligent frequency hopping techniques to ensure secure and uninterrupted communication.",
    "details": "Wireless communication systems used in critical operations are vulnerable to signal jamming and interference. This project proposes an AI-driven anti-jamming framework that detects anomalous signal behavior and rapidly adapts transmission parameters to maintain reliable and secure communication using Software Defined Radio (SDR) for flexible spectrum control, FFT-based spectral analysis, ML-based classification of interference types, and adaptive frequency hopping within milliseconds. Hardware Required: SDR platform, RF antennas and transceiver modules, processing unit (embedded system or PC), encryption module / secure communication interface."
  },
  {
    "id": "PS27",
    "title": "Rural Coverage Gap Mapper",
    "track": "SOFTWARE",
    "description": "Identify underserved rural areas and suggest where new towers should be placed.",
    "details": "Rural connectivity planning is often done manually and slowly. This project requires combining population/settlement data with existing tower coverage data to flag underserved regions, then suggesting candidate new tower sites that maximize population coverage gained per tower."
  },
  {
    "id": "PS28",
    "title": "Deadline-Aware Cloud Task Continuity",
    "track": "SOFTWARE",
    "description": "Develop a system that predicts network degradation ahead of time and protects the progress of a time-critical cloud task so its most important data reaches the destination before the connection worsens further.",
    "details": "Time-critical cloud tasks — emergency evidence uploads, field-report syncs, inspection data — often begin under stable connectivity but fail mid-way when the network degrades, forcing a full restart. This project requires continuously monitoring latency, jitter, packet loss, uplink speed, remaining task size, and deadline, and when failure is predicted, taking preemptive action such as prioritizing critical data, checkpointing progress, compressing/dividing the remaining transfer, or switching connections."
  },
  {
    "id": "PS29",
    "title": "SIM Swap and Suspicious Call Pattern Detection",
    "track": "SOFTWARE",
    "description": "Detects fraudulent SIM swaps and suspicious call patterns using machine learning.",
    "details": "SIM swap fraud allows attackers to hijack a victim’s phone number and bypass SMS-based authentication, while unusual call patterns can indicate scams or account takeovers. This project requires building a machine-learning system that analyzes SIM change events and call metadata to flag fraudulent SIM swaps and suspicious calling behavior in near real time."
  },
  {
    "id": "PS30",
    "title": "Timing Integrity for Distributed Observatories",
    "track": "SOFTWARE",
    "description": "Build a cooperative timing-integrity system that compares timestamps across distributed observing nodes and flags a node whose timing appears to be drifting or spoofed, before its data is trusted.",
    "details": "Distributed telescopes rely on extremely accurate timestamps for events like stellar occultations; clock drift, camera delay, or GNSS interference/spoofing can silently corrupt otherwise valid observations. This project requires building a network of observing nodes that compares GNSS time, local clock time, camera-trigger timestamps, and RF time exchange between nodes, identifies a drifting or spoofed node, and assigns every observation a timing-confidence score."
  },
  {
    "id": "PS31",
    "title": "Conflict-Resolution Referee for Mobile Network Controllers",
    "track": "SOFTWARE",
    "description": "Simulates a mobile network where several automated controllers (energy, coverage, interference) can give contradictory orders to the same antenna; a referee system catches conflicts and approves, modifies, delays, or rejects each change.",
    "details": "In a mobile network, multiple automated controllers may independently try to optimize for different goals — energy savings, coverage, interference — and can issue conflicting instructions to the same antenna at the same time. This project requires simulating such a multi-controller network and building a referee system that intercepts each proposed change, detects conflicts between controllers, and decides whether to approve, modify, delay, or reject the change to keep the network in a consistent state."
  },
  {
    "id": "PS32",
    "title": "5G Network Security Misconfiguration Scanner",
    "track": "SOFTWARE",
    "description": "Scans a simulated 5G network setup for common security misconfigurations.",
    "details": "5G network deployments are complex, and misconfigured settings can leave gaps that attackers exploit. This project requires building a scanner that inspects a simulated 5G network setup against a checklist of known misconfiguration patterns (open ports, weak authentication settings, default credentials, insecure protocol configurations, etc.) and reports the issues it finds."
  },
  {
    "id": "PS33",
    "title": "On-Device Signal Drop / Handover Predictor",
    "track": "SOFTWARE",
    "description": "An on-device model predicts signal drops and handovers before they happen.",
    "details": "Signal drops and handover failures degrade user experience, especially for latency-sensitive apps. This project requires training a lightweight, on-device model that uses recent signal-quality trends to predict an upcoming drop or handover event slightly before it happens, so an application can prepare (e.g., pre-buffer, pre-fetch, or notify)."
  },
  {
    "id": "PS34",
    "title": "Coverage Dead-Zone Heatmap Tool",
    "track": "SOFTWARE",
    "description": "Take a tower’s location and transmit power as input and generate a heatmap showing where signal coverage is weak or absent.",
    "details": "Mobile network planners need a fast way to visualize coverage gaps without running a full field survey. This project requires modeling signal propagation (a simple path-loss model is enough) from a given tower’s coordinates and power, then rendering the resulting coverage strength as a heatmap overlaid on a map."
  },
  {
    "id": "PS35",
    "title": "Antenna Gain/Bandwidth Predictor from Design Inputs",
    "track": "SOFTWARE",
    "description": "ML predicts an antenna’s gain and bandwidth from its design inputs.",
    "details": "Antenna design typically requires iterative electromagnetic simulation to determine gain and bandwidth for a given geometry. This project requires generating a dataset of antenna design parameters (e.g., patch dimensions, substrate properties, feed position) and their corresponding gain/bandwidth (from formulas or simulation), then training a model to predict gain and bandwidth directly from new design inputs, cutting down iteration time."
  },
  {
    "id": "PS36",
    "title": "Federated Learning Across IoT Devices",
    "track": "SOFTWARE",
    "description": "Trains a machine-learning model across many IoT devices without sharing raw data (federated learning).",
    "details": "Centralizing data from many IoT devices for training raises privacy and bandwidth concerns. This project requires implementing a federated learning system where each device trains a local model on its own data and only shares model updates, which are aggregated into a shared global model, without any raw data ever leaving the device."
  },
  {
    "id": "PS37",
    "title": "Local Real-Time Factory Sensor Anomaly Detection",
    "track": "SOFTWARE",
    "description": "Detects anomalies in factory sensor data locally and instantly, with no cloud round-trip.",
    "details": "Sending every sensor reading to the cloud for anomaly detection introduces latency that is unacceptable on a factory floor where faults must be caught immediately. This project requires an on-device (edge) anomaly detection system that processes factory sensor streams locally and raises alerts instantly, without depending on a round trip to a cloud server."
  },
  {
    "id": "PS38",
    "title": "CommShield",
    "track": "SOFTWARE",
    "description": "An AI system that learns normal 5G/6G network behavior to catch brand-new (zero-day) attacks.",
    "details": "Signature-based detection cannot catch attacks that have never been seen before. CommShield addresses this by learning a baseline of normal 5G/6G network behavior and flagging deviations from that baseline as potential zero-day threats, allowing previously unknown attack patterns to be detected without relying on a known-attack database."
  },
  {
    "id": "PS39",
    "title": "Disaster Coordination Web Platform",
    "track": "SOFTWARE",
    "description": "A web platform for volunteers, authorities, and citizens to coordinate during a disaster.",
    "details": "Disaster response is often hampered by poor coordination between citizens reporting needs, volunteers offering help, and authorities managing resources. This project requires building a web platform that brings these three groups together in one place, enabling requests, resource offers, and official updates to be shared and coordinated efficiently during a disaster."
  },
  {
    "id": "PS40",
    "title": "Deepfake Voice Detector for Live Calls",
    "track": "SOFTWARE",
    "description": "Detect AI-generated (deepfake) voices on live calls in real time and show a trust score.",
    "details": "Voice-cloning scams are a growing threat on voice calls. This project requires analyzing live (or streamed) call audio for artifacts characteristic of synthetic speech and continuously updating a trust score displayed to the user during the call."
  },
  {
    "id": "PS41",
    "title": "Acoustic Data Link — Sound-Based Data Transfer",
    "track": "SOFTWARE",
    "description": "Send data between two devices as sound (speaker to microphone) instead of Wi-Fi.",
    "details": "In environments where Wi-Fi/Bluetooth is unavailable or restricted, audio can carry data between nearby devices. This project requires encoding data into an audio signal (e.g., via frequency-shift keying or similar), transmitting it through a speaker, and decoding it from a microphone on a receiving device, handling noise and synchronization."
  },
  {
    "id": "PS42",
    "title": "CareSync",
    "track": "SOFTWARE",
    "description": "A lightweight AI triage tool for clinics with poor internet connectivity and limited resources.",
    "details": "Many clinics, especially in remote or under-resourced areas, lack reliable internet access and sufficient staff to triage incoming patients efficiently. CareSync is a lightweight AI-driven triage tool designed to run with minimal connectivity and hardware requirements, helping clinic staff quickly assess patient urgency and prioritize care using whatever limited data and infrastructure is available."
  },
  {
    "id": "PS43",
    "title": "Unauthorized Radio Signal Classifier",
    "track": "SOFTWARE",
    "description": "Classify captured radio signals and flag unknown or unauthorized transmissions.",
    "details": "Spectrum monitoring needs to tell known, licensed signal types apart from rogue transmissions. This project requires building a classifier over captured (or SDR-simulated) RF signal data that recognizes known modulation/signal classes and flags anything that doesn’t match as unknown or unauthorized."
  },
  {
    "id": "PS44",
    "title": "BER Prediction Using Machine Learning",
    "track": "SOFTWARE",
    "description": "Train an ML model to predict bit-error rate from communication-system parameters such as modulation type, SNR, bandwidth, and channel conditions.",
    "details": "Estimating BER analytically gets complex fast as more real-world factors are added. This project trains a regression/classification model on simulated or synthetic communication-link data to predict BER directly from system parameters, giving a much faster estimate than a full analytical or simulation-based calculation."
  },
  {
    "id": "PS45",
    "title": "Virtual IoT Device Emulator",
    "track": "SOFTWARE",
    "description": "Create a configurable software environment capable of emulating hundreds of IoT devices, each producing realistic sensor data, failures, and communication events for testing IoT applications.",
    "details": "Testing IoT applications at scale is hard without access to hundreds of physical devices. This project requires building an emulator that can spin up large numbers of virtual devices, each generating configurable sensor data streams, simulated failures, and network events, so downstream IoT applications can be tested realistically."
  },
  {
    "id": "PS46",
    "title": "Cooperative IoT Fault Localization",
    "track": "SOFTWARE",
    "description": "Simulate an IoT network with multiple interacting sensors and develop an algorithm that identifies which device is most likely responsible when several sensors report abnormal readings.",
    "details": "When several sensors in an IoT network report anomalies at once, it’s often one faulty device causing correlated effects rather than several independent failures. This project requires simulating a network of interacting sensors and building an algorithm that traces correlated abnormal readings back to the most likely root-cause device."
  },
  {
    "id": "PS47",
    "title": "IoT Sensor Reliability Scoring System",
    "track": "SOFTWARE",
    "description": "Create a reliability engine that continuously assigns a confidence score to each sensor based on historical accuracy, missing values, noise, drift, and agreement with neighboring sensors.",
    "details": "Not all sensor readings deserve equal trust — some sensors drift or degrade over time. This project requires building a scoring engine that tracks each sensor’s historical accuracy, missing-data rate, noise level, drift, and agreement with nearby sensors, and continuously updates a reliability score per sensor."
  },
  {
    "id": "PS48",
    "title": "Adaptive Equalizer for Wireless Channels",
    "track": "SOFTWARE",
    "description": "Build a software simulator for a time-varying wireless channel and implement an adaptive equalizer that continuously updates its coefficients to compensate for channel distortion.",
    "details": "Wireless channels distort signals in ways that change over time (multipath, fading), so a fixed equalizer isn’t enough. This project requires simulating a time-varying channel and implementing an adaptive algorithm (e.g., LMS/RLS-based) that continuously adjusts equalizer coefficients to minimize distortion as channel conditions change."
  }
];
