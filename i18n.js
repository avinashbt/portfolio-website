// =====================================================
// i18n.js — Multi-language engine for the portfolio
// Languages: English (default), English UK, English CA,
//            Japanese, French
// English is ALWAYS the default for SEO (Googlebot sees
// English). The visitor's choice is stored in localStorage.
// =====================================================
(function () {
  'use strict';

  const DEFAULT_LANG = 'en';

  // ---------- Dictionaries ----------
  const EN = {
    'nav.about': 'About',
    'nav.exp': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.websites': 'Websites',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.hire': 'Hire Me',

    'hero.badge': `<span class="status-dot"></span> Currently working at TCS`,
    'hero.hello': `Hi, I'm`,
    'hero.desc': `Frontend Developer at <strong>TCS (Tata Consultancy Services)</strong> — I build performant React applications and write solid tests with Cypress &amp; Jest.<br><strong>4.6 years</strong> turning complex problems into clean, tested code.`,
    'hero.cta1': `<i class="fas fa-paper-plane"></i> Get In Touch`,
    'hero.cta2': `<i class="fas fa-download"></i> Download CV`,
    'hero.stat1': `Years Experience`,
    'hero.stat2': `Projects Shipped`,
    'hero.stat3': `SaaS Products Live`,
    'hero.scroll': `Scroll`,

    'about.tag': `About`,
    'about.title': `Who I Am`,
    'about.h3': `Frontend Developer @ TCS &amp; React Engineer`,
    'about.p1': `I'm Avinash Bawage, a Frontend Developer at <strong>TCS (Tata Consultancy Services)</strong> based in Hyderabad, India. Over the past <strong>4.6 years</strong>, I've built production-grade React applications, designed intuitive user interfaces, and implemented testing strategies with Cypress and Jest to ship code with confidence.`,
    'about.p2': `I specialize in <strong>React.js</strong>, <strong>JavaScript</strong>, and <strong>modern testing frameworks</strong> like Cypress and Jest. Currently working at TCS, I build scalable frontend solutions for enterprise clients while also shipping independent SaaS products. I believe every feature should be tested, every component should be accessible, and every deployment should be reliable.`,
    'about.hl1': `Currently working at <strong>TCS (Tata Consultancy Services)</strong>`,
    'about.hl2': `4.6+ years of professional experience`,
    'about.hl3': `2 live SaaS products in production`,
    'about.hl4': `End-to-end testing with Cypress &amp; Jest`,
    'about.hl5': `Performance-optimized, accessible UIs`,
    'about.resume': `<i class="fas fa-file-alt"></i> View Full Resume`,

    'exp.tag': `Career`,
    'exp.title': `Experience Timeline`,
    'exp.role1': `Frontend Developer <span style="color: var(--green); font-weight: 600;">@ TCS</span>`,
    'exp.present': `Present`,
    'exp.company1': `<i class="fas fa-building" style="margin-right: 6px; color: var(--green);"></i> Tata Consultancy Services (TCS) — Hyderabad`,
    'exp.b1': `Currently working as Frontend Developer at TCS building enterprise-grade React applications`,
    'exp.b2': `Built 14+ responsive web applications using React.js, Redux, and modern JavaScript`,
    'exp.b3': `Implemented end-to-end testing strategies with Cypress achieving 85%+ code coverage`,
    'exp.b4': `Developed unit and integration test suites using Jest and React Testing Library`,
    'exp.b5': `Optimized Core Web Vitals resulting in 40% faster page loads across projects`,
    'exp.b6': `Collaborating with cross-functional teams in Agile environment at TCS`,
    'exp.role2': `SaaS Product Development`,
    'exp.ongoing': `Ongoing`,
    'exp.indep': `Independent Projects`,
    'exp.s1': `InstantAIArticle.blog — AI-powered SEO article generator with payment integration`,
    'exp.s2': `SpeedometerLive.online — Real-time GPS speedometer with 10K+ monthly users`,
    'exp.s3': `Full-stack development: frontend, backend, testing, deployment, monitoring`,

    'skills.tag': `Tech Stack`,
    'skills.title': `Skills &amp; Tools`,
    'skills.cat1': `Frontend`,
    'skills.cat2': `Backend &amp; DB`,
    'skills.cat3': `Testing &amp; QA`,
    'skills.cat4': `Dev Tools`,
    'sk.unit': `Unit / Integration Testing`,
    'sk.coverage': `Test Coverage Analysis`,

    'proj.tag': `Portfolio`,
    'proj.title': `Featured Projects`,
    'proj.d1': `AI-powered SaaS platform for SEO-optimized blog articles with payment integration, user auth, and admin dashboard.`,
    'proj.d2': `Real-time GPS speedometer web app showing live speed, distance, and accuracy on mobile browsers.`,
    'proj.d3': `Comprehensive online calculator for math, unit conversions, and scientific calculations.`,
    'proj.d4': `Extract and copy YouTube video descriptions instantly. Tool for content creators and marketers.`,
    'proj.d5': `Modern calculator with add, subtract, multiply, and divide operations.`,
    'proj.d6': `Count words, characters, reading time, and convert text case with Bootstrap UI.`,

    'sites.tag': `Hosted Live`,
    'sites.title': `My Websites`,
    'sites.sub': `All my live hosted projects — SaaS products, PWA apps &amp; blogs running in production`,
    'sites.d1': `Interior design studio website — 480+ flat, villa, kitchen &amp; office projects with free 3D design quotes.`,
    'sites.d2': `Free online calculators for math, percentage, EMI, SIP, GST, train fares and everyday needs.`,
    'sites.d3': `Premium paint protection film (PPF) installation — full-car, front-end &amp; matte PPF quotes in India.`,
    'sites.d4': `Technology blog focused on AI, SEO, and Web Development — tutorials, tools &amp; insights.`,
    'sites.d5': `Live Fortnite season countdown timer — track season end dates, Battle Pass and upcoming seasons.`,
    'sites.d6': `Business directory platform with SEO optimization — discover local businesses in Hyderabad.`,
    'sites.d7': `Affordable home interior design in Hyderabad — modular kitchens, bedrooms &amp; complete home decor.`,
    'sites.d8': `GPS speedometer for trains — live, max and average speed in km/h, mph or m/s. Free, no app needed.`,
    'sites.d9': `Free soulmate compatibility test — check love percentage and romantic matching online instantly.`,
    'sites.d10': `Love compatibility by name — instant love percentage score using numerology &amp; astrology.`,
    'sites.d11': `SGPA, CGPA &amp; percentage calculator for VTU 2025, 2022, 2021 and 2018 schemes — fast and accurate.`,
    'sites.d12': `Free tool for creators &amp; marketers — extract video descriptions, titles, tags and metadata fast.`,

    'serv.tag': `What I Do`,
    'serv.title': `Services`,
    'serv.t1': `Frontend Development`,
    'serv.d1': `Building performant, accessible React applications with clean architecture and modern tooling.`,
    'serv.t2': `Testing with Cypress &amp; Jest`,
    'serv.d2': `Writing end-to-end Cypress tests, Jest unit tests, and ensuring code quality across production applications.`,
    'serv.t3': `Web App Deployment`,
    'serv.d3': `Full deployment pipeline from CI/CD to production, including performance optimization and monitoring.`,

    'blog.tag': `Blog`,
    'blog.title': `Latest Articles`,
    'blog.h1': `React Portfolio Website Tutorial for Beginners`,
    'blog.d1': `Build a stunning portfolio website from scratch using React — component architecture, styling, and deployment.`,
    'blog.h2': `Complete Guide to Cypress Testing in 2026`,
    'blog.d2': `From zero to production-ready E2E tests — a hands-on guide to Cypress with real-world examples and best practices.`,
    'blog.read': `Read Article <i class="fas fa-arrow-right"></i>`,

    'contact.tag': `Contact`,
    'contact.title': `Let's Work Together`,
    'contact.h3': `Get in Touch`,
    'contact.p': `Have a project in mind or looking for a dedicated frontend developer? I'd love to hear from you.`,
    'contact.locLabel': `Location`,
    'contact.locValue': `Hyderabad, Telangana, India`,
    'contact.emailLabel': `Email`,
    'contact.githubLabel': `GitHub`,
    'ph.name': `Your Name`,
    'ph.email': `Your Email`,
    'ph.subject': `Subject`,
    'ph.msg': `Your Message`,
    'contact.send': `<i class="fas fa-paper-plane"></i> Send Message`,

    'foot.desc': `Building modern web experiences with clean code, comprehensive tests, and continuous improvement.`,
    'foot.nav': `Navigation`,
    'foot.connect': `Connect`,
    'foot.built': `Built with <span class="footer-heart">&hearts;</span> by Avinash Bawage &mdash; &copy;`,

    'msg.ok': `Message sent successfully!`,
    'msg.err': `Something went wrong. Please try again.`
  };

  const JA = {
    'nav.about': '私について',
    'nav.exp': '職歴',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.websites': '運営サイト',
    'nav.services': 'サービス',
    'nav.blog': 'ブログ',
    'nav.hire': '採用 / 雇用',

    'hero.badge': `<span class="status-dot"></span> 現在 TCS（タタ コンサルタンシーサービシズ）で勤務中`,
    'hero.hello': 'こんにちは、私は',
    'hero.desc': `<strong>TCS（タタ コンサルタンシーサービシズ）</strong>でフロントエンド開発者として、パフォーマンスの高い React アプリケーションを開発し、Cypress と Jest で堅牢なテストを書いています。<br><strong>4.6年</strong>の経験で、複雑な問題をクリーンでテスト済みのコードに変えてきました。`,
    'hero.cta1': `<i class="fas fa-paper-plane"></i> お問い合わせ`,
    'hero.cta2': `<i class="fas fa-download"></i> 履歴書をダウンロード`,
    'hero.stat1': '年の実務経験',
    'hero.stat2': '納品したプロジェクト',
    'hero.stat3': '運用中のSaaSプロダクト',
    'hero.scroll': 'スクロール',

    'about.tag': '私について',
    'about.title': '自己紹介',
    'about.h3': `TCS フロントエンド開発者 &amp; React エンジニア`,
    'about.p1': `私はアビナシュ・バワゲ、インド・ハイデラバードを拠点に活動する <strong>TCS（タタ コンサルタンシーサービシズ）</strong>のフロントエンド開発者です。過去<strong>4.6年</strong>で、本番品質の React アプリケーションの構築、直感的な UI の設計、Cypress と Jest を用いたテスト戦略の実装を行い、自信を持ってコードをリリースしてきました。`,
    'about.p2': `<strong>React.js</strong>、<strong>JavaScript</strong>、Cypress や Jest などの<strong>最新テストフレームワーク</strong>を得意としています。現在は TCS に勤務しながら、エンタープライズクライアント向けのスケーラブルなフロントエンドソリューションを開発するとともに、個人の SaaS 製品もリリースしています。すべての機能にテストを、すべてのコンポーネントにアクセシビリティを、すべてのデプロイに信頼性を。`,
    'about.hl1': `現在 <strong>TCS（タタ コンサルタンシーサービシズ）</strong>で勤務中`,
    'about.hl2': '4.6年以上の実務経験',
    'about.hl3': '本番稼働中の SaaS 製品 2 件',
    'about.hl4': `Cypress &amp; Jest による E2E テスト`,
    'about.hl5': 'パフォーマンス最適化・アクセシブルな UI',
    'about.resume': `<i class="fas fa-file-alt"></i> 履歴書を見る`,

    'exp.tag': '職歴',
    'exp.title': '経歴タイムライン',
    'exp.role1': `フロントエンド開発者 <span style="color: var(--green); font-weight: 600;">@ TCS</span>`,
    'exp.present': '現在',
    'exp.company1': `<i class="fas fa-building" style="margin-right: 6px; color: var(--green);"></i> Tata Consultancy Services (TCS) — ハイデラバード`,
    'exp.b1': '現在 TCS でフロントエンド開発者としてエンタープライズ品質の React アプリケーションを開発',
    'exp.b2': 'React.js、Redux、モダン JavaScript を使い 14 以上のレスポンシブ Web アプリを構築',
    'exp.b3': 'Cypress による E2E テスト戦略を実装し、コードカバレッジ 85% 以上を達成',
    'exp.b4': 'Jest と React Testing Library によるユニット・統合テストスイートを開発',
    'exp.b5': 'コアウェブバイタルを最適化し、全プロジェクトでページ読み込みを 40% 高速化',
    'exp.b6': 'TCS のアジャイル環境でクロスファンクショナルチームと協働',
    'exp.role2': 'SaaS 製品開発',
    'exp.ongoing': '継続中',
    'exp.indep': '個人プロジェクト',
    'exp.s1': 'InstantAIArticle.blog — 決済連携付きの AI SEO 記事ジェネレーター',
    'exp.s2': 'SpeedometerLive.online — 月間 10,000 人以上が利用するリアルタイム GPS スピードメーター',
    'exp.s3': 'フルスタック開発：フロントエンド、バックエンド、テスト、デプロイ、監視',

    'skills.tag': '技術スタック',
    'skills.title': `スキル &amp; ツール`,
    'skills.cat1': 'フロントエンド',
    'skills.cat2': `バックエンド &amp; DB`,
    'skills.cat3': `テスティング &amp; QA`,
    'skills.cat4': '開発ツール',
    'sk.unit': 'ユニット / 統合テスト',
    'sk.coverage': 'テストカバレッジ分析',

    'proj.tag': 'ポートフォリオ',
    'proj.title': '主なプロジェクト',
    'proj.d1': '決済連携・ユーザー認証・管理ダッシュボードを備えた、SEO 最適化ブログ記事生成の AI SaaS プラットフォーム。',
    'proj.d2': 'モバイルブラウザでリアルタイムの速度・距離・精度を表示する GPS スピードメーター Web アプリ。',
    'proj.d3': '数式・単位換算・科学計算に対応したオールインワンのオンライン計算機。',
    'proj.d4': 'YouTube 動画の説明文を即座に抽出・コピーできる、コンテンツ制作者とマーケター向けツール。',
    'proj.d5': '加算・減算・乗算・除算に対応したモダンな計算機。',
    'proj.d6': '単語数・文字数・読了時間のカウントとテキスト変換ができる Bootstrap 製ツール。',

    'sites.tag': '公開中',
    'sites.title': '運営サイト',
    'sites.sub': `本番稼働中のすべてのプロジェクト — SaaS 製品、PWA アプリ、ブログ`,
    'sites.d1': 'ハイデラバードのインテリアデザインスタジオ — 480 件以上のフラット・別荘・キッチン・オフィス実績、無料 3D デザイン見積もり対応。',
    'sites.d2': '数学・パーセント・EMI・SIP・GST・運賃計算など日常の計算に対応した無料オンライン計算機。',
    'sites.d3': 'プレミアム PPF（ペイントプロテクションフィルム）施工 — フルカー・フロントエンド・マット PPF の見積もり（インド）。',
    'sites.d4': 'AI・SEO・Web 開発に焦点を当てたテクノロジーブログ — チュートリアル、ツール、洞察。',
    'sites.d5': 'Fortnite のシーズン終了日やバトルパスを追踪できるライブカウントダウンタイマー。',
    'sites.d6': 'SEO 最適化されたビジネスディレクトリプラットフォーム — ハイデラバードの地域ビジネスを発見。',
    'sites.d7': 'ハイデラバードの手頃な住宅インテリアデザイン — モジュラーキッチン、寝室、まるごとホームデコ。',
    'sites.d8': '列車用 GPS スピードメーター — km/h、mph、m/s で最高速度・平均速度をリアルタイム表示。無料、アプリ不要。',
    'sites.d9': '無料の相性診断 — 恋愛マッチングのパーセンテージをオンラインで即時チェック。',
    'sites.d10': '名前による恋愛相性診断 — 数秘術と占星術で即座にラブパーセンテージを算出。',
    'sites.d11': 'VTU 2025・2022・2021・2018 制度対応の SGPA・CGPA・パーセント計算機 — 高速で正確。',
    'sites.d12': '制作者・マーケター向けの無料ツール — 動画の説明文、タイトル、タグ、メタデータを高速に抽出。',

    'serv.tag': '私の仕事',
    'serv.title': 'サービス',
    'serv.t1': 'フロントエンド開発',
    'serv.d1': 'クリーンなアーキテクチャとモダンなツールで、パフォーマンスとアクセシビリティに優れた React アプリケーションを構築。',
    'serv.t2': `Cypress &amp; Jest によるテスト`,
    'serv.d2': 'Cypress による E2E テスト、Jest によるユニットテストを書き、本番アプリケーション全体のコード品質を担保。',
    'serv.t3': 'Web アプリのデプロイ',
    'serv.d3': 'CI/CD から本番までのデプロイパイプライン構築、パフォーマンス最適化とモニタリングを含む。',

    'blog.tag': 'ブログ',
    'blog.title': '最新記事',
    'blog.h1': '初心者向け React ポートフォリオサイト構築チュートリアル',
    'blog.d1': 'React で驚きのポートフォリオサイトをゼロから構築 — コンポーネント設計、スタイリング、デプロイ。',
    'blog.h2': '2026 年版 Cypress テスティング完全ガイド',
    'blog.d2': 'ゼロから本番対応 E2E テストまで — 実例とベストプラクティスによる Cypress ハンドズオンガイド。',
    'blog.read': `記事を読む <i class="fas fa-arrow-right"></i>`,

    'contact.tag': 'お問い合わせ',
    'contact.title': '一緒に働きませんか',
    'contact.h3': '連絡先',
    'contact.p': 'プロジェクトのご相談、フロントエンド開発者をお探しでしたら、ぜひご連絡ください。',
    'contact.locLabel': '所在地',
    'contact.locValue': 'インド・テランガナ州・ハイデラバード',
    'contact.emailLabel': 'メール',
    'contact.githubLabel': 'GitHub',
    'ph.name': 'お名前',
    'ph.email': 'メールアドレス',
    'ph.subject': '件名',
    'ph.msg': 'メッセージ',
    'contact.send': `<i class="fas fa-paper-plane"></i> メッセージを送信`,

    'foot.desc': 'テスト充実したクリーンなコードと継続的な改善で、モダンな Web 体験を構築。',
    'foot.nav': 'ナビゲーション',
    'foot.connect': 'コネクト',
    'foot.built': `<span class="footer-heart">&hearts;</span> Avinash Bawage が作成 &mdash; &copy;`,

    'msg.ok': 'メッセージを送信しました！',
    'msg.err': '何らかのエラーが発生しました。もう一度お試しください。'
  };

  const FR = {
    'nav.about': 'À propos',
    'nav.exp': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.websites': 'Sites web',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.hire': 'Me recruter',

    'hero.badge': `<span class="status-dot"></span> Actuellement chez TCS`,
    'hero.hello': 'Bonjour, je suis',
    'hero.desc': `Développeur Frontend chez <strong>TCS (Tata Consultancy Services)</strong> — je crée des applications React performantes et j'écris des tests solides avec Cypress &amp; Jest.<br><strong>4,6 ans</strong> à transformer des problèmes complexes en code propre et testé.`,
    'hero.cta1': `<i class="fas fa-paper-plane"></i> Me contacter`,
    'hero.cta2': `<i class="fas fa-download"></i> Télécharger le CV`,
    'hero.stat1': "Ans d'expérience",
    'hero.stat2': 'Projets livrés',
    'hero.stat3': 'Produits SaaS en ligne',
    'hero.scroll': 'Défiler',

    'about.tag': 'À propos',
    'about.title': 'Qui je suis',
    'about.h3': `Développeur Frontend @ TCS &amp; Ingénieur React`,
    'about.p1': `Je suis Avinash Bawage, Développeur Frontend chez <strong>TCS (Tata Consultancy Services)</strong> basé à Hyderabad, en Inde. Au cours des <strong>4,6 dernières années</strong>, j'ai créé des applications React de niveau production, conçu des interfaces intuitives et mis en place des stratégies de test avec Cypress et Jest pour livrer du code en toute confiance.`,
    'about.p2': `Je suis spécialisé en <strong>React.js</strong>, <strong>JavaScript</strong> et <strong>frameworks de test modernes</strong> comme Cypress et Jest. Actuellement chez TCS, je développe des solutions front-end évolutives pour des clients grands comptes tout en lançant des produits SaaS indépendants. Je crois que chaque fonctionnalité doit être testée, chaque composant accessible et chaque déploiement fiable.`,
    'about.hl1': `Actuellement chez <strong>TCS (Tata Consultancy Services)</strong>`,
    'about.hl2': "Plus de 4,6 ans d'expérience professionnelle",
    'about.hl3': '2 produits SaaS en production',
    'about.hl4': `Tests end-to-end avec Cypress &amp; Jest`,
    'about.hl5': 'UI performantes et accessibles',
    'about.resume': `<i class="fas fa-file-alt"></i> Voir le CV complet`,

    'exp.tag': 'Parcours',
    'exp.title': 'Timeline de carrière',
    'exp.role1': `Développeur Frontend <span style="color: var(--green); font-weight: 600;">@ TCS</span>`,
    'exp.present': "Aujourd'hui",
    'exp.company1': `<i class="fas fa-building" style="margin-right: 6px; color: var(--green);"></i> Tata Consultancy Services (TCS) — Hyderabad`,
    'exp.b1': 'Développeur Frontend chez TCS — applications React de niveau entreprise',
    'exp.b2': 'Plus de 14 applications web responsives conçues avec React.js, Redux et JavaScript moderne',
    'exp.b3': 'Stratégies de tests end-to-end avec Cypress, plus de 85 % de couverture de code',
    'exp.b4': "Suites de tests unitaires et d'intégration avec Jest et React Testing Library",
    'exp.b5': 'Core Web Vitals optimisés : pages 40 % plus rapides sur l’ensemble des projets',
    'exp.b6': 'Collaboration avec des équipes pluridisciplinaires dans un environnement Agile chez TCS',
    'exp.role2': 'Développement de produits SaaS',
    'exp.ongoing': 'En cours',
    'exp.indep': 'Projets indépendants',
    'exp.s1': "InstantAIArticle.blog — générateur d'articles SEO alimenté par l'IA avec paiement intégré",
    'exp.s2': 'SpeedometerLive.online — vitesse GPS en temps réel, plus de 10 000 utilisateurs par mois',
    'exp.s3': 'Développement full-stack : front-end, back-end, tests, déploiement, monitoring',

    'skills.tag': 'Stack technique',
    'skills.title': `Compétences &amp; Outils`,
    'skills.cat1': 'Front-end',
    'skills.cat2': `Back-end &amp; BDD`,
    'skills.cat3': `Tests &amp; QA`,
    'skills.cat4': 'Outils de dev',
    'sk.unit': "Tests unitaires / d'intégration",
    'sk.coverage': 'Analyse de couverture de code',

    'proj.tag': 'Portfolio',
    'proj.title': 'Projets vedettes',
    'proj.d1': "Plateforme SaaS alimentée par l'IA pour des articles de blog optimisés SEO, avec paiement, authentification et tableau de bord admin.",
    'proj.d2': 'Application web de vitesse GPS en temps réel affichant vitesse, distance et précision sur mobile.',
    'proj.d3': 'Calculatrice en ligne complète : maths, conversions d’unités et calculs scientifiques.',
    'proj.d4': 'Extrait et copie instantanément les descriptions de vidéos YouTube. Pour créateurs et marketeurs.',
    'proj.d5': 'Calculatrice moderne : addition, soustraction, multiplication et division.',
    'proj.d6': 'Comptez mots, caractères, temps de lecture et convertissez la casse, avec une UI Bootstrap.',

    'sites.tag': 'En ligne',
    'sites.title': 'Mes sites web',
    'sites.sub': `Tous mes projets hébergés en production — produits SaaS, applis PWA et blogs`,
    'sites.d1': "Site d'un studio de design d'intérieur à Hyderabad — plus de 480 projets (appartements, villas, cuisines, bureaux) avec devis 3D gratuit.",
    'sites.d2': 'Calculatrices en ligne gratuites : maths, pourcentages, EMI, SIP, GST, tarifs de train et besoins du quotidien.',
    'sites.d3': 'Installation premium de film de protection de peinture (PPF) — devis entière voiture, face avant et finition mate en Inde.',
    'sites.d4': 'Blog technologique sur l’IA, le SEO et le développement web — tutoriels, outils et analyses.',
    'sites.d5': 'Minuteur en direct des saisons Fortnite — dates de fin, Battle Pass et prochaines saisons.',
    'sites.d6': "Annuaire d'entreprises optimisé SEO — découvrez les commerces locaux d'Hyderabad.",
    'sites.d7': "Design d'intérieur abordable à Hyderabad — cuisines modulaires, chambres et décoration complète.",
    'sites.d8': 'Vitesse GPS pour trains — vitesse en direct, max et moyenne en km/h, mph ou m/s. Gratuit, sans appli.',
    'sites.d9': 'Test de compatibilité amoureuse gratuit — pourcentage et matching en ligne instantané.',
    'sites.d10': 'Compatibilité amoureuse par le nom — score damour instantané par numérologie et astrologie.',
    'sites.d11': 'Calculateur SGPA, CGPA et pourcentage pour les schémas VTU 2025, 2022, 2021 et 2018 — rapide et précis.',
    'sites.d12': 'Outil gratuit pour créateurs et marketeurs — extrait descriptions, titres, tags et métadonnées vidéo.',

    'serv.tag': 'Ce que je fais',
    'serv.title': 'Services',
    'serv.t1': 'Développement Front-end',
    'serv.d1': 'Applications React performantes et accessibles, avec une architecture propre et des outils modernes.',
    'serv.t2': `Tests avec Cypress &amp; Jest`,
    'serv.d2': 'Tests end-to-end Cypress, tests unitaires Jest et qualité du code en production.',
    'serv.t3': "Déploiement d'applications web",
    'serv.d3': 'Pipeline complet de CI/CD jusqu’à la production, avec optimisation des performances et monitoring.',

    'blog.tag': 'Blog',
    'blog.title': 'Derniers articles',
    'blog.h1': 'Tutoriel : créer un portfolio React débutant',
    'blog.d1': 'Construisez un portfolio à couper le souffle avec React — architecture de composants, styling et déploiement.',
    'blog.h2': 'Guide complet de Cypress Testing en 2026',
    'blog.d2': 'De zéro à des tests E2E prêts pour la production — guide pratique Cypress avec exemples réels.',
    'blog.read': `Lire l'article <i class="fas fa-arrow-right"></i>`,

    'contact.tag': 'Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.h3': 'Entrer en contact',
    'contact.p': "Un projet en tête ou à la recherche d'un développeur front-end dévoué ? Je serais ravi d'avoir de vos nouvelles.",
    'contact.locLabel': 'Localisation',
    'contact.locValue': 'Hyderabad, Telangana, Inde',
    'contact.emailLabel': 'E-mail',
    'contact.githubLabel': 'GitHub',
    'ph.name': 'Votre nom',
    'ph.email': 'Votre e-mail',
    'ph.subject': 'Sujet',
    'ph.msg': 'Votre message',
    'contact.send': `<i class="fas fa-paper-plane"></i> Envoyer le message`,

    'foot.desc': 'Des expériences web modernes avec du code propre, des tests complets et une amélioration continue.',
    'foot.nav': 'Navigation',
    'foot.connect': 'Contact',
    'foot.built': `<span class="footer-heart">&hearts;</span> créé par Avinash Bawage &mdash; &copy;`,

    'msg.ok': 'Message envoyé avec succès !',
    'msg.err': "Une erreur s'est produite. Veuillez réessayer."
  };

  // Regional English variants: base English + small spelling overrides
  const EN_GB = Object.assign({}, EN, {
    'about.hl5': 'Performance-optimised, accessible UIs',
    'exp.b5': 'Optimised Core Web Vitals resulting in 40% faster page loads across projects',
    'proj.d1': 'AI-powered SaaS platform for SEO-optimised blog articles with payment integration, user auth, and admin dashboard.',
    'sites.d4': 'Technology blog focused on AI, SEO, and Web Development — tutorials, tools &amp; insights.',
    'sites.d6': 'Business directory platform with SEO optimisation — discover local businesses in Hyderabad.'
  });

  const EN_CA = Object.assign({}, EN, {
    'hero.cta2': `<i class="fas fa-download"></i> Download Résumé`,
    'about.resume': `<i class="fas fa-file-alt"></i> View Full Résumé`
  });

  const DICT = { en: EN, 'en-GB': EN_GB, 'en-CA': EN_CA, ja: JA, fr: FR };

  // ---------- Typed.js strings per language ----------
  const TYPED = {
    en: ['Frontend Developer', 'React Engineer', 'JavaScript Developer', 'Cypress & Jest Testing'],
    'en-GB': ['Frontend Developer', 'React Engineer', 'JavaScript Developer', 'Cypress & Jest Testing'],
    'en-CA': ['Frontend Developer', 'React Engineer', 'JavaScript Developer', 'Cypress & Jest Testing'],
    ja: ['フロントエンド開発者', 'React エンジニア', 'JavaScript 開発者', 'Cypress & Jest テスト'],
    fr: ['Développeur Frontend', 'Ingénieur React', 'Développeur JavaScript', 'Tests Cypress & Jest']
  };

  // ---------- Page meta per language (SEO) ----------
  const META = {
    en: {
      title: 'Avinash Bawage | Frontend Developer @ TCS | React Engineer',
      desc: 'Avinash Bawage — Frontend Developer at TCS (Tata Consultancy Services) with 4.6 years of experience building performant React apps with Cypress & Jest testing.'
    },
    'en-GB': {
      title: 'Avinash Bawage | Frontend Developer @ TCS | React Engineer',
      desc: 'Avinash Bawage — Frontend Developer at TCS (Tata Consultancy Services) with 4.6 years of experience building performant React apps with Cypress & Jest testing.'
    },
    'en-CA': {
      title: 'Avinash Bawage | Frontend Developer @ TCS | React Engineer',
      desc: 'Avinash Bawage — Frontend Developer at TCS (Tata Consultancy Services) with 4.6 years of experience building performant React apps with Cypress & Jest testing.'
    },
    ja: {
      title: 'Avinash Bawage | TCS フロントエンド開発者 | React エンジニア',
      desc: 'Avinash Bawage — TCS（タタ コンサルタンシーサービシズ）で 4.6 年の経験を持つフロントエンド開発者。Cypress & Jest によるテストで高パフォーマンスな React アプリを開発。'
    },
    fr: {
      title: 'Avinash Bawage | Développeur Frontend @ TCS | Ingénieur React',
      desc: 'Avinash Bawage — Développeur Frontend chez TCS (Tata Consultancy Services), 4,6 ans d’expérience en applications React performantes, testées avec Cypress & Jest.'
    }
  };

  // ---------- Helpers ----------
  const LANG_KEY = 'portfolio-lang';
  let current = DEFAULT_LANG;

  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  function t(key) {
    const dict = DICT[current] || DICT[DEFAULT_LANG];
    if (dict[key] !== undefined) return dict[key];
    if (DICT[DEFAULT_LANG][key] !== undefined) return DICT[DEFAULT_LANG][key];
    return key;
  }
  window.t = t;

  function detectInitialLang() {
    // 1) URL ?lang= wins (used by hreflang URLs)
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl && DICT[fromUrl]) return fromUrl;
    // 2) visitor's saved choice
    const saved = safeGet(LANG_KEY);
    if (saved && DICT[saved]) return saved;
    // 3) DEFAULT: English — keeps Google ranking in English
    return DEFAULT_LANG;
  }

  function applyLanguage(code) {
    if (!DICT[code]) code = DEFAULT_LANG;
    current = code;

    // Replace all tagged elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    // aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // <html lang> + meta SEO
    document.documentElement.setAttribute('lang', code);
    const meta = META[code] || META[DEFAULT_LANG];
    if (META[code]) {
      document.title = meta.title;
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', meta.desc);
    }

    // Sync every language dropdown on the page
    document.querySelectorAll('.lang-select').forEach(sel => { sel.value = code; });

    // Typed.js restart with translated strings
    if (typeof window.initTyped === 'function') {
      window.initTyped(TYPED[code] || TYPED[DEFAULT_LANG]);
    }

    safeSet(LANG_KEY, code);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: code } }));
  }

  // ---------- Wire up dropdowns ----------
  function setupSwitchers() {
    document.querySelectorAll('.lang-select').forEach(sel => {
      sel.value = current;
      sel.addEventListener('change', function () {
        applyLanguage(this.value);
      });
    });
  }

  // ---------- Init ----------
  current = detectInitialLang();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { setupSwitchers(); applyLanguage(current); });
  } else {
    setupSwitchers();
    applyLanguage(current);
  }

  window.I18N = { t, apply: applyLanguage, get current() { return current; } };
})();
