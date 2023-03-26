import { useEffect } from "react";
import Slider from "react-slick";

import { generateUrl } from '../../../../helpers/utils';
import Movie from './Movie';

import './styles.scss'

const Movies=({getMovie, title,action, movies})=>{

  useEffect(()=>{
  fetch(generateUrl(getMovie))
      .then(res=>res.json())
      .then(data=>{action(data)})
  },[getMovie])

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
      responsive : [
        {
          breakpoint : 420,
          settings :{
              slidesToShow: 1,
              slidesToScroll:1,
              dots: true,
          }
      },
        {
            breakpoint : 767,
            settings :{
                slidesToShow: 2,
                slidesToScroll:1,
                dots: true,
            }
        },
        {
          breakpoint : 1023,
          settings :{
              slidesToShow: 3,
              slidesToScroll:1,
              dots: true,
          }
      },
      {
        breakpoint : 1439,
        settings :{
            slidesToShow: 4,
            slidesToScroll:2,
            dots: true,
        }
    },
    ]
  };
      
  return (
    <div className='movies'>
      <h1 className='movies__title'>{title}</h1>
      <section className='movies__holder'>
        
          { movies.length===0 ? 'Loading...':
            <Slider {...sliderSettings}>
              {
                movies.results.map((movie)=> 
                <Movie key={movie.id}{...movie}/>)
              }
            </Slider>
          }

      </section>
    </div>
  );
}

export default Movies;

