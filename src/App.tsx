import { RouterProvider } from "react-router-dom"
import router from "./pages/RouteLayout"

const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App