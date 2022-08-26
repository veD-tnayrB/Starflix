const pages = {
    home: {
        title: 'Home',
        routes: [
            {
                name: 'Popular Movies',
                link: '/#popular-movies'
            },

            {
                name: 'Popular Series',
                link: '/#popular-series'
            },

            {
                name: 'Popular People',
                link: '/#popular-people'
            }
        ]
    },

    movies: {
        title: 'Movies',
        routes: [
            {
                name: 'Most Popular Movies',
                link: '/movies#popular-movies'
            },

            {
                name: 'Upcoming',
                link: '/movies#upcoming'
            },

            {
                name: 'Now Playing',
                link: '/movies#now-playing'
            },

            {
                name: 'Top Rated',
                link: '/movies#top-rated'
            },
        ]
    },

    series: {
        title: 'Series',
        routes: [
            {
                name: 'Most Popular Series',
                link: '/series/#popular'
            },

            {
                name: 'On The Air',
                link: '/series#on-the-air'
            },

            {
                name: 'Top Rated',
                link: '/series#top-rated'
            },

            {
                name: 'Airing Today',
                link: '/series#airing-today'
            }
        ]
    },

    people: {
        title: 'People',
        routes: [
            {
                name: 'Most Popular People',
                link: '/people#popular'
            }
        ]
    },
}

export default pages;