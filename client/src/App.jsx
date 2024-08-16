import { Route, Routes, Link } from "react-router-dom";
import BookForm from "../pages/BookForm";
import BookList from "../pages/BookList";

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/list">Book List</Link>
      </header>
      <h1>Books Website</h1>

      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/list" element={<BookList />} />
      </Routes>
    </div>
  );
}
