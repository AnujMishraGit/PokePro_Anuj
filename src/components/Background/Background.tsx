
import background from "../../assets/background.jpg";

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-600 to-purple-950 object-cover">
      <img src={background} alt="Background" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"/>
    </div>
  );
}

export default Background;
