import { useState } from 'react';
import Header from './assets/component/Header/Header';
import InProgress from './assets/component/Counters/inProgress';
import Resolved from './assets/component/Counters/resolved';
import Footer from './assets/component/Footer/Footer';
import TicketCards from './assets/component/TicketCards/TicketCards.jsx';
import TaskStatus from './assets/component/taskHistory/TaskStatus';
import './App.css';
import TicketCard from './assets/component/TicketCards/TicketCard';

function App() {
  const [taskHistory, setTaskHistory] = useState([]);

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex justify-between gap-5 p-10 ">
          <InProgress />
          <Resolved />
        </div>

        <div className=" pb-5 pt-5 flex justify-between  ">
          <TicketCards className='w-3/4' setTaskHistory={setTaskHistory} />   
            <TaskStatus className='w-1/4' taskHistory={taskHistory} />
        </div>
   
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
