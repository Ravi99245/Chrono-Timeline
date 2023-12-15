import {Chrono} from 'react-chrono'
import CourseTimeCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="ccbp">CCBP 4.0</span>
      </h1>

      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          disableAutoScrollOnClick="true"
          disableNavOnKey="true"
          theme={{
            primary: '#0967d2',
            secondary: 'white',
            cardBgColor: '#ffffff',
            titleColor: '#0967d2',
            titleColorActive: 'red',
          }}
        >
          {timelineItemsList.map(eachItem => (
            <CourseTimeCard key={eachItem.id} card={eachItem} />
          ))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
