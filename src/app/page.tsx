import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NewProduct from "./components/NewProductCard/NewProduct";
import ProductCard from "./components/Products/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <NewProduct />
      <ProductCard />
      <HomeComponent/>
      <Footer/>
    </main>
  );
}
