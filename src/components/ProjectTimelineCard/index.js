import {AiFillCalendar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './index.css'

const ProjectTimelineCard = props => {
  const {card} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = card
  return (
    <div className="project-card">
      <img src={imageUrl} alt={projectTitle} className="image" />
      <div className="nav">
        <h1 className="card-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
