import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import { fontSizes } from '../constants/fonts';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 101,
    backgroundColor: colors.white,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: fontSizes.sm,
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: -0.36,
    lineHeight: 15,
    paddingHorizontal: 4,
  },
});

