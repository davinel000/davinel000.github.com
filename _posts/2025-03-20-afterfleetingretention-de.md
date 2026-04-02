---
layout: project_for_catalogue
title: after (fleeting retention)
year: 2025
date: 2025-03-20
category: installation
permalink: "/2025/afterfleetingretention-de/"

tags:
  - Nachbild
  - Erinnerung
  - Wahrnehmung
  - Negative
  - alte Medien
  - Mixed Media

id: 6
lang: de
alternate_label: ENGLISH VERSION
alternate_url: "/2025/afterfleetingretention"
related_projects_eyebrow: Weitere Projekte
related_projects_heading: Vielleicht auch interessant
related_projects:
  - title: UNGROUND
    url: "/2025/unground-de/"
    description: Kinetische Typografie-Installation über fragmentierte Sinnsuche im Nachrichtenstrom.
  - title: Šūtum
    url: "/2024/shootoom-de"
    description: Ephemere Laserschrift auf Stein als Reflexion über Gerechtigkeit und Vergänglichkeit.

description: Immersive audiovisuelle Installation über die Flüchtigkeit von Erinnerung und Nachbildern
nav-menu: false
show_tile: false
position: 3
image: /assets/images/portfolio/after/main.jpg
---

## Idee

**after (fleeting retention)** ist eine immersive audiovisuelle Installation, die die fragile und flüchtige Natur von Erinnerung anhand von Nachbildern untersucht. In einem abgedunkelten Raum werden fotografische Archivnegative aus den 1950er Jahren bis in die 2000er Jahre durch intensive LED-Blitze eines modifizierten Kodak-Carousel-Projektors für kurze Momente sichtbar gemacht und mit generativen Klängen synchronisiert. Diese visuellen Eindrücke bleiben für einen Augenblick auf der Netzhaut bestehen und verblassen dann unweigerlich wieder. Gerade dadurch wird die Zerbrechlichkeit von Wahrnehmung und Erinnerung spürbar.

## Videodokumentation
{% include youtube.html id="Nuw8eS_uwYE" %}

Indem die ursprünglichen Erzählungen der Dias bewusst fragmentiert werden, lädt after (fleeting retention) die Besucherinnen und Besucher dazu ein, neue Bedeutungen zusammenzusetzen oder sich ganz dem flüchtigen Moment zu überlassen. Im plötzlichen Aufleuchten eines Blitzes kann man vielleicht eine Familienszene, ein architektonisches Detail, eine Arbeitssituation oder eine Jagdepisode erkennen, doch das Bild löst sich fast sofort wieder in eine nachwirkende Silhouette auf der Netzhaut auf. In diesem ephemeren Kreislauf regt die Installation dazu an, darüber nachzudenken, wie schnell sich visuelle Eindrücke bilden, verzerren und wieder verloren gehen.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/after/content/" %}

*Fotos: Jennifer Braun, Lars Gonikman*

## Kontext

Unter dem Einfluss von Arbeiten wie Kurt Hentschlägers "SUB", das mit stroboskopischem Licht Nachbilder hervorruft, sowie Franz Gertschs großformatigem Fotorealismus, der zugleich dauerhaft und flüchtig wirkende Szenen evoziert, fragt die Arbeit danach, wie vergängliche visuelle Reize in unser Gedächtnis eingehen oder dort verzerrt weiterleben.

Der intensive LED-Blitz erzeugt häufig ein invertiertes Nachbild auf der Netzhaut, sodass das Sehen auch dann noch kurz an einer geisterhaften Form festhält, wenn der Projektor längst wieder dunkel ist. Oft verschmelzen mehrere aufeinanderfolgende Lichtimpulse in der Wahrnehmung und erzeugen so den Eindruck einer partiellen Kontinuität innerhalb einer ansonsten zufälligen Sequenz.

Durch die Dekontextualisierung der Negative, also den Verzicht auf konkrete Daten oder Ortsangaben, stellt die Installation die unmittelbare sensorische Erfahrung über jede klare Erzählung. Jede Person fügt ihre eigene fragmentierte Geschichte zusammen oder bleibt in einem flüchtigen Moment, in dem sich Bedeutung gerade nicht vollständig greifen lässt.

*30-minütiger Ausschnitt aus der Audioarbeit:*

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2072141928&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lrmlhnvgvrma" title="slava romanov" target="_blank" style="color: #cccccc; text-decoration: none;">slava romanov</a> · <a href="https://soundcloud.com/lrmlhnvgvrma/after" title="after (fleeting retention) - 30 min fragment" target="_blank" style="color: #cccccc; text-decoration: none;">after (fleeting retention) - 30 min fragment</a></div>

## Technische Umsetzung

Das Projekt verbindet mehrere Technologien und Materialien:

- **Modifizierter Kodak-Carousel-Projektor**: ausgestattet mit einer sehr hellen LED (~200 W), drahtlos gesteuertem Mikrocontroller für Blitz und Dia-Transport (ESP32-C3 + MOSFET + Relais). Ein Weitwinkelobjektiv ermöglicht eine Projektion vom Boden bis zur Decke mit 81 Archivdias.
- **Negative Bilder**: Archivnegative aus Ost- und Westdeutschland der 1950er Jahre sowie Farbfotos aus dem frühen 2000er-Jahren aus Lüdenscheid, thematisch gruppiert (Verkehr, Kindheit, Gesellschaft, Tiere usw.).
- **Generativer Ambient-Sound**: mit Bespoke Synth auf einem Intel NUC erzeugt und über ein 300-W-Bi-Amp-Stereosystem ausgegeben. Zufällige Klangtrigger im Abstand von 10 bis 40 Sekunden sind mit den Lichtimpulsen abgestimmt, während asynchrone LFO-basierte Muster eine sich kontinuierlich verändernde Klangtextur erzeugen.
- **Installationsaufbau**: ein dunkler Raum mit neutralroter Sicherheitsbeleuchtung in geringer Intensität, um den Kontrast zu maximieren und die Nachbilder zu verstärken.

{% include image-gallery-folder.html imagefolder="/assets/images/portfolio/after/device/" %}
*Fotos: Slava Romanov*

## Präsentation

Die Installation wurde im Rahmen des [**Lichtrouten Festivals**](https://lichtrouten.de/slava-romanov/) in Lüdenscheid (DE) vom **20. bis 29. März 2025** gezeigt. Sie befand sich in einem abgedunkelten Bereich des verlassenen Forum am Sternplatz, einem Ort mit starken generationenübergreifenden Erinnerungsschichten. Die Besucherinnen und Besucher bewegten sich fast im Dunkeln und wurden nur von sporadischen Lichtblitzen und geschichteten Klangsignalen geleitet. So entstand eine Situation gesteigerter körperlicher Präsenz, die die Spannung zwischen Intimität und Unsicherheit unmittelbar erfahrbar machte.

## Links

- [Ausstellungsprofil auf der Website des Lichtrouten Festivals](https://lichtrouten.de/slava-romanov/)

## Autor

- **Slava Romanov**: Konzept, Design und Umsetzung
