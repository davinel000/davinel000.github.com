---
title: "in the digital shadow"
year: "2026"
artistName: "Slava Romanov"
role: "Data Artist and Multimedia Developer"
website: "https://www.slavaromanov.art/"
documentLabel: "Presentation & Technical Rider"
runningTitle: "in the digital shadow"
formatLabel: "Interactive audiovisual installation"
coverImage: "../../../../assets/images/portfolio/in_the_digital_shadow/selected/01-installation-view-jimi-liu.jpg"
coverCredit: "Photo: Jimi Liu"
coverFullBleed: true
coverFit: "cover"
coverPosition: "center center"
outputPdf: "in-the-digital-shadow-rider-en.pdf"
inlineFigures:
  - id: "fullview"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/jimi_liu/ids_jimi_liu (11).jpg"
    caption: "Frontal view on the installation. Photo: Jimi Liu"
  - id: "chamber"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/overview/P6560441.JPG"
    caption: "Entrance to the Collection Chamber. Photo: Slava Romanov"
  - id: "spatial"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/selected/06-spatial-field-jimi-liu.jpg"
    caption: "Overview of the installation. Photo: Jimi Liu"
  - id: "pillar"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/carousel/3.JPG"
    caption: "Light Pillar in front of the installation. Photo: Slava Romanov"
  - id: "plate"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/selected/05-collection-plate-jimi-liu.jpg"
    caption: "Resonating collection plate inside the chamber. Photo: Jimi Liu"
  - id: "pedestal"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/jimi_liu/ids_jimi_liu (6).jpg"
    caption: "Allocate Station pedestal. Photo: Slava Romanov"
  - id: "redstation"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/spatial/06-installation-view-slava-romanov.JPG"
    caption: "Red line interaction at the Allocate Station. Photo: Slava Romanov"
  - id: "flush"
    path: "../../../../assets/images/portfolio/in_the_digital_shadow/selected/03-flush-state-jimi-liu.jpg"
    caption: "Flush state. Photo: Jimi Liu"
---
# in the digital shadow

*in the digital shadow* is an interactive audiovisual installation in which visitors enter a projection chamber and become temporary digital shadows. Their bodies are captured as point-cloud traces, while the sounds of their steps and contact with a resonating metal surface are recorded as sonic traces. These fragments return on the cube surfaces, in the surrounding Light Pillars, and through spatial audio. The installation behaves like a memory system: it collects, recalls, distributes, overloads, and eventually releases these traces.

