import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="w-100 flex moon-gray">
      <aside className='w-20-ns w-10'>
        <h1 className='f-headline-ns f-subheadline i'>i</h1>
        <div className='socials flex flex-column'>
          <a href='https://github.com/Aromokeye' target="_blank" rel="noreferrer" className='social'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href='https://www.linkedin.com/in/niyi-aromokeye-34a3b345/' target="_blank" rel="noreferrer" className='social'>
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
          <a href='https://twitter.com/NiyiAromokeye' target="_blank" rel="noreferrer" className='social'>
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
        </div>  
      </aside>
      <div className='app w-80-ns w-90 relative'>
        <header className="ma4 mh5-l heading">
          <div className='mv4 flex justify-between '>
            <Header/>
            <div className='f3-l f4 flex items-center'>2021</div>
          </div>
        </header>
        <main className='mh4-l'>
          <Switch>
            <Route exact path='/' component={Hero}/>
          </Switch>
        </main>
        <div className='absolute bottom-0 left-0 right-0 ph4 ph5-l navline'>
          <Navigation/>
        </div>
      </div>


    </div>
  );
}

export default App;
