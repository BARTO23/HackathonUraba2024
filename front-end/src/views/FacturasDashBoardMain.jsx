import { Title } from '../components/Title';
import { SideBar } from '../components/SideBar';
import Facturas from '../components/Facturas';

const FacturasDashBoardMain = () => {
    return (
        <div className="flex flex-col h-screen">
            <Title />
            <div className="flex flex-1">
                <SideBar />
                <Facturas />
            </div>
        </div>
    );
}

export default FacturasDashBoardMain;
