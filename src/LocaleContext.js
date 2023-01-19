import React from "react";

const defaultValue = {
  locale: 'is',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);