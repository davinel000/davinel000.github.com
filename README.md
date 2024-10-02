# A portfolio website

The website project for the artist's portfolio was implemented as part of the Mappe course by Prof. Dennis Paul during the winter semester of 2021-22.

## Modular structure
The basis for the generation of the portfolio is a YAML file containing structured information about the works of the author. In the course of testing, the author has turned to tabular, XML, and JSON formats, but has chosen a format with a branching structure and human-readable syntax. The original idea - to generate pages using a plugin ([Datapage Generator](https://github.com/avillafiorita/jekyll-datapage_gen/issues) or [Pagemaster](https://github.com/mnyrop/pagemaster)) was rejected because Github Pages does not allow to deplatform the site with most plugins.

The potfolio file also contains a database of authors and team members, which project descriptions access through shortcuts. In the future, it may be possible to add a toolbase for direct links and create a page with a list of tools.

Data is embedded in elements based on the use of Liquid tags in cyclically called project layouts. The documentation is supplemented with illustrations of the process.

## Projects structure
Projects are categorized and a table of contents has been added to the overall portfolio. Future plans are to add filter buttons. The [Isotope](https://isotope.metafizzy.co/) module was tested.

## Illustrations embedding
Illustrations are saved in the assets folder, each project has its own folder. The image for the project cover is taken from the root of the folder. In the future, it is planned to use the PCloud API for remote storage of illustrations. The grouped illustrations of the project documentation are lined up in a grid and complemented by the plugin-free [Image Gallery script](https://jekyllcodex.org/without-plugin/image-gallery/) from Jekyll Codex.

## Bugfixes needed:
- [] Hamburger menu - remove or fix content
- [] Fix banner images in project description



## Further developments
- [] Add favicon
- [] Adding actual works to the portfolio
- [] Adding CV's to the site
- [] Adding a system of works filtering
- [] Accompanying the description of current projects with blog entries
- [] Improvement of navigation system
- [] PDF generation based on YAML



# Base
Based on Forty by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		background-size polyfill (github.com/louisremi)
		Misc. Sass functions (@HugoGiraudel)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)
```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).