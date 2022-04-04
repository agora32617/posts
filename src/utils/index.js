const fetchMovies = async (search = 'The godfather') => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts').then(res => res.json());
  //console.log(response);
  const  movies = response;
  
  return  movies ;
}
const fetchMovieById = async (movieId) => {
 
  const response = await fetch('http://jsonplaceholder.typicode.com/posts/' + movieId).then(res => res.json());
 
  return response;
}
export { fetchMovies, fetchMovieById };