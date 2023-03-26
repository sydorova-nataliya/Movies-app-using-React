import {connect} from "react-redux";

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Movies from '../Home/Movies';
import { setPopularMovies, setTopRatedMovies, setUpcomingMovies } from '../../../store/movies/actions';
import { selectPopularMovies, selectTopRatedMovies, selectUpcomingMovies } from '../../../store/movies/selector';

import './styles.scss';

const Home=({popularMovies, topRated,upcoming, setPopularMovies,setTopRatedMovies, setUpcomingMovies})=> (
  <>
    <Header />
      <main className='main'>
        <Movies getMovie="popular" title="Popular movies" action={setPopularMovies} movies={popularMovies}/>
        <Movies getMovie="top_rated" title="Top rated" action={setTopRatedMovies} movies={topRated}/>
        <Movies getMovie="upcoming" title="Upcoming" action={setUpcomingMovies} movies={upcoming}/>
      </main>
    <Footer />
  </>

)

const mapStateToProps = state => ({
  popularMovies: selectPopularMovies(state),
  topRated: selectTopRatedMovies(state),
  upcoming: selectUpcomingMovies(state),
})

const mapDispatchToProps = {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);