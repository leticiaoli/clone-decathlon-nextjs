import { useState, createContext } from 'react'

export const btnContriesContext = createContext({})

export const btnContriesProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <btnContriesContext.Provider value={{isOpen, setIsOpen}}>
        { children }
    </btnContriesContext.Provider>
  )
}
