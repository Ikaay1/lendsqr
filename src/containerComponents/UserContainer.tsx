import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { dataInterface } from '../interface';
import { userData } from '../userData';

const UserContainer = ({children: Children}: {children: any}) => {
    const [user, setUser] = useState<dataInterface>(userData);
    const {id} = useParams();

    useEffect(() => {
        const getUser = async () => {
            const {data}: {data: dataInterface} = await axios.get(
                `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
            );
            setUser(data);
        };
        getUser();
    }, [id]);

    return (
        <>
            {React.isValidElement(<Children />) ? (
                <Children user={user} />
            ) : (
                Children
            )}
        </>
    );
};

export default UserContainer;
