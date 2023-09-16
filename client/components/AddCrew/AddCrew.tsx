import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import Button from '../UI/Button/Button'

function AddCrew() {
  //TODO: Add function to handleSave
  return (
    <>
      <Background>
        <DashboardHeader />                                                                                 
        <div>
          <form action="">
            <label>
              <input placeholder="Your crew name" required />
            </label>
            <label>
              <input type="file" placeholder="Upload an image" />
            </label>
            <Button>Creat Event</Button>
          </form>
        </div>
      </Background>
    </>
  )
}

export default AddCrew
