import { Link } from 'react-router-dom'

function NewEvent() {
  //TODO: Create a function to handle the date selection

  //TODO: Create a function to handle the Add Event form
  return (
    <>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Event name" required></input>
        </label>
        <label htmlFor="">
          <input type="date" required></input>
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Event location" required></input>
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Event Details" required></input>
        </label>

        <button>Add Event</button>
      </form>
      <Link to={'/crew-dashboard'}>Cancel</Link>
    </>
  )
}

export default NewEvent
