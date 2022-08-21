import { ThemeProvider } from 'styled-components'
import { Summary } from './components/Summary'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export  function App() {

  return(
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Transactions/>
 </ThemeProvider>
  )
}