import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'

function NewEvent() {
  //TODO: Create a function to handle the date selection

  //TODO: Create a function to handle the Add Event form

  const navigate = useNavigate()

  return (
    <>
      <div className="h-screen max-h-[calc(100vh-64px)] overflow-y-auto">
        <form action="submit">
          <div className="mb-4 p-3">
            <label
              htmlFor="eventName"
              className="block text-white font-interReg"
            >
              Event name
            </label>
            <input
              type="text"
              id="eventName"
              className="border rounded-md w-full px-3 py-2 text-black"
              required
            />
          </div>
          <div className="mb-4 p-3">
            <label
              htmlFor="eventDate"
              className="block text-white font-interReg"
            >
              Event date
            </label>
            <input
              type="date"
              id="eventDate"
              className="border rounded-md w-full px-3 py-2 text-black"
              required
            />
          </div>
          <div className="mb-4 p-3">
            <label
              htmlFor="eventLocation"
              className="block text-white font-interReg"
            >
              Event location
            </label>
            <input
              type="text"
              id="eventLocation"
              className="border rounded-md w-full px-3 py-2 text-black"
              required
            />
          </div>
          <div className="mb-4 p-3">
            <label
              htmlFor="eventDetails"
              className="block text-white font-interReg"
            >
              Event Details
            </label>
            <input
              type="text"
              id="eventDetails"
              className="border rounded-md w-full px-3 py-2 text-black h-32"
              required
            />
          </div>
        </form>
        <div className="mt-4 flex flex-col space-y-4 p-9">
          <Button>Create Event</Button>
          <Link
            to={'/crew-dashboard'}
            className="text-center text-white font-interReg"
          >
            Cancel
          </Link>
        </div>
        <div className="mt-4 flex flex-col space-y-4 p-9">
          <Button onClick={() => navigate('/crew-dashboard')}>
            Create Event
          </Button>
        </div>
      </form>
      <div className="mt-4 flex flex-col space-y-4 ">
        <Link
          to={'/user-dashboard'}
          className="text-center text-white font-interReg"
        >
          Cancel
        </Link>
      </div>
    </>
  )
}

export default NewEvent
