import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewPhoto from './components/ViewPhoto';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <AddPhoto/>
      <SearchPhoto/>
      <DeletePhoto/>
      <ViewPhoto/>
      <NavBar/>
      
    </div>
  );
}

export default App;
