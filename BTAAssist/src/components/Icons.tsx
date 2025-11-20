import React from 'react';
import Svg, { Path, Circle, Rect, Defs, LinearGradient, Stop, G, Mask, ClipPath } from 'react-native-svg';

// Реальные иконки из Figma макета

// Иконка шприца (Первичный приём)
export const SyringeIcon = () => (
  <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <Defs>
      <LinearGradient id="syringe_grad" x1="15.8561" y1="0" x2="15.8561" y2="35.9999" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <Path 
      d="M32.6137 32.0863C32.5148 31.9875 32.3807 31.9319 32.2408 31.9319C32.101 31.9319 31.9669 31.9875 31.868 32.0863L31.6884 32.2659L30.4253 31.0028L30.605 30.8231C30.7039 30.7242 30.7595 30.59 30.7595 30.4501C30.7595 30.3103 30.7039 30.1761 30.605 30.0772L29.1853 28.6583M14.7682 0C12.3187 0 10.2188 1.69038 9.68312 4.05387C9.03032 4.4539 8.42653 4.92888 7.88403 5.46912M23.3891 11.1736C23.3582 11.1414 23.3282 11.1083 23.2965 11.0769C21.6978 9.49078 18.9204 7.60001 14.7681 7.60001C10.6158 7.60001 7.83847 9.49078 6.23977 11.0769" 
      fill="url(#syringe_grad)"
    />
  </Svg>
);

// Иконка глаза (Осмотр, коррекция)  
export const EyeIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Defs>
      <LinearGradient id="eye_grad" x1="17.5" y1="4.37976" x2="17.5" y2="30.6201" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <G>
      <Path 
        d="M30.9968 11.2396C33.481 14.4163 34.4872 17.4999 34.4872 17.4999C34.4872 17.4999 30.2059 30.6201 17.5 30.6201C4.79403 30.6201 0.512695 17.4999 0.512695 17.4999C0.512695 17.4999 4.79403 4.37976 17.5 4.37976C22.8785 4.37976 26.7469 6.72995 29.4197 9.44176" 
        stroke="url(#eye_grad)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M11.8718 11.1383C10.4423 12.5744 9.55872 14.5542 9.55872 16.7405C9.55872 21.1262 13.1141 24.6816 17.4999 24.6816C21.8857 24.6816 25.4411 21.1262 25.4411 16.7405C25.4411 14.5542 24.5575 12.5744 23.128 11.1383" 
        stroke="url(#eye_grad)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Circle cx="20" cy="14" r="2" fill="url(#eye_grad)" />
    </G>
  </Svg>
);

// Иконка лопатки (Повторный приём - медсестра)
export const NurseIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Defs>
      <LinearGradient id="nurse_grad" x1="14.9597" y1="0" x2="14.9597" y2="35" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <Path 
      d="M32.2 12.7775H30.1141V12.5433C30.1141 11.9602 29.6397 11.4858 29.0566 11.4858H24.9426M33.1687 4.75972L30.2533 1.84486L28.5828 0.175752M24.939 12.2055L22.803 10.0711L29.8615 3.01551L31.996 5.1492L24.939 12.2055Z" 
      fill="url(#nurse_grad)"
    />
  </Svg>
);

// Иконка календаря (Мой календарь)
export const CalendarServiceIcon = () => (
  <Svg width="33" height="33" viewBox="0 0 33 33" fill="none">
    <Defs>
      <LinearGradient id="cal_grad" x1="16.5" y1="0.483398" x2="16.5" y2="32.5167" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <G clipPath="url(#clip0)">
      <Path d="M7.25221 0.483398H6.66169C6.21232 0.483398 5.84802 0.847691 5.84802 1.29706V5.38988M12.0237 0.483398H11.4332C10.9838 0.483398 10.6195 0.847691 10.6195 1.29706V5.38988" stroke="url(#cal_grad)" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Rect x="6" y="12" width="21" height="15" rx="2" stroke="url(#cal_grad)" strokeWidth="1.5"/>
      <Path d="M6 13H27M10 17H12M16 17H18M22 17H24M10 21H12M16 21H18M22 21H24M10 25H12M16 25H18M22 25H24" stroke="url(#cal_grad)" strokeWidth="1.5" strokeLinecap="round"/>
    </G>
  </Svg>
);

