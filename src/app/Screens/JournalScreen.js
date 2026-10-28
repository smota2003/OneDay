import { TextInput, View } from "react-native";

function JournalScreen ({ journalText, setJournalText}) {
    return (
        <View>
          <h1>Journal Input</h1>
          <TextInput
            placeholder= "Enter journal prompt"
            value = {journalText}
            onChangeText = {setJournalText}
            style = {{border: '2px solid gray'}}
        />
</View>
    );
}

export default JournalScreen;