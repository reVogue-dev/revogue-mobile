import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BottomButton from '../../components/Common/BottomButton';
import CustomHeader from '../../components/Common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Alert} from 'react-native';

const bodyTypes = [
  {id: 1, name: 'Ectomorph', icon: 'human-male'},
  {id: 2, name: 'Mesomorph', icon: 'human-handsdown'},
  {id: 3, name: 'Endomorph', icon: 'human-belly'},
  {id: 4, name: 'Athletic', icon: 'dumbbell'},
  {id: 5, name: 'Slim', icon: 'run'},
  {id: 6, name: 'Bulky', icon: 'weight-lifter'},
];

export const BodyTypeScreen = ({navigation}: any) => {
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const handleNextPress = () => {
    if (selectedType !== null) {
      navigation.navigate('Height', {selectedBodyType: selectedType});
    } else {
      Alert.alert('Please select a body type.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Harpreet's Body Structure"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>What’s Your Body Type?</Text>
        <View style={styles.bodyTypeGrid}>
          {bodyTypes.map(type => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.bodyType,
                selectedType === type.id && styles.selectedBodyType,
              ]}
              onPress={() => setSelectedType(type.id)}>
              <Icon
                name={type.icon}
                size={40}
                color={selectedType === type.id ? '#fff' : '#4DA9D0'}
              />
              <Text
                style={
                  selectedType === type.id
                    ? styles.selectedText
                    : styles.unselectedText
                }>
                {type.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomButton buttonText="Next" onPress={handleNextPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  bodyTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bodyType: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  selectedBodyType: {
    backgroundColor: '#4DA9D0',
  },
  selectedText: {
    color: '#fff',
    marginTop: 8,
  },
  unselectedText: {
    color: '#4DA9D0',
    marginTop: 8,
  },
});

export default BodyTypeScreen;
