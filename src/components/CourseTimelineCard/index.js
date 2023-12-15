import {AiFillClockCircle} from 'react-icons/ai'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const CourseTimeCard = props => {
  const {card} = props
  const {categoryId, courseTitle, description, tagsList, duration} = card
  if (categoryId === 'PROJECT') {
    return <ProjectTimelineCard card={card} />
  }
  console.log(tagsList)

  return (
    <div className="course-card">
      <div className="nav">
        <h1 className="card-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-container">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="tag">
            {eachItem.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeCard
