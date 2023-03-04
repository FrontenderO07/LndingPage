import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import UsersReviews from "./components/UsersReviews";
import Page from "./pages/Page";
import { SimpleSlider } from "./components/Slider";
import Questions from "./components/Questions";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      <Page>
        <Header />
         <Main />
        <SimpleSlider />
        <UsersReviews />
        <Questions />
        <AboutUs/>
        <Footer /> 
      </Page>
    </>
  );
}

export default App;
