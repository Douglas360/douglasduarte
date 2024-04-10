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
        "An NFT Marketplace designed to offer an exceptional experience for minting, buying, and selling NFTs. Created with a vision of innovation and accessibility, this NFT Marketplace is a vibrant space where creators and collectors come together to celebrate digital art and creativity. With intuitive features and a user-friendly interface, it is a robust and reliable platform for you to explore and interact with the exciting world of NFTs.",
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
        "I developed an NFT Marketplace that exceeds expectations, providing a unique experience for minting, buying, and selling NFTs. This NFT Marketplace embodies innovation, offering a dynamic and engaging platform for digital art creators and enthusiasts.",
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
        "My personal website has evolved into an innovative space on the web, now powered by Web3 technology. With each project I undertake, I create a unique NFT, storing all essential information on the blockchain. Each NFT contains the image, title, description, and technologies used in the project. In other words, all relevant information is securely recorded on the blockchain, ensuring transparency and authenticity in every showcased work.",
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
      subTitle: "Design and Development",
      description:
        "An ERP system developed to optimize key business routines, covering everything from employee registration to team management and project management.",
      imgUrl: image.projImg7,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Aws"],
    },
    {
      title: "E-Commerce Solution",
      subTitle: "Design and Development",
      description: "Product Management and Payment Integration",
      imgUrl: image.projImg5,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Api", "Aws"],
    },
    {
      title: "Financial Management Platform",
      subTitle: "Design and Development",
      description: "Expense Tracking and Banking Integration",
      imgUrl: image.projImg6,
      techStack: ["React", "Tailwindcss", "NodeJs", "TypeScript", "Aws"],
    },
  ];

  const frontEnd = [
    {
      title: "Landing Page for Company",
      subTitle: "Development",
      description:
        "I developed this landing page with a strong focus on responsiveness, ensuring an exceptional experience on any device. Every pixel and element was carefully adjusted to adapt perfectly to screens of all sizes, from smartphones to desktops.",
      imgUrl: image.projImg8,
      techStack: ["React", "Tailwindcss"],
    },
    {
      title: "Business Startup Landing Page",
      subTitle: "Development",
      description:
        "This landing page was developed with a responsive-first approach. Every detail was meticulously designed to fit perfectly on any device, providing a consistent and engaging experience across all screens.",
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
                  <h2>Projects</h2>
                  <p>Some of the projects I developed.</p>
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
