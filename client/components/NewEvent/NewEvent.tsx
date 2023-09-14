import { Link } from 'react-router-dom'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import Button from '../UI/Button/Button'

function NewEvent() {
  //TODO: Create a function to handle the date selection

  //TODO: Create a function to handle the Add Event form
  return (
    <>
      <Background>
        <DashboardHeader />
        <form action="submit">
          <div className="mb-4 p-3">
            <label htmlFor="eventName" className="block text-primaryBackground">
              Event name
            </label>
            <input
              type="text"
              id="eventName"
              className="border rounded-md w-full px-3 py-2 text-black"
              placeholder="Event name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-primaryBackground">
              Event date
            </label>
            <input
              type="date"
              id="eventDate"
              className="border rounded-md w-full px-3 py-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventLocation"
              className="block text-primaryBackground"
            >
              Event location
            </label>
            <input
              type="text"
              id="eventLocation"
              className="border rounded-md w-full px-3 py-2 text-black"
              placeholder="Event location"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDetails"
              className="block text-primaryBackground"
            >
              Event Details
            </label>
            <input
              type="text"
              id="eventDetails"
              className="border rounded-md w-full px-3 py-2 text-black"
              placeholder="Event Details"
              required
            />
          </div>
        </form>
        <div>
          <Button>Create Event</Button>
          <Link to={'/crew-dashboard'}>Cancel</Link>
        </div>
      </Background>
    </>
  )
}

export default NewEvent
