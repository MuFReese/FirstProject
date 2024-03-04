import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Calculator from './components/Main/Calculate/Calculate';
import BaseInfo from './components/Main/BaseInfo/BaseInfo';
import Tasks from './components/Main/Tasks/Tasks'
import UserSearch from './components/Main/UserSearch/UserSearch';


function App() {
  const [tab, setTab] = useState('BaseInfo')

  return (
    <>
    <Header/>
    <div className='navigetionAndMain'>
      <Navigation active={tab} onChange={(current) => setTab(current)}/>
      <main>
        { tab === 'BaseInfo' && 
        <>
        <BaseInfo/>
        </>
        }
        { tab === 'Calculate' && 
        <>
        <Calculator/>
        </>
        }
        { tab === 'Tasks' && 
        <>
        {/* <div style={{color:'white'}}>1</div> */}
        <Tasks></Tasks>
        </>
        }
        { tab === 'User Search' && 
        <>
        <UserSearch/>
        </>
        }
        
      </main>
    </div>
    </>
  )
}

export default App;
