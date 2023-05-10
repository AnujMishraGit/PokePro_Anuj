import pokeball2 from "../../assets/assets/pokeball2.png";


function Background() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-950   grid-cols-3  grid object-cover">
      <img src={pokeball2} alt="pokeball2" className="pokeball pokeball2" />'
      <img src={pokeball2} alt="pokeball2" className="pokeball pokeball-2" />'
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2" />'
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2" />'
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-2" />'
    </div>
  );
}

export default Background;
