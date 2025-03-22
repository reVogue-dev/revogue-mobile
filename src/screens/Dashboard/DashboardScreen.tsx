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

const WardrobeCard = ({title, count, iconName}: any) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.pinkBlob} />
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

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('SECTIONS');
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
        <Text style={[styles.tabText, styles.activeTab]}>SECTIONS</Text>
        <Text style={styles.tabText}>KITS</Text>
        <Text style={styles.tabText}>TO TRIP</Text>
      </View>

      {/* Cards Grid */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          <WardrobeCard title="Jacket Coats" count="0" iconName="hanger" />
          <WardrobeCard title="Suit Blazers" count="0" iconName="tie" />
          <WardrobeCard title="Dangle Skirts" count="0" iconName="skirt" />
          <WardrobeCard title="Shorts" count="0" iconName="shorts" />
          <WardrobeCard title="Knitwear" count="0" iconName="knitting" />
          <WardrobeCard
            title="Blouses Shirts"
            count="0"
            iconName="tshirt-crew"
          />
        </View>
      </ScrollView>
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
    borderBottomEndRadius: 4,
  },
  tabText: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 12,
    color: '#666',
  },
  activeTab: {
    color: '#4B56D2',
    borderBottomWidth: 2,
    borderBottomColor: '#4B56D2',
  },
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  card: {
    width: '45%',
    padding: 8,
    aspectRatio: 1,
    position: 'relative',
    borderWidth: 1, // Added border
    borderColor: '#ccc', // Light gray for subtle border
    borderRadius: 12, // Rounded corners for soft look
    margin: 8, // Added margin for spacing
    backgroundColor: '#fff', // Background for clean look
    shadowColor: '#000',
  },
  pinkBlob: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(255, 192, 203, 0.2)',
    borderRadius: 999,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
  },
  cardCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4B56D2',
  },
  plusButton: {
    position: 'absolute',
    top: 16,
    right: 16,
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
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  activeNavItem: {
    backgroundColor: '#f0f0ff',
    borderRadius: 8,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  activeNavText: {
    color: '#4B56D2',
  },
});
