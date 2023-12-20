import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      Color: <input id="color-input" />
      Text Size: <input id="size-input" /><br />
      <button >Set to Default</button>
    </div>
  );
}
export default Dashboard;
