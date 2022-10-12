import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import UserInfo from '../pages/UserInfo/UserInfo';
import UserContainer from './UserContainer';

const MockedUserContainer = () => {
    return (
        <BrowserRouter>
            <UserContainer>{UserInfo}</UserContainer>
        </BrowserRouter>
    );
};

describe('UserContainer', () => {
    test('fetches and displays mocked api data', async () => {
        render(<MockedUserContainer />);
        const button = await screen.findByRole('button', {
            name: /blacklist user/i,
        });
        expect(button).toBeInTheDocument();
    });
});
