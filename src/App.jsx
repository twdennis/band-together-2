import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Calendar from "./features/calendar/Calendar";
import Map from "./features/map/Map";
import NewEvent from "./features/event/NewEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/event/new",
    element: <NewEvent />,
  },
  {
    path: "/event/eventId",
    elemetn: <NewEvent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
