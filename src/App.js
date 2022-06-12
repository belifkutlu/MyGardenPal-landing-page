import "./App.css";
import image from "./assets/images/logo.svg";
import save from "./assets/images/save.svg";
import profil from "./assets/images/profil.svg";
import women from "./assets/images/women.png";
import play from "./assets/images/play.svg";
import vase from "./assets/images/vase.jpg";
import icon1 from "./assets/images/icon1.svg";
import icon2 from "./assets/images/icon2.svg";
import icon3 from "./assets/images/icon3.svg";
import icon4 from "./assets/images/icon4.svg";
import icon5 from "./assets/images/icon5.svg";
import icon6 from "./assets/images/icon6.svg";
import leaf from "./assets/images/leaf.png";
import hero from "./assets/images/hero-image.png";
import tree from "./assets/images/tree.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={image} alt="logo" />
        <navbar className="header-left">
          <a href="/">Home</a>
          <a href="/">Why Garden?</a>
          <a href="/">Plant Guide</a>
          <a href="/">Donate</a>
        </navbar>
        <div className="header-right">
          <input placeholder="Search here" type="search" name="" id="" />
          <button>
            <img src={profil} alt="profil" />
            Login
          </button>
        </div>
      </header>
      <section className="section-1">
        <div className="left-content">
          <div className="hero-image">
            <img src={hero} alt="" />
            <div className="card-1">
              <div className="women">
                <img src={women} alt="" />
              </div>
              <button>
                <img src={play} alt="" />

                <div className="articles">
                  <span>How we works</span> <br />{" "}
                  <span className="subtitle">Watch our work process</span>
                </div>
              </button>
            </div>
            <div className="card-2">
              <div className="card-content">
                <img src={vase} alt="vase" />
                <button>Donate now</button>
                <div className="tree">
                  <img src={tree} alt="tree" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-texts-wrapper">
          <div className="content">
            <h1>We bring nature to your</h1>
            <dic className="leaf-wrapper">
              <h2>sweet home</h2>
              <img className="leaf" src={leaf} alt="" />
            </dic>
            <p>
              MyGardenPal is the best in class gardening service for your garden
              need. Discounts available for early subscribers.
            </p>
            <button>
              <img src={save} alt="" />
              Become a volunteer
            </button>
          </div>
          <div className="provides">
            <h3>We provides -</h3>
            <div className="icons">
              <div className="plant-icon">
                <img src={icon1} alt="" /> <span> Soil Test</span>
              </div>
              <div className="plant-icon">
                <img src={icon2} alt="" /> <span> Bug Killing</span>
              </div>
              <div className="plant-icon">
                <img src={icon3} alt="" />{" "}
                <span>
                  {" "}
                  Pots & <br />
                  Planters
                </span>
              </div>
              <div className="plant-icon">
                <img src={icon4} alt="" /> <span> Lawn Mowing</span>
              </div>
              <div className="plant-icon">
                <img src={icon5} alt="" /> <span>Fencing</span>
              </div>
              <div className="plant-icon">
                <img src={icon6} alt="" /> <span>Decoration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
