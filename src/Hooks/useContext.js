import React from "react";


const themes = {
    
    dark: {
    
      background: "black"
    }
  };
  
  export const ThemeContext = React.createContext(themes.dark);
  
 export function UseContext() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <SignUp />
      </ThemeContext.Provider>
    );
  }
