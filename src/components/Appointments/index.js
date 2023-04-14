// Write your code here
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', starred: false}

  inputChange = event => {
    this.setState({title: event.target.value})
  }

  dateInput = event => {
    this.setState({date: event.target.value})
  }

  fileSubmit = event => {
    event.preventDefault()
    const {title, date} = this.state
    const addAppointment = {id: uuidV4(), title, date, star: false}
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, addAppointment],
      title: '',
      date: '',
    }))
  }

  isStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, star: !each.star}
        }
        return each
      }),
    }))
  }

  onlyStarred = () => {
    this.setState(prevState =>
      prevState.starred === false ? {starred: true} : {starred: false},
    )
  }

  render() {
    const {title, date, appointmentList, starred} = this.state
    let searchResult = appointmentList
    if (starred === true) {
      searchResult = appointmentList.filter(each => each.star === true)
    }
    const colorChange = starred ? 'change' : ''
    return (
      <div className="bgContainer">
        <div className="cont-hr">
          <div className="Container">
            <div className="formContainer">
              <h1 className="head">Add Appointment</h1>
              <form className="form" onSubmit={this.fileSubmit}>
                <label className="label" htmlFor="input1">
                  Title
                </label>
                <input
                  id="input1"
                  className="input"
                  placeholder="Your Title"
                  onChange={this.inputChange}
                  type="text"
                  value={title}
                />
                <label className="label" htmlFor="dateInput1">
                  Date
                </label>
                <input
                  type="date"
                  className="dateInput"
                  id="dateInput1"
                  onChange={this.dateInput}
                  value={date}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr />
          <div className="appont-cont">
            <div className="appont-head-cont">
              <h1 className="headApp">Appointments</h1>
              <button
                className={`btn-starred ${colorChange}`}
                type="button"
                onClick={this.onlyStarred}
              >
                Starred
              </button>
            </div>
            <ul className="Appointments">
              {searchResult.map(each => (
                <AppointmentItem
                  item={each}
                  key={each.id}
                  activeStar={this.isStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
