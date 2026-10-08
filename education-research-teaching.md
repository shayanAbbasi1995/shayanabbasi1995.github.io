---
layout: page
title: Education, Research & Teaching
nav_order: 0
permalink: /education-research-teaching/
# Set to the course outline's path (e.g. assets/pdf/Marketing_Research_MBA_Outline.pdf)
# to show the download link in the Teaching section.
outline_pdf:
---

## Education
{: #education}

**Ph.D. Quantitative Marketing**, McMaster University, Hamilton, Canada (Aug 2022 – Dec 2026)
- Dissertation: *Threats and Adaptations in Digital Platforms: Essays on Strategy Across the Ecosystem* (see [Research](#research)).
- Methods: DiD, event study, panel data regression, and zero-shot classification.

**Master of Applied Economics**, Autonomous University of Barcelona, Barcelona, Spain (Sep 2021 – Jul 2022)
- Master thesis: Market share analysis in U.S. markets.

**Master of Financial Economics**, Barcelona School of Economics, Barcelona, Spain (Sep 2020 – Jul 2021)
- Focused on data science and high-frequency trading.
- Master thesis: The financial consequences of corporate misconduct—a financial event study analysis.
- Relevant coursework: Foundations of Data Science, Text Mining, Stochastic Models and Optimization (Reinforcement Learning), Machine Learning for Finance.

**Bachelor of Economics**, University of Tehran, Tehran, Iran (Sep 2016 – Jul 2020)
- Graduated with distinction. Minor: Computer Science.

---

## Research
{: #research}

### Dissertation: Threats and Adaptations in Digital Platforms: Essays on Strategy Across the Ecosystem

**Essay 1: Competing with the Platform: Complementor's Privacy Policy Response to Platform-Owner Entry**<br>
Examines how complementors strategically adjust their privacy disclosures as a defensive "shield" when a platform owner enters their market niche.

**Essay 2: Beyond the Gimmick: How Conversational AI is Reshaping E-Commerce Platform Dynamics**<br>
Investigates how integrating generative AI shopping assistants into e-commerce platforms improves consumer-product matching and post-purchase ratings.

**Essay 3: Complementor Response Effectiveness to Platform-Owner Entry**<br>
Tests whether complementors' strategic responses to platform-owner entry translate into measurable competitive outcomes.

### Working papers

- "Gamification in mobile applications," a chapter in *Gamification in Marketing*.
- "Solving the Chicken and Egg Problem: Bootstrapping AI Platforms," stage: methodology.

Conference presentations are listed on the [Presentations](presentations/) page.

---

## Teaching
{: #teaching}

**Sessional Instructor**, Marketing Research (MBA), DeGroote School of Business, McMaster University, Hamilton, Canada (Sep 2026 – Dec 2026)
{% if page.outline_pdf %}- [Course outline (PDF)]({{ page.outline_pdf }}){% endif %}
- [Course slides](#m731-slides) are available below.

**Sessional Instructor**, Introduction to Marketing, DeGroote School of Business, McMaster University, Hamilton, Canada (Sep 2025 – Jan 2026)
- Designed and delivered the full curriculum, including tutorials and assessments for undergraduate students, with a focus on scenario-based learning.

**Teaching Assistant**, DeGroote School of Business, McMaster University, Hamilton, Canada (Sep 2022 – Sep 2026)
- Facilitated learning for 1MA3 (Introduction to Marketing), 3MA3 (Marketing Research), M731 (Marketing Research, MBA), BL653 (Intermediate Marketing, Exec. MBA), and T712 (Strategic Marketing, Exec. MBA).

**Teaching Assistant**, University of Tehran, Tehran, Iran
- Applied Programming and Introduction to Programming (Python).

### Course slides: M731 Marketing Research (MBA), Fall 2026
{: #m731-slides}

Each deck is a single self-contained HTML file: open it in the browser, or download it to keep an offline copy.

{% assign slides = site.data.m731_slides %}
{% assign slides_dir = slides.folder | replace: " ", "%20" %}
<ul class="slide-list">
{% for s in slides.sessions %}
  <li>
    <span class="cv-when">{{ s.date }}</span>
    <strong>{{ s.session }}:</strong> {{ s.title }}
    <span class="slide-links"><a href="{{ slides_dir }}/{{ s.file }}" target="_blank" rel="noopener">View</a> &middot; <a href="{{ slides_dir }}/{{ s.file }}" download>Download</a></span>
    {% if s.lab_file %}
    <span class="slide-lab">{{ s.lab_title }}
      <span class="slide-links"><a href="{{ slides_dir }}/{{ s.lab_file }}" target="_blank" rel="noopener">View</a> &middot; <a href="{{ slides_dir }}/{{ s.lab_file }}" download>Download</a></span>
    </span>
    {% endif %}
  </li>
{% endfor %}
</ul>

### Course RAG teaching assistant

For my courses I built [**mk-rag**](https://github.com/shayanAbbasi1995/mk-rag), an AI teaching assistant that students can ask questions in plain English. It answers only from the course's own slides, textbooks, and readings, and every answer cites the source file and page.

- **Retrieval:** hybrid search that combines OpenAI dense embeddings (`text-embedding-3-small`) with BM25 sparse vectors, fused via Reciprocal Rank Fusion, over course documents stored in Qdrant, followed by cross-encoder reranking.
- **Context handling:** every chunk carries a section breadcrumb (e.g. *Chapter 4 > Survey Design*); questions that mention "session N", "week N" or "lecture N" are pinned to that session's material; the last 10 conversation turns are kept so follow-up questions resolve correctly.
- **Generation:** DeepSeek-V3 via OpenRouter.
- **Deployment and cost:** Streamlit Community Cloud, for under $3 per semester at 50 students.

The code is an open-source template that any instructor can reuse; see the [Portfolio](portfolio/) for details.
