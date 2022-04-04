import {  useParams } from "react-router-dom";

const MovieList = () => {

    
	  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
     
}
export default MovieList;