---
layout: post
title: about me
image: 
description: whoami 
nav-menu: true
show_tile: true
position: 1
---

<section id="two" class="spotlights">
	<section>
		<img src="{% link assets/images/portrait.png  %}" style="max-width:400px;  object-fit:cover;" alt="hi, it's me" data-position="center center" />
		
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>hi, i'm slava romanov and i'm {{site.description}}</h3>
				</header>
				{% for item in site.data.portfolio.about_me %}
               
                <p>{{item}}</p>

{% endfor %}
				<ul class="actions">
					<li><a href="mailto:{{site.email}}" class="button">write me</a></li>
				</ul>
			</div>
		</div>
	</section>
</section>

