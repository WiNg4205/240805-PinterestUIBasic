import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBell, faMessage, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = ({ page }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 h-20 flex items-center justify-center px-4">
      <Link to='/'>
        <FontAwesomeIcon className='text-logo h-6 w-6 p-3 rounded-full hover:bg-neutral-200' icon={faPinterest} />
      </Link>
      
      <div className='flex font-semibold text-stone-950 items-center'>
        <Link to='/'>
          <div className={`cursor-pointer px-4 py-2.5 rounded-full ${ page === 'home' ? 'bg-black text-white' : 'bg-transparent text-black'}`}>Home</div>
        </Link>
        <Link to='/today'>
        <div className={`cursor-pointer px-4 py-2.5 rounded-full ${ page === 'explore' ? 'bg-black text-white' : 'bg-transparent text-black'}`}>Explore</div>
        </Link>
        <Link to='/pin-creation-tool'>
        <div className={`cursor-pointer px-4 py-2.5 rounded-full ${ page === 'create' ? 'bg-black text-white' : 'bg-transparent text-black'}`}>Create</div>
        </Link>
      </div>
      <div className='bg-search grow text-icon py-2.5 px-4 mx-2 rounded-full flex items-center hover:bg-neutral-200'>
        <FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass} />
        Search
      </div>
      <div className='text-icon flex items-center justify-around w-44'>
        <FontAwesomeIcon className='h-5 w-5 p-3 rounded-full hover:bg-neutral-200 cursor-pointer' icon={faBell} />
        <FontAwesomeIcon className='w-5 h-5 p-3 rounded-full hover:bg-neutral-200 cursor-pointer' icon={faMessage} />
        <div className='p-3 rounded-full hover:bg-neutral-200'>
          <div className='bg-cyan-600 text-white rounded-full w-6 h-6 font-light text-xs flex justify-center items-center cursor-pointer'>W</div>
        </div>
        <FontAwesomeIcon className='w-4 h-4 p-1 rounded-full hover:bg-neutral-200 cursor-pointer' icon={faAngleDown} />
      </div>
    </div>
  )
}

export default NavBar
