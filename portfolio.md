---
layout: page
title: Portfolio
nav_order: 1
---

A selection of projects organized by domain. All code is available on [GitHub](https://github.com/shayanAbbasi1995).

---

## Generative AI & RAG

**[mk-rag — Course RAG Teaching Assistant](https://github.com/shayanAbbasi1995/mk-rag)**
Low-cost, open-source Retrieval-Augmented Generation chatbot template for university courses. Students ask questions in plain English and get grounded, citation-backed answers drawn from the course's own slides, textbooks, and readings. Combines hybrid retrieval (OpenAI dense embeddings + BM25 sparse vectors fused via Reciprocal Rank Fusion) over course documents in Qdrant with cross-encoder reranking, contextual chunk headers, session/lecture-aware retrieval, and multi-turn conversation history, generating answers with DeepSeek-V3 via OpenRouter. Deployed on Streamlit Community Cloud for under $3 per semester at 50 students.
*Python · Streamlit · LangChain · Qdrant · sentence-transformers (cross-encoder reranking) · OpenAI embeddings · DeepSeek-V3 via OpenRouter*

---

## Web Scraping & Data Collection

**[APKMirror Crawler](https://github.com/shayanAbbasi1995/apkmirror-crawler)**
Production-grade Selenium crawler for APKMirror. Extracts structured APK metadata (title, developer, category, version, permissions, languages, size, OS requirements) at scale. Features Cloudflare challenge detection, Tor-based IP rotation, fullscreen ad dismissal, DMCA detection, and resumable crawling via a visited-links log.
*Python · Selenium WebDriver · BeautifulSoup4 · pandas · psutil · Tor (stem)*
