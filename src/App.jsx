import NavBar from "./Components/NavBar";
import  Home  from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}


export default App;
