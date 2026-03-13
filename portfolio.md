---
layout: page
title: Portfolio
nav_order: 1
---

A selection of projects organized by domain. All code is available on [GitHub](https://github.com/shayanAbbasi1995).

---

## Econometrics & Finance

**[Non-Financial Misconduct and Market Reaction](https://github.com/shayanAbbasi1995/Non-financial-misconduct-and-Market-reaction)**
BSE Master's thesis. Event study on stock-market reaction to non-financial misconduct (fraud, harassment, ethical violations) by corporate executives. Implements Cumulative Abnormal Return (CAR) models using the CAPM market model, corrects for overlapping event windows, and computes market microstructure statistics (bid-ask spread, Amihud illiquidity, order flow imbalance) across 10 simulation sessions.
*Python · pandas · statsmodels · matplotlib · SEC EDGAR API*

**[UAB MAREB Thesis — Market Power, Regulation & Investment](https://github.com/shayanAbbasi1995/UAB-Thesis)**
Empirical thesis investigating how product market regulation affects firm-level investment. Panel regressions (OLS, fixed effects, two-way FE) on Compustat data matched with OECD regulation indices; logistic regressions for litigation outcomes; multicollinearity (VIF), heteroskedasticity, and RESET diagnostic tests.
*Stata (`xtreg`, `logit`, `margins`) · Python · pandas · SEC EDGAR scraping*

**[BGSE Macro-Finance](https://github.com/shayanAbbasi1995/BGSE-Macro-Finance)**
Four R assignments on empirical asset pricing using the Jordà–Schularick–Taylor Macrohistory Database (17 economies, 1870–present): equity premium puzzle (CCAPM / CRRA utility), Hansen-Jagannathan bounds, habit formation (Campbell-Cochrane) and Epstein-Zin recursive preferences, and term structure of interest rates (expectations hypothesis).
*R · R Markdown · zoo · xts · ggplot2*

**[UAB MAREB Course Assignments](https://github.com/shayanAbbasi1995/UAB-MAREB-Assignments)**
Graded assignments across eight MAREB courses: econometrics (OLS, IV, robust SEs), multivariate analysis (clustering, factor analysis, discriminant analysis, panel data), production efficiency (index numbers, TFP), applied micro and macroeconomics, and finance.
*Stata · R · ggplot2*

---

## Machine Learning & NLP

**[BGSE Text Mining](https://github.com/shayanAbbasi1995/bgse-text-mining-assignments)**
Four-part NLP coursework progressing from text preprocessing (tokenization, stemming, TF-IDF) through document classification (Naive Bayes, logistic regression with precision/recall evaluation) and Word2Vec embeddings (cosine similarity, semantic analogies) to a final end-to-end NLP pipeline on a real-world dataset.
*Python · NLTK · scikit-learn (`TfidfVectorizer`, `MultinomialNB`, `LogisticRegression`) · Gensim Word2Vec*

**[ML Classification — ICU Mortality](https://github.com/shayanAbbasi1995/bgse-ml-classification)**
Binary classification predicting in-hospital mortality for 40,000+ ICU patients using the MIMIC-III critical care database. Covers feature engineering from clinical variables (vital signs, lab values, demographics), comparison of logistic regression, decision trees, random forest, and gradient boosting, and threshold tuning for clinical cost of false negatives.
*Python · scikit-learn · pandas · matplotlib / seaborn · AUC-ROC · precision-recall*

**[ML for Finance — Sentiment-Driven Portfolio Backtesting](https://github.com/shayanAbbasi1995/bgse-ml-finance-backtesting)**
Quantitative trading pipeline combining NLP-derived sentiment signals (positive, negative, certainty, financial up/down scores) with mean-variance (Markowitz) portfolio optimization. Rolling out-of-sample backtest on AMZN (2018–2019); evaluated on Sharpe ratio, annualized return, and maximum drawdown versus a buy-and-hold benchmark.
*R · PortfolioAnalytics · fPortfolio · quantmod · PerformanceAnalytics · GenSA · DEoptim · doParallel*

---

## Quantitative Finance & Trading

**[Crypto Grid Trading Backtest](https://github.com/shayanAbbasi1995/crypto-grid-trading-backtest)**
Python framework for backtesting a grid trading strategy on crypto futures. Reconstructs position holding periods from raw BUY/SELL exports, computes per-trade net returns after fees using geometric averaging, and reports cumulative return, annualized return, win/loss ratios, and Value at Risk (VaR at 95% & 99%) with PnL distribution plots.
*Python · pandas · NumPy (`np.prod` geometric mean) · matplotlib · Historical VaR*

---

## Web Scraping & Data Collection

**[APKMirror Crawler](https://github.com/shayanAbbasi1995/apkmirror-crawler)**
Production-grade Selenium crawler for APKMirror. Extracts structured APK metadata (title, developer, category, version, permissions, languages, size, OS requirements) at scale. Features Cloudflare challenge detection, Tor-based IP rotation, fullscreen ad dismissal, DMCA detection, and resumable crawling via a visited-links log.
*Python · Selenium WebDriver · BeautifulSoup4 · pandas · psutil · Tor (stem)*

**[Codal Financial Scraper](https://github.com/shayanAbbasi1995/codal-financial-scraper)**
Selenium scraper for Codal.ir, the official disclosure portal of the Iranian stock exchange. Downloads and parses monthly activity reports and annual/interim fiscal statements (balance sheets, income statements, cash flows). Handles Persian digit normalization, paginated report listings, and structured Excel output organized by company ID.
*Python · Selenium · BeautifulSoup4 · pandas · openpyxl · OOP design*

**[Web Scraping & API Samples](https://github.com/shayanAbbasi1995/web-scraping-and-api-samples)**
Two focused notebooks: (1) SEC EDGAR scraper using requests + BeautifulSoup to extract 10-K filing links via full-text search; (2) Twitter API data collection with Tweepy and lexicon-based sentiment analysis on ICO-related tweets.
*Python · requests · BeautifulSoup4 · Tweepy · pandas*

---

## Data Analysis & Visualization

**[Tehran Spatial Analysis](https://github.com/shayanAbbasi1995/tehran-spatial-analysis)**
Interactive geospatial visualizations for Tehran districts developed for infrastructure diagnostics work at United For Iran. Includes area and district choropleth maps, time-of-day incident distribution, and weekly frequency plots — all exported as self-contained HTML files navigable via an index page.
*Python · Folium · Leaflet.js · pandas · HTML*
