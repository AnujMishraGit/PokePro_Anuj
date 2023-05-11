import pokeball2 from "../../assets/assets/pokeball2.png";

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-600 to-purple-950">
      <img
        src={pokeball2}
        alt="pokeball2"
        className="absolute top-0 left-0 w-1/2 h-1/2 object-fit"
      />
      <img
        src={pokeball2}
        alt="pokeball2"
        className="absolute top-0 right-0 w-1/2 h-1/2 object-fit"
      />
      <img
        src={pokeball2}
        alt="pokeball"
        className="absolute bottom-0 left-0 w-1/2 h-1/2 object-fit"
      />
      <img
        src={pokeball2}
        alt="pokeball"
        className="absolute bottom-0 right-0 w-1/2 h-1/2 object-fit"
      />
    </div>
  );
}

export default Background;
