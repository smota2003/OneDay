import { View } from "react-native";

function JournalScreen ({ journalText, setJournalText}) {

    return (

        <View>
        <TextInput>
            placeholder= "Enter journal prompt";
            value = {journalText}
            onChangeText = {setJournalText}
        </TextInput>
</View>


    );


}

export default JournalScreen;