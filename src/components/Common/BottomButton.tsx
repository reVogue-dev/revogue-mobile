import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Colors from '../../Utilities/constants/colors';

interface BottomButtonProps {
  buttonText: string;
  onPress: () => void;
}

const BottomButton: React.FC<BottomButtonProps> = ({buttonText, onPress}) => {
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default BottomButton;
