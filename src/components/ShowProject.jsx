import React from "react";
import Identicon from "react-identicons";
import {
  FaTimes,
  FaReact,
  FaNode,
  FaCss3,
  FaAws,
  FaHardHat,
  FaPython,
  FaEthereum,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSolidity,
  SiIpfs,
  SiOpenzeppelin,
  SiChainlink,
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";

import { useGlobalState, setGlobalState } from "../store";

export const ShowProject = () => {
  const [showModal] = useGlobalState("showModal");

  const [projectTitle] = useGlobalState("projectTitle");
  const [projectDescription] = useGlobalState("projectDescription");
  const [projectImageURL] = useGlobalState("projectImageURL");
  const [techStack] = useGlobalState("techStack");

  const renderStack = () => {
    const techIcons = {
      React: <FaReact />,
      TypeScript: <SiTypescript />,
      Solidity: <SiSolidity />,
      NodeJs: <FaNode />,
      Tailwindcss: <SiTailwindcss />,
      Css: <FaCss3 />,
      Aws: <FaAws />,
      HardHat: <FaHardHat />,
      Ipfs: <SiIpfs />,
      Python: <FaPython />,
      Openzeppelin: <SiOpenzeppelin />,
      Ethereum: <FaEthereum />,
      NextJs: <TbBrandNextjs />,
      Api: <TbApi />,
      Chainlink: <SiChainlink />,
    };

    return techStack?.map((tech, index) => (
      <div key={index} style={{ marginRight: "0.5rem" }}>
        {techIcons[tech]} {tech}
      </div>
    ));
  };

  return (
    <div
      className="show-project-container"
      style={{ "--showModal": showModal }}
    >
      <div className="show-project-box">
        <div className="show-project-flex">
          <div className="show-project-flex-title">
            <p>Project Core</p>
            <button
              type="button"
              onClick={() => setGlobalState("showModal", "scale(0")}
              //className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" color="white" />
            </button>
          </div>

          <div className="show-project-box1">
            <div className="show-project-box1-img">
              <img src={projectImageURL} alt="" />
            </div>
          </div>

          <div className="show-project-box2">
            <h4>{projectTitle}</h4>
            <span>Description</span>
            <p>{projectDescription}</p>

            <span>Tech Stack</span>
            <p style={{ display: "flex", flexDirection: "row" }}>
              {renderStack()}
              {/*<FaReact />  React  | <SiTypescript /> Typescript  | <FaNode /> Node.JS | <SiTailwindcss /> Tailwindcss*/}
            </p>

            <div className="show-project-box2-identicon-container">
              <div className="show-project-box2-identicon">
                <Identicon string="0xs...45se4" size={30} />
              </div>

              <div className="show-project-box2-identicon-owner">
                <small className="show-project-box2-identicon-owner-title">
                  @owner
                </small>
                <small className="text-pink-800-font-semibold">
                  0xs6...98saf
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
