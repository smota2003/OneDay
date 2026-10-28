import { ScrollView, Text, View } from 'react-native';

function DailyOverviewScreen( {journalText}) {
    return (
        <ScrollView>
            <View>
                {/* As of right now I am just testing out with journal Screen*/}
                <h1>Daily Overview: </h1>
                <h3>Journal Entry:</h3>
                {/*This displays the value of JournalText, if its '' then we assign a value */}
                <Text > {journalText ? journalText : 'No journal Text'}</Text>
            </View>
        </ScrollView>

    );
}

export default DailyOverviewScreen;