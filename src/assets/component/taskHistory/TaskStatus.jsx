import React from 'react';

const TaskStatus = ({ taskHistory, setTaskHistory, setResolvedTasks }) => {
  const handleComplete = (title) => {
    setTaskHistory(prev => prev.filter(t => t !== title));
    setResolvedTasks(prev => [...prev, title]);
  };

  return (
    <div className="mt-10 mb-10 ">
      <h2 className="text-xl mb-4">Task Status</h2>
      <ul className="list-disc list-inside">
        {taskHistory.map((title, index) => (
          <div key={index} className='w-full m-1 bg-slate-100 flex flex-col items-start  rounded-lg'>
            <h1 className=' text-black line-clamp-1 pl-1'>{title}</h1>
            <button 
              className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg '
              onClick={() => handleComplete(title)}
            >
                Complete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskStatus;

