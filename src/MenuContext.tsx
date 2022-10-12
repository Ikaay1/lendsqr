import { createContext, useState } from 'react';

const MenuContext = createContext({handleClick: () => {}, menu: false});

export const MenuProvider = ({children}: {children: any}) => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{handleClick, menu}}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContext;
