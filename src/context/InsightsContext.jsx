import { createContext, useState } from "react";

export const InsightsContext = createContext();

export function InsightsContextProvider({ children }) {

  const [insights, setInsights] = useState([])
  
  const handleDate = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    let date = new Date().toLocaleDateString('pt-br', options)

    const formatMounth = date.split('de')[1].slice(0, 4)
    const formatDate = `${date
      .split('de')[0]
      .trim()}/${formatMounth.trim()}/${date.split('de')[2].trim()}`
    return formatDate
  }

   const randomBgColor = () => {
    const randomColor = [
      { id: 1, background: '#D00000' },
      { id: 2, background: '#FFBA08' },
      { id: 3, background: '#3F88C5' },
      { id: 4, background: '#FF499E' },
      { id: 5, background: '#712F79' },
      { id: 6, background: '#226F54' },
      { id: 7, background: '#7A542E' }
    ]

    const id = Math.floor(Math.random() * randomColor.length)
    const bg = randomColor[id]
    return bg.background
  }
  
  
  return (
    <InsightsContext.Provider value={{ insights, setInsights, handleDate, randomBgColor }}>
      {children}
    </InsightsContext.Provider>
  )
}
