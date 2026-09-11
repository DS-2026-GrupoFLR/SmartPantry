# SmartPantry

Este es el repositorio del grupo.

## Sobre esta solución

Aplicación basada en arquitectura en capas (Domain Driven Design) generada con la plantilla ABP Application (Layered), con Angular como interfaz y Entity Framework Core + SQL Server como persistencia (sin tiered).

## Requisitos

* Visual Studio 2022 o Visual Studio 2026, con la carga de trabajo **Desarrollo de ASP.NET y web**
* [Node.js 24 LTS](https://nodejs.org/en) (versión 24.15.0 o superior — comprobar con `node --version`)
* Yarn 1.22.x (comprobar con `yarn --version`)
* SQL Server Developer o SQL Server Express (instalado localmente)
* SQL Server Management Studio (SSMS)
* ABP Studio Desktop
* Git

## Configuración local

Revisar y ajustar `ConnectionStrings:Default` en los siguientes archivos:

* `src/SmartPantry.DbMigrator/appsettings.json`
* `src/SmartPantry.HttpApi.Host/appsettings.json`

Cadena de conexión local utilizada por el grupo (autenticación integrada de Windows, sin contraseña):

```json
{
  "ConnectionStrings": {
    "Default": "Server=.\\SQLEXPRESS;Database=SmartPantry;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

> Si en el futuro se usa un servidor remoto, usuario SQL o contraseña, esa cadena **no se versiona**: se configura mediante User Secrets o la variable de entorno `ConnectionStrings__Default`.

## Puesta en marcha

1. Restaurar dependencias del backend (o abrir `SmartPantry.slnx` en Visual Studio y compilar con Build Solution):
```bash
   dotnet restore .\SmartPantry.slnx
```
2. Instalar dependencias del frontend:
```bash
   abp install-libs
```
3. Ejecutar el DbMigrator para crear la base de datos y aplicar las migraciones iniciales (crea las tablas base de ABP: usuarios, roles, permisos, auditoría):
```bash
   dotnet run --project .\src\SmartPantry.DbMigrator
```
4. Levantar el backend:
```bash
   dotnet run --project .\src\SmartPantry.HttpApi.Host
```
5. Levantar el frontend Angular:
```bash
   cd angular
   yarn start
```

### URLs locales

* Backend (HttpApi.Host): `https://localhost:<puerto>` *(completar con el puerto real del grupo)*
* Frontend (Angular): `http://localhost:4200`

Para detener cada proceso, `Ctrl+C` en la terminal correspondiente o cerrar la ejecución desde Visual Studio (Shift+F5).

## Verificación

Comandos ejecutados correctamente por el grupo:

```bash
dotnet build .\SmartPantry.slnx --configuration Debug
dotnet test .\SmartPantry.slnx
```

```bash
cd angular
yarn build
yarn test --watch=false --browsers=ChromeHeadless
```

## Estructura de la solución

Monolito en capas que consiste en:

* `angular`: aplicación Angular (frontend).
* `src/SmartPantry.DbMigrator`: aplicación de consola que aplica las migraciones y siembra datos iniciales.
* `src/SmartPantry.HttpApi.Host`: aplicación ASP.NET Core que expone las APIs a los clientes.
* `src/SmartPantry.Domain`, `src/SmartPantry.Application`, `src/SmartPantry.EntityFrameworkCore`: capas de dominio, aplicación y persistencia.

### Proyectos de test

La carpeta `test` contiene:

* `SmartPantry.Application.Tests`: tests de la capa de aplicación.
* `SmartPantry.Domain.Tests`: tests de la capa de dominio.
* `SmartPantry.EntityFrameworkCore.Tests`: tests de integración con EF Core.