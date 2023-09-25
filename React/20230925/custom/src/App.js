import useMouseLocation from "./Hooks/useMouseLocation";
import InputComponent from "./Components/InputComponents";
import SomethingComponent from "./Components/SomethingComponents";
import useScroll from "./Hooks/useScroll";

function App() {
  // console.log(useMouseLocation());
  let mouseLocation = useMouseLocation();
  const isBottom = useScroll()
  return (
    <div style={{height: 150, backgroundColor: mouseLocation.x > 500 ? "royalblue" : "pink" }}>
      <InputComponent/>
      <SomethingComponent/>
      
    </div>
  );
}
export default App;
