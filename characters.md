---
title: characters
layout: character
description: 'stories of characters described in MDC. Posthuman companion'
image: assets/images/00083.jpg
nav-menu: true
show_tile: true
---

<!-- Main -->
<div id="main">


{% for character in site.data.MDC-22.subjects %}


<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h2>{{character.diagnosis.code}} {{character.diagnosis.name}}</h2>
			<h4>{{character.diagnosis.description}}</h4>
		</header>
		<h5>Description</h5>
		{{character.diagnosis.long}} </p>
<p>
		<h5>Scenario</h5>
		{{character.diagnosis.scenario}}
		</p>
	</div>
</section>

<!-- Two -->
<section id="two" class="spotlights">
	<section>
		<a href="generic.html" class="image">
			<img src="{{ site.data.MDC-22.network-folder }}{{character.image}}" alt="" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{character.name}}</h3>
				</header>
				<p>{{character.presentation}}</p>
				<!-- <ul class="actions">
					<li><a href="generic.html" class="button">Learn more</a></li>
				</ul> -->
			</div>
		</div>
	</section>
</section>

{% endfor %}

</div>
