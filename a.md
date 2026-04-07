---
layout: page
title: Intro
description: about me
permalink: /a/
image: /assets/images/index/1.png
nav-menu: false
---

<!--
Replace links, files, and handles marked with PLACEHOLDER_*.
Replace copy blocks marked with REPLACE_TEXT.
Replace image paths marked with REPLACE_IMAGE.
-->

<div class="networking-page">
  <section class="networking-page__hero" id="top">
    <div class="networking-page__hero-media" aria-hidden="true">
      <!-- REPLACE_IMAGE: choose 3-4 strong stills if you want different hero visuals. -->
      <figure><img src="/assets/images/portfolio/umbra/main.png" alt=""></figure>
      <figure><img src="/assets/images/portfolio/sutum/main.png" alt=""></figure>
      <figure><img src="/assets/images/portfolio/pnctm/main.JPG" alt=""></figure>
    </div>

    <div class="networking-page__inner networking-page__hero-inner">
      <div class="networking-page__hero-copy">
        <h1>Slava Romanov</h1>
        <p class="networking-page__lede">Nice to meet you.</p>
        <!-- REPLACE_TEXT: keep this short and aligned with the site-wide subtitle. -->
        <p class="networking-page__support">I work across real-time media, spatial setups, interaction, and production logic. I’m curious about translating complex data and artistic ideas into experiential systems.</p>

        <div class="networking-page__cta-group">
          <a class="button special" href="#selected-work">Selected work</a>
          <a class="button" href="https://www.instagram.com/PLACEHOLDER_INSTAGRAM/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a class="button" href="PLACEHOLDER_VCARD_LINK">Business card</a>
          <a class="button" href="PLACEHOLDER_CV_PDF">CV / PDF</a>
        </div>

        <ul class="networking-page__tags" aria-label="Focus areas">
          <li>TouchDesigner</li>
          <li>Python</li>
          <li>immersive systems</li>
          <li>project coordination</li>
          <li>depth cameras</li>
          <li>point clouds</li>
          <li>projection mapping</li>
          <li>AI-assisted visuals</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="networking-page__section networking-page__section--airy" id="angles">
    <div class="networking-page__inner">
      <h2>Choose your angle</h2>

      <div class="networking-page__angles">
        <details class="networking-card networking-card--detail">
          <summary>Studios &amp; institutions</summary>
          <div class="networking-card__detail-body">
            <p>I can support multimedia systems, prototyping, integration, and on-site delivery.</p>
            <p>I’m open to studio roles, commissioned work, and long-form collaborations.</p>
            <a href="#direction-systems">See relevant work</a>
          </div>
        </details>

        <details class="networking-card networking-card--detail">
          <summary>Festivals &amp; curators</summary>
          <div class="networking-card__detail-body">
            <p>I develop installation and performative work with a strong technical and spatial backbone.</p>
            <p>I’m open to exhibitions, commissions, and site-responsive contexts.</p>
            <a href="#direction-installations">See relevant work</a>
          </div>
        </details>

        <details class="networking-card networking-card--detail">
          <summary>Artists &amp; collaborators</summary>
          <div class="networking-card__detail-body">
            <p>I like working between concept, visuals, interaction, sensors, and production logic.</p>
            <p>I’m interested in collaborations where technology is part of the artistic language.</p>
            <a href="#direction-performance">See relevant work</a>
          </div>
        </details>
      </div>
    </div>
  </section>

  <section class="networking-page__section networking-page__section--airy" id="selected-work">
    <div class="networking-page__inner">
      <h2>Selected work</h2>

      <article class="project-strip project-strip--visual" id="direction-systems">
        <figure class="project-strip__image project-strip__image--placeholder project-strip__image--wide">
          <!-- REPLACE_IMAGE: use a strong still or sequence for I See Time. -->
          <div class="project-strip__fallback">
            <span>REPLACE_IMAGE</span>
            <strong>I See Time</strong>
          </div>
        </figure>
        <div class="project-strip__copy">
          <p class="project-strip__label">Immersive systems for clients and institutions</p>
          <h3>I See Time</h3>
          <!-- REPLACE_TEXT: replace with the final project sentence when ready. -->
          <p class="project-strip__summary">Real-time system combining a physical clock, live API data, and customized multimedia content for a permanent installation in Kaohsiung, Taiwan.</p>
          <ul class="project-strip__tags">
            <li>real-time systems</li>
            <li>API data</li>
            <li>control logic</li>
            <li>integration</li>
          </ul>
          <div class="project-strip__links">
            <a href="PLACEHOLDER_I_SEE_TIME_LINK">Full project</a>
            <a href="PLACEHOLDER_DIGITAL_SHADOW_LINK">In the digital shadow</a>
            <a href="PLACEHOLDER_GENIUS_LOCI_LINK">Genius Loci</a>
          </div>
        </div>
      </article>

      <article class="project-strip project-strip--visual" id="direction-installations">
        <figure class="project-strip__image project-strip__image--wide">
          <img src="/assets/images/portfolio/sutum/main.png" alt="Šūtum installation">
        </figure>
        <div class="project-strip__copy">
          <p class="project-strip__label">Physical + digital installations</p>
          <h3>Šūtum</h3>
          <p class="project-strip__summary">Installation work where light, physical material, historical references, and digital control are composed as one exhibition-ready experience.</p>
          <ul class="project-strip__tags">
            <li>installation</li>
            <li>light</li>
            <li>physical + digital</li>
            <li>exhibition setup</li>
          </ul>
          <div class="project-strip__links">
            <a href="/2024/shootoom.html">Full project</a>
            <a href="/2024/pnctm.html">PNCTM</a>
          </div>
        </div>
      </article>

      <article class="project-strip project-strip--visual" id="direction-performance">
        <figure class="project-strip__image project-strip__image--wide">
          <img src="/assets/images/portfolio/umbra/main.png" alt="umbra performance">
        </figure>
        <div class="project-strip__copy">
          <p class="project-strip__label">AV performance and performative systems</p>
          <h3>umbra</h3>
          <p class="project-strip__summary">Live visual system for performance using depth cameras, point clouds, projection logic, and AI-assisted image workflows.</p>
          <ul class="project-strip__tags">
            <li>live visuals</li>
            <li>point clouds</li>
            <li>performance systems</li>
            <li>technical production</li>
          </ul>
          <div class="project-strip__links">
            <a href="/2025/umbra.html">Full project</a>
            <a href="/2022/editwarsproject.html">Edit Wars</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="networking-page__section networking-page__section--airy" id="useful">
    <div class="networking-page__inner">
      <h2>Where I’m most useful</h2>

      <div class="networking-page__grid networking-page__grid--compact">
        <article class="networking-tile"><h3>multimedia systems &amp; interfaces</h3></article>
        <article class="networking-tile"><h3>real-time prototyping and integration</h3></article>
        <article class="networking-tile"><h3>spatial and installation development</h3></article>
        <article class="networking-tile"><h3>interactive performance workflows</h3></article>
        <article class="networking-tile"><h3>technical production and on-site setup</h3></article>
        <article class="networking-tile"><h3>bridging concept, tech, and delivery</h3></article>
      </div>
    </div>
  </section>

  <section class="networking-page__section networking-page__section--airy" id="about">
    <div class="networking-page__inner networking-page__inner--split">
      <article class="networking-card">
        <h2>About</h2>
        <!-- REPLACE_TEXT: keep concise. -->
        <p>Based in Germany.</p>
        <p>Open to Berlin relocation, remote work, studio roles, freelance collaboration, and festival opportunities.</p>
      </article>

      <article class="networking-card networking-card--research">
        <h2>Ongoing inquiry</h2>
        <p>I’m interested in what remains after a project ends: traces, memory, documentation, and reflection as material for future work.</p>
      </article>
    </div>
  </section>

  <section class="networking-page__section networking-page__section--airy" id="contact">
    <div class="networking-page__inner">
      <h2>Contact</h2>

      <div class="networking-page__contact-grid">
        <a class="networking-contact" href="https://www.instagram.com/PLACEHOLDER_INSTAGRAM/" target="_blank" rel="noopener noreferrer">
          <span class="networking-contact__label">Instagram</span>
          <strong>@PLACEHOLDER_INSTAGRAM</strong>
        </a>
        <a class="networking-contact" href="mailto:PLACEHOLDER_EMAIL">
          <span class="networking-contact__label">Email</span>
          <strong>PLACEHOLDER_EMAIL</strong>
        </a>
        <a class="networking-contact" href="PLACEHOLDER_CV_PDF">
          <span class="networking-contact__label">CV PDF</span>
          <strong>Open / download</strong>
        </a>
        <a class="networking-contact" href="PLACEHOLDER_WORKS_PDF">
          <span class="networking-contact__label">Selected works PDF</span>
          <strong>Open / download</strong>
        </a>
        <a class="networking-contact" href="PLACEHOLDER_LINKEDIN" target="_blank" rel="noopener noreferrer">
          <span class="networking-contact__label">LinkedIn</span>
          <strong>Profile</strong>
        </a>
        <a class="networking-contact" href="PLACEHOLDER_VCARD_LINK">
          <span class="networking-contact__label">Business card</span>
          <strong>Add contact</strong>
        </a>
      </div>
    </div>
  </section>
</div>
