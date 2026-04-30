import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import image from "../assets/img/index";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useLanguage } from "../i18n/LanguageContext";

export const Projects = () => {
  const { t, language } = useLanguage();
  const projectsT = t("projects");

  const blockchain = [
    {
      title: "DeFi Yield Farming",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma DeFi completa para yield farming com pools de liquidez, staking de tokens e recompensas automáticas. Integração com Uniswap V3 e Chainlink Oracles para preços em tempo real."
          : "Full DeFi platform for yield farming with liquidity pools, token staking and automatic rewards. Integration with Uniswap V3 and Chainlink Oracles for real-time prices.",
      imgUrl: image.projDefiYield,
      techStack: ["React", "Solidity", "Ethers.js", "HardHat", "Chainlink", "Uniswap V3"],
    },
    {
      title: "NFT Minting DApp",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma de mint de NFTs com arte generativa criada on-chain. Utiliza VRF da Chainlink para garantir aleatoriedade verdadeira nas raridades e metadados armazenados no IPFS."
          : "NFT minting platform with generative art created on-chain. Uses Chainlink VRF to guarantee true randomness in rarities and metadata stored on IPFS.",
      imgUrl: image.projNftMint,
      techStack: ["React", "Solidity", "HardHat", "IPFS", "Chainlink VRF", "OpenZeppelin"],
    },
    {
      title: "DAO Governance Platform",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Sistema completo de governança descentralizada com criação de propostas, votação ponderada por tokens, delegação de votos e timelock para execução segura de decisões da comunidade."
          : "Complete decentralized governance system with proposal creation, token-weighted voting, vote delegation and timelock for secure execution of community decisions.",
      imgUrl: image.projDaoGov,
      techStack: ["NextJs", "Solidity", "Governor Bravo", "Timelock", "The Graph", "IPFS"],
    },
    {
      title: "Token Launchpad",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Launchpad descentralizado para IDOs com sistema de tiers por staking, alocação garantida, whitelist gerenciada por merkle tree e vesting automático via smart contracts."
          : "Decentralized launchpad for IDOs with staking tier system, guaranteed allocation, merkle tree managed whitelist and automatic vesting via smart contracts.",
      imgUrl: image.projLaunchpad,
      techStack: ["React", "Solidity", "HardHat", "Merkle Tree", "OpenZeppelin", "BSC"],
    },
    {
      title: "Cross-Chain Token Bridge",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Bridge cross-chain para transferência de tokens entre Ethereum, Polygon e BSC. Implementa protocolo Lock-Mint com validadores descentralizados e estimativa de gas em tempo real."
          : "Cross-chain bridge for token transfer between Ethereum, Polygon and BSC. Implements Lock-Mint protocol with decentralized validators and real-time gas estimation.",
      imgUrl: image.projTokenBridge,
      techStack: ["React", "Solidity", "Polygon", "BSC", "Ethers.js", "Node.js"],
    },
    {
      title: "Decentralized Social Media",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Rede social Web3 com autenticação por carteira, recompensas em tokens por engajamento, posts armazenados no IPFS e NFT badges exclusivos para criadores de conteúdo verificados."
          : "Web3 social network with wallet authentication, token rewards for engagement, posts stored on IPFS and exclusive NFT badges for verified content creators.",
      imgUrl: image.projSocialDapp,
      techStack: ["React", "Solidity", "IPFS", "Lens Protocol", "The Graph", "Polygon"],
    },
    {
      title: "Raffle DApp",
      subTitle: language === "pt" ? "Design, Smart Contract & Desenvolvimento" : "Design, Smart Contract & Development",
      description:
        language === "pt"
          ? "Aplicação descentralizada para criar e participar de rifas on-chain. O contrato inteligente garante transparência total. Usa Chainlink VRF para aleatoriedade comprovável no sorteio."
          : "Decentralized application to create and participate in on-chain raffles. The smart contract ensures full transparency. Uses Chainlink VRF for provably fair randomness in the draw.",
      imgUrl: image.projImg13,
      techStack: ["React", "Tailwindcss", "Solidity", "HardHat", "IPFS", "Chainlink"],
    },
    {
      title: "NFT Marketplace",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Marketplace NFT para mint, compra e venda com interface intuitiva. Suporte a coleções ERC-721 e ERC-1155, royalties automáticos para criadores e leilões em tempo real."
          : "NFT Marketplace for minting, buying and selling with intuitive interface. Support for ERC-721 and ERC-1155 collections, automatic royalties for creators and real-time auctions.",
      imgUrl: image.projImg10,
      techStack: ["NextJs", "Tailwindcss", "Solidity", "IPFS", "OpenZeppelin", "Truffle"],
    },
    {
      title: "Web3 Personal Site",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Portfólio pessoal powered by Web3. Cada projeto é um NFT único na blockchain com imagem, título, descrição e tecnologias armazenadas on-chain, garantindo transparência e autenticidade."
          : "Web3-powered personal portfolio. Each project is a unique NFT on the blockchain with image, title, description and technologies stored on-chain, ensuring transparency and authenticity.",
      imgUrl: image.projImg12,
      techStack: ["React", "CSS", "NodeJs", "Solidity", "IPFS", "OpenZeppelin"],
    },
  ];

  const fullStack = [
    {
      title: "CRM SaaS Platform",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma CRM SaaS completa com pipeline de vendas em kanban, automação de follow-ups, relatórios em tempo real e integração com e-mail marketing. Multi-tenant com planos de assinatura."
          : "Complete SaaS CRM platform with kanban sales pipeline, follow-up automation, real-time reports and email marketing integration. Multi-tenant with subscription plans.",
      imgUrl: image.projCrmSaas,
      techStack: ["React", "Tailwindcss", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      title: "Real Estate Platform",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma imobiliária com listagens de propriedades, integração com mapas interativos, tour virtual 3D, sistema de avaliação de bairros e calculadora de financiamento em tempo real."
          : "Real estate platform with property listings, interactive map integration, 3D virtual tour, neighborhood rating system and real-time financing calculator.",
      imgUrl: image.projRealEstate,
      techStack: ["NextJs", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
    },
    {
      title: "AI Content SaaS",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma SaaS de geração de conteúdo com IA para artigos, posts e e-mails. Editor rico com sugestões em tempo real, reescrita de parágrafos, detecção de tom e métricas de uso."
          : "AI-powered SaaS content generation platform for articles, posts and emails. Rich editor with real-time suggestions, paragraph rewriting, tone detection and usage metrics.",
      imgUrl: image.projAiSaas,
      techStack: ["React", "Node.js", "TypeScript", "OpenAI API", "PostgreSQL", "Stripe"],
    },
    {
      title: "Crypto Portfolio Tracker",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Dashboard de rastreamento de portfólio cripto com suporte a múltiplas carteiras (MetaMask, Ledger, Trezor), gráficos P&L históricos, alocação de ativos e alertas de preço configuráveis."
          : "Crypto portfolio tracking dashboard with support for multiple wallets (MetaMask, Ledger, Trezor), historical P&L charts, asset allocation and configurable price alerts.",
      imgUrl: image.projWalletTracker,
      techStack: ["React", "TypeScript", "Node.js", "CoinGecko API", "PostgreSQL", "AWS"],
    },
    {
      title: "ERP Dashboard",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Sistema ERP desenvolvido para otimizar rotinas empresariais, cobrindo desde cadastro de funcionários até gerenciamento de times e projetos com métricas de performance em tempo real."
          : "ERP system developed to optimize business routines, covering everything from employee registration to team and project management with real-time performance metrics.",
      imgUrl: image.projImg7,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "AWS"],
    },
    {
      title: "E-Commerce Solution",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Solução e-commerce completa com gerenciamento de produtos, carrinho inteligente, integração de pagamentos (Stripe, PayPal), painel de vendedor e analytics de conversão."
          : "Complete e-commerce solution with product management, smart cart, payment integration (Stripe, PayPal), seller panel and conversion analytics.",
      imgUrl: image.projImg5,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Stripe API", "AWS"],
    },
    {
      title: "Financial Management Platform",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma de gestão financeira pessoal e empresarial com rastreamento de despesas, integração bancária Open Finance, metas de economia e relatórios de fluxo de caixa."
          : "Personal and business financial management platform with expense tracking, Open Finance banking integration, savings goals and cash flow reports.",
      imgUrl: image.projImg6,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "AWS"],
    },
  ];

  const frontEnd = [
    {
      title: "E-Learning Platform",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Plataforma de aprendizado online com catálogo de cursos, player de vídeo com progresso salvo, sistema de streaks diários, badges de conquista e emissão de certificados verificáveis."
          : "Online learning platform with course catalog, video player with saved progress, daily streaks system, achievement badges and verifiable certificate issuance.",
      imgUrl: image.projElearn,
      techStack: ["React", "Tailwindcss", "TypeScript", "Node.js", "AWS S3"],
    },
    {
      title: "Health & Fitness App",
      subTitle: language === "pt" ? "Design & Desenvolvimento" : "Design & Development",
      description:
        language === "pt"
          ? "Dashboard de saúde e fitness com rastreamento de treinos, registro nutricional, análise de sono, gráficos de métricas corporais e anéis de metas inspirados no Apple Watch."
          : "Health and fitness dashboard with workout tracking, nutrition logging, sleep analysis, body metrics charts and goal rings inspired by Apple Watch.",
      imgUrl: image.projHealthApp,
      techStack: ["React", "Tailwindcss", "TypeScript", "Chart.js", "HealthKit API"],
    },
    {
      title: "Landing Page for Company",
      subTitle: language === "pt" ? "Desenvolvimento" : "Development",
      description:
        language === "pt"
          ? "Landing page responsiva desenvolvida com foco em conversão e performance. Cada pixel foi cuidadosamente ajustado para adaptar-se perfeitamente a telas de todos os tamanhos."
          : "Responsive landing page developed with focus on conversion and performance. Every pixel was carefully adjusted to adapt perfectly to screens of all sizes.",
      imgUrl: image.projImg8,
      techStack: ["React", "Tailwindcss"],
    },
    {
      title: "Business Startup Landing Page",
      subTitle: language === "pt" ? "Desenvolvimento" : "Development",
      description:
        language === "pt"
          ? "Landing page com abordagem mobile-first. Cada detalhe foi meticulosamente projetado para se encaixar em qualquer dispositivo, proporcionando uma experiência consistente e envolvente."
          : "Landing page developed with a responsive-first approach. Every detail was meticulously designed to fit perfectly on any device, providing a consistent and engaging experience.",
      imgUrl: image.projImg3,
      techStack: ["React", "CSS"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{projectsT.title}</h2>
                  <p>{projectsT.description}</p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="blockchain"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="blockchain">Web3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fullStack">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="frontEnd">Front-End</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="blockchain">
                        <Row>
                          {blockchain.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fullStack">
                        <Row>
                          {fullStack.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="frontEnd">
                        <Row>
                          {frontEnd.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={image.colorSharp2}
        alt="ColorSharp"
      ></img>
    </section>
  );
};
