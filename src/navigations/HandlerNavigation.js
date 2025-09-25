import React from 'react';
import { AppNavigation } from './AppNavigation';

export function HandlerNavigation() {
  // En una app real, aquí verificarías el estado de autenticación
  const isAuthenticated = true;
  
  // Por simplicidad, siempre mostramos la navegación de la app
  return <AppNavigation />;
}
