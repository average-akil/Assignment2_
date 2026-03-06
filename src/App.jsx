import { useState } from 'react';
import Header from './assets/component/Header/Header';
import InProgress from './assets/component/Counters/inProgress';
import Resolved from './assets/component/Counters/resolved';
import Footer from './assets/component/Footer/Footer';
import TicketCards from './assets/component/TicketCards/TicketCards.jsx';
import TaskStatus from './assets/component/taskHistory/TaskStatus';
import ResolvedTask from './assets/component/taskHistory/ResolvedTask';
import './App.css';
import TicketCard from './assets/component/TicketCards/TicketCard';

function App() {
  const [taskHistory, setTaskHistory] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex flex-col sm:flex-row justify-between gap-5 p-4 sm:p-10">
          <InProgress className='w-full md:w-1/2 lg:w-1/2' count={taskHistory.length} />
          <Resolved className='w-full md:w-1/2 lg:w-1/2' count={resolvedTasks.length} />
        </div>

        <div className="pb-5 pt-5 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <TicketCards className='w-full md:w-3/4 lg:w-3/4' setTaskHistory={setTaskHistory} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />   
          <div className='w-full md:w-1/4 lg:w-1/4'>
            <TaskStatus  taskHistory={taskHistory} setTaskHistory={setTaskHistory} setResolvedTasks={setResolvedTasks} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
              <ResolvedTask  resolvedTasks={resolvedTasks} />
       </div> </div>
     
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
