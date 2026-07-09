import { BrowserRouter} from "react-router-dom";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";
import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
    <WebsiteRoutes/>
      <AdminRoutes />
    </BrowserRouter>
  );
}
export default App;
