# Datami Sponsorship Integration Test

## Descripción
Aplicación Android Nativa (Kotlin + Compose) desarrollada como prueba técnica para la integración del SDK de Datami. El proyecto implementa un flujo de navegación patrocinada mediante un túnel VPN gestionado por el SDK.

## Requisitos Técnicos
- Kotlin 1.9+
- Jetpack Compose
- SDK Datami Legacy (5.1.3)
- Android SDK 34 (Target)

## Arquitectura
- **MVVM (Model-View-ViewModel):** Separa la lógica de los estados del SDK de la interfaz gráfica.
- **Repository Pattern:** Centraliza la inicialización y escucha de estados del SDK.
- **StateFlow:** Gestión de estados reactivos para actualizar la UI en tiempo real.

## Troubleshooting / Notas Importantes
Durante la integración, el SDK reporta `No Deployment` / `SD_REGISTRATION_NOT_DONE`. Esto es un **comportamiento esperado** dado que el entorno de pruebas requiere que el backend de Datami tenga la campaña activa y el paquete `com.montdroud52468.datami` aprovisionado. 

El Logcat confirma que el SDK está correctamente integrado y alcanzando el servidor (`gd successful`).

## Instalación
1. Clonar el repositorio.
2. Asegurarse de tener el AAR del SDK en la carpeta `libs`.
3. Ejecutar en un dispositivo físico (el SDK requiere red celular real, no funciona correctamente en emulador).
4. **Nota:** Desactivar WiFi para pruebas de patrocinio reales.
