import { calculatePopularity, convertDate, generateImageUrl, generateHref } from '../../../helpers/utils';
import './styles.scss'

const ListMovie=({id, title, poster_path,original_title, vote_average, release_date})=>{

  return (
    <>
        <div className="movie">
            <a href={generateHref(id)}>
              <img className="movie__photo" src={generateImageUrl(poster_path)} alt={title} loading="lazy"></img>
            </a>
            <a className="movie__title" href={generateHref(id)}>{original_title}</a>
            <span className="movie__popularity">{calculatePopularity(vote_average)}</span>
            <p className="movie__date">{convertDate(release_date)}</p>
        </div>
    </>
  );

}


export default ListMovie;
