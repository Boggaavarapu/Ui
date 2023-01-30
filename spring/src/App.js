
import './App.css';
import SpringApp from './Components/SpringApp';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import View1 from './Components/View1';
import AddFolder from './Interface/AddFolder';
import OpenFolder from './Interface/OpenFolder';
import EditFolder from './Interface/EditFolder';
import AddFile from './Interface/AddFile';
import UploadFile from './Interface/UploadFile';
import EditFile from './Interface/EditFile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<View1/>}></Route>
          <Route exact path='/UploadFile/:id' element={<UploadFile/>}></Route>
          <Route exact path='/openFile' element={<AddFile/>}></Route>
          <Route exact path='/editFile/:id1/:id' element={<EditFile/>}></Route>
          <Route exact path="/edit/:id" element={<EditFolder/>}></Route>
          <Route exact path="/open/:id" element={<OpenFolder/>}></Route>
          <Route exact path="/AddFolder" element={<AddFolder/>}></Route>
        </Routes>
        
      </Router>
    
    </div>
  );
}

export default App;
