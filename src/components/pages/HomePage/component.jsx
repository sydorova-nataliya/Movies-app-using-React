import { Route, Routes } from "react-router-dom";

import Home from "../../routes/Home";
import Error from "../../routes/Error";

import './styles.scss'


const HomePage=()=>  (
      <>
        <Routes>
          <Route path="/" element={<Home />} >    

             
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>

      </>
    );

export default HomePage;