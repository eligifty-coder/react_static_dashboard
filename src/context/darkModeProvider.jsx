/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import { DarkModeContext } from './darkModeContext';
import { useReducer } from 'react';
const darkModeReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_DARK_MODE': {
         return {
            darkMode: !state.darkMode,
         }
      }
      case 'SET_DARK_MODE': { 
         return {
            darkMode: true
         }
      }
         break
      case 'UNSET_DARK_MODE': { 
         return {
            darkMode: false
         }
      }
         break
      default: {
         return state
      }
   }
}
const DarkModeContextProvider = ({ children }) => {
   const INITAIL_STATE = {
      darkMode: false,
   }
   const [state, dispatch] = useReducer(darkModeReducer, INITAIL_STATE);
   const toggleDarkMode = () => {
      return dispatch({ type: 'TOGGLE_DARK_MODE' })
   }
   const setDarkMode = () => { 
      alert(1)
      return dispatch({ type: 'SET_DARK_MODE' })
   }
   const setLightMode = () => {
      return dispatch({ type: 'UNSET_DARK_MODE' })
   }
   return <DarkModeContext.Provider
      value={{
         darkMode: state.darkMode,
         setDarkMode,
         setLightMode,
         toggleDarkMode
      }}
   >
      {children}
   </DarkModeContext.Provider>
}
export default DarkModeContextProvider