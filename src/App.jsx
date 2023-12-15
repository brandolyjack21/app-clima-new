import './App.css'
import NavBar from './components/NavBar'
import WidgetTemperatura from './components/WidgetTemperatura'
import DetallesDelClima from './components/DetallesDelClima'
import BackgroundVideo from './components/BackgroundVideo'
import LoadingPage from './components/LoadingPage'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const loadedApi = useSelector((state) => state.loadedApi.value)
  console.log(loadedApi);

  return (
    <>
    {/*<NavBar/>
    <WidgetTemperatura/>
    <DetallesDelClima/>
  <BackgroundVideo/>*/}
  <LoadingPage/>
    </>
  )
}

export default App
