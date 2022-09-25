import { Outlet } from "react-router-dom";

function App({children}) {
  return (
    <div className="App">
      <main className="site-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
