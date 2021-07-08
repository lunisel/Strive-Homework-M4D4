import './App.css';
import MyNavBar from "./Components/MyNavBar"
import MyFooter from "./Components/MyFooter"
import MyJumbotron from './Components/MyJumbotron'
import BookList from "./Components/BookList"
import WarningSign from "./Components/WarningSign"

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyJumbotron />
      <WarningSign text="This is an alert !" />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
