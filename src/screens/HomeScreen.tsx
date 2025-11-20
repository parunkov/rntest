import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fontSizes } from '../constants/fonts';
import { AppointmentCard } from '../components/AppointmentCard';
import { ServiceCard } from '../components/ServiceCard';
import { BottomNav } from '../components/BottomNav';
import {
  ArrowIcon,
  SyringeIcon,
  EyeIcon,
  NurseIcon,
  CalendarServiceIcon,
  FolderServiceIcon,
  BookIcon,
  PendingIcon,
  PlusIcon,
} from '../components/Icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HORIZONTAL_PADDING = 10; // Отступы по краям
const GAP = 10; // Промежуток между карточками
const CARD_WIDTH = (SCREEN_WIDTH - HORIZONTAL_PADDING * 2 - GAP * 2) / 3;

export const HomeScreen: React.FC = () => {
  const appointments = [
    {
      id: '1',
      patientName: 'Иванов Олег',
      appointmentType: 'Повторный приём',
      appointmentTypeColor: colors.accent.blue,
      date: 'Сегодня, 12:00',
      avatar: require('../../assets/icon.png'),
    },
    {
      id: '2',
      patientName: 'Кирпичникова Апполинария ',
      appointmentType: 'Первичный приём',
      appointmentTypeColor: colors.accent.green,
      date: '25 окт, 12:00',
      avatar: require('../../assets/icon.png'),
    },
    {
      id: '3',
      patientName: 'Иванов Олег',
      appointmentType: 'Осмотр, коррекция',
      appointmentTypeColor: colors.accent.darkBlue,
      date: '25 окт, 15:00',
      avatar: require('../../assets/icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Шапка */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BTA Assist</Text>
      </View>

      {/* Кнопка добавления */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <PlusIcon />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Сетка карточек услуг */}
        <View style={styles.servicesGrid}>
          <ServiceCard style={styles.serviceCard} icon={<SyringeIcon />} title="Первичный приём" />
          <ServiceCard style={styles.serviceCard} icon={<EyeIcon />} title="Осмотр, коррекция" />
          <ServiceCard style={styles.serviceCard} icon={<NurseIcon />} title="Повторный приём" />
          <ServiceCard style={styles.serviceCard} icon={<CalendarServiceIcon />} title="Мой календарь" />
          <ServiceCard style={styles.serviceCard} icon={<FolderServiceIcon />} title="Картотека" />
          <ServiceCard style={styles.serviceCard} icon={<BookIcon />} title="Учебное пособие" />
        </View>

        {/* Заголовок приемов */}
        <View style={styles.appointmentsHeader}>
          <Text style={styles.appointmentsTitle}>Ближайшие приемы</Text>
          <TouchableOpacity style={styles.archiveButton}>
            <Text style={styles.archiveText}>Архив</Text>
            <View style={styles.pendingIcon}>
              <PendingIcon />
            </View>
          </TouchableOpacity>
        </View>

        {/* Список приемов */}
        <View style={styles.appointmentsList}>
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </View>

        {/* Отступ для навигации */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Нижняя навигация */}
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: 360,
    height: 720,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 19,
    paddingBottom: 19,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: fontSizes.xl,
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: -0.54,
    lineHeight: 22,
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent.teal,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  serviceCard: {
    width: CARD_WIDTH,
  },
  appointmentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 15,
  },
  appointmentsTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: fontSizes.xl,
    fontWeight: '500',
    color: colors.text.primary,
    letterSpacing: -0.54,
    lineHeight: 22,
  },
  archiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  archiveText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: fontSizes.lg,
    fontWeight: '400',
    color: colors.text.secondary,
    letterSpacing: -0.48,
    lineHeight: 20,
  },
  pendingIcon: {
    marginLeft: 4,
  },
  appointmentsList: {
    gap: 10,
  },
  bottomSpacer: {
    height: 80,
  },
});

