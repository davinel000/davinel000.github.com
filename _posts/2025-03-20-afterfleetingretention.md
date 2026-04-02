---
layout: project_for_catalogue
title: after (fleeting retention)
year: 2025
date: 2025-03-20
category: installation
permalink: /:year/:slug

tags:
  - afterimage
  - memory
  - perception
  - negatives
  - old media
  - mixed media

id: 6
lang: en
alternate_label: DEUTSCHE VERSION
alternate_url: "/2025/afterfleetingretention-de/"
related_projects_eyebrow: See Also
related_projects_heading: More projects
related_projects:
  - title: UNGROUND
    url: "/2025/unground/"
    description: Kinetic typography installation about fragmented meaning in the news cycle.
  - title: Šūtum
    url: "/2024/shootoom"
    description: Ephemeral laser-written laws on stone, reflecting on justice and transience.

description: Immersive audiovisual experience that highlights the transient nature of memory through afterimages
nav-menu: true
show_tile: true
position: 3
image: /assets/images/portfolio/after/main.jpg
---

## Idea

**after (fleeting retention)** is an immersive audiovisual experience that explores the ephemeral nature of memory through fleeting afterimages. In darkness, archival photographic negatives from the 1950s to the 2000s are briefly illuminated by intense bursts of LED flashes from a modified Kodak Carousel projector, synchronised to generative sounds. These momentary visual imprints linger briefly on the retina and inevitably fade, emphasising the fragility of our perception and memory.

## Video documentation
{% include youtube.html id="Nuw8eS_uwYE" %}

By deliberately fragmenting the original narratives of these slides, after (fleeting retention) invites visitors to piece together new meanings or to surrender to the fleeting moment. In the sudden glow of each flash, one may catch a glimpse of a family scene, an architectural detail, a feat of labour or a hunting expedition, yet the image almost immediately dissolves into a lingering silhouette on the retina. Through this ephemeral cycle, the installation encourages reflection on how quickly we form, distort and lose visual impressions.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/after/content/" %}

*Photos: Jennifer Braun, Lars Gonikman*

## Context

Drawing on influences such as Kurt Hentschläger's "SUB", which uses stroboscopic light to induce afterimages, and Franz Gertsch's large-scale photorealism, which evokes seemingly permanent yet fleeting scenes, this work questions how ephemeral visual inputs become embedded in our memories or distorted by them.

Here, the intense LED flash often produces an inverted afterimage on the retina, so that even after the projector goes dark, one's vision temporarily clings to a ghostly silhouette. In many cases, successive flashes merge in perception, creating partial illusions of continuity in an otherwise random sequence.

By decontextualising these negatives, by removing explicit dates or locations, the installation prioritises direct sensory engagement over narrative: each viewer pieces together a fragmented story of their own, or surrenders to an ephemeral moment in which meaning remains just out of reach.

*Listen to the 30-minute fragment of the audio experience:*

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2072141928&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lrmlhnvgvrma" title="slava romanov" target="_blank" style="color: #cccccc; text-decoration: none;">slava romanov</a> · <a href="https://soundcloud.com/lrmlhnvgvrma/after" title="after (fleeting retention) - 30 min fragment" target="_blank" style="color: #cccccc; text-decoration: none;">after (fleeting retention) - 30 min fragment</a></div>

## Technical Side

The project utilises a combination of technologies and materials:

- **Modified Kodak Carousel projector**: equipped with an ultra-bright LED (~200 W), a wireless microcontroller-controlled flash and slide advance (ESP32-C3 + MOSFET + relay). A wide-angle lens allows floor-to-ceiling projection of 81 archive slides.
- **Negative images**: archival negatives from East and West Germany from the 1950s and colour photos from the early 2000s in Lüdenscheid, grouped thematically (traffic, childhood, society, animals, etc.).
- **Generative ambient sound**: created in Bespoke Synth on an Intel NUC and played through a 300 W bi-amp stereo system. Random sound triggers every 10 to 40 seconds align with bursts of light, while asynchronous LFO-based patterns create a constantly evolving audio texture.
- **Installation setup**: a dark environment with low-light neutral red safety navigation, designed to maximise contrast and intensify afterimages.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/after/device/" %}
*Photos: Slava Romanov*

## Presentation

Exhibited during the [**Lichtrouten Festival**](https://lichtrouten.de/slava-romanov/) in Lüdenscheid (DE), **20-29 March 2025**, the installation occupied a darkened space in the abandoned Forum am Sternplatz, a place rich in intergenerational memories. Visitors navigated in near darkness, guided only by sporadic bursts of light and layered sound cues. This environment fostered a heightened awareness of bodily presence, echoing the tension between intimacy and uncertainty.

## Links

- [Exhibition profile on the Lichtrouten Festival website](https://lichtrouten.de/slava-romanov/)

## Author

- **Slava Romanov**: Concept, design, and execution
