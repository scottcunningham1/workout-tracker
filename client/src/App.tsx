import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes"

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
