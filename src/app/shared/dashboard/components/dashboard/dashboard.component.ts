import { Component, OnInit, HostListener } from '@angular/core';

interface MenuItem {
  id: string;
  name: string;
  icon: string;
  submenu: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSidebarOpen = true;
  activeMenu = 'dashboard';
  activeSubmenu: string | null = null;
  isMobile = false;

  isDarkMode = false;

  // Menú principal con sus submenús
  menuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      name: 'Dashboard', 
      icon: 'pi pi-home',
      submenu: []
    },
    { 
      id: 'reports', 
      name: 'Reportes', 
      icon: 'pi pi-chart-bar',
      submenu: [
        { id: 'reports-daily', name: 'Reporte Diario' },
        { id: 'reports-weekly', name: 'Reporte Semanal' },
        { id: 'reports-monthly', name: 'Reporte Mensual' }
      ]
    },
    { 
      id: 'users', 
      name: 'Usuarios', 
      icon: 'pi pi-users',
      submenu: [
        { id: 'users-list', name: 'Lista de Usuarios' },
        { id: 'users-roles', name: 'Roles y Permisos' }
      ]
    },
    { 
      id: 'documents', 
      name: 'Documentos', 
      icon: 'pi pi-file',
      submenu: []
    },
    { 
      id: 'messages', 
      name: 'Mensajes', 
      icon: 'pi pi-comment',
      submenu: []
    },
  ];

  utilityItems: MenuItem[] = [
    { 
      id: 'settings', 
      name: 'Configuración', 
      icon: 'pi pi-cog',
      submenu: [
        { id: 'settings-profile', name: 'Perfil' },
        { id: 'settings-notifications', name: 'Notificaciones' },
        { id: 'settings-security', name: 'Seguridad' }
      ]
    },
    { 
      id: 'help', 
      name: 'Ayuda', 
      icon: 'pi pi-question-circle',
      submenu: []
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();

    this.checkScreenSize();
    
    // Verificar preferencia guardada del tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
    // Si estamos en móvil, el sidebar comienza cerrado
    if (this.isMobile && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleMenuClick(menuId: string): void {
    const clickedMenu = [...this.menuItems, ...this.utilityItems].find(item => item.id === menuId);
    
    if (this.activeMenu === menuId) {
      // Si hacemos clic en un menú ya activo, solo cerramos su submenú
      this.activeSubmenu = null;
    } else {
      // Activamos el nuevo menú
      this.activeMenu = menuId;
      this.activeSubmenu = null;
      
      // Si estamos en móvil y el menú no tiene submenús, cerramos el sidebar
      if (this.isMobile && clickedMenu && clickedMenu.submenu.length === 0) {
        this.isSidebarOpen = false;
      }
    }
  }

  handleSubmenuClick(submenuId: string): void {
    this.activeSubmenu = submenuId;
    
    // Si estamos en móvil, cerramos el sidebar después de seleccionar un submenú
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  getCurrentMenuTitle(): string {
    const menuItem = 
      [...this.menuItems, ...this.utilityItems].find(item => item.id === this.activeMenu);
    return menuItem ? menuItem.name : 'Dashboard';
  }

  getCurrentSubmenuTitle(): string {
    if (!this.activeSubmenu) return '';
    
    for (const item of [...this.menuItems, ...this.utilityItems]) {
      if (item.id === this.activeMenu) {
        const submenu = item.submenu.find(sub => sub.id === this.activeSubmenu);
        return submenu ? submenu.name : '';
      }
    }
    return '';
  }
}