import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAHGesBvuwB-DaQBm3h2v64fJET9Ac5Zn0",
  authDomain: "test-stuff-be3ac.firebaseapp.com",
  databaseURL: "https://test-stuff-be3ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-stuff-be3ac",
  storageBucket: "test-stuff-be3ac.appspot.com",
  messagingSenderId: "21652882780",
  appId: "1:21652882780:web:cb8a11960d39afbc7b2d99"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
