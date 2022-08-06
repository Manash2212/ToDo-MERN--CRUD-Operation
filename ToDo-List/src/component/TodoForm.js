import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from './TodoList';
import './todoform.css';
import { FaPlus } from "react-icons/fa";

function TodoForm() {
   const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   const d = new Date();

   const hopedate = monthNames[d.getMonth()];

   // Get the current Month

   const [inputlist, setInputList] = useState("");
   const [items, setItems] = useState([]);

   const itemevent = (event) => {
      setInputList(event.target.value);
   };


   const fetchdata = () => {
      axios
         .get("http://localhost:5000/grocery/getAll")
         .then(function (response) {
            setItems(response.data);
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   };

   const listItems = () => {
      axios
         .post("http://localhost:5000/grocery/add", {
            // GroceryItem: inputlist,
            // isPurchased: false,
            groceryItems: inputlist,
            isPurchased: false
         })
         .then(function (response) {
            fetchdata();
            setInputList("");
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   };

   const deleteItem = (id) => {
      // console.log(id)
      axios
         .delete(`http://localhost:5000/grocery/deleteGroceryItem/${id}`)

         .then(function (response) {
            fetchdata();
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   };

   const UpDateItems = (data) => {
      axios.put(`http://localhost:5000/grocery/updatePurchaseStatus/${data._id}`,
         {
            isPurchased: !data.isPurchased
         })
         .then((response) => {
            console.log(response);
            fetchdata();
         })
         .catch((err) => {
            console.log(err);
         });
   };

   useEffect(() => {
      fetchdata();
   }, []);

   return (
      <>
         <div className="container">
            <h1 className="mainHeading">Plan for the month of "{hopedate}"</h1>
            <div className="sunContainer">
               <div className="main">
                  <input
                     type="text"
                     className="itemInput"
                     value={inputlist}
                     placeholder="Add todo"
                     onChange={itemevent}
                  />
                  <button
                     className="addBtn"
                     onClick={listItems}
                  >
                    <FaPlus/>
                  </button>
               </div>
               <div className="list">
                  {items.map((itemValue, index) => {
                     return (
                        <TodoList
                           key={index}
                           data={itemValue}
                           text={itemValue.groceryItems}
                           onSelect={deleteItem}
                           onUpdate={UpDateItems}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </>
   )
}

export default TodoForm