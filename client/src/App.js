import {ThemeProvider} from '@mui/material/styles'
import DarkTheme from './theme/DarkTheme';
import {CssBaseline} from '@mui/material'
import Routers from './routers/Routers';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Routers/>
    </ThemeProvider>
  )
}

export default App;
