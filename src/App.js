
import InfoGraphic from "./InfoGraphic";

function App() {
  document.cookie = "Tracker Cookie; expires=fri, 12 Apr 2024 00:00:00 GMT"
  return (
    <>
      <div className="main"> 
        <h1 className="tagLine">
        HAVE A COOKIE
        </h1>
        <InfoGraphic/>
      </div>

    </>
  );
}

export default App;
