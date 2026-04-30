// Centralized project data — source of truth for Projects section and detail pages
import image from "../assets/img/index";

export const getProjects = (language) => {
  const pt = language === "pt";

  return [
    // ── WEB3 ──────────────────────────────────────────────────────────
    {
      id: "defi-yield-farming",
      slug: "defi-yield-farming",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#aa367c",
      title: "DeFi Yield Farming",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma DeFi completa para yield farming com pools de liquidez, staking de tokens e recompensas automáticas. Integração com Uniswap V3 e Chainlink Oracles para preços em tempo real."
        : "Full DeFi platform for yield farming with liquidity pools, token staking and automatic rewards. Integration with Uniswap V3 and Chainlink Oracles for real-time prices.",
      highlights: pt
        ? ["Pools de liquidez com APY dinâmico", "Staking com lock-up periods", "Chainlink Price Feeds em tempo real", "Interface responsiva e intuitiva"]
        : ["Liquidity pools with dynamic APY", "Staking with lock-up periods", "Real-time Chainlink Price Feeds", "Responsive and intuitive UI"],
      imgUrl: image.projDefiYield,
      techStack: ["React", "Solidity", "Ethers.js", "HardHat", "Chainlink", "Uniswap V3"],
    },
    {
      id: "nft-minting-dapp",
      slug: "nft-minting-dapp",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#7c3daa",
      title: "NFT Minting DApp",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma de mint de NFTs com arte generativa criada on-chain. Utiliza VRF da Chainlink para garantir aleatoriedade verdadeira nas raridades e metadados armazenados no IPFS."
        : "NFT minting platform with generative art created on-chain. Uses Chainlink VRF to guarantee true randomness in rarities and metadata stored on IPFS.",
      highlights: pt
        ? ["Arte generativa 100% on-chain", "Raridades com Chainlink VRF", "Metadados no IPFS descentralizado", "Mint com whitelist e merkle proof"]
        : ["100% on-chain generative art", "Rarities with Chainlink VRF", "Metadata on decentralized IPFS", "Mint with whitelist & merkle proof"],
      imgUrl: image.projNftMint,
      techStack: ["React", "Solidity", "HardHat", "IPFS", "Chainlink VRF", "OpenZeppelin"],
    },
    {
      id: "dao-governance",
      slug: "dao-governance",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#3d7caa",
      title: "DAO Governance Platform",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Sistema completo de governança descentralizada com criação de propostas, votação ponderada por tokens, delegação de votos e timelock para execução segura de decisões da comunidade."
        : "Complete decentralized governance system with proposal creation, token-weighted voting, vote delegation and timelock for secure execution of community decisions.",
      highlights: pt
        ? ["Criação e votação de propostas", "Delegação de poder de voto", "Timelock para execução segura", "Integração com The Graph"]
        : ["Proposal creation & voting", "Vote power delegation", "Timelock for secure execution", "The Graph integration"],
      imgUrl: image.projDaoGov,
      techStack: ["NextJs", "Solidity", "Governor Bravo", "Timelock", "The Graph", "IPFS"],
    },
    {
      id: "token-launchpad",
      slug: "token-launchpad",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#aa6e3d",
      title: "Token Launchpad",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Launchpad descentralizado para IDOs com sistema de tiers por staking, alocação garantida, whitelist gerenciada por merkle tree e vesting automático via smart contracts."
        : "Decentralized launchpad for IDOs with staking tier system, guaranteed allocation, merkle tree managed whitelist and automatic vesting via smart contracts.",
      highlights: pt
        ? ["4 tiers de acesso por staking", "Whitelist com Merkle Tree", "Vesting automático on-chain", "Suporte multi-chain (ETH/BSC)"]
        : ["4 staking access tiers", "Whitelist via Merkle Tree", "Automatic on-chain vesting", "Multi-chain support (ETH/BSC)"],
      imgUrl: image.projLaunchpad,
      techStack: ["React", "Solidity", "HardHat", "Merkle Tree", "OpenZeppelin", "BSC"],
    },
    {
      id: "cross-chain-bridge",
      slug: "cross-chain-bridge",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#3daa7c",
      title: "Cross-Chain Token Bridge",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Bridge cross-chain para transferência de tokens entre Ethereum, Polygon e BSC. Implementa protocolo Lock-Mint com validadores descentralizados e estimativa de gas em tempo real."
        : "Cross-chain bridge for token transfer between Ethereum, Polygon and BSC. Implements Lock-Mint protocol with decentralized validators and real-time gas estimation.",
      highlights: pt
        ? ["Suporte a ETH, Polygon e BSC", "Protocolo Lock-Mint seguro", "Estimativa de gas em tempo real", "Validadores descentralizados"]
        : ["ETH, Polygon & BSC support", "Secure Lock-Mint protocol", "Real-time gas estimation", "Decentralized validators"],
      imgUrl: image.projTokenBridge,
      techStack: ["React", "Solidity", "Polygon", "BSC", "Ethers.js", "Node.js"],
    },
    {
      id: "decentralized-social",
      slug: "decentralized-social",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#7caa3d",
      title: "Decentralized Social Media",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Rede social Web3 com autenticação por carteira, recompensas em tokens por engajamento, posts armazenados no IPFS e NFT badges exclusivos para criadores de conteúdo verificados."
        : "Web3 social network with wallet authentication, token rewards for engagement, posts stored on IPFS and exclusive NFT badges for verified content creators.",
      highlights: pt
        ? ["Login com carteira Web3", "Recompensas em token por post", "Conteúdo armazenado no IPFS", "NFT badges para criadores verificados"]
        : ["Web3 wallet login", "Token rewards per post", "Content stored on IPFS", "NFT badges for verified creators"],
      imgUrl: image.projSocialDapp,
      techStack: ["React", "Solidity", "IPFS", "Lens Protocol", "The Graph", "Polygon"],
    },
    {
      id: "raffle-dapp",
      slug: "raffle-dapp",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#aa3d3d",
      title: "Raffle DApp",
      subTitle: pt ? "Design, Smart Contract & Desenvolvimento" : "Design, Smart Contract & Development",
      description: pt
        ? "Aplicação descentralizada para criar e participar de rifas on-chain. O contrato inteligente garante transparência total. Usa Chainlink VRF para aleatoriedade comprovável no sorteio."
        : "Decentralized application to create and participate in on-chain raffles. The smart contract ensures full transparency. Uses Chainlink VRF for provably fair randomness in the draw.",
      highlights: pt
        ? ["Rifas transparentes on-chain", "Sorteio com Chainlink VRF", "Criação sem permissão", "Histórico auditável na blockchain"]
        : ["Transparent on-chain raffles", "Draw with Chainlink VRF", "Permissionless creation", "Auditable blockchain history"],
      imgUrl: image.projImg13,
      techStack: ["React", "Tailwindcss", "Solidity", "HardHat", "IPFS", "Chainlink"],
    },
    {
      id: "nft-marketplace",
      slug: "nft-marketplace",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#4a2fbd",
      title: "NFT Marketplace",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Marketplace NFT para mint, compra e venda com interface intuitiva. Suporte a coleções ERC-721 e ERC-1155, royalties automáticos para criadores e leilões em tempo real."
        : "NFT Marketplace for minting, buying and selling with intuitive interface. Support for ERC-721 and ERC-1155 collections, automatic royalties for creators and real-time auctions.",
      highlights: pt
        ? ["Suporte ERC-721 e ERC-1155", "Royalties automáticos on-chain", "Leilões em tempo real", "IPFS para metadados e imagens"]
        : ["ERC-721 & ERC-1155 support", "Automatic on-chain royalties", "Real-time auctions", "IPFS for metadata & images"],
      imgUrl: image.projImg10,
      techStack: ["NextJs", "Tailwindcss", "Solidity", "IPFS", "OpenZeppelin", "Truffle"],
    },
    {
      id: "web3-portfolio",
      slug: "web3-portfolio",
      category: "web3",
      categoryLabel: "Web3",
      accentColor: "#2fbda0",
      title: "Web3 Personal Site",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Portfólio pessoal powered by Web3. Cada projeto é um NFT único na blockchain com imagem, título, descrição e tecnologias armazenadas on-chain, garantindo transparência e autenticidade."
        : "Web3-powered personal portfolio. Each project is a unique NFT on the blockchain with image, title, description and technologies stored on-chain, ensuring transparency and authenticity.",
      highlights: pt
        ? ["Projetos mintados como NFTs", "Dados 100% on-chain", "Autenticidade verificável", "Deploy sem servidor centralizado"]
        : ["Projects minted as NFTs", "100% on-chain data", "Verifiable authenticity", "Serverless decentralized deploy"],
      imgUrl: image.projImg12,
      techStack: ["React", "CSS", "NodeJs", "Solidity", "IPFS", "OpenZeppelin"],
    },

    // ── FULL STACK ────────────────────────────────────────────────────
    {
      id: "crm-saas",
      slug: "crm-saas",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#2a9d8f",
      title: "CRM SaaS Platform",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma CRM SaaS completa com pipeline de vendas em kanban, automação de follow-ups, relatórios em tempo real e integração com e-mail marketing. Multi-tenant com planos de assinatura."
        : "Complete SaaS CRM platform with kanban sales pipeline, follow-up automation, real-time reports and email marketing integration. Multi-tenant with subscription plans.",
      highlights: pt
        ? ["Pipeline kanban de vendas", "Automação de follow-ups", "Relatórios em tempo real", "Multi-tenant com Stripe Billing"]
        : ["Kanban sales pipeline", "Follow-up automation", "Real-time reports", "Multi-tenant with Stripe Billing"],
      imgUrl: image.projCrmSaas,
      techStack: ["React", "Tailwindcss", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      id: "real-estate",
      slug: "real-estate",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#e76f51",
      title: "Real Estate Platform",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma imobiliária com listagens de propriedades, integração com mapas interativos, tour virtual 3D, sistema de avaliação de bairros e calculadora de financiamento em tempo real."
        : "Real estate platform with property listings, interactive map integration, 3D virtual tour, neighborhood rating system and real-time financing calculator.",
      highlights: pt
        ? ["Busca avançada com filtros", "Tour virtual 3D integrado", "Calculadora de financiamento", "Integração Google Maps API"]
        : ["Advanced search with filters", "Integrated 3D virtual tour", "Financing calculator", "Google Maps API integration"],
      imgUrl: image.projRealEstate,
      techStack: ["NextJs", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
    },
    {
      id: "ai-content-saas",
      slug: "ai-content-saas",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#6a0dad",
      title: "AI Content SaaS",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma SaaS de geração de conteúdo com IA para artigos, posts e e-mails. Editor rico com sugestões em tempo real, reescrita de parágrafos, detecção de tom e métricas de uso."
        : "AI-powered SaaS content generation platform for articles, posts and emails. Rich editor with real-time suggestions, paragraph rewriting, tone detection and usage metrics.",
      highlights: pt
        ? ["Geração de texto com GPT-4", "Sugestões em tempo real", "Detecção automática de tom", "Dashboard de métricas de uso"]
        : ["Text generation with GPT-4", "Real-time suggestions", "Automatic tone detection", "Usage metrics dashboard"],
      imgUrl: image.projAiSaas,
      techStack: ["React", "Node.js", "TypeScript", "OpenAI API", "PostgreSQL", "Stripe"],
    },
    {
      id: "crypto-tracker",
      slug: "crypto-tracker",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#f4a261",
      title: "Crypto Portfolio Tracker",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Dashboard de rastreamento de portfólio cripto com suporte a múltiplas carteiras (MetaMask, Ledger, Trezor), gráficos P&L históricos, alocação de ativos e alertas de preço configuráveis."
        : "Crypto portfolio tracking dashboard with support for multiple wallets (MetaMask, Ledger, Trezor), historical P&L charts, asset allocation and configurable price alerts.",
      highlights: pt
        ? ["Suporte MetaMask, Ledger, Trezor", "Gráficos P&L históricos", "Alertas de preço via push/email", "Alocação de ativos em tempo real"]
        : ["MetaMask, Ledger, Trezor support", "Historical P&L charts", "Price alerts via push/email", "Real-time asset allocation"],
      imgUrl: image.projWalletTracker,
      techStack: ["React", "TypeScript", "Node.js", "CoinGecko API", "PostgreSQL", "AWS"],
    },
    {
      id: "erp-dashboard",
      slug: "erp-dashboard",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#457b9d",
      title: "ERP Dashboard",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Sistema ERP desenvolvido para otimizar rotinas empresariais, cobrindo desde cadastro de funcionários até gerenciamento de times e projetos com métricas de performance em tempo real."
        : "ERP system developed to optimize business routines, covering everything from employee registration to team and project management with real-time performance metrics.",
      highlights: pt
        ? ["Gestão de funcionários e times", "Módulo de projetos integrado", "KPIs em tempo real", "Relatórios exportáveis em PDF/Excel"]
        : ["Employee & team management", "Integrated project module", "Real-time KPIs", "Exportable PDF/Excel reports"],
      imgUrl: image.projImg7,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "AWS"],
    },
    {
      id: "ecommerce",
      slug: "ecommerce",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#e9c46a",
      title: "E-Commerce Solution",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Solução e-commerce completa com gerenciamento de produtos, carrinho inteligente, integração de pagamentos (Stripe, PayPal), painel de vendedor e analytics de conversão."
        : "Complete e-commerce solution with product management, smart cart, payment integration (Stripe, PayPal), seller panel and conversion analytics.",
      highlights: pt
        ? ["Catálogo com busca e filtros", "Checkout integrado Stripe/PayPal", "Painel do vendedor", "Analytics de conversão"]
        : ["Catalog with search & filters", "Stripe/PayPal checkout", "Seller dashboard", "Conversion analytics"],
      imgUrl: image.projImg5,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Stripe API", "AWS"],
    },
    {
      id: "financial-platform",
      slug: "financial-platform",
      category: "fullstack",
      categoryLabel: "Full Stack",
      accentColor: "#2d6a4f",
      title: "Financial Management Platform",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma de gestão financeira pessoal e empresarial com rastreamento de despesas, integração bancária Open Finance, metas de economia e relatórios de fluxo de caixa."
        : "Personal and business financial management platform with expense tracking, Open Finance banking integration, savings goals and cash flow reports.",
      highlights: pt
        ? ["Integração Open Finance/Pix", "Metas de economia automáticas", "Relatórios de fluxo de caixa", "Categorização inteligente de gastos"]
        : ["Open Finance/Pix integration", "Automatic savings goals", "Cash flow reports", "Smart expense categorization"],
      imgUrl: image.projImg6,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "AWS"],
    },

    // ── FRONT-END ─────────────────────────────────────────────────────
    {
      id: "elearning",
      slug: "elearning",
      category: "frontend",
      categoryLabel: "Front-End",
      accentColor: "#0077b6",
      title: "E-Learning Platform",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Plataforma de aprendizado online com catálogo de cursos, player de vídeo com progresso salvo, sistema de streaks diários, badges de conquista e emissão de certificados verificáveis."
        : "Online learning platform with course catalog, video player with saved progress, daily streaks system, achievement badges and verifiable certificate issuance.",
      highlights: pt
        ? ["Player com progresso salvo", "Streaks e gamificação", "Certificados verificáveis", "Catálogo com busca e filtros"]
        : ["Player with saved progress", "Streaks & gamification", "Verifiable certificates", "Catalog with search & filters"],
      imgUrl: image.projElearn,
      techStack: ["React", "Tailwindcss", "TypeScript", "Node.js", "AWS S3"],
    },
    {
      id: "health-fitness",
      slug: "health-fitness",
      category: "frontend",
      categoryLabel: "Front-End",
      accentColor: "#d62828",
      title: "Health & Fitness App",
      subTitle: pt ? "Design & Desenvolvimento" : "Design & Development",
      description: pt
        ? "Dashboard de saúde e fitness com rastreamento de treinos, registro nutricional, análise de sono, gráficos de métricas corporais e anéis de metas inspirados no Apple Watch."
        : "Health and fitness dashboard with workout tracking, nutrition logging, sleep analysis, body metrics charts and goal rings inspired by Apple Watch.",
      highlights: pt
        ? ["Rastreamento de treinos", "Registro nutricional detalhado", "Análise de qualidade do sono", "Anéis de metas estilo Apple Watch"]
        : ["Workout tracking", "Detailed nutrition logging", "Sleep quality analysis", "Apple Watch style goal rings"],
      imgUrl: image.projHealthApp,
      techStack: ["React", "Tailwindcss", "TypeScript", "Chart.js", "HealthKit API"],
    },
    {
      id: "company-landing",
      slug: "company-landing",
      category: "frontend",
      categoryLabel: "Front-End",
      accentColor: "#8338ec",
      title: "Landing Page for Company",
      subTitle: pt ? "Desenvolvimento" : "Development",
      description: pt
        ? "Landing page responsiva desenvolvida com foco em conversão e performance. Cada pixel foi cuidadosamente ajustado para adaptar-se perfeitamente a telas de todos os tamanhos."
        : "Responsive landing page developed with focus on conversion and performance. Every pixel was carefully adjusted to adapt perfectly to screens of all sizes.",
      highlights: pt
        ? ["Design mobile-first", "Score 100 no Google Lighthouse", "Animações com Framer Motion", "SEO otimizado"]
        : ["Mobile-first design", "Google Lighthouse score 100", "Animations with Framer Motion", "Optimized SEO"],
      imgUrl: image.projImg8,
      techStack: ["React", "Tailwindcss"],
    },
    {
      id: "startup-landing",
      slug: "startup-landing",
      category: "frontend",
      categoryLabel: "Front-End",
      accentColor: "#fb5607",
      title: "Business Startup Landing Page",
      subTitle: pt ? "Desenvolvimento" : "Development",
      description: pt
        ? "Landing page com abordagem mobile-first. Cada detalhe foi meticulosamente projetado para se encaixar em qualquer dispositivo, proporcionando uma experiência consistente e envolvente."
        : "Landing page developed with a responsive-first approach. Every detail was meticulously designed to fit perfectly on any device, providing a consistent and engaging experience.",
      highlights: pt
        ? ["Layout responsivo perfeito", "CTA com alta conversão", "Performance otimizada", "Design moderno e profissional"]
        : ["Perfect responsive layout", "High-conversion CTA", "Optimized performance", "Modern and professional design"],
      imgUrl: image.projImg3,
      techStack: ["React", "CSS"],
    },

    // ── DESIGN ────────────────────────────────────────────────────────
    {
      id: "brand-identity-aurora",
      slug: "brand-identity-aurora",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#c9a84c",
      title: pt ? "Brand Identity — Aurora Finance" : "Brand Identity — Aurora Finance",
      subTitle: pt ? "Branding & Identidade Visual" : "Branding & Visual Identity",
      description: pt
        ? "Criação completa da identidade visual da Aurora Financial Consultants: logo mark, tipografia, paleta premium dourado e preto, papelaria corporativa (cartão, letterhead, envelope) e brand book com diretrizes de uso."
        : "Complete visual identity creation for Aurora Financial Consultants: logo mark, typography, premium gold & black palette, corporate stationery (card, letterhead, envelope) and brand book with usage guidelines.",
      highlights: pt
        ? ["Logo mark exclusivo e versões", "Paleta premium ouro e preto", "Papelaria corporativa completa", "Brand book com diretrizes de uso"]
        : ["Exclusive logo mark & versions", "Premium gold & black palette", "Complete corporate stationery", "Brand book with usage guidelines"],
      imgUrl: image.designBrandIdentity,
      gallery: [image.designBrandIdentity, image.designLogoCreation, image.designBrandVideo],
      techStack: ["Adobe Illustrator", "Adobe InDesign", "Figma", "Photoshop"],
    },
    {
      id: "logo-design-quantumix",
      slug: "logo-design-quantumix",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#7b61ff",
      title: pt ? "Logo Design — Quantumix Tech" : "Logo Design — Quantumix Tech",
      subTitle: pt ? "Design de Logo & Branding" : "Logo Design & Branding",
      description: pt
        ? "Design de logotipo para startup de tecnologia com ícone geométrico em gradiente ciano/roxo, grid de construção, variações (primária, monocromática, ícone isolado, app icon) e manual de uso em formato PDF."
        : "Logo design for technology startup featuring geometric icon in cyan/purple gradient, construction grid, variations (primary, monochrome, isolated icon, app icon) and PDF usage manual.",
      highlights: pt
        ? ["Ícone baseado em golden ratio", "5 variações do logo", "Grid de construção documentado", "Manual de uso em PDF"]
        : ["Icon based on golden ratio", "5 logo variations", "Documented construction grid", "PDF usage manual"],
      imgUrl: image.designLogoCreation,
      gallery: [image.designLogoCreation, image.designBrandIdentity, image.designHumanoidConcept],
      techStack: ["Adobe Illustrator", "Figma", "After Effects"],
    },
    {
      id: "concept-art-aether-07",
      slug: "concept-art-aether-07",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#00d4ff",
      title: pt ? "Concept Art — Aether Unit 07" : "Concept Art — Aether Unit 07",
      subTitle: pt ? "Concept Art & Character Design" : "Concept Art & Character Design",
      description: pt
        ? "Design completo de personagem humanoide cyberpunk para produção de videogame. Inclui vistas frontal e lateral com callouts técnicos, guia de materiais (metal, circuitos, viseira), paleta de cores e lore sheet."
        : "Complete cyberpunk humanoid character design for video game production. Includes front and side views with technical callouts, material guide (metal, circuits, visor), color palette and lore sheet.",
      highlights: pt
        ? ["Vistas frontal e lateral detalhadas", "Callouts técnicos de componentes", "Guia de materiais e shaders", "Lore sheet e backstory"]
        : ["Detailed front & side views", "Technical component callouts", "Material & shader guide", "Lore sheet & backstory"],
      imgUrl: image.designHumanoidConcept,
      gallery: [image.designHumanoidConcept, image.design3dProduct, image.designBrandVideo],
      techStack: ["Photoshop", "Procreate", "ZBrush", "Blender"],
    },
    {
      id: "3d-product-noir-velour",
      slug: "3d-product-noir-velour",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#b8972a",
      title: pt ? "3D Product — Noir Velour Parfum" : "3D Product — Noir Velour Parfum",
      subTitle: pt ? "Modelagem 3D & Visualização de Produto" : "3D Modeling & Product Visualization",
      description: pt
        ? "Modelagem e renderização 3D ultra-realista de embalagem premium para perfumaria. Vidro cristal com texturas de refração, metal dourado gravado e caixa de veludo preto. Iluminação dramática de estúdio via Octane Render."
        : "Ultra-realistic 3D modeling and rendering of premium perfumery packaging. Crystal glass with refraction textures, engraved gold metal and black velvet box. Dramatic studio lighting via Octane Render.",
      highlights: pt
        ? ["Renderização fotorrealista Octane", "Materiais de vidro e metal PBR", "Iluminação dramática de estúdio", "Arquivos prontos para gráfica"]
        : ["Photorealistic Octane rendering", "PBR glass & metal materials", "Dramatic studio lighting", "Print-ready files"],
      imgUrl: image.design3dProduct,
      gallery: [image.design3dProduct, image.designBrandIdentity, image.designHumanoidConcept],
      techStack: ["Blender", "Octane Render", "Substance Painter", "Photoshop"],
    },
    {
      id: "brand-video-nexus",
      slug: "brand-video-nexus",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#a855f7",
      title: pt ? "Brand Video — Nexus Corp" : "Brand Video — Nexus Corp",
      subTitle: pt ? "Motion Design & Produção de Vídeo" : "Motion Design & Video Production",
      description: pt
        ? "Produção de vídeo institucional completo para a Nexus Corp: storyboard de 12 frames, animação de logo reveal, tipografia cinética, VFX de partículas de energia, color grading cinematográfico e entrega em 4K."
        : "Complete brand video production for Nexus Corp: 12-frame storyboard, logo reveal animation, kinetic typography, energy particle VFX, cinematic color grading and 4K delivery.",
      highlights: pt
        ? ["Storyboard aprovado em 12 frames", "Logo reveal com VFX de energia", "Tipografia cinética animada", "Entregue em 4K para todas as plataformas"]
        : ["12-frame approved storyboard", "Logo reveal with energy VFX", "Animated kinetic typography", "Delivered in 4K for all platforms"],
      imgUrl: image.designBrandVideo,
      gallery: [image.designBrandVideo, image.design3dProduct, image.designLogoCreation],
      techStack: ["After Effects", "Premiere Pro", "Cinema 4D", "DaVinci Resolve"],
    },
    {
      id: "visual-identity-system",
      slug: "visual-identity-system",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#0ea5e9",
      title: pt ? "Sistema de Identidade Visual" : "Visual Identity System",
      subTitle: pt ? "Design de Sistema & Brand Guidelines" : "System Design & Brand Guidelines",
      description: pt
        ? "Desenvolvimento de sistema completo de identidade visual: paleta de cores primária e secundária, hierarquia tipográfica (display, heading, body, caption), iconografia, grid e regras de espaçamento e aplicações digitais e impressas."
        : "Development of complete visual identity system: primary and secondary color palette, typographic hierarchy (display, heading, body, caption), iconography, grid and spacing rules and digital/print applications.",
      highlights: pt
        ? ["Paleta completa com tokens", "Hierarquia tipográfica 4 níveis", "Biblioteca de 60+ ícones", "Aplicações digitais e impressas"]
        : ["Full palette with design tokens", "4-level typographic hierarchy", "60+ icon library", "Digital and print applications"],
      imgUrl: image.designBrandIdentity,
      gallery: [image.designBrandIdentity, image.designLogoCreation, image.design3dProduct],
      techStack: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Zeplin"],
    },
    {
      id: "concept-art-android-female",
      slug: "concept-art-android-female",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#ec4899",
      title: pt ? "Concept Art — Android EVE" : "Concept Art — Android EVE",
      subTitle: pt ? "Character Design & Concept Art" : "Character Design & Concept Art",
      description: pt
        ? "Design de personagem androide feminina futurista para produção cinematográfica. Armadura cromada com circuitos bioluminescentes, iluminação neon púrpura e azul, vistas de detalhe de equipamentos e ficha técnica completa."
        : "Futuristic female android character design for cinematic production. Chrome armor with bioluminescent circuits, purple and blue neon lighting, equipment detail views and complete technical sheet.",
      highlights: pt
        ? ["Armadura cromada com circuitos", "Iluminação neon bioluminescente", "Vistas de detalhe de equipamentos", "Ficha técnica e paleta de materiais"]
        : ["Chrome armor with circuits", "Bioluminescent neon lighting", "Equipment detail views", "Technical sheet & material palette"],
      imgUrl: image.designHumanoidConcept,
      gallery: [image.designHumanoidConcept, image.design3dProduct, image.designBrandVideo],
      techStack: ["Photoshop", "Procreate", "ZBrush", "Marvelous Designer"],
    },
    {
      id: "3d-architecture-viz",
      slug: "3d-architecture-viz",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#10b981",
      title: pt ? "3D Architecture Visualization" : "3D Architecture Visualization",
      subTitle: pt ? "Visualização Arquitetônica 3D" : "3D Architectural Visualization",
      description: pt
        ? "Visualização arquitetônica 3D fotorrealista de edifício comercial futurista. Atmosfera volumétrica ao entardecer, estrutura de vidro e aço com reflexos dramáticos, vegetação integrada e pessoas para escala."
        : "Photorealistic 3D architectural visualization of a futuristic commercial building. Volumetric dusk atmosphere, glass and steel structure with dramatic reflections, integrated vegetation and people for scale.",
      highlights: pt
        ? ["Render fotorrealista ao entardecer", "Materiais PBR vidro e aço", "Atmosfera volumétrica com GI", "Vista aérea e perspectiva térrea"]
        : ["Photorealistic dusk render", "PBR glass & steel materials", "Volumetric atmosphere with GI", "Aerial and ground perspective"],
      imgUrl: image.design3dProduct,
      gallery: [image.design3dProduct, image.designBrandIdentity, image.designHumanoidConcept],
      techStack: ["3ds Max", "V-Ray", "Lumion", "Photoshop"],
    },
    {
      id: "motion-graphics-social",
      slug: "motion-graphics-social",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#f97316",
      title: pt ? "Motion Graphics — Social Media" : "Motion Graphics — Social Media",
      subTitle: pt ? "Motion Design & Animação" : "Motion Design & Animation",
      description: pt
        ? "Pacote de motion graphics para redes sociais: 20 templates animados para Reels, Stories e feed. Tipografia cinética, transições com partículas, logos animados e paleta consistente de marca para postagens de alto engajamento."
        : "Motion graphics pack for social media: 20 animated templates for Reels, Stories and feed. Kinetic typography, particle transitions, animated logos and consistent brand palette for high-engagement posts.",
      highlights: pt
        ? ["20 templates animados prontos", "Formatos Reels, Stories e Feed", "Tipografia cinética de marca", "Arquivos editáveis em After Effects"]
        : ["20 ready animated templates", "Reels, Stories and Feed formats", "Brand kinetic typography", "Editable After Effects files"],
      imgUrl: image.designBrandVideo,
      gallery: [image.designBrandVideo, image.designLogoCreation, image.design3dProduct],
      techStack: ["After Effects", "Premiere Pro", "Photoshop", "Illustrator"],
    },
    {
      id: "logo-design-restaurant",
      slug: "logo-design-restaurant",
      category: "design",
      categoryLabel: "Design",
      accentColor: "#ef4444",
      title: pt ? "Logo & Brand — Restaurante Alma" : "Logo & Brand — Restaurante Alma",
      subTitle: pt ? "Logo Design & Identidade Visual" : "Logo Design & Visual Identity",
      description: pt
        ? "Criação de logo e identidade visual para restaurante premium. Marca tipográfica com ícone de folha minimalista, cardápio impresso, embalagens, sinalização e kit digital completo para redes sociais."
        : "Logo and visual identity creation for premium restaurant. Typographic mark with minimalist leaf icon, printed menu, packaging, signage and complete digital kit for social networks.",
      highlights: pt
        ? ["Logo mark premium minimalista", "Cardápio e embalagem impressa", "Sinalização ambiente e menu digital", "Kit redes sociais completo"]
        : ["Premium minimalist logo mark", "Printed menu & packaging", "Environment signage & digital menu", "Complete social media kit"],
      imgUrl: image.designLogoCreation,
      gallery: [image.designLogoCreation, image.designBrandIdentity, image.design3dProduct],
      techStack: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Photoshop"],
    },
  ];
};