// Иконка папки (Картотека)
export const FolderServiceIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Defs>
      <LinearGradient id="folder_grad" x1="17.5" y1="0.692871" x2="17.5" y2="34.307" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <Path 
      d="M34.4407 9.5692C34.081 9.20949 33.6027 9.01125 33.0941 9.00988H32.2276V6.75717M4.67852 0.692939H11.6102L12.9916 3.81156H30.3216V9.00995M0 10.9159L0 21.5073M33.9605 10.9159V32.401C33.9605 32.6304 33.8697 32.8473 33.7055 33.013C33.5405 33.1772 33.3236 33.2673 33.0942 33.2673H1.90593C1.67651 33.2673 1.45961 33.1772 1.29466 33.013M23.0446 19.4058H11.9554C11.0955 19.4058 10.396 20.1053 10.396 20.9652V23.0442C10.396 23.9041 11.0955 24.6036 11.9554 24.6036H23.0446" 
      stroke="url(#folder_grad)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Иконка книги (Учебное пособие)
export const BookIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Defs>
      <LinearGradient id="book_grad" x1="17.5" y1="0" x2="17.5" y2="35" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <Path 
      d="M32.2 12.7775H30.1141V12.5433C30.1141 11.9602 29.6397 11.4858 29.0566 11.4858M4.95445 12.7775H2.80007C2.16446 12.7775 1.64734 13.2947 1.64734 13.9303V31.8423C1.64734 33.5834 3.06383 34.9999 4.80494 34.9999H30.195C31.9361 34.9999 33.3526 33.5834 33.3526 31.8423V13.9303M17.5343 1.02684C21.0162 1.02684 23.8489 3.85955 23.8489 7.34136C23.8489 8.65154 23.4512 9.90798 22.699 10.9751M19.3196 16.3858V17.051C19.3196 17.1159 19.2938 17.1781 19.2479 17.224M12.9918 17.8091H7.42089M14.0424 19.9074H8.34833M14.0424 22.4088H8.34833M14.0424 24.9103H8.34833" 
      stroke="url(#book_grad)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Остальные иконки (без изменений)
export const ArrowIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PendingIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 3V8L11 11"
      stroke="#616161"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="8" cy="8" r="6" stroke="#616161" strokeWidth="2" fill="none" />
  </Svg>
);

export const HomeIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H10M19 10L21 12M19 10V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H14M10 22C10.5304 22 11.0391 21.7893 11.4142 21.4142C11.7893 21.0391 12 20.5304 12 20V16C12 15.4696 12.2107 14.9609 12.5858 14.5858C12.9609 14.2107 13.4696 14 14 14C14.5304 14 15.0391 14.2107 15.4142 14.5858C15.7893 14.9609 16 15.4696 16 16V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22M10 22H14"
      stroke="#424242"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CalendarNavIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
      stroke="#424242"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlusIcon = () => (
  <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <Defs>
      <LinearGradient id="tealGrad" x1="25" y1="0" x2="25" y2="50">
        <Stop stopColor="#56B5B3" />
        <Stop offset="1" stopColor="#1F7876" />
      </LinearGradient>
    </Defs>
    <Circle cx="25" cy="25" r="24" fill="url(#tealGrad)" stroke="#FFFFFF" strokeWidth="1" />
    <Path
      d="M25 15V35M15 25H35"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const SearchIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="7" stroke="#424242" strokeWidth="2" fill="none" />
    <Path d="M20 20L17 17" stroke="#424242" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const ProfileIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4" stroke="#424242" strokeWidth="2" fill="none" />
    <Path
      d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21"
      stroke="#424242"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
