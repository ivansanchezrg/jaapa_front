# JaapaFront

![Angular](https://img.shields.io/badge/Angular-15.2.10-dd0031)
![Status](https://img.shields.io/badge/Status-En%20desarrollo-yellow)

Un moderno dashboard administrativo desarrollado con Angular, diseñado con un enfoque minimalista y una interfaz de usuario elegante.

![JaapaFront Dashboard](url-a-captura-del-dashboard.png)

## 🚀 Características

- Dashboard responsive con sidebar colapsable
- Diseño minimalista moderno con UI elegante
- Sistema de navegación intuitivo con menus y submenus
- Tema claro/oscuro integrado
- Layout adaptativo para escritorio, tablet y móvil

## 📋 Requisitos previos

- Node.js (v14.x o superior hasta v18.20.7)
- npm (v10.8.2)
- Angular CLI (v15.2.10)
- Primeng (v15.4.1)

## 📚 Dependencias y Plugins utilizados
* [NgPrime](https://www.primefaces.org/primeng/) v15.4.1 - Framework UI para componentes

## 🔧 Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/JaapaFront.git

# Navegar al directorio
cd JaapaFront

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   └── dashboard/       # Componentes del dashboard
│   ├── core/                # Servicios singleton, modelos, etc.
│   ├── pages/               # Componentes de páginas
│   ├── shared/              # Componentes, pipes y directivas compartidos
│   └── ...
├── assets/                  # Recursos estáticos
├── environments/            # Configuraciones de entorno
└── ...
```

## 🧩 Componentes principales

### Dashboard Layout
- **Sidebar**: Menú lateral con navegación principal y submenús
- **Header**: Barra superior con título de sección y acciones 
- **Content Area**: Área dinámica que cambia según la navegación
- **User Panel**: Información y roles del usuario actual

## 🎨 Guía de estilos

El proyecto utiliza la siguiente paleta de colores:
```css
:root {
  --primary-color: #3D4AA2;
  --secondary-color: #6C63FF;
  --dark-accent: #2A3356;
  --light-accent: #8B85FF;
  --text-color: #1A2138;
  --text-light: #4A5578;
  --light-bg: #F6F8FF;
  --card-bg: #ffffff;
  --gradient-start: #EDF0FF;
  --gradient-end: #F0F2FF;
}
```

## 🛠️ Comandos de desarrollo

```bash
# Generar nuevos componentes
ng generate component component-name

# Generar otros artefactos
ng generate directive|pipe|service|class|guard|interface|enum|module

# Compilar el proyecto
ng build

# Ejecutar pruebas unitarias
ng test

# Ejecutar pruebas end-to-end
ng e2e
```

## 📦 Compilación para producción

```bash
# Compilar para producción
ng build --prod
```

Los artefactos de la compilación serán almacenados en el directorio `dist/`.

## 📝 Historial de cambios

### v0.1.0 (Fecha)
- Implementación inicial del layout de dashboard
- Sidebar con menús y submnenús
- Tema claro/oscuro
- Adaptación responsive

## 🔜 Próximas características

- [ ] Panel de estadísticas
- [ ] Integración con backend
- [ ] Autenticación de usuarios
- [ ] Gestión de roles y permisos

## 🤝 Contribución

1. Haz un Fork del proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

[Tu Nombre] - [tu-email@example.com]

Link del proyecto: [https://github.com/tu-usuario/JaapaFront](https://github.com/tu-usuario/JaapaFront)
