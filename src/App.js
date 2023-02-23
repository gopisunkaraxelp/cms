import './App.css';
// import Titel from './Title';

import Nav from './Nav';
import Side from './Side';
import Contentpage from './Contentpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col ">
          <div className='position-fixed'>
            <div className="w-[100vw] position-fixed">
              <Nav/>
            </div>
          </div>
          <div className="flex flex-row h-[80vh]  mt-20">
            {/* <div className="lg:w-[150px] md:w-[120px] h-[100vh] sm:w-[120px] bg-light position-fixed ">
              <Side/>
            </div> */}
         <div className="w-[80vw] h-[100vh] mt-12 ">
              <Routes>

                  
                  
                  <Route path='/' element={<Contentpage/>}/>
                  
                 
                 
              </Routes>
            
          </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
