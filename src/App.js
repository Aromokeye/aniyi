import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Switch, Route, useLocation} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState, lazy} from 'react';

const Navigation = lazy(()=> import('./Components/Navigation/Navigation'))
const About = lazy(()=> import('./Components/About/About'))
const Hero = lazy(()=> import('./Components/Hero/Hero') )
const Header = lazy(()=> import('./Components/Header/Header'))
const Works = lazy(()=>import('./Components/Works/Works'))
const Experience = lazy(()=> import('./Components/Experience/Experience'))
const Contact = lazy(()=> import('./Components/Contact/Contact'))

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
        return setPage(3)
      case '/experience' || '/experience/freelance' : 
        setTitle('Work Experience')
        return setPage(2)
      case '/contact' :
        setTitle('Say Hello!')
        return setPage(4)
      default:
        return ''
    }
  }, [location.pathname])

  const container={
    hidden: { opacity: 0, scale: .99 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }
    }
  }

  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    }
  };

  return (
    <motion.div 
    className="w-100 flex moon-gray"
    variants={container}
    initial="hidden"
    animate="visible"
    >
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
        <motion.header 
        className="ph2 mt4 ph5-l ph4-m heading fixed top-0 w-90 w-80-ns z-2"
        variants={item}
        >
          <div className='mt4 flex justify-between  relative'>
            <Header/>
            <div className='f3-l f4 flex items-center'>{title}</div>
          </div>
        </motion.header>
        <motion.main className='mh2 mh4-ns' variants={item}>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={Hero}/>
              <Route path='/about' component={About} />
              <Route path='/experience' component={Experience}/>
              <Route path='/works' component={Works} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </AnimatePresence>
        </motion.main>
        <motion.nav className='w-90 w-80-ns ph4-m ph2 ph5-l navline' variants={item}>
          <Navigation/>
        </motion.nav>
        <div className='flex justify-center fixed bottom-0 f7 pa f6-ns right-2 left-1'>
          Made with <div>&#128155;</div> by Niyi Aromokeye 
          <div className='ml1'> &copy; </div> 2021
        </div>
      </div>


    </motion.div>
  );
}

export default App;
