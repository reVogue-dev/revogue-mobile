import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BottomButton from '../../components/Common/BottomButton';

const ProfileField = ({label, value}: any) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <Text style={styles.fieldValue}>{value}</Text>
  </View>
);

const CreateAccountScreen = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('Account');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create Account</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.modelInfo}>
            <Text style={styles.modelTitle}>Model</Text>
            <Text style={styles.modelSubtitle}>
              Last model updates by 25th Oct 2025
            </Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.svg')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIconContainer}>
              <Feather name="edit" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          <ProfileField label="Name" value="Mukesh Bhardwaj" />
          <ProfileField label="DOB" value="09 Oct 1994" />
          <ProfileField label="Orientation" value="He" />
          <ProfileField label="Body Type" value="Pear" />
          <ProfileField label="Skin Tone" value="Dusky" />
          <ProfileField label="Height" value="5'11 ft" />
          <ProfileField label="Weight" value="73 Kg" />
          <ProfileField label="Lifestyle" value="Corporate" />

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Social Accounts</Text>
            <View style={styles.socialIcons}>
              <Text style={styles.socialLogo}>AJIO</Text>
              {/* <Image
                source={require('./assets/myntra-logo.png')}
                style={styles.socialIcon}
              /> */}
            </View>
          </View>
        </View>
        <BottomButton buttonText="Update" onPress={handleNextPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4052B6',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modelInfo: {
    flex: 1,
  },
  modelTitle: {
    fontSize: 24,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  modelSubtitle: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 4,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4052B6',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  fieldLabel: {
    fontSize: 18,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  fieldValue: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    textAlign: 'right',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialLogo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  updateButton: {
    backgroundColor: '#4052B6',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateAccountScreen;
