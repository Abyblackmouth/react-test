import logo from './logo.svg';
import './App.css';
import CardProducts from './Card';

function App() {
const products = [
  {
  name:"Echo Show 5 (2da generación, edición 2021)",
  image:"https://m.media-amazon.com/images/I/511ia4lOMfS._AC_UL400_.jpg",
  description:"Echo Show 5 (2da generación, edición 2021) - Pantalla inteligente HD con Alexa y cámara de 2 MP - Negro",
  url:"https://www.amazon.com.mx/Nuevo-Echo-Show-generaci%C3%B3n-edici%C3%B3n/dp/B08J8FFJ8H/ref=sr_1_2?crid=1W5O45Z7SXU0T&keywords=tecnologia+para+el+hogar&qid=1694574785&sprefix=tecnolo%2Caps%2C161&sr=8-2&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"
},
{
  name:"Licuadora de 1000 vatios",
  image:"https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UL400_.jpg",
  description:"Ninja - Professional BL610 - Licuadora de 1000 vatios - Tecnología de trituración total",
  url:"https://www.amazon.com.mx/Ninja-Professional-BL610-Licuadora-Technology/dp/B00NGV4506/ref=sr_1_6?crid=1W5O45Z7SXU0T&keywords=tecnologia%2Bpara%2Bel%2Bhogar&qid=1694574785&sprefix=tecnolo%2Caps%2C161&sr=8-6&th=1"
},
{
  name:"Magnavox MHT990",
  image:"https://m.media-amazon.com/images/I/81HqG9EPSJL._AC_SY450_.jpg",
  description:"Magnavox MHT990 2.1 Sistema de entretenimiento para el hogar con tecnología inalámbrica Bluetooth y luces que cambian de color en negro, puerto AUX, subwoofer con 2 altavoces, luces pulsantes",
  url:"https://www.amazon.com.mx/Magnavox-entretenimiento-tecnolog%C3%ADa-inal%C3%A1mbrica-Bluetooth/dp/B0924WVZ95/ref=sr_1_17?crid=1W5O45Z7SXU0T&keywords=tecnologia+para+el+hogar&qid=1694574785&sprefix=tecnolo%2Caps%2C161&sr=8-17&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"
}
]
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map((product, index) =>{
            return(
              <CardProducts
                key={index}
                name = {product.name}
                image = {product.image}
                description = {product.description}
                url = {product.url}
              />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
