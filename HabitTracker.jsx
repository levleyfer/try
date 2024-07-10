import React, { useState } from 'react';
import HabitTable from './HabitTable';
import HabitStatus from './HabitStatus';
import Habits from './Habits';
import HabitForm from './HabitForm';
import { Dialog } from '@headlessui/react';

const HabitTracker = () => {
  const [week, setWeek] = useState('Mon, Dec 14 - Sun, Dec 20');

  /*
  const [habits, setHabits] = useState([
    { habit: '💪 Exercise', data: [null, null, null, null, null, null, null] },
    { habit: '📝 Journal', data: ['#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc'] },
    { habit: '❌ Alcohol', data: ['#f8a4a4', '#f8a4a4', '#f8a4a4', null, '#f8a4a4', '#f8a4a4', '#f8a4a4'] },
    { habit: '🚿 Cold Shower', data: ['#a4d4fc', null, '#a4d4fc', '#a4d4fc', null, '#a4d4fc', null] },
    { habit: '🦷 Floss', data: ['#a4fca4', '#a4fca4', null, '#a4fca4', null, null, null] },
    { habit: '🧘 Meditate', data: [null, null, null, null, null, null, null] },
    { habit: '🎧 eBook', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
    { habit: 'Run', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
    { habit: 'Read', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
    { habit: 'Cook', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
  ]);
  */

  const [habits, setHabits] = useState([
    { name: '💪 Exercise', color: 'bg-yellow-500', Active_days: [1,3,5,null,null,null,null], completedDays: [] },
    { name: '📝 Journal', color: 'bg-purple-500', Active_days: [0,2,4,null,null,null,null], completedDays: [] },
    { name: '❌ Alcohol', color: 'bg-pink-500', Active_days: [1,null,null,null,null,null,null], completedDays: [] },
    { name: '🚿 Cold Shower', color: 'bg-blue-500', Active_days: [0,null,null,null,null,null], completedDays: [] },
    { name: '🦷 Floss', color: 'bg-gray-500', Active_days: [0, 2, 4, 6,null,null,null], completedDays: []},
    { name: '🧘 Meditate', color: 'bg-orange-500', Active_days: [1, 3, 5,null,null,null,null], completedDays: []},
    { name: '🎧 eBook', color: 'bg-teal-500', Active_days: [1, 2, 3, 4, 5,null,null], completedDays: [] },
    { name: 'Run', color: 'bg-red-500', Active_days: [0, 2, 4,null,null,null,null], completedDays: [] },
    { name: 'Read', color: 'bg-green-500', Active_days: [0, 3, 6,null,null,null,null], completedDays: [] },
    { name: 'Cook', color: 'bg-indigo-500', Active_days: [1, 2, 3,null,null,null,null], completedDays: [] },
  ]); 

  const progress = 86; // Example progress

  const updateCompletedDays=(updatedHabit)=>{
    setHabits(updatedHabit)
  }

  const addHabit = (newHabit) => {
    console.log(newHabit)
    setHabits((prevHabits) => [...prevHabits, newHabit]);

    console.log(habits)
    // setStatuses((prevStatuses) => [
    //   ...prevStatuses,
    //   { habit: newHabit.habit, status: 'New', completed: false },
    // ]);
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 text-gray-800">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Good afternoon, Danny</h1>
        <p className="text-gray-600">7 hrs 10 mins till bedtime</p>
      </header>
      <div className="flex flex-wrap justify-between w-full max-w-5xl mt-8 space-y-6 md:space-y-0">

        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <button className="text-xl">&lt;</button>
            <h2 className="text-xl font-semibold">{week}</h2>
            <button className="text-xl">&gt;</button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span>Up 50% from the week before</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{progress}% achieved</span>
          </div>
          <HabitTable habits={habits} />
        </div>
        <Habits statuses={habits} updateCompletedDays={updateCompletedDays} addHabit={addHabit}/>
      </div>
    </div>
    
  );
};

export default HabitTracker;
//<HabitForm addHabit={addHabit} />