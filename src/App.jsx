import { useState } from "react";
import Header from "./assets/component/Header/Header";
import InProgress from "./assets/component/Counters/inProgress";
import Resolved from "./assets/component/Counters/resolved";
import Footer from "./assets/component/Footer/Footer";
import TicketCards from "./assets/component/TicketCards/TicketCards.jsx";
import "./App.css";
import TicketCard from "./assets/component/TicketCards/TicketCard";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex justify-between gap-5 p-10 ">
          <InProgress />
          <Resolved />
        </div>
        <div className="w-3/4 pb-5 pt-5">
          <TicketCards/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
