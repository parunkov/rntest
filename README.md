# BTA Assist

React Native Expo приложение с Pixel Perfect версткой по макету Figma.

## Технологии

- **React Native**: 0.81.5
- **Expo**: ~54.0.25
- **React**: 19.1.0
- **TypeScript**: ~5.9.2
- **react-native-svg**: для SVG иконок
- **@expo-google-fonts/montserrat**: шрифт Montserrat

## Структура проекта

```
BTAAssist/
├── assets/
│   ├── icons/          # SVG иконки из Figma
│   └── images/         # PNG изображения (аватары)
├── src/
│   ├── components/     # Переиспользуемые компоненты
│   │   ├── AppointmentCard.tsx
│   │   ├── BottomNav.tsx
│   │   └── ServiceCard.tsx
│   ├── constants/      # Константы (цвета, шрифты)
│   │   ├── colors.ts
│   │   └── fonts.ts
│   ├── screens/        # Экраны приложения
│   │   └── HomeScreen.tsx
│   └── types/          # TypeScript типы
│       └── index.ts
├── App.tsx             # Главный файл приложения
└── package.json
```

## Установка

```bash
# Клонируйте репозиторий
cd BTAAssist

# Установите зависимости
npm install
```

## Запуск

```bash
# Запуск в режиме разработки
npm start

# Запуск на Android
npm run android

# Запуск на iOS (требуется macOS)
npm run ios

# Запуск в веб-браузере
npm run web
```

## Особенности верстки

### SVG иконки из Figma
Все иконки извлечены из макета Figma (node-id: 224-77) и созданы как React компоненты:
- **SyringeIcon** - Шприц (Первичный приём)
- **EyeIcon** - Глаз (Осмотр, коррекция)  
- **NurseIcon** - Медицинский инструмент (Повторный приём)
- **CalendarServiceIcon** - Календарь (Мой календарь)
- **FolderServiceIcon** - Папка (Картотека)
- **BookIcon** - Книга (Учебное пособие)

Все иконки используют градиент аквамарин (#56B5B3 → #1F7876) согласно макету.

### Pixel Perfect
Верстка выполнена строго по макету Figma:
- Размеры экрана: 360x720px
- Все отступы, размеры и радиусы скопированы из макета
- Цвета взяты из дизайна (#F6F6F6, #FFFFFF, #222221, и т.д.)
- Шрифт: Montserrat (Regular, Medium, SemiBold)
- Размеры шрифтов: 10px, 12px, 14px, 16px, 18px

### Компоненты

#### AppointmentCard
Карточка приема пациента с:
- Аватаром (55x55px, border-radius: 14px)
- Именем пациента
- Типом приема с цветовой индикацией
- Датой и временем

#### ServiceCard
Карточка услуги с:
- SVG иконкой (36x36px)
- Названием услуги
- Размер: 107x101px, border-radius: 18px

#### BottomNav
Нижняя навигация с:
- 5 иконками навигации
- Центральной кнопкой действия
- Бейджем с уведомлениями

### Цветовая схема

```typescript
background: '#F6F6F6'
white: '#FFFFFF'
text.primary: '#222221'
text.secondary: '#616161'
accent.red: '#D7131F'
accent.blue: '#1BC4EA'
accent.green: '#009C6A'
accent.darkBlue: '#026FD5'
accent.teal: '#1F7876'
```

## Макет Figma

Ссылка на макет: [BTA Assist](https://www.figma.com/design/8wvF8Ea8NaEYi9dkxF2OyU/BTA-Assist?node-id=224-77)

## Лицензия

MIT

