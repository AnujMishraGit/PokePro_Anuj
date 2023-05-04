
import pokeball2 from "../../assets/assets/pokeball2.png"
import "./background.css"

function Background() {
  return (
    <div className='bg-gradient-to-br from-purple-600 to-purple-950  w-screen max-h-screen grid-cols-3  grid overflow-clip' >
     
      <img src={pokeball2} alt="pokeball2" className="pokeball pokeball2"/>'
      <img src={pokeball2} alt="pokeball2" className="pokeball pokeball-2"/>'
      
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2"/>'
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2"/>'
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2"/>'
      
      
     
    </div>
  )
}

export default Background
