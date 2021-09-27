import { useSelector } from "react-redux";
import Auth from "./components/UI/Auth";
import Counter from "./components/UI/Counter";
import Header from "./components/UI/Header";
import UserProfile from "./components/UI/UserProfile";



function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
    <Header/>
    {!isAuth?<Auth/> :
    <UserProfile/>}
    <Counter />
    </>
    
  );
}

export default App;
