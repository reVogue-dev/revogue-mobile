import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Utilities/constants/colors';
import {Divider} from 'react-native-paper';

const WardrobeCard = ({title, count, iconName}: any) => (
  <TouchableOpacity style={styles.card}>
    <Icon name={iconName} size={24} color="#000" />
    <View style={styles.countContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCount}>{count}</Text>
    </View>

    <TouchableOpacity style={styles.plusButton}>
      <Icon name="plus" size={16} color="#000" />
    </TouchableOpacity>
  </TouchableOpacity>
);

export default function WardrobeScreen() {
  const [activeTab, setActiveTab] = useState('SECTIONS');

  // Tab content components
  const renderSectionsContent = () => (
    <View style={styles.grid}>
      <WardrobeCard title="Jacket Coats" count="0" iconName="hanger" />
      <WardrobeCard title="Suit Blazers" count="0" iconName="tie" />
      <WardrobeCard title="Dangle Skirts" count="0" iconName="skirt" />
      <WardrobeCard title="Shorts" count="0" iconName="shorts" />
      <WardrobeCard title="Knitwear" count="0" iconName="knitting" />
      <WardrobeCard title="Blouses Shirts" count="0" iconName="tshirt-crew" />
    </View>
  );

  const renderKitsContent = () => (
    <View style={styles.grid}>
      <Text style={styles.emptyStateText}>No kits created yet</Text>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create a Kit</Text>
      </TouchableOpacity>
    </View>
  );

  const renderToTripContent = () => (
    <View style={styles.grid}>
      <Text style={styles.emptyStateText}>No items added to trip</Text>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Add Items to Trip</Text>
      </TouchableOpacity>
    </View>
  );

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'SECTIONS':
        return renderSectionsContent();
      case 'KITS':
        return renderKitsContent();
      case 'TO TRIP':
        return renderToTripContent();
      default:
        return renderSectionsContent();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Weather Widget */}
      <View style={styles.weatherWidget}>
        <Icon name="weather-sunny" size={24} color="#000" />
        <View style={styles.weatherInfo}>
          <Text style={styles.cityText}>New Delhi</Text>
          <Text style={styles.weatherText}>
            It's Sunny Outside, no chance of rain Max 32°C
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Wardrobe</Text>
      <Text style={styles.subtitle}>0 things</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['SECTIONS', 'KITS', 'TO TRIP'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabButton}>
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content based on active tab */}
      <ScrollView style={styles.scrollView}>
        {renderContent()}
        <View style={styles.createContainer}>
          <Text style={styles.create}>Create Your Wardrobe </Text>
          <Text style={styles.createDescription}>
            It’s time for a closet evaluation. Pull out all your clothes (yes,
            all your clothes!) and lay them all out. Go piece by piece and sort
            your clothes into four piles{' '}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomTextContainer}>
        <Divider
          style={{width: '100%', height: 1, backgroundColor: Colors.lightGray}}
        />
        <Text style={styles.bottomText}>
          Update Your Profile to continue,{' '}
          <Text style={styles.addDetailsText}>Add Details</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  weatherWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  weatherInfo: {
    marginLeft: 8,
  },
  cityText: {
    fontSize: 12,
    fontWeight: '600',
  },
  weatherText: {
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
  },
  tabText: {
    textAlign: 'center',
    paddingVertical: 12,
    color: '#666',
    fontSize: 12,
    fontWeight: '700',
  },
  activeTab: {
    color: '#4B56D2',
    borderBottomWidth: 2,
    borderBottomColor: '#4B56D2',
  },
  scrollView: {
    // flex: 0.7,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'center',
  },
  card: {
    width: '28%',
    height: 20,
    padding: 8,
    aspectRatio: 1,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    margin: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
  },
  cardCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary,
    position: 'absolute',
    right: 5,
    bottom: 0,
  },
  plusButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  countContainer: {
    flexDirection: 'row',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    width: '100%',
  },
  createButton: {
    backgroundColor: '#4B56D2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  createContainer: {
    padding: 20,
  },
  create: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors.primary,
  },
  createDescription: {
    fontSize: 10,
    fontWeight: 700,
    color: '#C5C3C3',
    marginTop: 8,
  },
  bottomTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bottomText: {
    fontSize: 12,
    fontWeight: 500,
    color: Colors.text,
    padding: 10,
  },
  addDetailsText: {
    color: Colors.primary, // Highlighted text color
    fontWeight: 'bold', // Bold for emphasis
    textDecorationLine: 'underline', //
    fontSize: 12,
  },
});
