---
layout: project_for_catalogue
title: In the Style of
year: 2022
description: An interactive series of AI-generated graphic pieces exploring challenges of critical political artistic expression under war and state censorship conditions
category: installation
format: Interactive multimedia installation utilizing canvas and projection mapping.
id: 002
nav-menu: true
show_tile: true
position: 5
image:  assets/images/portfolio/in_the_style_of/main.png
---

## Idea

"In the Style of" is an interactive AI-generated art installation that uses graphic pieces to delve into the complexities of expressing political dissent in times of war and state censorship. The artwork, reflecting the apprehensions of artists linked to authoritarian states, explores themes like police brutality, propaganda, surveillance, and warfare. 

Using body tracking, canvas and projection mapping, it brings to light generative metaphors and interpretations of ongoing events. The authorship is purposefully indistinct, straddling between the chosen technique, the prompts, the stylization of other artists' works, and AI outputs. The pieces draw from the work of Felix Nussbaum, who painted under political repression, using early generative models of Disco Diffusion for obtaining specific metaphorical depth.

{% include youtube.html id="kNpG_OWO6x0" %}
*Author commentary*

## Presentation

Initially showcased at Hochschultage 2022 (Hochschule für Künste Bremen, July 2-3, 2022) as a two-layered installation, "In the Style of" was later adapted for the Brixen Water Light Lab (May 3-21, 2023, Brixen, II) in the medieval Kloster Neustift's reading room. [Project Documentation on SPILL Young Masters](https://spill.hfk-bremen.de/slava-romanov/)

From January 26 to February 11, 2024, the arwork was hosted by the [LUNA Young Masters Festival](https://mediaartfriesland.nl/archief-en/luna-2024-en/2024-ym-romanov-slava-en/) (Leeuwarden, NL) 

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/in_the_style_of/gallery/" %}
Photos: Jimi Liu, Klaas Klee, Studio Bettina Pelz, Jennifer Braun, Slava Romanov

## Links
- [How Many Different Things a Screen Can Be? Publication at Ars Photonica](https://arsphotonica.net/martina-stella-designing-an-exhibition-as-a-laboratory/)
- [SPILL Young Masters Project Description](https://spill.hfk-bremen.de/slava-romanov/)
- [Video Presentation of Original Installation](https://youtu.be/Waa8pnL6WdM)




## Technical realization
The artwork utilizes:
- VQGAN+CLIP models presented within the DiscoDiffusion (ver.1.4) generative framework used for generating multi-iterational 3d-Textures
- Kinect V2 for tracking position of the visitors
- Empty canvases as a projection mapping medium
- 4K/FHD short-throw projector
- TouchDesigner as a hub for assembling the artwork logic

## Authors

- Slava Romanov: Concept, design, and execution
