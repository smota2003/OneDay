import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


import DayOV from './Screens/DailyOverviewScreen';
/*
import JournalScreen from './Screens/JournalScreen';
import ToDoScreen from './Screens/ToDoScreen';
import HabitScreen from './Screens/HabitScreen';
import GoalScreen from './Screens/GoalScreen';
*/

function App(){

    const [activeTab, setActiveTab] = useState('Main');
    const [journalText, setJournalText] = useState ('');

 
    return(
<view>
    <TouchableOpacity>
        <text>Daily Overview</text>
    </TouchableOpacity>

    <text>
        {activeTab === 'Main' && (<DayOV journalText = {journalText} /> )} red
    </text>

</view>

    )
}

export default App;