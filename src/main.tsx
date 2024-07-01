import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './theme.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import Time from './utilities/Time.ts'

const date = new Date(2023, 4, 18, 16, 0, 0).getTime();

console.log(Time.timeFormat(date));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
