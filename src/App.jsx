import "./App.css";
import Header from "./components/header";
import MainContent from "./components/maincontent";
import ProductSection from "./components/product";
import FAQ from "./components/faq";
import Footer from "./components/footer";




function App() {
  return (
    <div>
      <Header />    
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
