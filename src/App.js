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


//import { useState } from "react";

//function App() {
//    const [counter, setCounter] = useState(""); // State to store the API response
//    let value1 = 5;
//    let value2 = "5";
//    const handleButtonClick = () => {
//        // Call the API
//        fetch("https://official-joke-api.appspot.com/jokes/random")
//            .then((response) => response.json()) // Parse the JSON response
//            .then((data) => {
//                setCounter(`${data.setup} - ${data.punchline}`); // Update the state with the joke
//            })
//            .catch((error) => {
//                console.error("Error fetching the joke:", error);
//                setCounter("Failed to fetch joke");
//            });
//    };

//    return (
//        <div>
//            <button onClick={handleButtonClick}>
//                Click please
//            </button>
//            <p>{counter}</p>
//            <p>Forged string : {value1 + value2}</p>
//            <p>Adding values : {"5" +  5 }</p>
//            <p>Adding values : {"5" + "5"}</p>
//            <p>Adding values : { 5  + "5"}</p>
//            <p>Adding values : { 5  +  5 }</p>
//            <p>Type of counter: {typeof counter}</p> {/* Displaying the type of 'counter' */}
//        </div>
//    );
//}

//export default App;



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

import { useState } from "react";

function App() {
    const [search, setSearch] = useState(""); // State for the search input
    const [actorImages, setActorImages] = useState([]); // State for the actor's images
    const [error, setError] = useState(""); // State for error messages
    const [darkMode, setDarkMode] = useState(false); // State for dark mode

    const API_KEY = "003b3d8750e2856a2fc6e6414311d7eb";

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!search.trim()) {
            setError("Please enter a valid actor name.");
            setActorImages([]); // Clear previous images
            return;
        }

        setError(""); // Clear any previous errors

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/person?query=${search}&api_key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data from the API.");
            }
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const actor = data.results[0];

                const imageResponse = await fetch(
                    `https://api.themoviedb.org/3/person/${actor.id}/images?api_key=${API_KEY}`
                );
                if (!imageResponse.ok) {
                    throw new Error("Failed to fetch actor images.");
                }
                const imageData = await imageResponse.json();

                if (imageData.profiles && imageData.profiles.length > 0) {
                    const images = imageData.profiles.map(
                        (profile) => `https://image.tmdb.org/t/p/w500${profile.file_path}`
                    );
                    setActorImages(images);
                } else {
                    setError("No images available for this actor.");
                    setActorImages([]);
                }
            } else {
                setError("No actor found with that name.");
                setActorImages([]);
            }
        } catch (err) {
            setError("An error occurred while fetching data.");
            console.error(err);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "20px",
                backgroundColor: darkMode ? "#121212" : "#f5f5f5",
                color: darkMode ? "#ffffff" : "#000000",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <button
                onClick={toggleDarkMode}
                style={{
                    padding: "10px 20px",
                    backgroundColor: darkMode ? "#333333" : "#dddddd",
                    color: darkMode ? "#ffffff" : "#000000",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
            <h1>Actor Search</h1>
            <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter actor's name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        backgroundColor: darkMode ? "#333333" : "#ffffff",
                        color: darkMode ? "#ffffff" : "#000000",
                        border: "1px solid",
                        borderColor: darkMode ? "#555555" : "#cccccc",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        marginLeft: "10px",
                        backgroundColor: darkMode ? "#555555" : "#007bff",
                        color: darkMode ? "#ffffff" : "#ffffff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
                {actorImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Actor ${index + 1}`}
                        style={{ width: "200px", borderRadius: "10px" }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;


