import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { dataInterface } from '../../interface';
import { userData } from '../../userData';
import Users from './Users';

const MockedUsers = (props: {user?: dataInterface}) => {
    if (!props?.user) {
        return (
            <BrowserRouter>
                <Users users={[]} />
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Users users={[props.user]} />
            </BrowserRouter>
        );
    }
};

describe('UserInfo', () => {
    test('loads while fetching data', async () => {
        render(<MockedUsers />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });

    test('shows component after loading data', async () => {
        render(
            <MockedUsers
                user={{...userData, createdAt: '2074-12-23T23:56:22.296Z'}}
            />,
        );
        const stats = screen.getByTestId('stats');
        expect(stats).toBeInTheDocument();
    });
});
