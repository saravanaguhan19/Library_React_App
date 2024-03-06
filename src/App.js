import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
