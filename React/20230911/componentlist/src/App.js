import '../src/style.css'
import Licat from "./components/Licat";
import HelloProps from "./components/HelloProps"
import Time from "./components/Time";
import Privacy from "./components/Privacy";
import ColorText from "./components/ColorText";
import Like from "./components/Like";
import LikeShow from "./components/LikeShow";

function App() {
  return (
    <div className='main'>
      {/* <Licat name="gary"/>
      <Time /> */}
      <HelloProps 
        name="sohee" 
        age={5} 
        someFunc={()=> 'awesome리턴'} 
        someArr={['수박', '딸기', '참외']} 
        someObj={{name: "sohee", hobby: "running"}} 
        someJSX={<img src="https://img.freepik.com/free-vector/young-woman-lying-on-meadow-with-smartphone_74855-7962.jpg?q=10&h=200" />}
      />
      <Privacy hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>

      {/* <div>
          <ColorText color="red"/>
          <ColorText color="green"/>
          <ColorText color="blue"/>
      </div> */}

      <Like />
      <LikeShow />
    </div>
  );
}
export default App;
