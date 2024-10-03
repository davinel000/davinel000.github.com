---
layout: project_for_catalogue
title: The Forgetting Machine
year: 2023
date: 2023-09-05
category: interactive installation
tags:
  - AI
  - StableDiffusion
  - old_media
id: 3
description: an experimental artistic study interpreting the principles of how our memory operates, distorts and reimagines the events taking place
nav-menu: true
show_tile: true
position: 3
image: assets/images/portfolio/forgetting_machine/Slide4.jpg
---
## Idea
The Forgetting Machine is an experimental artistic study that interprets the principles of how our memory operates, distorts, and reimagines events. It features a self-driving agent that combines both old and new visual projection mediums. This agent engages in an interplay of feedback loops, machine dialogues, generative captions, and overlays imagery onto 1970s-1980s discarded diaslides of an unidentified Bremen family. The title of the artwork is derived from the eponymous book by neuroscientist Rodrigo Quian Quiroga, who studies memory dynamics and narratives.

## Video introduction (part of the installation)
{% include youtube.html id="dukXhJ3mwgw" %}

## Context
Throughout life, individuals accumulate many visually significant cues in various forms: fridge magnets, postcards, and both analogue and digital photos. These usually relate solely to personal or group experiences. The author found it intriguing to explore mediums and memories unfamiliar to outsiders.

Old diaslides were discovered in a "zu Verschenken" booth in one of Bremen's numerous neighborhoods. Plastic cartridges held dozens of slides containing discarded personal memories, all neatly stacked in shoeboxes.

![Old diaslides](/assets/images/portfolio/forgetting_machine/Slide4.jpg)
*photo: Slava Romanov*

Some slides were distorted or underexposed; others seemed accidental, yet all maintained their imperfections, authenticity, and uniqueness. These slides once captured focal points of someone's attention and were imprinted in their memory through the click of an analogue camera.

They now serve to represent the collective memory of a family that likely lived in Bremen during the 1970s-1980s but now remains anonymous. This generalizes the common experience of being captured in memory media and then being disposed of and forgotten.

![Some slides content](/assets/images/portfolio/forgetting_machine/Collage slides compressed.jpg)
*photos on the slides: unknown*

## Mechanics
The Forgetting Machine is an interactive installation that incorporates AI and expanded animation techniques to artistically interpret various human memory processes. These include Encoding, Short-term memorization, Chunking, Long-term storage, Consolidation, Associations, Retrieval, Reconsolidation, Transience, Distortion, Decay, Forgetting, and Dissolution. The installation operates in real-time and dynamically changes decision patterns for switching diaslides and visualizing as well as deleting forgotten memories.

{% include youtube.html id="P5Hz4IG6EnE" %}


## Technical side

The artwork utilizes: 
* A Kodak Caroussel 2030 diaprojector, extended by an Arduino microcontroller for digital relay remote control (previous/next slide, dark screen)
- A camera for capturing imagery in real-time
- A beamer for overlaying generated or captured imagery
* A CLIP Interrogation [module](https://github.com/pharmapsychotic/clip-interrogator-ext) for generating captions
* Stable Diffusion [web-UI by Automatic1111 web API](https://github.com/AUTOMATIC1111/stable-diffusion-webui), and an [SD_API module by DotSimulate](https://www.patreon.com/posts/touchdesigner-76982551) for generating imagery based on a source image and a caption
* Derivative TouchDesigner as an integration hub for generating and mapping the visual output

![Equipment](/assets/images/portfolio/forgetting_machine/TechCollage.jpg)
*photos: Slava Romanov*

## Presentation
The documentation of the artwork was presented on September 5, 2023, at Open Space Domshof Bremen. 
The work was exhibited November 20-27, 2023, at UMZU Bremen.

![Presentation photo](/assets/images/portfolio/forgetting_machine/photo David Bartusch -Open-Space-Expanded-Animation.jpg)
*photo: David Bartusch*

## Bibliography
1. Quian Quiroga, R. (2017). The Forgetting Machine: Memory, Perception, and the "Jennifer Aniston Neuron"
2. Maguire, Eleanor. [“The Neuroscience of Memory.” YouTube, uploaded by The Royal Institution, 2016](https://www.youtube.com/watch?v=gdzmNwTLakg)
3. Quiroga, Rodrigo Quian. [“Memory and Perception (BS 141).” Brain Science Podcast with Ginger Campbell, MD, 2018,](https://brainsciencepodcast.com/bsp/2018/141-quiroga-memory) 
4. Genova, Lisa and Lisa Monteggia. [“How the Brain Remembers.” YouTube, uploaded by Vanderbilt University, 2021](https://www.youtube.com/watch?v=FhflBSfCrCM) 
5. Genova, Lisa. [“How Your Memory Works – and Why Forgetting Is Totally OK.” YouTube, uploaded by TED, 2021](https://www.youtube.com/watch?v=Irx0tC92fdE)
6. Storage, Daniel. [“Memory Errors, Forgetting, and Learning” YouTube, uploaded by Daniel Storage, 2020](https://www.youtube.com/watch?v=p9Fx5DcnVwk)
7. Miller, Brooke. [“Memory Errors Psychology”. YouTube, uploaded by Course Hero, 2019](https://www.youtube.com/watch?v=p9Fx5DcnVwk)
8. Atchison, Kristin. [“Introduction to Psychology:6.3 - Memory- Forgetting” YouTube, uploaded by Dr. Kristin Atchison, 2019](https://www.youtube.com/watch?v=p9Fx5DcnVwk)
9. Yale, Kathleen et al. [“Remembering and Forgetting: Crash Course Psychology #14.” YouTube, uploaded by CrashCourse, 2014](https://www.youtube.com/watch?v=HVWbrNls-Kw)
10. Morris, Richard G.M. [“Forgetting is a part of memory.” YouTube, uploaded by TEDx Talks, 2017](https://www.youtube.com/watch?v=vNyZmSg92HI)
11. Kirsanov, Artem. [“Building Blocks of Memory in the Brain.” YouTube, uploaded by Artem Kirsanov, 2023](https://www.youtube.com/watch?v=X5trRLX7PQY)


## Authors
- Slava Romanov: design, implementation