import { useEffect, useState } from 'react'
import request from 'superagent'

interface Props {
  location: string
}

function Location(props: Props) {
  // const [locations, setLocations] = useState([] as Location[])

  // useEffect(() => {
  //   getLocation(), []
  // })

  // async function getLocation() {
  //   const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${props.location}`
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '6cac1eed49mshc351b4c48a29be7p1f2964jsnd16d78211af2',
  //       'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com',
  //     },
  //   }

  //   try {
  //     const response = await fetch(url, options)
  //     const result = await response.text()
  //     const dataObject = JSON.parse(result)
  //     console.log(dataObject)
  //     setLocations(dataObject.Results)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // // async function getLocation() {
  // //   const res = await request.get(
  // //     `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${props.location}`
  // //   )
  // //   setLocations(res.body)
  // // }
  // // console.log('location', locations)
  // // console.log(props.location)

  return (
    <div>
      <p> </p>
    </div>
  )
}
export default Location
