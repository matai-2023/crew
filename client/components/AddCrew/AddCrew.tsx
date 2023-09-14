import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'

function AddCrew() {
  //TODO: Add function to handleSave
  return (
    <>
      <Background>
        <DashboardHeader />

        <form action="">
          <label>
            <input placeholder="Your crew name" required />
          </label>
          <label>
            <input type="file" placeholder="Upload an image" />
          </label>
          <button>Save</button>
        </form>
      </Background>
    </>
  )
}

export default AddCrew
