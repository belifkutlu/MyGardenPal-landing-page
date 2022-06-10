import "./App.css";
import image from "./assets/images/logo.png";

function App() {
  return (
    <div className="Container">
      <header className="header">
        <navbar className="header-left">
          <img src="{image}" alt="logo" />
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </navbar>
        <div className="header-right">
          <button></button>
          <input type="search" name="" id="" />
        </div>
      </header>
      <section className="section-1">
        <div className="hero-image">
          <div className="card-1"></div>
          <div className="card-2"></div>
        </div>
        <div className="content-texts-wrapper">
          <div className="content">
            <h1></h1>
            <p></p>
            <button></button>
          </div>
          <div className="provides">
            <h3></h3>
            <div className="icons"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
