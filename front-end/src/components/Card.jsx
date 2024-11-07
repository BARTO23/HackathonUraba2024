import React from "react";

// Componente para el ícono de usuarios
const Users = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-muted-foreground">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 114 0 2 2 0 01-4 0zm2 4a4 4 0 00-4 4v2a4 4 0 004 4h8a4 4 0 004-4v-2a4 4 0 00-4-4H6z" />
  </svg>
);

// Componente principal Card
const Card = ({ title, icon: Icon = Users, value, percentageChange }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <Icon />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{percentageChange}</p>
      </div>
    </div>
  );
};

export default Card;
