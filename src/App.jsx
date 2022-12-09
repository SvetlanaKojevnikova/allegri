import Footer from "./Layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Header from "./Layout/Header/Header";
import "./scss/Style.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
