import type { NextPage } from "next";
import AppContainer from "../components/AppContainer";
const Home: NextPage = () => {
  return (
    <main className="bg-[url('../public/images/bg-desktop-light.jpg')] dark:bg-[url('../public/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain">
      <AppContainer />
    </main>
  );
};
export default Home;
