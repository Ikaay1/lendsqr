import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {userData} from '../../userData';
import UserInfo from './UserInfo';

const MockedUserInfo = ({user}) => {
    return (
        <BrowserRouter>
            <UserInfo user={user} />
        </BrowserRouter>
    );
};

describe('UserInfo', () => {
    test('loads while fetching data', async () => {
        render(<MockedUserInfo user={userData} />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });

    test('shows component after loading data', async () => {
        render(
            <MockedUserInfo user={{...userData, email: 'test@gmail.com'}} />,
        );
        const button = screen.getByRole('button', {name: /blacklist user/i});
        expect(button).toBeInTheDocument();
    });
});
