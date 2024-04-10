import node from "../assets/img/node.svg";
import react from "../assets/img/react.svg";
import aws from "../assets/img/aws.svg";
import typescript from "../assets/img/typescript.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import imagem from "../assets/img/index";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Having a solid skill set is an incredibly valuable asset in
                today's competitive job market. Continuously seeking to improve
                and develop your knowledge.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={imagem.ethereumLogo} alt="Ethereum EVM" />
                  <h5>Ethereum EVM</h5>
                </div>
                <div className="item">
                  <img
                    src={imagem.solidityLogo}
                    width={10}
                    height={10}
                    alt=""
                  />

                  <h5>Solidity</h5>
                </div>
                <div className="item">
                  <img src={imagem.hardhatLogo} alt="Image" />
                  <h5>HardHat</h5>
                </div>
                <div className="item">
                  <img src={imagem.blockchainLogo} alt="Image" />
                  <h5>Blockchain</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
