/* styles.css */
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    transition: background-color 0.5s, color 0.5s; /* Smooth transition for theme change */
}

body.light-theme {
    background-color: white;
    color: black;
}

body.dark-theme {
    background-color: #121212;
    color: white;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

button {
    font-size: 1em;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

