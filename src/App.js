import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Switch, Route, useLocation} from 'react-router-dom'
import Works from './Components/Works/Works';
import { useEffect, useState, lazy} from 'react';

const Navigation = lazy(()=> import('./Components/Navigation/Navigation'))
const About = lazy(()=> import('./Components/About/About'))
const Hero = lazy(()=> import('./Components/Hero/Hero') )
const Header = lazy(()=> import('./Components/Header/Header'))

function App() {
  let location = useLocation()
  const [title, setTitle] = useState('')
  const [page, setPage] = useState('')
  useEffect(()=>{
    switch (location.pathname) {
      case '/':
        setTitle('Welcome')
        return setPage('i')
      case '/about' :
        setTitle('Meet Me')
        return setPage(1)
      case '/works' :
        setTitle('Projects')
        return setPage(2)
      case '/read' : 
        setTitle('Readings')
        return setPage(3)
      case '/contact' :
        setTitle('Say Hello')
        return setPage(4)
      default:
        return ''
    }
  }, [location.pathname])
  return (
    <div className="w-100 flex moon-gray">
      <aside className='w-20-ns w-10'>
        <div className='mail-line'>
          <a href='mailto:oyekeye@hotmail.com' 
          target="_blank" rel="noreferrer" 
          className='mail' aria-label='email'>
              <FontAwesomeIcon icon={faEnvelope}/>
          </a>
        </div>
        <h1 className='f-headline-ns f-subheadline i'>{page}</h1>
        <div className='socials flex flex-column'>
          <a href='https://github.com/Aromokeye' 
          target="_blank" rel="noreferrer" 
          className='social' aria-label='Github'>
              <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href='https://www.linkedin.com/in/niyi-aromokeye-34a3b345/' 
          target="_blank" rel="noreferrer" 
          className='social' aria-label='Linked In'>
              <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
          <a href='https://twitter.com/NiyiAromokeye' 
          target="_blank" rel="noreferrer" 
          className='social' aria-label='twitter'>
              <FontAwesomeIcon icon={faTwitter}/>
          </a>
        </div>  
      </aside>
      <div className='app w-80-ns w-90 relative'>
        <header className="ph2 mt4 ph5-l ph4-m heading fixed top-0 w-90 w-80-ns z-2">
          <div className='mt4 flex justify-between  relative'>
            <Header/>
            <div className='f3-l f4 flex items-center'>{title}</div>
          </div>
        </header>
        <main className='mh2 mh4-ns'>
          <Switch>
            <Route exact path='/' component={Hero}/>
            <Route path='/about' component={About} />
            <Route path='/works' component={Works} />
          </Switch>
        </main>
        <nav className='w-90 w-80-ns ph4-m ph2 ph5-l navline'>
          <Navigation/>
        </nav>
      </div>


    </div>
  );
}

export default App;
