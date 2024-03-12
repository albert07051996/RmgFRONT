import { Link } from 'react-router-dom';
import './globalStyles.css';

import { useAppDispatch, useAppSelector } from './hooks';
import { RouterList } from './router/Router';
import { LeftBar } from './components/navigationBar/LeftBar';
import { TopBar } from './components/navigationBar/TopBar';
import { useEffect } from 'react';
import {StyleModal} from "./components/styleModal/StyleModal"

function App() {
  const dispatch = useAppDispatch();
  const styles = useAppSelector(state => state.styleStory);
  useEffect(() => {
  

  }, [styles.navigationBar]);
  return (
    <div>
     <div className="App">
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center',
          }}
        > */}
        <StyleModal/>
          {styles.navigationBar == "Left" ? (<div>
            <LeftBar/>
            </div>): (<div>
            <TopBar/>
            </div>)}        
            {/* <LeftBar/> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
