import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../constants/colors';
import {
  HomeIcon,
  CalendarNavIcon,
  SearchIcon,
  ProfileIcon,
} from './Icons';

export const BottomNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Иконки меню */}
        <View style={styles.navIcons}>
          {/* Иконка дома */}
          <TouchableOpacity style={styles.navItem}>
            <HomeIcon />
          </TouchableOpacity>

          {/* Иконка настроек */}
          <TouchableOpacity style={styles.navItem}>
            <CalendarNavIcon />
          </TouchableOpacity>

          {/* Иконка уведомлений с бейджем */}
          <View>
            <TouchableOpacity style={styles.navItem}>
              <SearchIcon />
            </TouchableOpacity>
            {/* Бейдж с уведомлениями */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>14</Text>
            </View>
          </View>

          {/* Иконка профиля */}
          <TouchableOpacity style={styles.navItem}>
            <ProfileIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 54,
  },
  navBar: {
    width: '100%',
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 12,
    position: 'relative',
  },
  navIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    paddingHorizontal: 40,
  },
  navItem: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    width: 21,
    height: 21,
    borderRadius: 99,
    backgroundColor: colors.accent.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    fontWeight: '500',
    color: colors.white,
    lineHeight: 12,
  },
});

