import React from 'react';

const ResolvedTask = ({ resolvedTasks }) => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-xl mb-4">Resolved Tasks</h2>
      <ul className="list-disc list-inside">
        {resolvedTasks.map((title, index) => (
          <div key={index} className='w-full m-1 bg-slate-400 flex flex-col items-start rounded-lg'>
            <h1 className='text-black line-clamp-1 pl-1 m-1'>{title}</h1>
            
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ResolvedTask;