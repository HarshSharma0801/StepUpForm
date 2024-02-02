import MainForm from "./Components/MainForm"
import { FormContextProvider } from "./Components/Context"
function App() {

  return (
    <>
    <FormContextProvider>
    <MainForm/>
    </FormContextProvider>
    </>
  )
}

export default App
