'use client';

import {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Linking,
  Platform,
} from 'react-native';
import CustomHeader from '../../components/Common/CustomHeader';
import Colors from '../../Utilities/constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

// Assuming CustomHeader is imported from your components directory

const ClosetScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState('casual');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log(isDatePickerVisible);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleTabPress = (tab: any) => {
    setActiveTab(tab);
  };

  const handleDateChange = (date?: Date) => {
    hideDatePicker();
    if (date) {
      setSelectedDate(date);
    }
  };

  const openLink = () => {
    Linking.openURL('https://www.google.com');
  };

  const handleNextPress = () => {};

  const progressData = [
    {label: 'Color', value: 10, color: '#D1D5DB'}, // gray
    {label: 'Shape', value: 40, color: '#A5B4FC'}, // purple
    {label: 'Print', value: 25, color: '#FB923C'}, // orange
    {label: 'Fabric', value: 25, color: '#F9A8D4'}, // pink
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Today's Closet"
        onBackPress={() => navigation.goBack()}
      />

      {/* Date and Weather */}
      <View style={styles.dateContainer}>
        <View>
          <Text style={styles.dateText}>
            {selectedDate.toDateString()} {/* Show selected date */}
          </Text>
          <Text style={styles.weatherText}>
            It's Sunny Outside, no chance of rain Max 32°C
          </Text>
        </View>
        <View style={styles.calendarIcon}>
          <TouchableOpacity onPress={showDatePicker}>
            <Feather name="calendar" size={24} color="#4F46E5" />
          </TouchableOpacity>
        </View>

        {/* <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          display="default" // Try adding this line
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        /> */}

        {isDatePickerVisible && (
          <DateTimePicker
            testID="datePicker"
            value={selectedDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'office' && styles.activeTab]}
          onPress={() => handleTabPress('office')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'office' && styles.activeTabText,
            ]}>
            Office/College
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'gym' && styles.activeTab]}
          onPress={() => handleTabPress('gym')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'gym' && styles.activeTabText,
            ]}>
            Gym & Workout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'casual' && styles.activeTab]}
          onPress={() => handleTabPress('casual')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'casual' && styles.activeTabText,
            ]}>
            Casual
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      <ScrollView style={styles.content}>
        {activeTab === 'casual' && (
          <View>
            <View style={styles.matchProgressWrapper}>
              {/* Match Percentage */}
              <View style={styles.matchContainer}>
                <Text style={styles.matchText}>60%. It's not a match</Text>
                <View style={styles.helpIcon}>
                  <Text>?</Text>
                </View>
              </View>
              <View style={styles.progressBarContainer}>
                {progressData.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.progressSegment,
                      {backgroundColor: item.color, width: `${item.value}%`},
                      index === 0 && styles.progressStart, // Round left-most segment
                      index === progressData.length - 1 && styles.progressEnd, // Round right-most segment
                    ]}>
                    <Text style={styles.progressText}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Event Information */}
            <View style={styles.eventContainer}>
              <Text style={styles.eventText}>
                Its'{' '}
                <Text style={styles.eventLink} onPress={openLink}>
                  Meta Event
                </Text>{' '}
                today at Aerocity New Delhi.
              </Text>
              <Text style={styles.eventDescription}>
                We Recommended you to wear this as meta events is design in blue
                theme so blue background and Professionalism requirement matches
                this.
              </Text>
            </View>
          </View>
        )}

        {activeTab === 'office' && (
          <View style={styles.emptyTabContent}>
            {/* Outfit Image */}

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/closet.svg')}
                style={styles.outfitImage}
                resizeMode="cover"
              />
            </View>
            <View>
              {/* Match Percentage */}
              <View style={styles.matchContainer}>
                <Text style={styles.matchText}>60%. It's not a match</Text>
                <View style={styles.helpIcon}>
                  <Text>?</Text>
                </View>
              </View>

              <View style={styles.progressBarContainer}>
                {progressData.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.progressSegment,
                      {backgroundColor: item.color, width: `${item.value}%`},
                      index === 0 && styles.progressStart, // Round left-most segment
                      index === progressData.length - 1 && styles.progressEnd, // Round right-most segment
                    ]}>
                    <Text style={styles.progressText}>{item.label}</Text>
                  </View>
                ))}
              </View>

              {/* Match Attributes */}
              <View style={styles.attributesContainer}>
                <View style={styles.attributeItem}>
                  <Text style={styles.crossIcon}>✕</Text>
                  <Text style={styles.attributeText}>Color</Text>
                </View>
                <View style={styles.attributeItem}>
                  <Text style={styles.checkIconGreen}>✓</Text>
                  <Text style={styles.attributeText}>Shape</Text>
                </View>
                <View style={styles.attributeItem}>
                  <Text style={styles.checkIconOrange}>✓</Text>
                  <Text style={styles.attributeText}>Print</Text>
                </View>
                <View style={styles.attributeItem}>
                  <Text style={styles.checkIconPink}>✓</Text>
                  <Text style={styles.attributeText}>Fabric</Text>
                </View>
              </View>

              {/* Event Information */}
              <View style={styles.eventContainer}>
                <Text style={styles.eventText}>
                  Its'{' '}
                  <Text style={styles.eventLink} onPress={openLink}>
                    Meta Event
                  </Text>{' '}
                  today at Aerocity New Delhi.
                </Text>
                <Text style={styles.eventDescription}>
                  We Recommended you to wear this as meta events is design in
                  blue theme so blue background and Professionalism requirement
                  matches this.
                </Text>
              </View>
            </View>

            {/* <BottomButton buttonText="Next" onPress={handleNextPress} /> */}
          </View>
        )}

        {activeTab === 'gym' && (
          <View style={styles.emptyTabContent}>
            <Text style={styles.emptyTabText}>
              Gym & Workout outfit suggestions will appear here
            </Text>
          </View>
        )}
        {/* Share Button */}
      </ScrollView>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share My Look</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E95B56', // rose-500 equivalent
  },
  weatherText: {
    fontSize: 12,
    color: '#6B7280', // gray-500 equivalent
  },
  calendarIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5', // indigo-600 equivalent
  },
  tabText: {
    fontSize: 14,
    color: Colors.gray, // gray-500 equivalent
  },
  activeTabText: {
    color: Colors.primary, // indigo-600 equivalent
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingVertical: 20,
  },
  imageContainer: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#4F46E5', // indigo-600 equivalent
    borderRadius: 8,
    overflow: 'hidden',
  },
  outfitImage: {
    width: '10%',
    height: width * 0.5, // Maintain aspect ratio
  },
  matchProgressWrapper: {
    // backgroundColor: 'red',
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  matchText: {
    fontSize: 18,
    fontWeight: '600',
  },
  helpIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#9CA3AF', // gray-400 equivalent
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBarContainer: {
    flexDirection: 'row',
    height: 32, // Increased height for better visibility
    width: '90%', // Responsive width
    alignSelf: 'center',
    borderRadius: 10, // Smooth curve
    overflow: 'hidden',
    marginVertical: 16,
  },
  progressSegment: {
    height: '100%',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  progressStart: {
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999,
  },
  progressEnd: {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999,
  },
  progressText: {
    color: 'white', // Contrast text for visibility
    fontSize: 12,
    fontWeight: 'bold',
  },

  attributesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  attributeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  attributeText: {
    fontSize: 12,
  },
  crossIcon: {
    color: '#9CA3AF', // gray-400 equivalent
  },
  checkIconGreen: {
    color: '#10B981', // green-500 equivalent
  },
  checkIconOrange: {
    color: '#F97316', // orange-500 equivalent
  },
  checkIconPink: {
    color: '#EC4899', // pink-500 equivalent
  },
  eventContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  eventText: {
    fontSize: 14,
  },
  eventLink: {
    color: '#4F46E5', // indigo-600 equivalent
    fontWeight: '500',
  },
  eventDescription: {
    fontSize: 14,
    color: '#6B7280', // gray-500 equivalent
    marginTop: 4,
  },

  shareButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    position: 'absolute',

    bottom: 60,
    width: '90%', // Set width to 70%
    alignSelf: 'center', // Center the button horizontally
  },
  shareButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  emptyTabContent: {
    // padding: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  emptyTabText: {
    color: '#6B7280', // gray-500 equivalent
    textAlign: 'center',
  },
});

export default ClosetScreen;
