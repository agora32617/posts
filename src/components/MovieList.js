import MovieItem from './MovieItem';
const MovieList = ({ movies,onSelectMovie }) => {

    return (
        <div className='row d-flex justify-content-center'>
	
			{ movies.map(movie =>  <MovieItem onSelectMovie = {onSelectMovie} key={movie.id} movie={movie} />)
            }
			{console.log(movies)} 
        </div>
    );
}
export default MovieList;