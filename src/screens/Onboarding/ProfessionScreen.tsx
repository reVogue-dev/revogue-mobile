import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';
import BottomButton from '../../components/Common/BottomButton';
import CustomHeader from '../../components/Common/CustomHeader';

const dummyProfession = [
  'Doctor',
  'Engineer',
  'Artist',
  'Chef',
  'Teacher',
  'Athlete',
];
const dummyCulture = [
  'Indian',
  'Western',
  'Asian',
  'African',
  'Middle Eastern',
  'European',
];

const socialAccounts = [
  {
    name: 'Figma',
    description: 'Preview your Figma files in your documents',
    status: 'Connected',
  },
  {
    name: 'Figma',
    description: 'Preview your Figma files in your documents',
    status: 'Connected',
  },
  {
    name: 'Notion',
    description: 'Automatically sync your Notion database.',
    status: 'Connect',
  },
  {
    name: 'Notion',
    description: 'Automatically sync your Notion database.',
    status: 'Connect',
  },
];

const ProfessionScreen = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('Skin');
  };

  const renderOptions = (data: string[]) => (
    <View style={styles.optionsContainer}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.optionBox}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderSocialCards = () => (
    <View style={styles.cardContainer}>
      {socialAccounts.map((account, index) => (
        <Card key={index} style={styles.card}>
          {/* <Card.Actions>
            <Button
              theme={{colors: {primary: 'green'}}}
              mode="contained"
              labelStyle={styles.buttonText}>
              {account.status}
            </Button>
          </Card.Actions> */}
          <Card.Content>
            <Text style={styles.cardTitle}>{account.name}</Text>
            <Text style={styles.cardDescription}>{account.description}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Mukesh Body Structure"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>What's Your Profession?</Text>
        {renderOptions(dummyProfession)}

        <Text style={styles.text}>What's Culture Profile?</Text>
        {renderOptions(dummyCulture)}

        <Text style={styles.text}>Connect your social accounts</Text>
        {renderSocialCards()}
      </ScrollView>

      <BottomButton buttonText="Next Step" onPress={handleNextPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  optionBox: {
    width: '30%',
    height: 60,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  card: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 10,
  },
});

export default ProfessionScreen;
