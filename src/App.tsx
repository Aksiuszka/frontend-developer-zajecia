import { Outlet } from "react-router-dom";
import { BaseLayout } from "./shared/components/layouts/RegularLayout";
function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default App;
