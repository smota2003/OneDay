import { ScrollView, Text, View } from 'react-native';


function DayOV( {journalText}) {
    return (
      

        <ScrollView>
            <View>
                <Text style= {{color: 'white'}}>Journal Text </Text>
                <Text style= {{color: 'white'}}> {journalText ? journalText : 'No journal Text'}</Text>
            </View>
        </ScrollView>

    );
}

export default DayOV;