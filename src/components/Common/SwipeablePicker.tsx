import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

interface SwipeablePickerProps {
  minValue: number;
  maxValue: number;
  initialValue?: number;
  step?: number;
  unit?: string;
  onValueChange?: (value: number) => void;
  visibleValues?: number;
  primaryColor?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

const SwipeablePicker: React.FC<SwipeablePickerProps> = ({
  minValue,
  maxValue,
  initialValue = Math.floor((minValue + maxValue) / 2),
  step = 1,
  unit = '',
  onValueChange,
  visibleValues = 5,
  primaryColor = '#4052DB',
  buttonText = 'Next Step',
  onButtonPress,
}) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const pan = useRef(new Animated.Value(0)).current;
  const valueRef = useRef(initialValue);
  const lastOffsetX = useRef(0);
  const screenWidth = Dimensions.get('window').width;
  const tickWidth = 20; // Width of each tick mark
  const sensitivity = 2; // How sensitive the swipe is (higher = less sensitive)

  // Calculate the range of values to display
  const getDisplayValues = () => {
    const halfVisible = Math.floor(visibleValues / 2);
    const values = [];

    for (let i = -halfVisible; i <= halfVisible; i++) {
      const value = currentValue + i * step;
      if (value >= minValue && value <= maxValue) {
        values.push(value);
      }
    }

    return values;
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset(lastOffsetX.current);
      },
      onPanResponderMove: (_, gestureState) => {
        // Calculate new value based on swipe distance
        const valueDelta =
          Math.round(gestureState.dx / (tickWidth * sensitivity)) * -1;
        let newValue = valueRef.current + valueDelta * step;

        // Ensure the value stays within bounds
        newValue = Math.max(minValue, Math.min(maxValue, newValue));

        // Update the value and highlight the current value
        if (newValue !== valueRef.current) {
          setCurrentValue(newValue);
          valueRef.current = newValue;
          if (onValueChange) {
            onValueChange(newValue);
          }
        }

        // Update the pan value
        pan.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        lastOffsetX.current += gestureState.dx;

        // Reset the animation
        pan.flattenOffset();
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();

        lastOffsetX.current = 0;
      },
    }),
  ).current;

  useEffect(() => {
    if (onValueChange) {
      onValueChange(currentValue);
    }
    valueRef.current = currentValue;
  }, [currentValue, onValueChange]);

  // Generate tick marks
  const renderTicks = () => {
    const ticks = [];
    const totalTicks = (maxValue - minValue) / step + 1;
    const activeTick = (currentValue - minValue) / step;

    for (let i = 0; i < totalTicks; i++) {
      const isActive = i === activeTick;
      const isMajor = i % 5 === 0; // Every 5th tick is a major tick

      ticks.push(
        <View
          key={i}
          style={[
            styles.tick,
            isMajor ? styles.majorTick : styles.minorTick,
            isActive && {backgroundColor: primaryColor},
          ]}
        />,
      );
    }

    return ticks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer} {...panResponder.panHandlers}>
        {/* Display values */}
        <Animated.View
          style={[styles.valuesContainer, {transform: [{translateX: pan}]}]}>
          {getDisplayValues().map((value, index) => (
            <Text
              key={index}
              style={[
                styles.valueText,
                value === currentValue ? styles.currentValueText : null,
              ]}>
              {value}
            </Text>
          ))}
        </Animated.View>

        {/* Current value with unit */}
        <Text style={styles.unitText}>{unit}</Text>

        {/* Tick marks */}
        <View style={styles.ticksContainer}>
          <View style={styles.ticksWrapper}>{renderTicks()}</View>
          <View style={[styles.indicator, {backgroundColor: primaryColor}]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pickerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 10,
    height: 60,
  },
  valueText: {
    fontSize: 24,
    color: '#888',
    marginHorizontal: 15,
  },
  currentValueText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  unitText: {
    fontSize: 16,
    color: '#FF6B8B',
    marginBottom: 10,
  },
  ticksContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  ticksWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  tick: {
    width: 2,
    marginHorizontal: 2,
  },
  majorTick: {
    height: 20,
    backgroundColor: '#888',
  },
  minorTick: {
    height: 10,
    backgroundColor: '#CCC',
  },
  indicator: {
    position: 'absolute',
    width: 2,
    height: 30,
    backgroundColor: '#FF6B8B',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SwipeablePicker;
