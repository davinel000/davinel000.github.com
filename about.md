---
layout: post
title: about me
image: site.imagefolder/personal/main.jpg"
description: whoami 
nav-menu: true
show_tile: true
position: 1
---

Hi! My name is {{site.title}}, I am {{site.description}}

{% for fact in site.data.portfolio.about_me %}
{{fact}}
{% endfor %}

Feel free to contact me by [email](mailto:davinel000@gmail.com)