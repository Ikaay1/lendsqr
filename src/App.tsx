import './style.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserContainer from './containerComponents/UserContainer';
import UsersContainer from './containerComponents/UsersContainer';
import { MenuProvider } from './MenuContext';
import Login from './pages/Login/Login';
import UserInfo from './pages/UserInfo/UserInfo';
import Users from './pages/Users/Users';

function App() {
    return (
        <MenuProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route
                        path='/users'
                        element={<UsersContainer>{Users}</UsersContainer>}
                    />
                    <Route
                        path='/user/:id'
                        element={<UserContainer>{UserInfo}</UserContainer>}
                    />
                </Routes>
            </Router>
        </MenuProvider>
    );
}

export default App;
