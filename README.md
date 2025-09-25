# Movies Explorer - App de Consulta de Películas

## 1. Identificación del Proyecto

- **Nombre de la App:** Movies Explorer
- **Asignatura/Profesor:** Desarrollo de Aplicaciones Móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Septiembre 2025
- **URL del Repositorio:** https://github.com/l3onet/movies-explorer-app

## 2. Propósito y Alcance del README

Esta aplicación móvil permite consultar información de películas mediante una interfaz intuitiva con cartelera y detalles. Este README cubre únicamente la **creación del proyecto desde cero** y la **configuración de dependencias base** necesarias para el sistema de navegación. No incluye integración con APIs externas, autenticación de usuarios, ni funcionalidades avanzadas como favoritos persistentes o notificaciones push.

## 3. Prerrequisitos y Versiones

### Herramientas Requeridas:

- **Sistema Operativo:** macOS 12+, Windows 10+ o Ubuntu 18.04+
- **Node.js:** v18.17.0 o superior
  ```bash
  node --version
  ```
- **Yarn:** v1.22.19 o NPM 9.0.0+
  ```bash
  yarn --version
  # o
  npm --version
  ```
- **Expo CLI:** v6.3.0+
  ```bash
  npx expo --version
  ```
- **Android Studio:** v2022.3+ con Android SDK 33+ **o** Expo Go app en dispositivo físico
  ```bash
  # Verificar Android SDK
  adb --version
  ```

### Verificación de Entorno:
```bash
npx expo doctor
```

## 4. Creación del Proyecto desde Cero

### Paso 1: Crear el proyecto base
```bash
npx create-expo-app MoviesExplorerApp --template blank
cd MoviesExplorerApp
```

### Paso 2: Verificar estructura generada
El comando anterior debe generar la siguiente estructura mínima:
```
MoviesExplorerApp/
├── App.js
├── app.json
├── package.json
├── babel.config.js
└── assets/
    ├── favicon.png
    ├── icon.png
    └── splash.png
```

### Paso 3: Verificación de arranque inicial
```bash
npx expo start
```
**Nota de verificación:** Debe aparecer el QR code y el mensaje "Metro waiting on exp://[IP]:8081". Si aparece la pantalla blanca con "Open up App.js to start working on your app!", la instalación base es exitosa.

## 5. Dependencias Base y su Propósito

### Dependencias de Navegación:
```bash
npm install @react-navigation/native@6.1.9 @react-navigation/native-stack@6.9.17
npx expo install react-native-screens@3.25.0 react-native-safe-area-context@4.7.4
```

### Tabla de Dependencias:

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| `@react-navigation/native` | 6.1.9 | Core de navegación entre pantallas, manejo de estado de navegación |
| `@react-navigation/native-stack` | 6.9.17 | Stack navigator para navegación jerárquica (Lista → Detalles) |
| `react-native-screens` | 3.25.0 | Optimización de rendimiento para transiciones nativas |
| `react-native-safe-area-context` | 4.7.4 | Manejo de áreas seguras (notch, barras de estado) |
| `expo-status-bar` | ~1.6.0 | Control de apariencia de barra de estado (incluida por defecto) |

### Verificar instalación:
```bash
npm list --depth=0
```

## 6. Scripts de Ejecución y Build (Yarn/NPM)

### Scripts Principales:
```bash
# Iniciar servidor de desarrollo
npm start
# o
npx expo start

# Ejecutar en Android (emulador/dispositivo)
npm run android
# o
npx expo start --android

# Ejecutar en iOS (solo macOS)
npm run ios
# o  
npx expo start --ios

# Ejecutar en web
npm run web
# o
npx expo start --web

# Build para producción (requiere EAS)
npx eas build --platform android
npx eas build --platform ios
```

### Notas de Entorno:
- **Emulador Android:** Debe estar iniciado antes de ejecutar `npm run android`
- **Dispositivo físico:** Usar Expo Go y escanear QR code
- **Túnel para redes restrictivas:** `npx expo start --tunnel`

## 7. Ejecución en Android/iOS (Expo / Emulador / Físico)

### Opción A: Dispositivo Físico con Expo Go

1. **Instalar Expo Go:**
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Ejecutar proyecto:**
   ```bash
   npx expo start
   ```

3. **Conectar dispositivo:**
   - **Android:** Escanear QR code con Expo Go
   - **iOS:** Usar cámara para escanear QR code

### Opción B: Emulador Android

1. **Configurar Android Studio:**
   - Crear AVD (Android Virtual Device) con API 33+
   - Iniciar emulador antes de ejecutar el proyecto

2. **Ejecutar en emulador:**
   ```bash
   npx expo start --android
   ```

### Nota de Permisos:
- **Android:** Activar "Instalación de fuentes desconocidas" para Expo Go
- **Firewall:** Permitir conexiones en puerto 8081 y 19000-19002

### Problemas Típicos:
- **Puerto ocupado:** `npx expo start --port 8082`
- **ADB no reconoce dispositivo:** `adb kill-server && adb start-server`
- **Metro cache:** `npx expo start --clear`

## 8. Troubleshooting Básico

### Problemas Comunes y Soluciones:

| Problema | Síntoma | Solución |
|----------|---------|----------|
| **Error de instalación NPM** | "npm ERR! peer dep missing" | `npm install --legacy-peer-deps` |
| **SDK Android no encontrado** | "Android SDK not found" | Verificar ANDROID_HOME en variables de entorno |
| **Expo Go no conecta** | QR funciona pero no carga app | Verificar que dispositivo y PC estén en misma red WiFi |
| **Metro bundler falla** | "Metro has encountered an error" | `npx expo start --clear` para limpiar cache |
| **Dependencias desactualizadas** | Warnings en consola | `npx expo doctor` y seguir recomendaciones |

### Comandos de Verificación:
```bash
# Verificar entorno completo
npx expo doctor

# Limpiar cache de Metro
npx expo start --clear

# Reinstalar node_modules
rm -rf node_modules package-lock.json && npm install

# Verificar puertos disponibles
npx expo start --port 8082
```

### Recursos Adicionales:
- [Documentación oficial de Expo](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [Troubleshooting Expo](https://docs.expo.dev/troubleshooting/overview/)

---

**Última actualización:** Septiembre 25, 2025