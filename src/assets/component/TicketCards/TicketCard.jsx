import React from "react";

const TicketCard = ({ card, setTaskHistory }) => {
  const { id, title, description, name, priority, status, createdAt } = card;

 
  let priorityClass = "";
  if (priority === "high") {
    priorityClass = "text-red-500";
  } else if (priority === "medium") {
    priorityClass = "text-yellow-500";
  } else if (priority === "low") {
    priorityClass = "text-green-400";
  } else {
    priorityClass = "text-gray-400";
  }

 
  let currentStatus = { label: "", dot: "", bg: "" };
  if (status === "open") {
    currentStatus = {
      label: "Open",
      dot: "bg-green-500",
      bg: "bg-green-100 text-green-600",
    };
  } else if (status === "in_progress") {
    currentStatus = {
      label: "In-Progress",
      dot: "bg-yellow-400",
      bg: "bg-yellow-100 text-yellow-600",
    };
  } else if (status === "resolved") {
    currentStatus = {
      label: "Resolved",
      dot: "bg-gray-400",
      bg: "bg-gray-100 text-gray-500",
    };
  }

  const handleStatusClick = () => {
    if (status === "open") {
      setTaskHistory(prev => [...prev, title]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm w-96">
      <div className="flex items-start justify-between gap-3 mb-2">
        {/* title and stuffs */}
        <h3 className="text-sm text-black">{title}</h3>
       <button onClick={handleStatusClick}>
        <span
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${currentStatus.bg}`}
        >
          <span className={`w-2 h-2 rounded-full ${currentStatus.dot}`}></span>
          {currentStatus.label}
        </span></button>
      </div>
      {/* description */}
      <p className="text-sm text-gray-500 text-left line-clamp-2 mb-4">
        {description}
      </p>
       {/* priority */}
      <hr className="mb-3" />
   
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">#{id}</span>
          <span className={`font-bold uppercase line-clamp-1 ${priorityClass}`}>
            {priority} priority
          </span>
        </div>
        {/* date and other stuffs */}
        <div className="flex items-center gap-5 text-gray-400 text-right">
          <p>{name}</p>
          <div className="flex items-center">
            <img className="h-5 w-5" src="/Screenshot_194.png" alt="" />
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;