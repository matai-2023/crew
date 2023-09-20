export interface Event {
  name: string
  time: string
  address: string
  location: string

  description: string
  date: number
  img: string
  crew_id: number
}

export interface NewEvent extends Event {
  eventId: number
}

export interface AttendanceData {
  rsvpId: number
  username: string
  avatar: string
  attending: boolean
}

export interface AttendingStatus {
  attending: boolean
}

export interface RSVPData extends AttendingStatus {
  rsvpID: number
  accessToken: string
  cId: number
  eId: number
}
