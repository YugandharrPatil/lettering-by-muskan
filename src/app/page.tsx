import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
}
