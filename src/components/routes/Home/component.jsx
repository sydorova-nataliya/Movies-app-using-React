import ListOfMovies from '../../ListOfMovies';

import './styles.scss'

const Home=()=>(
    <main>
      <div className='info'>
        <h1 className="info__title">Movies app using React</h1>
        <h2 className="info__subtitle">In this application you can see the most popular movies. It is also possible to use the search and find suitable films. By clicking on "More information" you can see detailed information about the film</h2>
      </div>
      <ListOfMovies getMovie="popular" title="Popular movies"/>
    </main>
  )


export default Home;
