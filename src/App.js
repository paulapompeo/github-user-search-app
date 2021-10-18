import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'
import { Dashboard } from './components/Dashboard';

function App() {
  const [theme, setTheme] = useState('light')

  function handleThemeChange() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log('clicou')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Dashboard
        handleThemeChange={handleThemeChange}
        theme={theme}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
