import {createContext} from 'react';

const ThemeDark = createContext({
    theme: 'light',
    themeToggler: ()=>{}
})

export default ThemeDark
