import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)
  const now = new Date().getTime()
  const events = [
    {
      id: 1,
      name: 'Hack-it Hackathon!',
      address: 'Dev Academy New Market',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.075021184813!2d174.77345137579252!3d-36.86462307222876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47c43b7c00a3%3A0x4abe94b659ab7fb0!2sDev%20Academy%20Aotearoa%20-%20Auckland%20Campus!5e0!3m2!1sen!2snz!4v1695079204423!5m2!1sen!2snz',
      description:
        'Get ready to Hack-it Hackathon, where code meets caffeine, and programmers battle bugs with a side of pizza! Join us for a coding showdown that is more fun than a syntax error. Bring your A-game and your appetite for adventure in the world of 1s and 0s. Lets hack and roll!',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      crew_id: 3,
    },
    {
      id: 2,
      name: 'Libra Party',
      address: 'Cordis Auckland',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3722923641462!2d174.7607441757921!3d-36.85750667223087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7d3ca8329%3A0xf9a5df1893d30918!2sCordis%2C%20Auckland!5e0!3m2!1sen!2snz!4v1695079346687!5m2!1sen!2snz',
      description:
        'Get ready to party like a Libra, because we are throwing the Libra Party that is going to balance your world and tickle your scales! Join us for a night of sassy dance moves, cosmic cocktails, and vibes that are so in tune, even the planets would be jealous. Its all about balance, baby, and we are here to prove that Libras do it best! 🌟✨💃🍸 #LibraPartyGoals',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1609951651467-713256d1a3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      crew_id: 2,
    },
    {
      id: 3,
      name: 'Copeland Send!',
      time: '4:09:24 pm',
      address: 'Auckland Town Hall',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5693738318027!2d174.76065097579195!3d-36.852788072232094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47ef851153cb%3A0x1ba38349d16dca93!2sAuckland%20Town%20Hall!5e0!3m2!1sen!2snz!4v1695079414955!5m2!1sen!2snz',
      description:
        'Get ready to lace up your hiking boots and unleash your inner mountain goat at the Copeland Send! We are taking the trails by storm in a quest for the most epic views and the silliest hiking selfies. Meet us at the Auckland Town Hall, where the adventure begins, and remember, the only thing steeper than the hills is our sense of humor! 🏞️😄 #CopelandSend #HikingHilarity',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1604419688742-6ded8cb99b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      crew_id: 1,
    },
    {
      id: 4,
      name: 'Lets go & Learn Go',
      time: '11:51:20 pm',
      address: 'Hayman Park',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.729998086644!2d174.87022159678955!3d-36.9923776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dc1967ed76d%3A0xbcc9f97f4ecdb0e!2sHayman%20Park!5e0!3m2!1sen!2snz!4v1695079494887!5m2!1sen!2snz',
      description:
        'Join us for "Learn Go!" – an outdoor coding learning event that will take your programming skills to the next level. Embrace the fresh air, soak up the sun, and live your best digital nomad life as we explore the world of Go programming language together. Do not miss this opportunity to code in the great outdoors!',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1599792092050-63b1834bb89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      crew_id: 3,
    },
    {
      id: 5,
      name: 'Morning People Rave',
      time: '7:06:38 am',
      address: 'Sky Tower',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.750630386251!2d174.7573200843715!3d-36.84844790063923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06d4bdc25%3A0x2d1b5c380ad9387!2sSky%20Tower!5e0!3m2!1sen!2snz!4v1695079562593!5m2!1sen!2snz',
      description:
        "Rise and shine, party animals! Get ready to break a leg (but not your alarm clock) at Morning People Rave! 🕺🌅 We're serving up beats hotter than your morning coffee and kombucha fresher than your dance moves, all before the sun's even out of bed! So grab your dancing shoes and let's boogie before breakfast – it's the early bird's bass that gets the worm! ",
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      crew_id: 2,
    },
    {
      id: 6,
      name: 'Wahine Walks',
      time: '3:25:02 pm',
      address: 'Hamilton Gardens',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.329847894061!2d175.30230577583677!3d-37.805742271977685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1f297e2c58a3%3A0xf00ef62249d2b80!2sHamilton%20Gardens!5e0!3m2!1sen!2snz!4v1695079634842!5m2!1sen!2snz',
      description:
        "Join us for Wahine Walks, the perfect afternoon adventure! Grab your hiking boots and meet fellow adventurous women for a sun-soaked stroll through nature. It's all about camaraderie, fresh air, and good vibes. Don't miss out on this empowering outdoor experience!",
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      crew_id: 1,
    },
    {
      id: 7,
      name: 'Women in Tech',
      time: '7:12:15 pm',
      address: 'Auckland Showgrounds',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51055.19764955255!2d174.7050098486328!3d-36.8915479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4885597b9205%3A0xe45cd468eb72c035!2sAuckland%20Showgrounds!5e0!3m2!1sen!2snz!4v1695164702526!5m2!1sen!2snz',
      description:
        "Join us for an electrifying evening of innovation and empowerment at 'Women in Tech!' Dive into the world of cutting-edge technology while celebrating the incredible achievements of women in the industry. Get ready to be inspired, network with like-minded trailblazers, and discover the future of tech with a touch of glamour and a whole lot of girl power!",
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      crew_id: 3,
    },
    {
      id: 8,
      name: 'Dessert Banquet',
      time: '9:58:19 am',
      address: 'Devonport',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12775.326376695064!2d174.78834612328043!3d-36.822555205849625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d37c13bb4dd67%3A0x500ef6143a2bf70!2sDevonport%2C%20Auckland%200624!5e0!3m2!1sen!2snz!4v1695164886893!5m2!1sen!2snz',
      description:
        " Get ready for a delightful evening of sugar, spice, and everything nice. We've curated a grand display of both guilt-free, healthy treats and sinfully delicious desserts that will satisfy every craving. Join us for a playful celebration of all things sweet!",
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1581504489956-bcc7d8f54416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERlc3NlcnQlMjBmZWFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      crew_id: 2,
    },
    {
      id: 9,
      name: 'Packrafting Safety Workshop',
      time: '5:56:54 pm',
      address: 'Queenstown Gardens',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.395905461934!2d168.6581595762077!3d-45.03718727107025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d4e3b497bb09af%3A0xb114ddabc2902b7!2sQueenstown%20Gardens!5e0!3m2!1sen!2snz!4v1695079982051!5m2!1sen!2snz',
      description:
        "Dive into the world of packrafting safety with our Packraft Safety Workshop! Join us for an interactive and informative session where you'll learn essential skills and tips to make your packrafting adventures safer than ever. From river navigation to gear maintenance, this workshop has you covered. Don't miss out on this chance to enhance your packrafting know-how!",
      date: faker.date.future().getTime(),
      img: '',
      crew_id: 1,
    },
    {
      id: 10,
      name: 'Data Science & AI Innovation',
      time: '11:35:47 am',
      address: 'Tokyo Bay Japanese Restaurant',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.317533130089!2d174.77136917578886!3d-36.78693647225093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d377d0e81fa09%3A0x633de3910531c093!2sTokyo%20Bay%20Japanese!5e0!3m2!1sen!2snz!4v1695080144816!5m2!1sen!2snz',
      description:
        'Discover the future of data-driven innovation at the Data Science & AI Innovation networking event. Connect, collaborate, and stay updated with fellow enthusiasts. Join us now!',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      crew_id: 3,
    },
  ]

  await knex('events').insert(events)
}
