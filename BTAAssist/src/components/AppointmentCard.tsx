import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fontSizes } from '../constants/fonts';
import type { Appointment } from '../types';

interface AppointmentCardProps {
  appointment: Appointment;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={appointment.avatar} style={styles.avatar} />
      </View>
      <View style={styles.content}>
        <Text style={styles.patientName}>{appointment.patientName}</Text>
        <Text style={[styles.appointmentType, { color: appointment.appointmentTypeColor }]}>
          {appointment.appointmentType}
        </Text>
      </View>
      <Text style={styles.date}>{appointment.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 65,
    backgroundColor: colors.white,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 55,
    height: 55,
    borderRadius: 14,
    overflow: 'hidden',
    marginLeft: 5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  patientName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: fontSizes.md,
    fontWeight: '600',
    color: colors.text.primary,
    letterSpacing: -0.42,
    lineHeight: 17,
  },
  appointmentType: {
    fontFamily: 'Montserrat-Medium',
    fontSize: fontSizes.xs,
    fontWeight: '500',
    letterSpacing: -0.3,
    lineHeight: 12,
    marginTop: 6,
  },
  date: {
    fontFamily: 'Montserrat-Medium',
    fontSize: fontSizes.xs,
    fontWeight: '500',
    color: colors.text.primary,
    letterSpacing: -0.3,
    lineHeight: 12,
    marginRight: 15,
  },
});

