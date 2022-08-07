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
                name: 'Top Rated',
                link: '/movies#top-rated'
            },

            {
                name: 'Upcoming',
                link: '/movies#upcoming'
            },

            {
                name: 'Now Playing',
                link: '/movies#now-playing'
            }
        ]
    },

    series: {
        title: 'Series',
        routes: [
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
                name: 'Latest',
                link: '/people#latest'
            },

            {
                name: 'Popular',
                link: '/people#popular'
            }
        ]
    },
}

export default pages;