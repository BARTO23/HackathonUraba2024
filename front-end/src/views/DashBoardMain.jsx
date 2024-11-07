import { DashBoard } from "../components/DashBoard";
import { SideBar } from "../components/SideBar";

function DashBoardMain() {
  return (
    <div className="flex">
      <SideBar />
      <DashBoard />
    </div>
  );
}

export default DashBoardMain;