The visitor enters a system that is already active and continuously changing. In quieter states, recorded shadows drift through the cube and the Light Pillars as faint images, low humming sound, and slow light movement. Each new body capture or red-line gesture adds another trace and changes how images, sound, and light circulate through the room. As traces accumulate, the system becomes denser and more unstable, moving toward overload: projections fill with fragments, sound intensifies, and light begins to pulse or flash. The flush state clears the occupied slots and returns the installation to a quieter condition. The work turns creative production into a spatial experience of accumulation, delegation, pressure, and release. More documentation, images, and video can be found on the project page: [slavaromanov.art/2026/in-the-digital-shadow](https://www.slavaromanov.art/2026/in-the-digital-shadow).





{{FIGURE:spatial}}

<!-- {{FIGURE:fullview}} -->

{{PAGEBREAK}}

## Technical Rider

The technical rider is based on the initial production, and is subject to adaptation for future festival and exhibition scenarios. The work is modular: the full version combines a Collection Chamber, a distributed group of light-sound objects, an interactive Allocate Station, and a networked control system.

### Installation Footprint

- Dimensions: approx. 12 x 15 m
- Minimum ceiling height: 3.5 m
- Darkened or very well dimmed space 

### Installation Modules

- Collection Chamber: projection cube with depth-camera capture, point-cloud projection, resonating metal plate, piezo microphone recording, and internal spatial sound
- Light Pillars: six distributed aluminium-and-fabric objects with individual DMX LED PAR fixtures and mono loudspeakers
- Allocate Station: red-line drawing interface with CV recognition and integrated illumination
- Control system: computers, network router, audio interfaces, Art-Net, database and orchestration logic
- Spatial Sound System: ten-channel sound environment with four channels inside the Collection Chamber, six channels across the Light Pillars, and contact microphone recording from the resonating metal plate

### Power Requirements

- Recommended total power capacity: approx. 5 kW
- Final consumption depends on the exact projector, loudspeaker, computer, and lighting models
- Approx. 30 individual power connections may be required across projectors, active speakers, LED fixtures, computers, monitors, network devices, and the Allocate Station
- All power lines should be routed safely and protected from visitor access




{{PAGEBREAK}}

## Module 1: Collection Chamber

The Collection Chamber is the main capture and replay environment of the installation. It receives visitors as live bodies, records them as shadows, and returns stored traces through projection and sound.


{{FIGURE:chamber}}

### Function

- Mirrors the visitor inside the cube as a live point-cloud body.
- Records short linked fragments of body movement and contact sound when the resonating metal plate is activated.
- Recalls stored shadows and makes the system state visible and audible through projection density, spatial sound, and noise-based transitions.

### Dimensions And Structure

- Chamber dimensions: 300 x 300 x 300 cm
- Aluminium profiles: 40 x 40 mm square section, 150 cm length
- Screens: three full projection surfaces (300 x 300 cm) and one reduced surface (200 x 280 cm) for chamber access
- Depth cameras: 3 Azure Kinect depth cameras inside the cube (2 high, 1 low)
- Internal loudspeakers: 4 channels inside the cube (fixed on corners)
- Resonating metal plate: approx. 100 x 100 cm, 10 mm thick

{{FIGURE:plate}}

### Provided By Artist

- Aluminium profile structure for the 3 x 3 x 3 m chamber
- Projection screens and mounting hardware
- Depth cameras
- Contact microphones and primary sound interface

### Required From Venue

- Resonating metal plate, preferably aluminium, approx. 100 x 100 cm, walkable and stable, with small feet or spacers for contact microphone cabling underneath
- Two short-throw projectors, WUXGA, at least 6500 ANSI lumens, high contrast (Laser + DLP preferred), with lens shift
- Stable projector stands, mounts, or rigging points at approx. 3 m height
- Four loudspeakers for internal chamber sound, maximum 4 kg each, superclamp-mountable (e.g. Genelec 8030)
- Safe power and signal cabling for projectors, speakers, cameras, and control system (PC is approximately 10 m from the cube)
- Two ladders for cube assembly and screen mounting
- Local assistance for assembly (1 person)

Projection is arranged from outside the cube: each projector covers two cube sides at approx. 45 degrees. Final projection alignment, mapping, and camera calibration are carried out by the artist.



## Module 2: Light Pillars

The Light Pillars extend the Collection Chamber into the surrounding space. They are vertical fabric-and-aluminium objects that function as distributed memory slots: recorded shadows can be assigned to them and return as synchronized sound and light events.

{{FIGURE:pillar}}

### Function

- Receive and replay recorded shadows as distributed memory slots.
- Extend the chamber into a spatial field of sound and light.
- Make system states perceptible through humming sound, pulsing light, wave-like movement, noise, and flashes.


### Dimensions And Structure

- Full version: six Light Pillars
- Aluminium frame: 45 x 45 cm, heights: 190, 150, 100 cm.
- Aluminium profiles: 20 x 20 mm square section
- Diffusers: sewn white projection-fabric covers
- Each pillar contains one compact loudspeaker and one upward-facing DMX LED PAR

### Provided By Artist

- Aluminium structures for the Light Pillars
- Sewn white fabric diffusers

### Required From Venue

- Six compact loudspeakers or active monitors (e.g. Genelec 8030)
- Six RGBA LED PAR lights for the full version, approx. 60 W or comparable (e.g. Cameo TS 60W)
- DMX / Art-Net interface
- XLR audio cables from each speaker position to the sound system
- DMX cables for daisy-chained LED control
- Power distribution for speakers and LED fixtures
- Materials for floor mounting (lights, speakers) - wooden plates, screws etc.
- Local assistance for assembly and cabling

Cable lengths depend on the final layout and should be calculated during production planning.

{{PAGEBREAK}}

## Module 3: Allocate Station

The Allocate Station adds a second mode of visitor interaction. Visitors draw red lines on paper with a permanent marker; the system detects new marks from below and uses them to assign recorded shadows to available memory slots.


{{FIGURE:redstation}}

### Function

- Allows visitors to assign recorded shadows through red-line drawing.
- Detects newly drawn red marks with an under-camera OpenCV setup.
- Sends allocation events to the main system.
- Joins the wider system state through internal light behavior.

### Dimensions And Structure

- Pedestal structure with a drawing surface
- Thick acrylic glass and removable frame cover for holding the paper
- Dimensions: approx. 30 x 30 x 110 cm
- Hollow internal space for a small computer, camera, and light source
- Top opening for the acrylic glass / drawing surface
- Lower access opening for computer, cables, and maintenance
- Internal LED layer for stable recognition light and system-state behavior

### Provided By Artist

- Acrylic glass, 30 x 30 cm
- White acrylic frame cover
- Wide-angle USB camera, Intel RealSense D435
- ESP32-controlled internal illumination with white LED strip
- Paper / marker configuration
- OpenCV computer, Intel NUC

### Required From Venue

- Local production of pedestal or comparable station structure
- Stable power connection
- Safe cable routing to the control system
- Access for calibration and maintenance
- Local assistance for positioning and cable management

{{FIGURE:pedestal}}


{{PAGEBREAK}}

## Control / Computer System

The installation runs through a local network of computers. The system separates visual capture, sound playback / recording, and Allocate Station recognition in order to keep the installation stable during operation.


### System Roles

- Main computer: depth-camera capture, point-cloud display, shadow database, slot database, Orchestrator, and system states
- Sound computer: recording, playback of sound fragments, and multi-channel sound distribution
- Allocate Station computer: under-camera capture and OpenCV recognition of red marks
- Local network: communication between computers, Art-Net / DMX control, and system-state synchronization


### Provided By Artist

- Configured sound computer
- Configured Allocate Station computer, Intel NUC
- Router and local network equipment
- TouchDesigner patches, database logic, Orchestrator, and system software
- Selected control electronics and ESP32 devices

### Required From Venue

- One powerful computer for the main system, if not provided by the artist
- Recommended class: modern i7-class CPU and RTX 3080-class GPU or comparable
- Two setup monitors (at least 19", FHD)
- Stable LAN cabling between the control area, cube, sound system, and Allocate Station
- Internet connection
- Network compatibility for Art-Net / DMX control
- Stable power distribution for computers, projectors, speakers, LEDs, and local devices
- Control area should be placed within approx. 10 m of the Collection Chamber because of depth-camera signal constraints



## Sound System

The installation uses a ten-channel sound system, distributed in space.

### Structure
- Four channels inside the Collection Chamber
- Six channels in the Light Pillars
- Two contact microphones on the metal plate for recording and live monitoring
- Sound computer for recording, playback, and distribution of sound fragments
- Multi-channel audio routing depends on the final venue setup

### Provided By Artist

- Configured sound computer
- Behringer UMC1820 audio interface for contact microphone recording
- Zoom H4n Pro for direct microphone connection
- Contact microphones for the resonating metal plate

### Required From Venue

- Ten compact loudspeakers for the full installation, maximum 4 kg each where mounted to the chamber structure, e.g. Genelec 8030
- XLR audio cables from all speaker positions to the sound system
- Stable power distribution for all active speakers
- Safe cable routing and clear labeling of all speaker channels


## Text / Orientation Layer

The installation includes a set of perforated text signs placed on microphone stands. They provide short textual and navigational cues inside the darkened space and connect visitor movement to the system logic of collection, allocation, overload, and release.

### Function
- Provides short textual cues for orientation within the installation.
- Introduces key operational words of the system, such as collect, allocate, overload, and flush.
- Adds a static textual layer that connects the visitor experience to the work's logic of accumulation, redistribution, pressure, and release.

### Dimensions And Structure
- Set of laser-perforated text cards - sheets of Finn paper (A4)
- Mounted on microphone stands with clamps
- Number of signs depends on the final layout
- Positioned near relevant modules without blocking visitor circulation

### Provided By Artist
- Perforated text cards / plaques
- Text content and placement concept

### Required From Venue
- Matching microphone stands, one per sign
- Suitable clamps / holders for mounting the signs
- Local assistance for positioning and safe placement

## Interaction And Visitor Flow

Visitors can move freely around the installation and enter the Collection Chamber. Inside the chamber, their body is captured as a live point cloud. When they step onto the resonating metal plate, short fragments of their movement and contact sound are recorded and stored as a new shadow.

The recorded traces return through projection, spatial sound, and the Light Pillars. Visitors may also use the Allocate Station to draw red lines, which assign stored shadows to available memory slots. The installation can be experienced individually or by small groups; the number of visitors inside the chamber should remain limited to avoid crowding and unsafe movement in the darkened space.

{{FIGURE:flush}}

## Safety

- All cables must be taped down, covered, or routed outside visitor paths.
- Projectors, speakers, lights, stands, and the Collection Chamber structure must be securely fixed.
- The resonating metal plate must be stable, walkable, and clearly integrated into the visitor path.
- Visitor access inside the Collection Chamber should be limited to small groups.
- The Allocate Station and text signs must be stable and positioned outside narrow circulation paths.
- A low-level orientation light or visible exit guidance is recommended.
- Venue staff or a mediator should periodically supervise the installation, especially during busy periods.
- A clearly accessible switch or procedure for quickly restoring general room light is recommended.
- Visitors should be informed that movement and sound inside the chamber may be recorded temporarily as part of the installation.

## Transport

The installation contains several long aluminium profile elements and requires coordinated transport planning with the venue / festival. The longest packed elements are approx. 150-155 cm, which is longer than a standard Euro pallet footprint. Final packing and shipment should therefore be discussed in advance with the organizer or freight provider.

### Expected Packing
- Approx. 5 long transport bags with aluminium profiles, approx. 150-155 cm length
- Approx. 16 kg per profile bag
- Approx. 3 Euroboxes with lids, approx. 60 x 40 x 40 cm each
- Euroboxes include screens, mounting hardware, cameras, computers, electronics, smaller cables, and control components
- Additional small protective packaging may be required for fragile electronic parts, acrylic elements, cameras, and microphones

### Transport Notes
- Long profile bags should be handled as oversized / long items or packed in a suitable custom crate.
- Standard Euro pallet shipping may not be sufficient for the full installation because the longest elements exceed the pallet length.
- Final packing list, weights, and shipment method should be confirmed after the final exhibition layout and equipment split are agreed.
- Transport costs and insurance should be covered by the organizer unless agreed otherwise.

## Setup / Deinstallation

The installation requires 2-3 working days for setup, calibration, and testing, depending on venue readiness and the final layout. The recommended installation team is the artist plus two local assistants. Approx. 40-45 person-hours should be planned for physical assembly, cabling, technical setup, and calibration.

### Required Venue Preparation Before Setup
- Room blackout / darkening completed before technical setup begins
- Power distribution points prepared according to the agreed layout
- Projector mounts, stands, or rigging points available on site
- Loudspeakers, LED fixtures, microphone stands, clamps, and local equipment available on site
- Clear access to the installation space for long profile bags and Euroboxes
- Basic floor plan / layout agreed before arrival
- Allocate Station pedestal / body fabricated before artist arrival

### Setup Tasks
- Assembly of the Collection Chamber aluminium structure
- Mounting and tensioning of projection screens
- Positioning of projectors, Light Pillars, Allocate Station, text signs, loudspeakers, and LED fixtures
- Installation of depth cameras, contact microphones, computers, network, audio, DMX / Art-Net, and control devices
- Cable routing, labeling, and safety protection
- Projection mapping, camera calibration, sound routing, DMX addressing, and system-state testing
- Final visitor-flow and safety check with the venue team

### Required From Venue During Setup
- Two local assistants for assembly and cable management
- Two ladders for chamber assembly and screen mounting
- Access to venue technician / electrician during power and rigging setup
- Access to sound / lighting technician if venue equipment is used

## Daily Operation

- Daily startup and shutdown procedures should be agreed after the final configuration.
- Computers, projectors, sound system, DMX fixtures, and network devices must be powered in a stable sequence.
- A short visual and audio check should be performed before opening.
- Depth-camera capture, sound playback, Light Pillars, and Allocate Station recognition should be checked daily.
- The resonating metal plate and Allocate Station surface should be checked for stability and visitor-related wear.
- The installation should not be treated as fully unattended during long exhibition periods.

## Maintenance / Long-Term Exhibition Note

- The installation contains projection, depth-camera, audio, DMX, network, and physical interaction components.
- Longer exhibitions require periodic technical inspection.
- Local troubleshooting responsibilities, remote support, service conditions, and possible travel costs should be agreed in advance.
- Local production or adaptation costs may be required for the metal plate, Allocate Station pedestal, projector rigging, cable management, and venue-specific configurations.
- Spare parts or backup components may be required depending on the exhibition duration and final equipment setup.


### Insurance Value

Insurance value depends on the final version and should be confirmed after configuration. The following preliminary estimate refers to artist-provided components only:

- Aluminium structures and projection surfaces: 2000 EUR
- Depth cameras and control electronics: 3000 EUR
- Artist-provided computer equipment: 3000 EUR
- Contact microphones and audio interface: 1000 EUR
- Light Pillar structures and fabric diffusers: 1000 EUR
- Allocate Station components: 1000 EUR
- Perforated text signs and mounting-related parts: 500 EUR
- Network and control equipment: 1000 EUR
- Transport packaging: 800 EUR

Preliminary total artist-provided insurance value: approx. 13,300 EUR

