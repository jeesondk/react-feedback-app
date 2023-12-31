import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"


function FeedbackList({ feedback }) {
  
    if(!feedback || feedback.length === 0) {
        <p>No feedback Yet</p>
    }

    return (
    <div className='feedback-list'>
        {feedback.map((item) => (
           <FeedbackItem key={item.id} item={item} />
        ))}
      
    </div>
  )
}

FeedbackList.propType = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.text.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList
