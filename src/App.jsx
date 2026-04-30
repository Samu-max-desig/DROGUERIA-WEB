import { useState } from "react";

import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog/Catalog";
import ProductModal from "./components/ProductModal/ProductModal";
import Banner from "./components/Banner/Banner";
import Stores from "./components/Stores/Stores";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>

      <Header />
      <Banner />

      <Hero />

      <FeaturedProducts
        openModal={setSelectedProduct}
      />

      <Categories />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}

      <Catalog
        openModal={setSelectedProduct}
      />
      <Stores />
      <Footer />
    </>
  );
}

export default App;