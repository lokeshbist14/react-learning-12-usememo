import React, { useMemo, useState } from "react";
import ProductCalculator from "./components/ProductCalculator";

// Child Component
const User = React.memo(function User({ user }) {
  console.log("User component rendered");

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
});

function App() {
  // Example 7
  const [userName, setUserName] = useState("Lokesh"); 
  const [userAge, setUserAge] = useState(22); 
  const [userCount, setUserCount] = useState(0); 

  const user = useMemo(() => { 
    console.log("Creating user object..."); 

    return { 
      name: userName, 
      age: userAge, }; }, 
      [userName, userAge]);

      
  const [number, setNumber] = useState(1);

  const doubledNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  // Example 2
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
  console.log("Expensive calculation running...");

  let total = 0;

  for (let i = 0; i < 1000000; i++) {
    total += i;
  }

  return total;
  }, []);

  // Example 3
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);

  const totalPrice = useMemo(() => {
  console.log("Calculating total price...");
  return price * quantity;
  }, [price, quantity]);

  // Example 4
  const [search, setSearch] = useState("");

  const students = ["Lokesh", "Rahul", "Amit", "Sita"];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => 
    student.toLowerCase().includes(search.toLowerCase())
  );
  }, [search]);

  // Example 5
  const [name, setName] = useState("Lokesh");
  const [age, setAge] = useState(22);

  const userInfo = useMemo(() => {
    console.log("Creating user object...");

    return {
      name: name,
      age: age,
    };
  }, [name, age]);

  // Example 6
  const [productSearch, setProductSearch] = useState("");

  const products = [
   "iPhone",
   "Samsung",
   "Laptop",
   "iPad",
   "Headphones",
  ];

  const filteredProducts = useMemo(() => {
  console.log("Filtering products...");

  return products.filter((product) =>
    product.toLowerCase().includes(productSearch.toLowerCase())
  );
  }, [productSearch]);;





  return (
    <div>
      {/* Example 1 */}
      <h1>useMemo Example 1</h1>

      <p>Number: {number}</p>
      <p>Doubled: {doubledNumber}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      {/* Example 2 */}
      <h2>useMemo Example 2</h2>

      <p>Count: {count}</p>
      <p>Calculation Result: {expensiveCalculation}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>


      {/* Example 3 */}
      <h2>useMemo Example 3 - Multiple Values</h2>

      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: {totalPrice}</p>

      <button onClick={() => setPrice(price + 10)}>
       Increase Price
      </button>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>

      {/* Example 4 */}
      <h2>useMemo Example 4 - Search</h2>

      <input type="text" value={search} 
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search student"/>

      <ul>
        {filteredStudents.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      {/* Example 5 */}
      <h2>useMemo Example 5 - Object</h2>

      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      {/* Example 6 */}
      <h2>useMemo Example 6 - Product Search</h2>

      <input
      type="text"
      value={productSearch}
      onChange={(event) => setProductSearch(event.target.value)}
      placeholder="Search product"/>

      <ul>
      {filteredProducts.map((product) => (
      <li key={product}>{product}</li>
      ))}
      </ul>

      {/* Example 7 */}
      <h2>useMemo Example 7 - Child Component</h2>

      <User user={user} />

      <button onClick={() => setUserCount(userCount + 1)}>
        Count: {userCount}
      </button>

      <button onClick={() => setUserAge(userAge + 1)}>
        Increase Age
      </button>

      {/* Example-ProductCalculator */}
      <ProductCalculator />
    </div>
  );
}

export default App;