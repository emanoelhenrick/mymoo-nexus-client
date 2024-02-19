import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "./styles/Container";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { HomeContent } from "./components/home/HomeContent"
import { NewDeviceContent } from "./components/newDevice/NewDeviceContent"

const router = createBrowserRouter([
  { path: '/', element: <HomeContent /> },
  { path: '/add', element: <NewDeviceContent /> }
])

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
      <RouterProvider router={router} />
      </Container>
    </QueryClientProvider>
  )
    
}

export default App;


