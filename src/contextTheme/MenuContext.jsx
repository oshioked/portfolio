import React, {createContext, useState} from 'react'


export const  MenuContext = createContext({
    hidden: true,
    toggleHidden: () =>{}
})

const MenuProvider = props =>{
    const [hidden, setHidden] = useState(true);

    const toggleHidden = () =>{
        setHidden(!hidden)
    }

    return(
        <MenuContext.Provider
            value = {{
                hidden,
                toggleHidden
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;