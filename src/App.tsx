import './style.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MenuProvider } from './MenuContext';
import Home from './pages/Home';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';

function App() {
    return (
        <MenuProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/users' element={<Home />} />
                    <Route path='/user' element={<UserInfo />} />
                </Routes>
            </Router>
        </MenuProvider>
    );
}

export default App;
