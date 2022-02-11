import "./App.css";
import Feed from "./component/feed/Feed";
import Header from "./component/Haeder/Header";
import Sidebar from "./component/Haeder/sidebar/Sidebar";
import Login from "./component/Login/Login";
import Widget from "./component/Widget/Widget";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue() ;

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
