export interface Event {
  name: string
  time: string
  location: string
  description: string
  date: number
  img: string
  crew_id: number
}

export interface NewEvent extends Event {
  eventId: number
}

export interface AttendanceData{
  rsvpId: number
  userId: number
  crewId: number
  username: string
  email: string
  eventName: string
  time: string
  location: string
  description: string
  date: number
  img: string
  attending: boolean
}
