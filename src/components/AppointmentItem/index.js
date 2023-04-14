// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {item, activeStar} = props
  const {id, title, date, star} = item

  const changeFilled = () => {
    activeStar(id)
  }

  const imgUrl = star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="listContainer">
      <div className="headContainer">
        <p className="head1">{title}</p>
        <p className="para1">
          Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
      <button
        className="star-btn"
        data-testid="star"
        type="button"
        onClick={changeFilled}
      >
        <img src={imgUrl} alt="star" className="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
