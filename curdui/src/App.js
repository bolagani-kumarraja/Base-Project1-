import './App.css';
import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard'
import Nomatch from './pages/nomatch/Nomatch';
import PostUser from './pages/student/PostUser';
import UpdateUser from './pages/student/UpdateUser';
import Registration from './pages/registration/Registration';
import MainPage from './pages/mainPage.js/MainPage';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import Faculty from './pages/faculty/Faculty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/studentDashboard' element={<StudentDashboard/>}/>
          <Route path='/adminDashboard' element={<AdminDashboard/>}/>
          <Route path='/student' element={<PostUser/>}/> 
          <Route path='/student/:id' element={<UpdateUser/>}/>
          <Route path='/update/:id' element={<Faculty/>}/>
          <Route path='/faculty' element={<Dashboard/>}/>
          <Route path='/admin' element={<Registration/>}/>
          <Route path='*' element={<Nomatch/>}/> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
