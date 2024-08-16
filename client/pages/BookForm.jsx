import { useState } from "react";

export default function BookForm() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    price: 0,
  });

  function handleChange(event) {
    console.log("Input happened");
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Form is submitted");
    console.log(form);
    //create post fetch req to server
    await fetch("https://week-07-assignment.onrender.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({
      title: "",
      author: "",
      genre: "",
      price: 0,
    });
  }
  return (
    <div>
      <h2>Add New Books!</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={form.title}
        />
        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
          value={form.author}
        />
        <input
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          value={form.genre}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          value={form.price}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
