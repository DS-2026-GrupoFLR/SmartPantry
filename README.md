# SmartPantry

Repositorio del Trabajo Práctico Integrador de Desarrollo de Software 2026 (DS-2026-GrupoFLR).

## Integrantes

- Fiorotto Emir, Lescano Joaquín, Ramos Jeremías
- @Chirafon @JoaquinLescano @rmssjere

## Sobre esta solución

Aplicación basada en arquitectura en capas (Domain Driven Design) generada con la plantilla ABP Application (Layered), con Angular como interfaz y Entity Framework Core + SQL Server como persistencia (sin tiered).

## Requisitos

- Visual Studio 2022 o Visual Studio 2026, con la carga de trabajo **Desarrollo de ASP.NET y web**
- [Node.js 24 LTS](https://nodejs.org/en) (versión 24.15.0 o superior — comprobar con `node --version`)
- Yarn 1.22.x (comprobar con `yarn --version`)
- SQL Server Developer o SQL Server Express (instalado localmente)
- SQL Server Management Studio (SSMS)
- ABP Studio Desktop
- Git

## Configuración local

Revisar y ajustar `ConnectionStrings:Default` en los siguientes archivos:

- `src/SmartPantry.DbMigrator/appsettings.json`
- `src/SmartPantry.HttpApi.Host/appsettings.json`

Cadena de conexión local utilizada por el grupo (autenticación integrada de Windows, sin contraseña):

```json
{
  "ConnectionStrings": {
    "Default": "Server=.\\SQLEXPRESS;Database=SmartPantry;Trusted_Connection=True;TrustServerCertificate=True"
  }
}