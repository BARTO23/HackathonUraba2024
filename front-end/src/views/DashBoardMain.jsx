import { DashBoard } from "../components/DashBoard";
import { SideBar } from "../components/SideBar";
import { Title } from "../components/Title";

function DashBoardMain() {
  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="flex flex-1">
        <SideBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default DashBoardMain;
