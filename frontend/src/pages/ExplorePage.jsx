import NavBar from '../components/NavBar'
import moment from 'moment-timezone'

const ExplorePage = () => {
  const dateInUserTimezone = moment()    
  const date = dateInUserTimezone.format('D MMMM YYYY')
  return (
    <>
      <NavBar page='explore'/>
      <div className="overflow-y-auto h-screen mt-20">
        <div className="flex flex-col items-center pt-8 gap-1">
          <h2 className="text-lg font-semibold">{date}</h2>
          <h1 className="text-4xl font-semibold">Stay inspired</h1>        
        </div>        
      </div>


    </>
  )
}

export default ExplorePage
