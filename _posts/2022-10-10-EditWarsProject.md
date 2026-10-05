---
layout: project_for_catalogue
title: Edit Wars Project
year: 2022
description: Research-driven data art project examining Russian propaganda narratives through computational analysis, visualization, sonification, and interactive installation
category: transdisciplinary
permalink: /:year/:slug

tags: [propaganda, ethics, installation, sonification, datajournalism, stablediffusion, touchdesigner, teamwork]
id: 004
nav-menu: true
show_tile: true
position: 6
image: /assets/images/portfolio/edit_wars/main.JPG
---

## Idea

"Edit Wars" is a research-driven art project examining how recurring propaganda narratives developed across Russian-language media during the first months of Russia's full-scale invasion of Ukraine. The project combines computational analysis of more than 250,000 news headlines with qualitative interpretation, then translates the resulting patterns into interactive visualizations, sonification, and spatial installation.

The project connects data journalism, artistic research, and media installation. Rather than treating visualization as a final illustration of the research, we used the analytical process itself as material for public-facing formats: the [Edit Wars web platform](https://editwars.org/), the spatial installation "Propaganda Narrative Soundscapes," and a later touchscreen dashboard.

{% include youtube.html id="jgqc19pRmc8" %}

## Research Methodology

The research corpus covers selected Russian-language digital media between January and July 2022. More than 250,000 headlines were collected and processed using GDELT datasets and Google BigQuery. BERTopic was used to identify recurring topic clusters and trace how their prominence changed over time. spaCy and custom word-combination tables supported closer examination of recurring language, while Tableau was used for exploratory and temporal visualization.

Computational results were then reviewed qualitatively and interpreted as broader propaganda narratives. This distinction was important to the project: topic modelling identified statistical patterns in the corpus, while the interpretation of those patterns remained a research task carried out by the team. The resulting methodology focused on recurring themes, vocabulary, and temporal dynamics in the selected media corpus rather than treating automated clustering as evidence of intent or audience effect.

The [research methodology](https://docs.google.com/document/d/1C-l0Eehe_5LkzkVgGjkDR78s6Fi4z-BOFgKY5JUEinQ/edit) was published openly. In 2023, elements of the approach were [reused by journalists](https://www.szabadeuropa.hu/a/magyar-orosz-putyin-kormanypropaganda-cimek/32407272.html) investigating Russian propaganda narratives in Hungary.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/edit_wars/analytics/" %}


## Web Platform: [editwars.org](https://editwars.org/)

Editwars.org is the research interface of the project. It presents selected narratives through interactive visualizations, timelines, and long-form explanations, allowing visitors to inspect recurring themes, language, and shifts across the corpus. The platform documents the analytical layer of the project and connects it to the artistic formats developed from the same research.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/edit_wars/website/" %}


## Interactive Installation: “Propaganda Narrative Soundscapes”

"Propaganda Narrative Soundscapes" translates temporal patterns and narrative data into audiovisual sequences. The installation was structured as two contrasting environments: an "Outside" space exposing analytical traces and changes over time, and an "Inside" room staging a compressed, repetitive stream of news in a confined spatial setting.

The installation uses sound, moving image, and spatial composition to make the rhythm and accumulation of media narratives perceptible without presenting the artistic translation as a substitute for the underlying research.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/edit_wars/exhibition/" %}
*Photos: Slava Romanov, Antonio Hofmeister Ribeiro, TAZ.de*

## Interactive Installation: “Propaganda Narrative Soundscapes: Dashboard”

The Dashboard adapts the project into a portable, research-oriented installation. A touchscreen interface lets visitors navigate the analysed narratives by time and topic, while a second screen displays live feeds from selected propaganda websites. Three seven-minute sonified sequences translate temporal narrative patterns into sound and moving image.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/edit_wars/hdw/" %}
*Photos: Slava Romanov*


### Touch interface demo
{% include youtube.html id="b8eU9eQYDXc"%}

## Presentation

"Edit Wars" has been presented at multiple exhibitions:

- ["Propaganda Narrative Soundscapes"](https://www.hfk-bremen.de/de/neuigkeiten/kooperation-des-studiengangs-digitale-medien-der-hfk-bremen-mit-edit-wars/533), Tor40, Bremen (2-5.02.2023)
- ["Cases of Spaces"](https://www.top-ev.de/other/cases-of-spaces/), TOP, Berlin (15-16.02.2023)
- [Iterations](https://www.hfk-bremen.de/en/events/iterations-ausstellung-digitale-medien-master/5573), HfK Bremen Master Project Exhibition, Bremen (05-11.05.2023)
- [Temporary Spaces class exhibition](https://vimeo.com/857817288), Hochschultage 2023, HfK Bremen (8-9.07.2023)
- [In den Startlöchern](https://www.hausderwissenschaft.de/In-den-Startloechern.html) at Haus der Wissenschaft, Bremen (09.11.2023-27.02.2024)
- [International Symposium "Sybioses: Life in Future Imperfect"](https://www.nsuweb.org/study-circles/circle-2-cybioses-life-in-the-future-imperfect/), organized by Nordic Summer University, Vilnius (06-09.03.2024)
- [DiscussDataLab: Challenges of Data Collection, Re-use, and Analysis](https://discuss-data.net/cs/eescca/section/blog/discussdatalab-workshop-report/), Research Centre for East European Studies (FSO), University of Bremen — presentation "Deconstructing Russian propaganda" and interactive dashboard showcase (25-27.08.2025)

The project was launched as the Master project within the HfK Digital Media program (Winter Semester 2022-2023), with support from professors including Dennis Paul, Petra Klusmeyer, Andrea Sick, Peter Von Maydell, and Ralf Bäcker.

The project was honored as the winner in the Artists for Media track of the Mediafutures program at DemoDays 2022 in Paris.


## Project Team

The Edit Wars team consists of:
- Alberto Harres, Artist and Developer
- Antonio Hofmeister Ribeiro, Artist and Developer
- Lucy Saribegyan, Artist and Designer
- Maiia Guseva, Data Analyst
- Slava Romanov, Media Artist and Team Lead — research methodology, visualization, and sonification
- Sofya Ozga, Artist and Researcher

## Tools used
- GDELT datasets and Google BigQuery for corpus extraction
- BERTopic and spaCy in Google Colab for topic modelling, clustering, and word-combination analysis
- Tableau Public for exploratory research visualization and regex-based filtering
- 3d-force-graph for rendering the word-connection graph
- Netlify for hosting the project website
- Derivative TouchDesigner for the "Outer" audiovisual installation and sonification workflow
- Unity for the "Inner" audiovisual installation

## Funding

Endorsed by the European Union’s Horizon 2020 research and innovation programme (MediaFutures «‎Artist for media»‎) under grant agreement No. 951962.

## Media Publications

Covered by [TAZ](https://taz.de/Kunstprojekt-Edit-Wars-in-Bremen/!5909071/) and [Buten un Binnen](https://www.butenunbinnen.de/videos/ausstellung-gegen-propaganda-kunst-darstellung-100.html).

## Links

- [Project Website](https://editwars.org)
- [Exhibition Documentation Teaser](https://youtu.be/jgqc19pRmc8)
- [Edit Wars on Mediafutures](https://mediafutures.eu/2nd-cohort-projects/edit-wars/#:~:text=Edit%20Wars%20is%20an%20interactive,of%20mass%20consciousness%20in%20Russia.)
- [Instagram Account](https://www.instagram.com/editwarsproject/)
- [Project Presentation](https://www.youtube.com/watch?v=27Ikwe8kKPo)
- [Outer Installation Video](https://youtu.be/0QWKI2uWGDU)
- [Early Setup Model](https://youtu.be/CHAT6FcR9T8)

## Project Timeline

- Nov 2021-Jan 2022: Conceptualization and Mediafutures program application
- Feb-Apr 2022: Mediafutures Program interviews and team adjustments
- Apr 2022: Mediafutures program commencement
- May 2022: Methodology development
- Jun 2022: Expert consultations and data requests
- Jul 2022: Team Hackathon and journalist consultations
- Aug 2022: Website design and structure finalization
- Sep-Oct 2022: Prototype creation and website updates
- Nov 2022-Jan 2023: Website updates and installation preparation
- Feb 2023: Instagram launch and "Propaganda narrative soundscapes" exhibition
- Feb-Apr 2023: Feedback collection, funding search, and grant applications
- May 2023: "Propaganda Narrative Soundscapes: Outer" presentation
- Jun 2023: Mediafutures DemoDays 2023 keynote speech
- Sep-Oct 2023: Development of the Dashboard interface
- Nov 2023 - Feb 2024: Exhibition in Bremen
- Mar 2024: Exhibition in Vilnius at the winter session of Cybioses Circle (Nordic Summer University)
- Aug 2024: Presentation at the summer session of Cybioses Circle (NSU), Løgumkloster (DK)
- Aug 2025: [DiscussDataLab](https://discuss-data.net/cs/eescca/section/blog/discussdatalab-workshop-report/) presentation and interactive dashboard showcase at the University of Bremen
