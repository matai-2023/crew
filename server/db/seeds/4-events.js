import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const now = new Date().getTime()

  const events = [
    {
      id: 1,
      name: 'Quality-focused non-volatile emulation',
      address: 'Dev Academy New Market',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.075021184813!2d174.77345137579252!3d-36.86462307222876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47c43b7c00a3%3A0x4abe94b659ab7fb0!2sDev%20Academy%20Aotearoa%20-%20Auckland%20Campus!5e0!3m2!1sen!2snz!4v1695079204423!5m2!1sen!2snz',
      description:
        'sear gossip ferociously correlate hint past concerning brilliant huzzah unlike',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',
      crew_id: 5,
    },
    {
      id: 2,
      name: 'Open-architected hybrid implementation',
      address: 'Cordis Auckland',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3722923641462!2d174.7607441757921!3d-36.85750667223087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7d3ca8329%3A0xf9a5df1893d30918!2sCordis%2C%20Auckland!5e0!3m2!1sen!2snz!4v1695079346687!5m2!1sen!2snz',
      description:
        'stud cutlet too acquaint truthful times against more off yum unless defrock grounded mother sans',
      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      crew_id: 3,
    },
    {
      id: 3,
      name: 'Automated needs-based structure',
      time: '4:09:24 pm',
      address: 'Auckland Town Hall',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5693738318027!2d174.76065097579195!3d-36.852788072232094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47ef851153cb%3A0x1ba38349d16dca93!2sAuckland%20Town%20Hall!5e0!3m2!1sen!2snz!4v1695079414955!5m2!1sen!2snz',
      description:
        'major upward only uh-huh brr fresh even empower strange deliberately blond',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 3,
    },
    {
      id: 4,
      name: 'Adaptive cohesive success',
      time: '11:51:20 pm',
      address: 'Hayman Park',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.729998086644!2d174.87022159678955!3d-36.9923776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dc1967ed76d%3A0xbcc9f97f4ecdb0e!2sHayman%20Park!5e0!3m2!1sen!2snz!4v1695079494887!5m2!1sen!2snz',
      description:
        'whoever now split rudely pizza copyright birdhouse clothing when than courageously iconify gah gah plus oversleep majestically bleakly noted',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 1,
    },
    {
      id: 5,
      name: 'Front-line neutral initiative',
      time: '7:06:38 pm',
      address: 'Sky Tower',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.750630386251!2d174.7573200843715!3d-36.84844790063923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06d4bdc25%3A0x2d1b5c380ad9387!2sSky%20Tower!5e0!3m2!1sen!2snz!4v1695079562593!5m2!1sen!2snz',
      description:
        'likewise the dense anti gah among uh-huh ferry acclaimed after but disagree deserted wavy as inasmuch ah satiate even graduation',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 5,
    },
    {
      id: 6,
      name: 'Team-oriented multimedia access',
      time: '3:25:02 pm',
      address: 'Hamilton Gardens',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.329847894061!2d175.30230577583677!3d-37.805742271977685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1f297e2c58a3%3A0xf00ef62249d2b80!2sHamilton%20Gardens!5e0!3m2!1sen!2snz!4v1695079634842!5m2!1sen!2snz',
      description:
        'distill wholly loudly speaker ew because flow offload unlike',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 1,
    },
    {
      id: 7,
      name: 'Upgradable human-resource matrices',
      time: '7:12:15 pm',
      address: 'Mission Bay',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12769.799377239393!2d174.8227029105276!3d-36.855649955698226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49c3a989ec83%3A0x500ef6143a2e4f0!2sMission%20Bay%2C%20Auckland%201071!5e0!3m2!1sen!2snz!4v1695079674367!5m2!1sen!2snz',
      description:
        'beyond beautifully wise zowie innocently hm peony as sniveling impressive what fraction melody midst boring slowly except honestly infamous uh-huh',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 4,
    },
    {
      id: 8,
      name: 'Balanced 24 hour attitude',
      time: '9:58:19 am',
      address: 'The Trusts Arena',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.2453344715163!2d174.63267117579232!3d-36.86054607223004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d40448700fe63%3A0x85c9a7fbd0c9af1!2sThe%20Trusts%20Arena!5e0!3m2!1sen!2snz!4v1695079830043!5m2!1sen!2snz',
      description:
        'before sedately however better meanwhile nor than exude vaulting trained during what verb upwardly fickle roller',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 1,
    },
    {
      id: 9,
      name: 'Open-source explicit array',
      time: '5:56:54 am',
      address: 'Queenstown Gardens',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.395905461934!2d168.6581595762077!3d-45.03718727107025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d4e3b497bb09af%3A0xb114ddabc2902b7!2sQueenstown%20Gardens!5e0!3m2!1sen!2snz!4v1695079982051!5m2!1sen!2snz',
      description:
        'palatable although nor really sans reference unusual sometimes and',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 5,
    },
    {
      id: 10,
      name: 'Progressive interactive analyzer',
      time: '11:35:47 am',
      address: 'Tokyo Bay Japanese Restaurant',
      location:
        'iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.317533130089!2d174.77136917578886!3d-36.78693647225093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d377d0e81fa09%3A0x633de3910531c093!2sTokyo%20Bay%20Japanese!5e0!3m2!1sen!2snz!4v1695080144816!5m2!1sen!2snz',
      description:
        'notwithstanding thief brr shocked what hot total forthright sternly gee softdrink',

      date: faker.date.future().getTime(),
      img: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',

      crew_id: 1,
    },
  ]

  await knex('events').insert(events)
}
