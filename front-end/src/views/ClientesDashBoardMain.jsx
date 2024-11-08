import React from 'react';
import { Title } from '../components/Title';
import { SideBar } from '../components/SideBar';
import Clientes from "../components/Clientes";

const ClientesDashBoardMain = () => {
    return (
        <div className="flex flex-col h-screen">
            <Title />
            <div className="flex flex-1">
                <SideBar />
                <Clientes />
            </div>
        </div>
    );
}

export default ClientesDashBoardMain;
