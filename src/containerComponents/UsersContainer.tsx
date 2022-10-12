import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { dataInterface } from '../interface';

const UsersContainer = ({children: Children}: {children: any}) => {
    const [users, setUsers] = useState<dataInterface[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            const {data}: {data: dataInterface[]} = await axios.get(
                'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users',
            );
            setUsers(data);
        };
        getUsers();
    }, []);

    return (
        <>
            {React.isValidElement(<Children />) ? (
                <Children users={users} />
            ) : (
                Children
            )}
        </>
    );
};

export default UsersContainer;
