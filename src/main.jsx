import { createRoot } from 'preact/compat/client'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/inter'
import './styles.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(<App />)
