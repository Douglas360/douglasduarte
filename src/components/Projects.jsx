import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import image from "../assets/img/index";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const blockchain = [
    {
      title: "NFT Marketplace",
      subTitle: "Design & Development",
      description:
        "Marketplace de NFTs foi desenvolvido para oferecer uma experiência excepcional de mintagem, compra e venda de NFTs. Criado com uma visão de inovação e acessibilidade, esse Marketplace NFT é um espaço vibrante onde criadores e colecionadores se encontram para celebrar a arte digital e a criatividade. Com recursos intuitivos e uma interface de usuário amigável, é uma plataforma robusta e confiável para você explorar e interagir com o emocionante mundo dos NFTs.",
      imgUrl: image.projImg10,
      techStack: [
        "NextJs",
        "Tailwindcss",
        "Solidity",
        "Ipfs",
        "Openzeppelin",
        "Truffle",
        "Ganache",
      ],
    },
    {
      title: "NFT Marketplace",
      subTitle: "Design & Development",
      description:
        "Desenvolvi um Marketplace de NFTs que vai além das expectativas, proporcionando uma experiência única para mintagem, compra e venda de NFTs. Esse Marketplace NFT é a essência da inovação, oferecendo uma plataforma dinâmica e envolvente para criadores e entusiastas de arte digital.",
      imgUrl: image.projImg11,
      techStack: [
        "React",
        "Css",
        "Solidity",
        "HardHat",
        "Ipfs",
        "Openzeppelin",
        "Ethereum",
      ],
    },
    {
      title: "Site WEb3",
      subTitle: "Design & Development",
      description:
        "Meu website pessoal evoluiu para um espaço inovador na web, agora impulsionado pela tecnologia Web3. A cada projeto que realizo, crio um NFT exclusivo, armazenando todas as informações essenciais na blockchain. Cada NFT contém a imagem, título, descrição e tecnologias utilizadas em cada projeto. Em outras palavras, todas as informações relevantes estão seguramente registradas na blockchain, garantindo transparência e autenticidade em cada trabalho apresentado.",
      imgUrl: image.projImg12,
      techStack: [
        "React",
        "Css",
        "NodeJs",
        "Solidity",
        "Ipfs",
        "Openzeppelin",
        "Ethereum",
      ],
    },
  ];

  const fullStack = [
    {
      title: "ERP Dashboard",
      subTitle: "Design e Desenvolvimento",
      description:
        "Sistema ERP desenvolvido para otimizar as principais rotinas de uma empresa, abrangendo desde o cadastro de funcionários até a gestão de equipes e o gerenciamento de projetos.",
      imgUrl: image.projImg7,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Aws"],
    },
    {
      title: "Solução de E-Commerce",
      subTitle: "Design e Desenvolvimento",
      description: "Gestão de Produtos e Integração de Pagamentos",
      imgUrl: image.projImg5,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Api", "Aws"],
    },
    {
      title: "Plataforma de Gestão Financeira",
      subTitle: "Design e Desenvolvimento",
      description: "Rastreamento de Despesas e Integração Bancária",
      imgUrl: image.projImg6,
    },
  ];

  const frontEnd = [
    {
      title: "Landing Page Company",
      subTitle: "Development",
      description:
        "Desenvolvi esta landing page com total foco na responsividade, garantindo uma experiência excepcional em qualquer dispositivo. Cada pixel e elemento foi cuidadosamente ajustado para se adaptar perfeitamente a telas de todos os tamanhos, desde smartphones até desktops.",
      imgUrl: image.projImg8,
      techStack: ["React", "Tailwindcss"],
    },
    {
      title: "Business Startup Landing Page",
      subTitle: "Development",
      description:
        "Essa LP foi desenvolvida com uma abordagem centrada na responsividade. Cada detalhe foi meticulosamente projetado para se ajustar perfeitamente a qualquer dispositivo, proporcionando uma experiência consistente e envolvente em todas as telas. ",
      imgUrl: image.projImg3,
      techStack: ["React", "Css"],
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
                  <h2>Projetos</h2>
                  <p>Alguns dos projetos que desenvolvi.</p>
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
                        <Nav.Link eventKey="fullStack">FullStack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="frontEnd">FrontEnd</Nav.Link>
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
        alt="ColorShap"
      ></img>
    </section>
  );
};
