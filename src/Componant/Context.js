import React, { useState, useContext } from 'react';
import Data from '../Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const allStages = Data.map((item)=> item.section);
  const [stage,setStage] = useState(allStages);
  
  const filterStages = (index)=>{
    const newStages = Data.filter((item)=> item.id === index)
    setStage(newStages)
    // console.log(newStages)
  }
  
  const newStages = stage.map((ele)=> ele.section)
  const newSta = Array.from([stage])
  // console.log(typeof(newSta))
  const filterSection = (index)=>{
    // const newStagesss = stage.section.map((e)=> e)
    // setStage(newStages)
    // console.log(typeof(stage))
    // console.log(newStages)
  }
  ////////////////////
  const allSection = Data.map((item)=> item.section);
  const allSections = ['الكل',...new Set(allSection[0].map((section)=> section.category))];
  
  return (
    <AppContext.Provider
      value={{
        filterStages,
        stage,
        allSections,
        filterSection,
        setStage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
