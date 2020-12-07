import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App(){
     
    return(
       <div className='App'>
           <header className='App-header'>
              <ReactPlayer url='https://www.youtube.com/watch?v=WQeoO7MI0Bs' controls={true}
                />

          </header>

        </div>

  

   )

}


export default App;
