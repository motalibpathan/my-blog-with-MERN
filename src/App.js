import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/articles-list" element={<ArticlesList />}></Route>
          <Route path="/article/:name" element={<Article />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
