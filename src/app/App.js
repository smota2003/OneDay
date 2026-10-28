import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//importing files used for individual screens/tabs
import DailyOverviewScreen from './Screens/DailyOverviewScreen';
import JournalScreen from './Screens/JournalScreen';

//keeping these commented until I have reason to access them
/*
import ToDoScreen from './Screens/ToDoScreen';
import HabitScreen from './Screens/HabitScreen';
import GoalScreen from './Screens/GoalScreen';
*/

function App(){
    //Creating activeTab and setActiveTab, 
    //activeTab determines what screen is currently shown in UI display
    const [activeTab, setActiveTab] = useState('Main');
    const [journalText, setJournalText] = useState ('');

    return(

        <SafeAreaProvider>
          <SafeAreaView>
               <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: "#ccc", width: '100%', gap: 10, padding: 10 }}>                {/* setsActiveTab to 'Main' which is the DailyOverView page */}
                <TouchableOpacity style={{ backgroundColor: '#e0e0e0', padding: 10, borderRadius: 5 }}
                 onPress = {()=>setActiveTab('Main')}>
                  <Text>Daily Overview</Text>
                </TouchableOpacity>

                {/* setsActiveTab to 'Text' which is the journal page */}
                <TouchableOpacity style={{ backgroundColor: '#e0e0e0', padding: 10, borderRadius: 5 }}
                onPress={()=>setActiveTab('Text')}>
                  <Text>Journal</Text>
                </TouchableOpacity>
               </ View>

               <View>
                {/* Checks the value of ActiveTab, if its Main then display DailyOverview Screen, if its Text then display Journal Screen */}
                 {activeTab === 'Main' && ( <DailyOverviewScreen journalText={journalText}/> )}
                 {activeTab === 'Text' && ( <JournalScreen journalText={journalText} setJournalText = {setJournalText}/> )}
               </View>
               
          </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default App;