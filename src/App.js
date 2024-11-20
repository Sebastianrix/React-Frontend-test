//function App({ user }) {
//    if (user === "Bob") {
//        return <p>Access denied</p>
//    }
//    if (user) { 
//    return (
//        <div>
//            <h1>Hello {user} </h1>
//            <p> 2 plus 3 is {2 + 3} </p>
//        </div>
//    );
//    }
//    return <p>No User</p>
//}

//export default App;
//function App() {
//    return (
//        <div>
//            <h1>Hello World</h1>
//            <p>Made with React</p>
//        </div>
//    );
//}

//export default App;

//function App({ user }) {
//  //  let user = "Bob";
//    return (
//        <div>
//            <h1>Hello {user} </h1>
//            <p> 2 plus 3 is {2 + 3} </p>
//        </div>
//    );
//}

//export default App;

//function Greet({ user }) {
//    return <p>Hello {user}</p>
//}

//function Greeter({ children }) {
//    return (<div> <p>Say hello to;</p>
//         { children }
//    </div >
//    );
//}
//function App() {
//    return (
//        <Greeter>
//            <Greet user="Bob" />
//            <Greet user="Mary" />
//        </Greeter>
//    );
//}
//export default App;





//function App() {
//    let users = [
//        <User name="Bob" />,
//        <User name="Mary" />,
//        <User name="Sam" />,
//        <User name="Jones" />
//    ];
//    return (
//        <div>
//            <p>The users are:</p>
//            {users}
//        </div>
//    );
//}

//export default App;

//function User({ name }) {
//    return <p>User {name}</p>;
//}


//function User({ name }) {
//    return <p>User {name}</p>;
//}

//function App() {
//    let users = ["Bob", "Mary"];
//    return (
//        <div>
//            <p>Users are:</p>
//            {users.map((u, i) => <>{i}: <User name={u} /></>)}
//        </div>
//    );
//}

//export default App;

//function User({name, age}) {
//  return (
//    <p>
//      User {name} ({age} years old)
//    </p>
//  ); 
//}

////function App() {
////  let user = { name: "Bob", age: 23 };
////  return (
////    <div>
////      <User name={ user.name }
////            age={user.age} />
////    </div> 
////  );
////}


//function App() {
//    let users = [{ name: "Bob", age: 23 }, { name: "Mary", age: 8 }];
//    return (
//        <div>
//            <p>Users are:</p>
//            {users.map((u, i) => <>{i}: <User name={u.name} age={u.age}  /></>)}
//        </div>
//    );
//}
//export default App;



//import { useState } from "react";

//function App() {

//    const [counter, setCounter] = useState("");
//    const handleButtonClick = () => {
//        setCounter(counter + "lol"); // Increment the counter
//       // alert("Clicked!");      // Show the alert
//    };

//    return (
//        <div>

//            <button onClick={handleButtonClick}>
//            Click please
//            </button>
//            <p>Counter is {counter}</p>
//        </div>
//    );
//}

//export default App;


import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(""); // State to store the API response
    let value1 = 5;
    let value2 = "6";
    const handleButtonClick = () => {
        // Call the API
        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then((response) => response.json()) // Parse the JSON response
            .then((data) => {
                setCounter(`${data.setup} - ${data.punchline}`); // Update the state with the joke
            })
            .catch((error) => {
                console.error("Error fetching the joke:", error);
                setCounter("Failed to fetch joke");
            });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                Click please
            </button>
            <p>{counter}</p>
            <p>{value1+value2}</p>
            <p>Type of counter: {typeof counter}</p> {/* Displaying the type of 'counter' */}
        </div>
    );
}

export default App;



//import { useState, useEffect } from "react";

//function App() {
//    const [users, setUsers] = useState([]);
  

//    useEffect(() => {
//        fetch("https://api.themoviedb.org/3/search/person?query=Q&api_key=003b3d8750e2856a2fc6e6414311d7eb")
//            .then(res => res.json())
//            .then(data => setUsers(data.results));

//    },
//        []);
//    return (
//        <div>
          
//            {users.map((u) => <p>{u.name}</p>)}
//        </div>
//    );
//}

//export default App;


