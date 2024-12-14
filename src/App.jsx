import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="px-5">
      <Header></Header>
      <Banner></Banner>
      <RecipeInfo></RecipeInfo>
      <RecipeContainer></RecipeContainer>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
