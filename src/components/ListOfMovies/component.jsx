import useGetData from '../../hooks/useGetData';
import { generateUrl } from '../../helpers/utils';

import ListMovie from './ListMovie';
import './styles.scss'

const ListOfMovies=({getMovie, title})=>{
  let {data, _, loading} = useGetData(generateUrl(getMovie));
  console.log(data);
  if(loading || data.length === 0) {
    return 'Loading ...';
  }
  return (
    <div className='movies'>
      <h1 className='movies__title'>{title}</h1>
      <section className='movies__holder'>
        
          {
           data.results.map((movie)=> 
            <ListMovie key={movie.id}{...movie}/>)
          }
        {console.log(data.results)}

      </section>
    </div>
  );

}


export default ListOfMovies;
