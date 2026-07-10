//using filter method to choose series with ratings 9 or above

const Series = [
    {
        name: "Breaking Bad",
        rating: 9.8
    },
    {
        name: "Dark",
        rating: 9
    },
    {
        name: "Stranger Things",
        rating: 8.5
    },
    {
        name: "Resurrection Ertugrul",
        rating: 9.2
    },
    {
        name: "Money Heist",
        rating: 8.3
    }
];

series.filter(goodSeries => goodSeries.rating >= 9);