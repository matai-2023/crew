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
