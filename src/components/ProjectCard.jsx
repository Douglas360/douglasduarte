import { Col } from "react-bootstrap";
import { setGlobalState } from '../store'


export const ProjectCard = ({ title, subTitle, description, imgUrl, techStack }) => {

  const handleClick = (title) => {
    setGlobalState('showModal', 'scale(1')
    setGlobalState('projectTitle', title)
    setGlobalState('projectDescription', description)
    setGlobalState('projectImageURL', imgUrl)
    setGlobalState('techStack', techStack)

  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx"
          onClick={() => { handleClick(title, description, imgUrl) }}
        >
          <h4>{title}</h4>
          <span>{subTitle}</span>
        </div>
      </div>
    </Col>
  )
}
