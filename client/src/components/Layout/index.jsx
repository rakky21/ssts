import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <section className="childrens_style"> {children} </section>
      <Footer />
    </main>
  );
};

export default Layout;
