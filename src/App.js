import SnackbarProvider from "./Provider/SnackbarProvider";
import LoaderProvider from "./Provider/LoaderProvider";
import UserDataProvider from "./Provider/UserDataProvider";
import Routers from "./Component/Routers/Routers";
import "./assets/css/main.css";
import PlayerProvider from "./Provider/PlayerProvider";

function App() {
  return (
    <>
      <SnackbarProvider>
        <LoaderProvider>
          <UserDataProvider>
            <PlayerProvider>
              <Routers />
            </PlayerProvider>
          </UserDataProvider>
        </LoaderProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
