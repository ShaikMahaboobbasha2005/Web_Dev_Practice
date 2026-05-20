//using forEach method on an array

const movies = [
    {
        name: "Interstellar",
        rating: 9
    },
    {
        name: "Inception",
        rating: 8.8
    },
    {
        name: "The Dark Knight",
        rating: 9.5
    },
    {
        name: "Avatar",
        rating: 8
    },
    {
        name: "Gladiator",
        rating: 9.2
    }
];

    movies.forEach(function(movie){
        console.log(`${movie.name} - ${movie.rating}/10`)
    });