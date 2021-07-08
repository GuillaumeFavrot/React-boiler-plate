import { useState } from 'react'
import Test from "./components/Test"
import User from "./components/User"

function App() {
  const [users, setUser] = useState([
    {
    name: "Guillaume",
    age: 29
    },
    {
    name: "Hervé",
    age: 53
   },
   {
    name: "Marion",
    age: 12
   }
])

  const greeting = () => {
    alert("salut!")
  } 

  return (
    <div>
      <Test  text="Task Manager" greet = {greeting}/>
      <User users = {users}/>
    </div>
  );
}

export default App;
