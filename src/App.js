import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";
import Footer from "./components/footer.jsx";
import Jumbotron from "./components/Jumbotron.jsx";

const cards = [
  {
    image:
      "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/03/04/6F3E2E33-8AAF-4607-8B3E-80261F00FB86/naruto_69.jpg?crop=1920,1080,x0,y0&width=1280&height=720&optimize=low&format=jpg",
    title: "Naruto",
    description: "Origenes de Naruto",
  },
  {
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/07/4-fantasticos.jpeg?tf=3840x",
    title: "Los 4 Fantasticos",
    description: "Bienvenidos al UCM!",
  },
  {
    image:
      "https://i.blogs.es/acc7e2/vegeta-ultraego-dragon-ball/1366_2000.jpeg",
    title: "Vegeta Ego",
    description: "Su versión mas fuerte!",
  },
  {
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Dc-Rebirth-Batman-Header-Image.jpg",
    title: "Batman",
    description: "Los momentos mas duros de Batman",
  },
];

const App = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card cards={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
