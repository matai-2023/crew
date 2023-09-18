import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const crewIds = await knex('crews').pluck('id')
  const images = [
    'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',
    'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ]

  const realLocactions = [
    {
      address: 'Dev Academy Newmarket',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.075021184813!2d174.77345137579252!3d-36.86462307222876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48744ce656ef%3A0x6e6f926e8339766e!2sLevel%205%2F12%20Morgan%20Street%2C%20Newmarket%2C%20Auckland%201023!5e0!3m2!1sen!2snz!4v1695076250482!5m2!1sen!2snz',
    },
    {
      address: 'Cordis Auckland',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.372295354856!2d174.75844818437434!3d-36.85750660063009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7d3ca8329%3A0xf9a5df1893d30918!2sCordis%2C%20Auckland!5e0!3m2!1sen!2snz!4v1695076350150!5m2!1sen!2snz',
    },
    {
      address: 'Sky Tower',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.750630386251!2d174.75732008437151!3d-36.84844790063923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06d4bdc25%3A0x2d1b5c380ad9387!2sSky%20Tower!5e0!3m2!1sen!2snz!4v1695076438357!5m2!1sen!2snz',
    },
    {
      address: 'Auckland Town Hall',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12771.090268078922!2d174.74802926040985!3d-36.8479226002003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47ef851153cb%3A0x1ba38349d16dca93!2sAuckland%20Town%20Hall!5e0!3m2!1sen!2snz!4v1695076541977!5m2!1sen!2snz',
    },
    {
      address: 'Hayman Park',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.729998086644!2d174.8724102793457!3d-36.9923776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dc1967ed76d%3A0xbcc9f97f4ecdb0e!2sHayman%20Park!5e0!3m2!1sen!2snz!4v1695076603980!5m2!1sen!2snz',
    },
  ]

  const events = Array.from({ length: 5 }, (_, i) => {
    const location = faker.helpers.arrayElement(realLocactions)
    return {
      id: i + 1,
      name: faker.company.catchPhrase(),
      time: faker.date.future().toLocaleTimeString(),
      address: location.address,
      location: location.location,
      description: faker.word.words({
        count: { min: 8, max: 20 },
      }),
      date: faker.date.future().toLocaleDateString(),
      img: faker.helpers.arrayElement(images),
      crew_id: faker.helpers.arrayElement(crewIds),
    }
  })

  await knex('events').insert(events)
}
