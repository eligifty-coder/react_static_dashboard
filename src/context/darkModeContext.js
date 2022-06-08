import React from 'react';

export const DarkModeContext = React.createContext({
   toggleDarkMode: () => { },
   setDarkMode: () => { },
   setLightMode: () => { },
   darkMode: false,
})
