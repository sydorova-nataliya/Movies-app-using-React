import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Movies from '../Home/Movies';

import './styles.scss';

const Home=()=> (
  <>
    <Header />
      <main className='main'>
        <Movies getMovie="popular" title="Popular movies"/>
        <Movies getMovie="top_rated" title="Top rated"/>
      </main>
    <Footer />
  </>

)


export default Home;
