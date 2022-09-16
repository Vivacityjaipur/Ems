import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import LoginPage from "./LoginPage";
import PermissionForm from "./views/PermissionForm";
import { useSelector,useDispatch } from 'react-redux';

const App = () => {
  const LoggedIn=useSelector(state=>state.Auth.IsLoggedIn);
  const UserPermissions=useSelector(state=>state.Permission)
  const routing = useRoutes(Themeroutes);
  return <>
  {/* {!LoggedIn && <PermissionForm/>} */}
  {!LoggedIn && <LoginPage />}
  {LoggedIn && <div className="dark">{routing}</div>}
  </>
};

export default App;
