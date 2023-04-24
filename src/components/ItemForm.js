import React, { useState } from "react";



function ItemForm({ onAddItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  // Add function to handle submissions
  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: name,
      category: category,
      isInCart: false,
    };
    // console.log(itemData);

    fetch("http://localhost:4000/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddItem(newItem));
  }

  return (
  <>
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>  
  </>
  );
}






// function ItemForm() {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("All");

//   function handleSubmit(e) {
//     e.preventDefault()
//     const itemData = {
//       name: name,
//       category: category,
//       isInCart: false,
//     };
    
//     fetch("http://localhost:4000/items", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(itemData),
//   })
//     .then((r) => r.json())
//     .then((newItem) => console.log(newItem));  

//   }

//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit" onSubmit={handleSubmit}>Add to List</button>
//     </form>
//   );
// }

export default ItemForm;
