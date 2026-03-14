
# Prueba QA Automation Project – Evaluar.com
# Ximena Diaz Gasca

En esta automatización se tuvo en cuenta lo siguiente:

• Cypress  
• TypeScript  
• Page Object Model  
• Datos dinámicos con Faker  
• Reportes Mochawesome  
• Retry automático  
• CI/CD con GitHub Actions

----------------------------------------------

## La URL probada fue:

https://candidato.evaluar.com/auth/autoregister/controlled/63bed1d4-2e0f-4899-a424-0015ab7dad04

----------------------------------------------

## Escenarios Automatizados

1. Autoregistro de candidato
2. Completar test "Teletrabajador"

----------------------------------------------

## Requisitos

Node.js >= 18

----------------------------------------------

## Instalación

npm install

----------------------------------------------

## Ejecutar pruebas

Abrir Cypress
    npm run cypress:open

Modo headless
    npm run cypress:run

----------------------------------------------

## Reportes

Genera reportes con Mochawesome
    npm run test

----------------------------------------------

## Estructura

cypress
 ├── e2e
 │   ├── 01_autoregistro.cy.ts
 │   └── 02_test-teletrabajador.cy.ts
 ├── pages
 │   ├── RegistroPage.ts
 │   ├── DashboardPage.ts
 │   └── TestTeletrabajadorPage.ts
 └── support
     └── commands.ts

----------------------------------------------

## Buenas prácticas aplicadas

- Page Object Model
- Datos dinámicos para evitar correos duplicados (faker)  
- Tests desacoplados de la lógica de UI
- Código tipado con TypeScript
- Retry automático 

