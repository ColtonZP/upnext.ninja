import { GamesRes } from './types'

export const newestGames: GamesRes = {
  count: 754204,
  next: 'https://api.rawg.io/api/games?key=5f422532f9374795a19494882b9e366a&page=2',
  previous: null,
  results: [
    {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3435,
          percent: 59.23,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1891,
          percent: 32.61,
        },
        {
          id: 3,
          title: 'meh',
          count: 369,
          percent: 6.36,
        },
        {
          id: 1,
          title: 'skip',
          count: 104,
          percent: 1.79,
        },
      ],
      ratings_count: 5725,
      reviews_text_count: 42,
      added: 17571,
      added_by_status: {
        yet: 440,
        owned: 10309,
        beaten: 4791,
        toplay: 517,
        dropped: 878,
        playing: 636,
      },
      metacritic: 92,
      playtime: 72,
      suggestions_count: 406,
      updated: '2022-05-11T12:26:10',
      user_game: null,
      reviews_count: 5799,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum:
              'Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.',
            recommended:
              'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 544,
            image_background:
              'https://media.rawg.io/media/games/3a8/3a82d7f5c90ab082fe475e28d58bee8b.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 608,
            image_background:
              'https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
      ],
      stores: [
        {
          id: 290375,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 438095,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 961,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
        },
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 290377,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
        {
          id: 290378,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 19043,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 9074,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2244,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 1827221,
          image:
            'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
        },
        {
          id: 1827222,
          image:
            'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
        },
        {
          id: 1827223,
          image:
            'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
        },
        {
          id: 1827225,
          image:
            'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
        },
        {
          id: 1827226,
          image:
            'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
        },
        {
          id: 1827227,
          image:
            'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
        },
      ],
    },
    {
      id: 3328,
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      released: '2015-05-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 4.67,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4223,
          percent: 78.03,
        },
        {
          id: 4,
          title: 'recommended',
          count: 838,
          percent: 15.48,
        },
        {
          id: 3,
          title: 'meh',
          count: 220,
          percent: 4.07,
        },
        {
          id: 1,
          title: 'skip',
          count: 131,
          percent: 2.42,
        },
      ],
      ratings_count: 5334,
      reviews_text_count: 56,
      added: 16340,
      added_by_status: {
        yet: 915,
        owned: 9481,
        beaten: 3819,
        toplay: 654,
        dropped: 710,
        playing: 761,
      },
      metacritic: 92,
      playtime: 47,
      suggestions_count: 668,
      updated: '2022-01-02T10:49:58',
      user_game: null,
      reviews_count: 5412,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 608,
            image_background:
              'https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 544,
            image_background:
              'https://media.rawg.io/media/games/3a8/3a82d7f5c90ab082fe475e28d58bee8b.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 46904,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      stores: [
        {
          id: 354780,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 4226,
            image_background:
              'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
          },
        },
        {
          id: 3565,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 305376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 312313,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 676022,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8833,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 19900,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 11054,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 3789,
          image_background:
            'https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 1476,
          image_background:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 2293,
          image_background:
            'https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 2492,
          image_background:
            'https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 4227,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 6740,
          image_background:
            'https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 5350,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 30336,
          image:
            'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
        },
        {
          id: 30337,
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
        },
        {
          id: 30338,
          image:
            'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
        },
        {
          id: 30339,
          image:
            'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
        },
        {
          id: 30340,
          image:
            'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
        },
        {
          id: 30342,
          image:
            'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
        },
      ],
    },
    {
      id: 4200,
      slug: 'portal-2',
      name: 'Portal 2',
      released: '2011-04-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      rating: 4.61,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3354,
          percent: 70.27,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1189,
          percent: 24.91,
        },
        {
          id: 3,
          title: 'meh',
          count: 131,
          percent: 2.74,
        },
        {
          id: 1,
          title: 'skip',
          count: 99,
          percent: 2.07,
        },
      ],
      ratings_count: 4732,
      reviews_text_count: 28,
      added: 15378,
      added_by_status: {
        yet: 512,
        owned: 9496,
        beaten: 4491,
        toplay: 300,
        dropped: 455,
        playing: 124,
      },
      metacritic: 95,
      playtime: 11,
      suggestions_count: 550,
      updated: '2020-08-03T02:17:38',
      user_game: null,
      reviews_count: 4773,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2011-04-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2011-04-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2011-04-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение',
            recommended:
              'Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2011-04-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 86379,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
      ],
      stores: [
        {
          id: 465889,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 13134,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 4526,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 33916,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 19043,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 8457,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 9074,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4511,
          image_background:
            'https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4120,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1204,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 37065,
          image_background:
            'https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1507,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 243,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 87,
          name: 'Science',
          slug: 'science',
          language: 'eng',
          games_count: 1330,
          image_background:
            'https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 99018,
          image:
            'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
        },
        {
          id: 99019,
          image:
            'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
        },
        {
          id: 99020,
          image:
            'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
        },
        {
          id: 99021,
          image:
            'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
        },
        {
          id: 99022,
          image:
            'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
        },
        {
          id: 99023,
          image:
            'https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg',
        },
      ],
    },
    {
      id: 5286,
      slug: 'tomb-raider',
      name: 'Tomb Raider (2013)',
      released: '2013-03-05',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
      rating: 4.05,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 2020,
          percent: 60.28,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 853,
          percent: 25.46,
        },
        {
          id: 3,
          title: 'meh',
          count: 382,
          percent: 11.4,
        },
        {
          id: 1,
          title: 'skip',
          count: 96,
          percent: 2.86,
        },
      ],
      ratings_count: 3329,
      reviews_text_count: 10,
      added: 13765,
      added_by_status: {
        yet: 545,
        owned: 9006,
        beaten: 3496,
        toplay: 204,
        dropped: 418,
        playing: 96,
      },
      metacritic: 86,
      playtime: 11,
      suggestions_count: 628,
      updated: '2022-04-19T18:00:57',
      user_game: null,
      reviews_count: 3351,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: {
            minimum:
              'Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
          },
          requirements_ru: {
            minimum: 'i486-100, 8 Мб',
            recommended: 'Pentium 166, 16 Мб',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2013-03-05',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
      ],
      stores: [
        {
          id: 33824,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
        {
          id: 13151,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 5640,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 218233,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 79036,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
        {
          id: 713685,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 961,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1682,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 8457,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 15666,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 4976,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 32002,
          image_background:
            'https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 11215,
          image_background:
            'https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 945,
          image_background:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 269,
          name: 'Quick-Time Events',
          slug: 'quick-time-events',
          language: 'eng',
          games_count: 267,
          image_background:
            'https://media.rawg.io/media/games/34e/34ecf9a17fbd9344b0bd8f044ca3f277.jpg',
        },
        {
          id: 126,
          name: 'Dinosaurs',
          slug: 'dinosaurs',
          language: 'eng',
          games_count: 1461,
          image_background:
            'https://media.rawg.io/media/screenshots/c01/c01c5d03b66381ebc97d30580627761e.jpg',
        },
        {
          id: 306,
          name: 'Lara Croft',
          slug: 'lara-croft',
          language: 'eng',
          games_count: 14,
          image_background:
            'https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 99160,
          image:
            'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
        },
        {
          id: 99161,
          image:
            'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
        },
        {
          id: 99162,
          image:
            'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
        },
        {
          id: 99163,
          image:
            'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
        },
        {
          id: 99164,
          image:
            'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
        },
        {
          id: 99165,
          image:
            'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg',
        },
      ],
    },
    {
      id: 5679,
      slug: 'the-elder-scrolls-v-skyrim',
      name: 'The Elder Scrolls V: Skyrim',
      released: '2011-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2269,
          percent: 57.14,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1261,
          percent: 31.76,
        },
        {
          id: 3,
          title: 'meh',
          count: 356,
          percent: 8.96,
        },
        {
          id: 1,
          title: 'skip',
          count: 85,
          percent: 2.14,
        },
      ],
      ratings_count: 3938,
      reviews_text_count: 22,
      added: 13341,
      added_by_status: {
        yet: 429,
        owned: 8098,
        beaten: 3092,
        toplay: 325,
        dropped: 1061,
        playing: 336,
      },
      metacritic: 94,
      playtime: 46,
      suggestions_count: 591,
      updated: '2020-07-06T04:26:04',
      user_game: null,
      reviews_count: 3971,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере',
            recommended:
              'Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2011-11-11',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 46904,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      stores: [
        {
          id: 6037,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 15144,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 32919,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8833,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 49792,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 19900,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1204,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1344,
          image_background:
            'https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 2579,
          image_background:
            'https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 2492,
          image_background:
            'https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 4227,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 6740,
          image_background:
            'https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 487,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 215,
          name: 'Dragons',
          slug: 'dragons',
          language: 'eng',
          games_count: 2164,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 118307,
          image:
            'https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg',
        },
        {
          id: 118308,
          image:
            'https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg',
        },
        {
          id: 118309,
          image:
            'https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg',
        },
        {
          id: 118310,
          image:
            'https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg',
        },
        {
          id: 118311,
          image:
            'https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg',
        },
        {
          id: 118312,
          image:
            'https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg',
        },
      ],
    },
    {
      id: 4291,
      slug: 'counter-strike-global-offensive',
      name: 'Counter-Strike: Global Offensive',
      released: '2012-08-21',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      rating: 3.57,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1358,
          percent: 47.04,
        },
        {
          id: 3,
          title: 'meh',
          count: 764,
          percent: 26.46,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 452,
          percent: 15.66,
        },
        {
          id: 1,
          title: 'skip',
          count: 313,
          percent: 10.84,
        },
      ],
      ratings_count: 2861,
      reviews_text_count: 20,
      added: 13278,
      added_by_status: {
        yet: 213,
        owned: 10131,
        beaten: 770,
        toplay: 64,
        dropped: 1548,
        playing: 552,
      },
      metacritic: 81,
      playtime: 64,
      suggestions_count: 587,
      updated: '2020-08-07T06:18:15',
      user_game: null,
      reviews_count: 2887,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение',
            recommended:
              'Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2012-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 4619,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 11489,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 49169,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4120,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1204,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 5659,
          image_background:
            'https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg',
        },
        {
          id: 70,
          name: 'War',
          slug: 'war',
          language: 'eng',
          games_count: 7898,
          image_background:
            'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1040,
          image_background:
            'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 9254,
          image_background:
            'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 2606,
          image_background:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
          language: 'eng',
          games_count: 104,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 81,
          name: 'Military',
          slug: 'military',
          language: 'eng',
          games_count: 1025,
          image_background:
            'https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg',
        },
        {
          id: 170,
          name: 'Competitive',
          slug: 'competitive',
          language: 'eng',
          games_count: 912,
          image_background:
            'https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg',
        },
        {
          id: 73,
          name: 'e-sports',
          slug: 'e-sports',
          language: 'eng',
          games_count: 80,
          image_background:
            'https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg',
        },
        {
          id: 245,
          name: 'Trading',
          slug: 'trading',
          language: 'eng',
          games_count: 863,
          image_background:
            'https://media.rawg.io/media/screenshots/5f8/5f87ab439af5b7dddd8307d7456c382a.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 81644,
          image:
            'https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg',
        },
        {
          id: 81645,
          image:
            'https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg',
        },
        {
          id: 81646,
          image:
            'https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg',
        },
        {
          id: 81647,
          image:
            'https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg',
        },
        {
          id: 81648,
          image:
            'https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg',
        },
        {
          id: 81649,
          image:
            'https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg',
        },
      ],
    },
    {
      id: 12020,
      slug: 'left-4-dead-2',
      name: 'Left 4 Dead 2',
      released: '2009-11-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      rating: 4.09,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1478,
          percent: 53.18,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 872,
          percent: 31.38,
        },
        {
          id: 3,
          title: 'meh',
          count: 326,
          percent: 11.73,
        },
        {
          id: 1,
          title: 'skip',
          count: 103,
          percent: 3.71,
        },
      ],
      ratings_count: 2764,
      reviews_text_count: 8,
      added: 13128,
      added_by_status: {
        yet: 332,
        owned: 9628,
        beaten: 2052,
        toplay: 82,
        dropped: 909,
        playing: 125,
      },
      metacritic: 89,
      playtime: 9,
      suggestions_count: 582,
      updated: '2021-11-24T08:44:34',
      user_game: null,
      reviews_count: 2779,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере',
            recommended:
              'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2009-11-17',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 13208,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 34000,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 33753,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 6080,
          image_background:
            'https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4511,
          image_background:
            'https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4120,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1204,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 8661,
          image_background:
            'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 2670,
          image_background:
            'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1097,
          image_background:
            'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 6381,
          image_background:
            'https://media.rawg.io/media/games/9d5/9d5aa70db8c16566d79712df6417d13a.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1040,
          image_background:
            'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
        },
        {
          id: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
          language: 'eng',
          games_count: 104,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 243,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 56,
          image_background:
            'https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 99748,
          image:
            'https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg',
        },
        {
          id: 99749,
          image:
            'https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg',
        },
        {
          id: 99750,
          image:
            'https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg',
        },
        {
          id: 99751,
          image:
            'https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg',
        },
        {
          id: 99752,
          image:
            'https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg',
        },
        {
          id: 99753,
          image:
            'https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg',
        },
      ],
    },
    {
      id: 13536,
      slug: 'portal',
      name: 'Portal',
      released: '2007-10-09',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      rating: 4.51,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2419,
          percent: 61.01,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1307,
          percent: 32.96,
        },
        {
          id: 3,
          title: 'meh',
          count: 158,
          percent: 3.98,
        },
        {
          id: 1,
          title: 'skip',
          count: 81,
          percent: 2.04,
        },
      ],
      ratings_count: 3935,
      reviews_text_count: 21,
      added: 13013,
      added_by_status: {
        yet: 361,
        owned: 8050,
        beaten: 4039,
        toplay: 201,
        dropped: 296,
        playing: 66,
      },
      metacritic: 90,
      playtime: 4,
      suggestions_count: 293,
      updated: '2021-11-24T09:14:31',
      user_game: null,
      reviews_count: 3965,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum:
              '<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
            recommended:
              'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum:
              '<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 48538,
            image_background:
              'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
          },
          released_at: '2007-10-09',
          requirements_en: {
            minimum: '4.4 and up',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 86379,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
      ],
      stores: [
        {
          id: 14890,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 40973,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 19043,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1682,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 8457,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 9074,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1507,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 44172,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 15935,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2095,
          image_background:
            'https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 243,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 56,
          image_background:
            'https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg',
        },
        {
          id: 87,
          name: 'Science',
          slug: 'science',
          language: 'eng',
          games_count: 1330,
          image_background:
            'https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 115793,
          image:
            'https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg',
        },
        {
          id: 115794,
          image:
            'https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg',
        },
        {
          id: 115795,
          image:
            'https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg',
        },
        {
          id: 115796,
          image:
            'https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg',
        },
        {
          id: 115797,
          image:
            'https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg',
        },
        {
          id: 115798,
          image:
            'https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg',
        },
      ],
    },
    {
      id: 4062,
      slug: 'bioshock-infinite',
      name: 'BioShock Infinite',
      released: '2013-03-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      rating: 4.39,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1934,
          percent: 55.07,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1180,
          percent: 33.6,
        },
        {
          id: 3,
          title: 'meh',
          count: 308,
          percent: 8.77,
        },
        {
          id: 1,
          title: 'skip',
          count: 90,
          percent: 2.56,
        },
      ],
      ratings_count: 3481,
      reviews_text_count: 20,
      added: 12799,
      added_by_status: {
        yet: 682,
        owned: 7682,
        beaten: 3643,
        toplay: 320,
        dropped: 387,
        playing: 85,
      },
      metacritic: 94,
      playtime: 12,
      suggestions_count: 612,
      updated: '2020-08-03T02:19:32',
      user_game: null,
      reviews_count: 3512,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD',
            recommended:
              'Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2013-03-26',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 71727,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
        {
          id: 440409,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 461035,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8833,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 4382,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 13084,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 33810,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 19900,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 7564,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1491,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 941,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 2467,
          image_background:
            'https://media.rawg.io/media/games/f32/f3240d0b7a9e6523c8d708129c512ac8.jpg',
        },
        {
          id: 208,
          name: 'Alternate History',
          slug: 'alternate-history',
          language: 'eng',
          games_count: 1234,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 317,
          name: 'Time Travel',
          slug: 'time-travel',
          language: 'eng',
          games_count: 1449,
          image_background:
            'https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg',
        },
        {
          id: 287,
          name: 'Political',
          slug: 'political',
          language: 'eng',
          games_count: 430,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 98549,
          image:
            'https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg',
        },
        {
          id: 98550,
          image:
            'https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg',
        },
        {
          id: 98551,
          image:
            'https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg',
        },
        {
          id: 98552,
          image:
            'https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg',
        },
        {
          id: 98553,
          image:
            'https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg',
        },
        {
          id: 98554,
          image:
            'https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg',
        },
      ],
    },
    {
      id: 3439,
      slug: 'life-is-strange-episode-1-2',
      name: 'Life is Strange',
      released: '2015-01-29',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
      rating: 4.11,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1400,
          percent: 43.79,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1158,
          percent: 36.22,
        },
        {
          id: 3,
          title: 'meh',
          count: 432,
          percent: 13.51,
        },
        {
          id: 1,
          title: 'skip',
          count: 207,
          percent: 6.47,
        },
      ],
      ratings_count: 3163,
      reviews_text_count: 22,
      added: 12711,
      added_by_status: {
        yet: 683,
        owned: 8215,
        beaten: 2860,
        toplay: 291,
        dropped: 522,
        playing: 140,
      },
      metacritic: 83,
      playtime: 7,
      suggestions_count: 528,
      updated: '2020-06-29T10:40:03',
      user_game: null,
      reviews_count: 3197,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 74600,
            image_background:
              'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: {
            minimum:
              'iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 48538,
            image_background:
              'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: {
            minimum: '6.0 and up',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2015-01-29',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
      ],
      stores: [
        {
          id: 451321,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 4226,
            image_background:
              'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
          },
        },
        {
          id: 3702,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 35603,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 35602,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 217695,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 245823,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
        {
          id: 44714,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 8457,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 11054,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 141,
          name: 'Point & Click',
          slug: 'point-click',
          language: 'eng',
          games_count: 9896,
          image_background:
            'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 44172,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 9778,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 2293,
          image_background:
            'https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1403,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 5351,
          image_background:
            'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
        },
        {
          id: 406,
          name: 'Story',
          slug: 'story',
          language: 'eng',
          games_count: 10446,
          image_background:
            'https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 5350,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
        {
          id: 232,
          name: 'Episodic',
          slug: 'episodic',
          language: 'eng',
          games_count: 414,
          image_background:
            'https://media.rawg.io/media/screenshots/25d/25df88db8714961a93e5ae1ecaa50e45.jpg',
        },
        {
          id: 317,
          name: 'Time Travel',
          slug: 'time-travel',
          language: 'eng',
          games_count: 1449,
          image_background:
            'https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg',
        },
        {
          id: 295,
          name: 'Soundtrack',
          slug: 'soundtrack',
          language: 'eng',
          games_count: 2529,
          image_background:
            'https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg',
        },
        {
          id: 302,
          name: 'Time Manipulation',
          slug: 'time-manipulation',
          language: 'eng',
          games_count: 282,
          image_background:
            'https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg',
        },
        {
          id: 992,
          name: 'student',
          slug: 'student',
          language: 'eng',
          games_count: 1349,
          image_background:
            'https://media.rawg.io/media/screenshots/4b6/4b62fd7309e27eb9072886d24c3faa9e.jpg',
        },
        {
          id: 2682,
          name: 'strange',
          slug: 'strange',
          language: 'eng',
          games_count: 333,
          image_background:
            'https://media.rawg.io/media/screenshots/98d/98d5f359e9cd19069486844d74e77131_ZoInylb.jpg',
        },
        {
          id: 3197,
          name: 'photography',
          slug: 'photography',
          language: 'eng',
          games_count: 182,
          image_background:
            'https://media.rawg.io/media/screenshots/362/36215dea45eeeb863d59d5a94dac99cc.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 1826487,
          image:
            'https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg',
        },
        {
          id: 1826488,
          image:
            'https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg',
        },
        {
          id: 1826489,
          image:
            'https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg',
        },
        {
          id: 1826490,
          image:
            'https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg',
        },
        {
          id: 1826491,
          image:
            'https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg',
        },
        {
          id: 1826492,
          image:
            'https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg',
        },
      ],
    },
    {
      id: 802,
      slug: 'borderlands-2',
      name: 'Borderlands 2',
      released: '2012-09-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
      rating: 4.03,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1340,
          percent: 47.84,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 882,
          percent: 31.49,
        },
        {
          id: 3,
          title: 'meh',
          count: 471,
          percent: 16.82,
        },
        {
          id: 1,
          title: 'skip',
          count: 108,
          percent: 3.86,
        },
      ],
      ratings_count: 2784,
      reviews_text_count: 12,
      added: 12697,
      added_by_status: {
        yet: 509,
        owned: 8835,
        beaten: 1932,
        toplay: 171,
        dropped: 1041,
        playing: 209,
      },
      metacritic: 89,
      playtime: 10,
      suggestions_count: 669,
      updated: '2020-08-07T02:30:06',
      user_game: null,
      reviews_count: 2801,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение',
            recommended:
              'Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2012-09-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 46904,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      stores: [
        {
          id: 4000,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 213037,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 11088,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 34042,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
        {
          id: 71617,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
        {
          id: 817,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 19043,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 9074,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 167,
          name: 'Futuristic',
          slug: 'futuristic',
          language: 'eng',
          games_count: 3410,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1403,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2095,
          image_background:
            'https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg',
        },
        {
          id: 98,
          name: 'Loot',
          slug: 'loot',
          language: 'eng',
          games_count: 1622,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 166,
          name: 'Stylized',
          slug: 'stylized',
          language: 'eng',
          games_count: 2901,
          image_background:
            'https://media.rawg.io/media/screenshots/a46/a46801970d3b30d7fc63d6db72b3dc0e.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 7041,
          image:
            'https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg',
        },
        {
          id: 7062,
          image:
            'https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg',
        },
        {
          id: 7070,
          image:
            'https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg',
        },
        {
          id: 7072,
          image:
            'https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg',
        },
        {
          id: 7081,
          image:
            'https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg',
        },
        {
          id: 7088,
          image:
            'https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg',
        },
      ],
    },
    {
      id: 28,
      slug: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      released: '2018-10-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
      rating: 4.58,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2998,
          percent: 72.94,
        },
        {
          id: 4,
          title: 'recommended',
          count: 760,
          percent: 18.49,
        },
        {
          id: 3,
          title: 'meh',
          count: 231,
          percent: 5.62,
        },
        {
          id: 1,
          title: 'skip',
          count: 121,
          percent: 2.94,
        },
      ],
      ratings_count: 4028,
      reviews_text_count: 61,
      added: 12285,
      added_by_status: {
        yet: 749,
        owned: 6417,
        beaten: 2402,
        toplay: 1415,
        dropped: 482,
        playing: 820,
      },
      metacritic: 96,
      playtime: 21,
      suggestions_count: 607,
      updated: '2020-11-23T02:33:54',
      user_game: null,
      reviews_count: 4110,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2018-10-26',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
      ],
      stores: [
        {
          id: 257732,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 374316,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 961,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
        },
        {
          id: 384218,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 48782,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 15666,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5295,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 5659,
          image_background:
            'https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 1476,
          image_background:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 89,
          name: 'Historical',
          slug: 'historical',
          language: 'eng',
          games_count: 2026,
          image_background:
            'https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 945,
          image_background:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 2606,
          image_background:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2244,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 86,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 45878,
          name: 'Online PvP',
          slug: 'online-pvp',
          language: 'eng',
          games_count: 2235,
          image_background:
            'https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg',
        },
        {
          id: 78,
          name: 'America',
          slug: 'america',
          language: 'eng',
          games_count: 340,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 578,
          name: 'Masterpiece',
          slug: 'masterpiece',
          language: 'eng',
          games_count: 234,
          image_background:
            'https://media.rawg.io/media/games/31c/31c3bc7e7296ac5ec6cca8407cd992e4.jpg',
        },
        {
          id: 577,
          name: 'Beautiful',
          slug: 'beautiful',
          language: 'eng',
          games_count: 1760,
          image_background:
            'https://media.rawg.io/media/games/4f0/4f0a1619ca566080c9f3bb1e813bd6f6.jpg',
        },
        {
          id: 181,
          name: 'Hunting',
          slug: 'hunting',
          language: 'eng',
          games_count: 755,
          image_background:
            'https://media.rawg.io/media/screenshots/84f/84fe73fa5ab5b72a066d9e0d5530c3a5.jpg',
        },
        {
          id: 152,
          name: 'Western',
          slug: 'western',
          language: 'eng',
          games_count: 1063,
          image_background:
            'https://media.rawg.io/media/screenshots/c9a/c9aabb4ee4d92a2f01660bb4bcf2c571.jpg',
        },
        {
          id: 5452,
          name: '3rd-person',
          slug: '3rd-person',
          language: 'eng',
          games_count: 90,
          image_background:
            'https://media.rawg.io/media/screenshots/55e/55e32490523e5993b56b9b8b4ca06703.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 778173,
          image:
            'https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg',
        },
        {
          id: 778174,
          image:
            'https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg',
        },
        {
          id: 778175,
          image:
            'https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg',
        },
        {
          id: 778176,
          image:
            'https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg',
        },
        {
          id: 778177,
          image:
            'https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg',
        },
        {
          id: 778178,
          image:
            'https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg',
        },
      ],
    },
    {
      id: 13537,
      slug: 'half-life-2',
      name: 'Half-Life 2',
      released: '2004-11-16',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      rating: 4.49,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2096,
          percent: 63.52,
        },
        {
          id: 4,
          title: 'recommended',
          count: 916,
          percent: 27.76,
        },
        {
          id: 3,
          title: 'meh',
          count: 195,
          percent: 5.91,
        },
        {
          id: 1,
          title: 'skip',
          count: 93,
          percent: 2.82,
        },
      ],
      ratings_count: 3284,
      reviews_text_count: 12,
      added: 11780,
      added_by_status: {
        yet: 553,
        owned: 7413,
        beaten: 3069,
        toplay: 236,
        dropped: 428,
        playing: 81,
      },
      metacritic: 96,
      playtime: 7,
      suggestions_count: 558,
      updated: '2019-09-17T15:58:20',
      user_game: null,
      reviews_count: 3300,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: null,
          requirements_ru: {
            minimum:
              'Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет',
            recommended:
              'Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 80,
            name: 'Xbox',
            slug: 'xbox-old',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 709,
            image_background:
              'https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 48538,
            image_background:
              'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: {
            minimum: '4.4 and up',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2004-11-16',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 14891,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 41441,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 33753,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1682,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 8661,
          image_background:
            'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 15935,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 172,
          name: 'Aliens',
          slug: 'aliens',
          language: 'eng',
          games_count: 5541,
          image_background:
            'https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1491,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 56,
          image_background:
            'https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg',
        },
        {
          id: 319,
          name: 'Silent Protagonist',
          slug: 'silent-protagonist',
          language: 'eng',
          games_count: 70,
          image_background:
            'https://media.rawg.io/media/screenshots/348/3484e5e04d710095e65766215d1b6b93.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 115804,
          image:
            'https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg',
        },
        {
          id: 115805,
          image:
            'https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg',
        },
        {
          id: 115806,
          image:
            'https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg',
        },
        {
          id: 115807,
          image:
            'https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg',
        },
        {
          id: 115808,
          image:
            'https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg',
        },
        {
          id: 115809,
          image:
            'https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg',
        },
      ],
    },
    {
      id: 4286,
      slug: 'bioshock',
      name: 'BioShock',
      released: '2007-08-21',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
      rating: 4.37,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1541,
          percent: 53.45,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1051,
          percent: 36.46,
        },
        {
          id: 3,
          title: 'meh',
          count: 201,
          percent: 6.97,
        },
        {
          id: 1,
          title: 'skip',
          count: 90,
          percent: 3.12,
        },
      ],
      ratings_count: 2850,
      reviews_text_count: 21,
      added: 11685,
      added_by_status: {
        yet: 527,
        owned: 7479,
        beaten: 2709,
        toplay: 268,
        dropped: 597,
        playing: 105,
      },
      metacritic: 96,
      playtime: 3,
      suggestions_count: 650,
      updated: '2022-02-11T13:42:23',
      user_game: null,
      reviews_count: 2883,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 74600,
            image_background:
              'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: {
            minimum:
              '<h2 class="bb_tag"><strong>Minimum: </strong></h2><ul class="bb_ul"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>',
            recommended:
              '<h2 class="bb_tag"><strong>Recommended: </strong></h2><ul class="bb_ul"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение',
            recommended:
              'Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2007-08-21',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 4614,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 79531,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
        {
          id: 440407,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 20580,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 33844,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 33753,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1682,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 11054,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1491,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 941,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 208,
          name: 'Alternate History',
          slug: 'alternate-history',
          language: 'eng',
          games_count: 1234,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 287,
          name: 'Political',
          slug: 'political',
          language: 'eng',
          games_count: 430,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
        {
          id: 250,
          name: 'Underwater',
          slug: 'underwater',
          language: 'eng',
          games_count: 1737,
          image_background:
            'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 170993,
          image:
            'https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg',
        },
        {
          id: 170994,
          image:
            'https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg',
        },
        {
          id: 170995,
          image:
            'https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg',
        },
        {
          id: 170996,
          image:
            'https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg',
        },
        {
          id: 170997,
          image:
            'https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg',
        },
        {
          id: 170998,
          image:
            'https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg',
        },
      ],
    },
    {
      id: 1030,
      slug: 'limbo',
      name: 'Limbo',
      released: '2010-07-21',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
      rating: 4.16,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1496,
          percent: 52.16,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1009,
          percent: 35.18,
        },
        {
          id: 3,
          title: 'meh',
          count: 274,
          percent: 9.55,
        },
        {
          id: 1,
          title: 'skip',
          count: 89,
          percent: 3.1,
        },
      ],
      ratings_count: 2835,
      reviews_text_count: 22,
      added: 11425,
      added_by_status: {
        yet: 480,
        owned: 7304,
        beaten: 2740,
        toplay: 246,
        dropped: 572,
        playing: 83,
      },
      metacritic: 88,
      playtime: 3,
      suggestions_count: 183,
      updated: '2021-08-13T19:30:26',
      user_game: null,
      reviews_count: 2868,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1951,
            image_background:
              'https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 48538,
            image_background:
              'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: {
            minimum: '4.4 and up',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 74600,
            image_background:
              'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: {
            minimum:
              'iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере',
            recommended:
              'Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: {
            minimum:
              'Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2770,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3616,
            image_background:
              'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2010-07-21',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
          games_count: 45331,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 86379,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
          games_count: 88562,
          image_background:
            'https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg',
        },
      ],
      stores: [
        {
          id: 1054,
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
            domain: 'apps.apple.com',
            games_count: 72927,
            image_background:
              'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
          },
        },
        {
          id: 3679,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 7493,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 10311,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 26852,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 4226,
            image_background:
              'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
          },
        },
        {
          id: 33137,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1916,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
        },
        {
          id: 49142,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8833,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 40035,
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
            domain: 'play.google.com',
            games_count: 16833,
            image_background:
              'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
          },
        },
        {
          id: 335541,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 961,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 164164,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 33753,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 11084,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 7564,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 11054,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 44172,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 7913,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 15935,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 945,
          image_background:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 83,
          name: 'Puzzle-Platformer',
          slug: 'puzzle-platformer',
          language: 'eng',
          games_count: 8823,
          image_background:
            'https://media.rawg.io/media/games/99b/99b39612e864d6ddfdb2c407fd9010a1.jpg',
        },
        {
          id: 46,
          name: 'Surreal',
          slug: 'surreal',
          language: 'eng',
          games_count: 3851,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 112,
          name: 'Minimalist',
          slug: 'minimalist',
          language: 'eng',
          games_count: 11836,
          image_background:
            'https://media.rawg.io/media/screenshots/4d1/4d17635ba9841dffabd88c7200cf4d96.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 30985,
          image:
            'https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg',
        },
        {
          id: 30986,
          image:
            'https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg',
        },
        {
          id: 30987,
          image:
            'https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg',
        },
        {
          id: 30988,
          image:
            'https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg',
        },
        {
          id: 30989,
          image:
            'https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg',
        },
        {
          id: 30991,
          image:
            'https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg',
        },
      ],
    },
    {
      id: 2454,
      slug: 'doom',
      name: 'DOOM (2016)',
      released: '2016-05-13',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
      rating: 4.39,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1633,
          percent: 52.92,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1161,
          percent: 37.62,
        },
        {
          id: 3,
          title: 'meh',
          count: 224,
          percent: 7.26,
        },
        {
          id: 1,
          title: 'skip',
          count: 68,
          percent: 2.2,
        },
      ],
      ratings_count: 3051,
      reviews_text_count: 26,
      added: 11078,
      added_by_status: {
        yet: 483,
        owned: 6950,
        beaten: 2355,
        toplay: 418,
        dropped: 586,
        playing: 286,
      },
      metacritic: 85,
      playtime: 10,
      suggestions_count: 636,
      updated: '2021-10-31T22:57:16',
      user_game: null,
      reviews_count: 3086,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2016-05-13',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2016-05-13',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
          },
          requirements_ru: {
            minimum: 'i386-33, 4 Мб',
            recommended: 'i486-40, 8 Мб',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4852,
            image_background:
              'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
          },
          released_at: '2016-05-13',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2016-05-13',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 355582,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 2571,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 38659,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8833,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
        {
          id: 8223,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 33753,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 11084,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1682,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 8661,
          image_background:
            'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 9254,
          image_background:
            'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1403,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1484,
          image_background:
            'https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 187,
          name: 'Demons',
          slug: 'demons',
          language: 'eng',
          games_count: 1506,
          image_background:
            'https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 22393,
          image:
            'https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg',
        },
        {
          id: 22394,
          image:
            'https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg',
        },
        {
          id: 22398,
          image:
            'https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg',
        },
        {
          id: 22400,
          image:
            'https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg',
        },
        {
          id: 22402,
          image:
            'https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg',
        },
        {
          id: 22404,
          image:
            'https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg',
        },
      ],
    },
    {
      id: 3070,
      slug: 'fallout-4',
      name: 'Fallout 4',
      released: '2015-11-09',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
      rating: 3.79,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1354,
          percent: 47.78,
        },
        {
          id: 3,
          title: 'meh',
          count: 747,
          percent: 26.36,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 588,
          percent: 20.75,
        },
        {
          id: 1,
          title: 'skip',
          count: 145,
          percent: 5.12,
        },
      ],
      ratings_count: 2809,
      reviews_text_count: 17,
      added: 10944,
      added_by_status: {
        yet: 525,
        owned: 6875,
        beaten: 1852,
        toplay: 328,
        dropped: 1090,
        playing: 274,
      },
      metacritic: 84,
      playtime: 43,
      suggestions_count: 444,
      updated: '2020-07-06T04:52:40',
      user_game: null,
      reviews_count: 2834,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2015-11-09',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2015-11-09',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2015-11-09',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 46904,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      stores: [
        {
          id: 3252,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 9047,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 13248,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 4963,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 6080,
          image_background:
            'https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 15666,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 2670,
          image_background:
            'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 27994,
          image:
            'https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg',
        },
        {
          id: 27996,
          image:
            'https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg',
        },
        {
          id: 28000,
          image:
            'https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg',
        },
        {
          id: 28002,
          image:
            'https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg',
        },
        {
          id: 28004,
          image:
            'https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg',
        },
        {
          id: 28006,
          image:
            'https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg',
        },
      ],
    },
    {
      id: 32,
      slug: 'destiny-2',
      name: 'Destiny 2',
      released: '2017-09-06',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      rating: 3.57,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1031,
          percent: 45.58,
        },
        {
          id: 3,
          title: 'meh',
          count: 721,
          percent: 31.87,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 319,
          percent: 14.1,
        },
        {
          id: 1,
          title: 'skip',
          count: 191,
          percent: 8.44,
        },
      ],
      ratings_count: 2237,
      reviews_text_count: 19,
      added: 10906,
      added_by_status: {
        yet: 358,
        owned: 8155,
        beaten: 680,
        toplay: 138,
        dropped: 1183,
        playing: 392,
      },
      metacritic: 82,
      playtime: 5,
      suggestions_count: 1202,
      updated: '2021-08-10T12:37:08',
      user_game: null,
      reviews_count: 2262,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5321,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 171,
            name: 'Web',
            slug: 'web',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 216824,
            image_background:
              'https://media.rawg.io/media/games/51c/51c601f992e7640f1e98465d346aaf4b.jpg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 544,
            image_background:
              'https://media.rawg.io/media/games/3a8/3a82d7f5c90ab082fe475e28d58bee8b.jpg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 608,
            image_background:
              'https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg',
          },
          released_at: '2017-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Web',
            slug: 'web',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 59,
          name: 'Massively Multiplayer',
          slug: 'massively-multiplayer',
          games_count: 2890,
          image_background:
            'https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg',
        },
      ],
      stores: [
        {
          id: 32,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 808,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4720,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 326831,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3205,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 5191,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 14551,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 15666,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 79,
          name: 'Free to Play',
          slug: 'free-to-play',
          language: 'eng',
          games_count: 4551,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3806,
          image_background:
            'https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 11215,
          image_background:
            'https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 37065,
          image_background:
            'https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 5659,
          image_background:
            'https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg',
        },
        {
          id: 167,
          name: 'Futuristic',
          slug: 'futuristic',
          language: 'eng',
          games_count: 3410,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 172,
          name: 'Aliens',
          slug: 'aliens',
          language: 'eng',
          games_count: 5541,
          image_background:
            'https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg',
        },
        {
          id: 406,
          name: 'Story',
          slug: 'story',
          language: 'eng',
          games_count: 10446,
          image_background:
            'https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 7143,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 86,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6288,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 158,
          name: 'MMORPG',
          slug: 'mmorpg',
          language: 'eng',
          games_count: 1110,
          image_background:
            'https://media.rawg.io/media/screenshots/28b/28bec9939d190ba619cad0693ebe304d.jpg',
        },
        {
          id: 98,
          name: 'Loot',
          slug: 'loot',
          language: 'eng',
          games_count: 1622,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 171,
          name: 'PvE',
          slug: 'pve',
          language: 'eng',
          games_count: 1974,
          image_background:
            'https://media.rawg.io/media/screenshots/a53/a533bac7350ea700022cf2be8e694c88.jpg',
        },
        {
          id: 2030,
          name: 'city',
          slug: 'city',
          language: 'eng',
          games_count: 8649,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 487,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 744,
          name: 'friends',
          slug: 'friends',
          language: 'eng',
          games_count: 14561,
          image_background:
            'https://media.rawg.io/media/games/dd4/dd43f221a21fce6eb3d27381569779d5.jpg',
        },
        {
          id: 5816,
          name: 'console',
          slug: 'console',
          language: 'eng',
          games_count: 1353,
          image_background:
            'https://media.rawg.io/media/games/45d/45da4dc311d84b79230317d7b24a3dec.jpg',
        },
        {
          id: 578,
          name: 'Masterpiece',
          slug: 'masterpiece',
          language: 'eng',
          games_count: 234,
          image_background:
            'https://media.rawg.io/media/games/31c/31c3bc7e7296ac5ec6cca8407cd992e4.jpg',
        },
        {
          id: 3109,
          name: 'weapons',
          slug: 'weapons',
          language: 'eng',
          games_count: 1605,
          image_background:
            'https://media.rawg.io/media/games/60c/60ca6f84551e6f5435d97b603a77d551.jpg',
        },
        {
          id: 1484,
          name: 'skill',
          slug: 'skill',
          language: 'eng',
          games_count: 3349,
          image_background:
            'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
        },
        {
          id: 3046,
          name: 'destroy',
          slug: 'destroy',
          language: 'eng',
          games_count: 4342,
          image_background:
            'https://media.rawg.io/media/games/c16/c160077f8977cb22f14e56408c1560ef.jpg',
        },
        {
          id: 1743,
          name: 'collect',
          slug: 'collect',
          language: 'eng',
          games_count: 7574,
          image_background:
            'https://media.rawg.io/media/screenshots/136/1367cd2a8f57605d47c653d41033a42f.jpg',
        },
        {
          id: 2184,
          name: 'hunt',
          slug: 'hunt',
          language: 'eng',
          games_count: 2208,
          image_background:
            'https://media.rawg.io/media/games/163/163004f22c5bd859a962b9187c967284.jpg',
        },
        {
          id: 754,
          name: 'gun',
          slug: 'gun',
          language: 'eng',
          games_count: 2980,
          image_background:
            'https://media.rawg.io/media/screenshots/5b4/5b473ec4c966b215e851576c117e0d42.jpg',
        },
        {
          id: 1527,
          name: 'rain',
          slug: 'rain',
          language: 'eng',
          games_count: 819,
          image_background:
            'https://media.rawg.io/media/screenshots/61b/61b222597a4770d30de5db6d4553013b_z5uqcAx.jpg',
        },
        {
          id: 691,
          name: 'quick',
          slug: 'quick',
          language: 'eng',
          games_count: 891,
          image_background:
            'https://media.rawg.io/media/screenshots/6bd/6bd22b4673875b836639941e6a0e7e05.jpg',
        },
        {
          id: 18426,
          name: 'enemy',
          slug: 'enemy',
          language: 'eng',
          games_count: 1904,
          image_background:
            'https://media.rawg.io/media/screenshots/a54/a549f520260d95fd755786786efe43b2.jpg',
        },
        {
          id: 2863,
          name: 'darkness',
          slug: 'darkness',
          language: 'eng',
          games_count: 353,
          image_background:
            'https://media.rawg.io/media/screenshots/b1a/b1abe6dc88f1526c2222b29285ce20bb.jpg',
        },
        {
          id: 6580,
          name: 'defender',
          slug: 'defender',
          language: 'eng',
          games_count: 148,
          image_background:
            'https://media.rawg.io/media/screenshots/52c/52cf563d877851462f34ccc31318357a.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2629150,
          image:
            'https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg',
        },
        {
          id: 2629151,
          image:
            'https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg',
        },
        {
          id: 2629152,
          image:
            'https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg',
        },
        {
          id: 2629153,
          image:
            'https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg',
        },
        {
          id: 2629154,
          image:
            'https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg',
        },
        {
          id: 2629155,
          image:
            'https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg',
        },
      ],
    },
    {
      id: 11859,
      slug: 'team-fortress-2',
      name: 'Team Fortress 2',
      released: '2007-10-10',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
      rating: 3.67,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1137,
          percent: 45.63,
        },
        {
          id: 3,
          title: 'meh',
          count: 612,
          percent: 24.56,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 503,
          percent: 20.18,
        },
        {
          id: 1,
          title: 'skip',
          count: 240,
          percent: 9.63,
        },
      ],
      ratings_count: 2470,
      reviews_text_count: 18,
      added: 10755,
      added_by_status: {
        yet: 149,
        owned: 8316,
        beaten: 660,
        toplay: 32,
        dropped: 1458,
        playing: 140,
      },
      metacritic: 92,
      playtime: 9,
      suggestions_count: 525,
      updated: '2020-07-08T03:57:06',
      user_game: null,
      reviews_count: 2492,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2007-10-10',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum:
              'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
            recommended:
              'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 93676,
            image_background:
              'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
          },
          released_at: '2007-10-10',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 67997,
            image_background:
              'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
          },
          released_at: '2007-10-10',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 53076,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
      ],
      stores: [
        {
          id: 13018,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 31455,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7582,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 8464,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 3440,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 22054,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 8492,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 10663,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 19043,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 9074,
          image_background:
            'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg',
        },
        {
          id: 79,
          name: 'Free to Play',
          slug: 'free-to-play',
          language: 'eng',
          games_count: 4551,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4120,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1204,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 693,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1507,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 40832,
          name: 'Cross-Platform Multiplayer',
          slug: 'cross-platform-multiplayer',
          language: 'eng',
          games_count: 1957,
          image_background:
            'https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1040,
          image_background:
            'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
        },
        {
          id: 125,
          name: 'Crafting',
          slug: 'crafting',
          language: 'eng',
          games_count: 2681,
          image_background:
            'https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg',
        },
        {
          id: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
          language: 'eng',
          games_count: 104,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 170,
          name: 'Competitive',
          slug: 'competitive',
          language: 'eng',
          games_count: 912,
          image_background:
            'https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg',
        },
        {
          id: 197,
          name: 'Robots',
          slug: 'robots',
          language: 'eng',
          games_count: 6789,
          image_background:
            'https://media.rawg.io/media/games/979/979155841412068e7adf8c83dee94a4a.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 243,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 164,
          name: 'Cartoony',
          slug: 'cartoony',
          language: 'eng',
          games_count: 2543,
          image_background:
            'https://media.rawg.io/media/games/444/4440f674e2bcb257e249a9ab595d8ab6.jpg',
        },
        {
          id: 179,
          name: 'Cartoon',
          slug: 'cartoon',
          language: 'eng',
          games_count: 3353,
          image_background:
            'https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg',
        },
        {
          id: 265,
          name: 'Class-Based',
          slug: 'class-based',
          language: 'eng',
          games_count: 261,
          image_background:
            'https://media.rawg.io/media/screenshots/0fa/0fa357fe0160e2b592a6fafff0e6683e.jpg',
        },
        {
          id: 245,
          name: 'Trading',
          slug: 'trading',
          language: 'eng',
          games_count: 863,
          image_background:
            'https://media.rawg.io/media/screenshots/5f8/5f87ab439af5b7dddd8307d7456c382a.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 97905,
          image:
            'https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg',
        },
        {
          id: 97906,
          image:
            'https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg',
        },
        {
          id: 97907,
          image:
            'https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg',
        },
        {
          id: 97908,
          image:
            'https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg',
        },
        {
          id: 97909,
          image:
            'https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg',
        },
        {
          id: 97910,
          image:
            'https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg',
        },
      ],
    },
    {
      id: 58175,
      slug: 'god-of-war-2',
      name: 'God of War',
      released: '2018-04-20',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      rating: 4.59,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2851,
          percent: 73.22,
        },
        {
          id: 4,
          title: 'recommended',
          count: 751,
          percent: 19.29,
        },
        {
          id: 3,
          title: 'meh',
          count: 166,
          percent: 4.26,
        },
        {
          id: 1,
          title: 'skip',
          count: 126,
          percent: 3.24,
        },
      ],
      ratings_count: 3819,
      reviews_text_count: 58,
      added: 10698,
      added_by_status: {
        yet: 568,
        owned: 5542,
        beaten: 3020,
        toplay: 989,
        dropped: 208,
        playing: 371,
      },
      metacritic: 94,
      playtime: 23,
      suggestions_count: 594,
      updated: '2022-01-17T02:56:14',
      user_game: null,
      reviews_count: 3894,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 608,
            image_background:
              'https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg',
          },
          released_at: '2018-04-20',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6396,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
          released_at: '2018-04-20',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 453454,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2018-04-20',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 153243,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 116129,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 46904,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      stores: [
        {
          id: 46917,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7788,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 677451,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 64141,
            image_background:
              'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
          },
        },
        {
          id: 677452,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 961,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 168756,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 26218,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 22576,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 11926,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 12182,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 14672,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 14946,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 7248,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 19900,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 15666,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5295,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 4818,
          image_background:
            'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 11215,
          image_background:
            'https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 2707,
          image_background:
            'https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg',
        },
        {
          id: 37796,
          name: 'exclusive',
          slug: 'exclusive',
          language: 'eng',
          games_count: 4512,
          image_background:
            'https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg',
        },
        {
          id: 125,
          name: 'Crafting',
          slug: 'crafting',
          language: 'eng',
          games_count: 2681,
          image_background:
            'https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg',
        },
        {
          id: 37797,
          name: 'true exclusive',
          slug: 'true-exclusive',
          language: 'eng',
          games_count: 3995,
          image_background:
            'https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 7143,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 86,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 571,
          name: '3D',
          slug: '3d',
          language: 'eng',
          games_count: 63489,
          image_background:
            'https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 1719,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 171,
          name: 'PvE',
          slug: 'pve',
          language: 'eng',
          games_count: 1974,
          image_background:
            'https://media.rawg.io/media/screenshots/a53/a533bac7350ea700022cf2be8e694c88.jpg',
        },
        {
          id: 108,
          name: 'Mythology',
          slug: 'mythology',
          language: 'eng',
          games_count: 1348,
          image_background:
            'https://media.rawg.io/media/screenshots/184/184b5812db922b4380d7c9e27a5c1b21.jpg',
        },
        {
          id: 572,
          name: 'Emotional',
          slug: 'emotional',
          language: 'eng',
          games_count: 1149,
          image_background:
            'https://media.rawg.io/media/screenshots/750/75092895cb37edc24b83bebf1ebbf4e7.jpg',
        },
        {
          id: 580,
          name: 'Souls-like',
          slug: 'souls-like',
          language: 'eng',
          games_count: 659,
          image_background:
            'https://media.rawg.io/media/games/6f6/6f67a76e4717c1494c697c6fcb0be3f2.jpg',
        },
        {
          id: 43374,
          name: 'Remote Play on TV',
          slug: 'remote-play-on-tv',
          language: 'eng',
          games_count: 243,
          image_background:
            'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 766263,
          image:
            'https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg',
        },
        {
          id: 766264,
          image:
            'https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg',
        },
        {
          id: 766265,
          image:
            'https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg',
        },
        {
          id: 766266,
          image:
            'https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg',
        },
        {
          id: 766267,
          image:
            'https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg',
        },
        {
          id: 766268,
          image:
            'https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg',
        },
      ],
    },
  ],
  seo_title: 'All Games',
  seo_description: '',
  seo_keywords: '',
  seo_h1: 'All Games',
  noindex: false,
  nofollow: false,
  description: '',
  filters: {
    years: [
      {
        from: 2020,
        to: 2022,
        filter: '2020-01-01,2022-12-31',
        decade: 2020,
        years: [
          {
            year: 2022,
            count: 85993,
            nofollow: false,
          },
          {
            year: 2021,
            count: 173076,
            nofollow: false,
          },
          {
            year: 2020,
            count: 132943,
            nofollow: false,
          },
        ],
        nofollow: true,
        count: 392012,
      },
      {
        from: 2010,
        to: 2019,
        filter: '2010-01-01,2019-12-31',
        decade: 2010,
        years: [
          {
            year: 2019,
            count: 79682,
            nofollow: false,
          },
          {
            year: 2018,
            count: 71508,
            nofollow: false,
          },
          {
            year: 2017,
            count: 56521,
            nofollow: true,
          },
          {
            year: 2016,
            count: 41341,
            nofollow: true,
          },
          {
            year: 2015,
            count: 26434,
            nofollow: true,
          },
          {
            year: 2014,
            count: 15611,
            nofollow: true,
          },
          {
            year: 2013,
            count: 6330,
            nofollow: true,
          },
          {
            year: 2012,
            count: 5359,
            nofollow: true,
          },
          {
            year: 2011,
            count: 4300,
            nofollow: true,
          },
          {
            year: 2010,
            count: 3871,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 310957,
      },
      {
        from: 2000,
        to: 2009,
        filter: '2000-01-01,2009-12-31',
        decade: 2000,
        years: [
          {
            year: 2009,
            count: 3093,
            nofollow: true,
          },
          {
            year: 2008,
            count: 2010,
            nofollow: true,
          },
          {
            year: 2007,
            count: 1541,
            nofollow: true,
          },
          {
            year: 2006,
            count: 1264,
            nofollow: true,
          },
          {
            year: 2005,
            count: 1122,
            nofollow: true,
          },
          {
            year: 2004,
            count: 1134,
            nofollow: true,
          },
          {
            year: 2003,
            count: 1118,
            nofollow: true,
          },
          {
            year: 2002,
            count: 972,
            nofollow: true,
          },
          {
            year: 2001,
            count: 1086,
            nofollow: true,
          },
          {
            year: 2000,
            count: 972,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 14312,
      },
      {
        from: 1990,
        to: 1999,
        filter: '1990-01-01,1999-12-31',
        decade: 1990,
        years: [
          {
            year: 1999,
            count: 757,
            nofollow: true,
          },
          {
            year: 1998,
            count: 709,
            nofollow: true,
          },
          {
            year: 1997,
            count: 852,
            nofollow: true,
          },
          {
            year: 1996,
            count: 732,
            nofollow: true,
          },
          {
            year: 1995,
            count: 845,
            nofollow: true,
          },
          {
            year: 1994,
            count: 804,
            nofollow: true,
          },
          {
            year: 1993,
            count: 739,
            nofollow: true,
          },
          {
            year: 1992,
            count: 639,
            nofollow: true,
          },
          {
            year: 1991,
            count: 572,
            nofollow: true,
          },
          {
            year: 1990,
            count: 523,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 7172,
      },
      {
        from: 1980,
        to: 1989,
        filter: '1980-01-01,1989-12-31',
        decade: 1980,
        years: [
          {
            year: 1989,
            count: 422,
            nofollow: true,
          },
          {
            year: 1988,
            count: 311,
            nofollow: true,
          },
          {
            year: 1987,
            count: 336,
            nofollow: true,
          },
          {
            year: 1986,
            count: 244,
            nofollow: true,
          },
          {
            year: 1985,
            count: 230,
            nofollow: true,
          },
          {
            year: 1984,
            count: 184,
            nofollow: true,
          },
          {
            year: 1983,
            count: 206,
            nofollow: true,
          },
          {
            year: 1982,
            count: 147,
            nofollow: true,
          },
          {
            year: 1981,
            count: 65,
            nofollow: true,
          },
          {
            year: 1980,
            count: 35,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 2180,
      },
      {
        from: 1970,
        to: 1979,
        filter: '1970-01-01,1979-12-31',
        decade: 1970,
        years: [
          {
            year: 1979,
            count: 15,
            nofollow: true,
          },
          {
            year: 1978,
            count: 17,
            nofollow: true,
          },
          {
            year: 1977,
            count: 13,
            nofollow: true,
          },
          {
            year: 1976,
            count: 7,
            nofollow: true,
          },
          {
            year: 1975,
            count: 3,
            nofollow: true,
          },
          {
            year: 1974,
            count: 2,
            nofollow: true,
          },
          {
            year: 1973,
            count: 1,
            nofollow: true,
          },
          {
            year: 1972,
            count: 2,
            nofollow: true,
          },
          {
            year: 1971,
            count: 5,
            nofollow: true,
          },
          {
            year: 1970,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 66,
      },
      {
        from: 1960,
        to: 1969,
        filter: '1960-01-01,1969-12-31',
        decade: 1960,
        years: [
          {
            year: 1962,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 1,
      },
      {
        from: 1950,
        to: 1959,
        filter: '1950-01-01,1959-12-31',
        decade: 1950,
        years: [
          {
            year: 1957,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 1,
      },
    ],
  },
  nofollow_collections: ['stores'],
}
