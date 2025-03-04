# 🛒 API y Sistema de Carrito de Compras

Este proyecto es una implementación de una API con Ruby on Rails junto con un frontend desarrollado en Next.js.  
Su propósito es permitir la visualización de productos, la adición de estos a un carrito de compras y la optimización de la mejor combinación de productos sin exceder un presupuesto establecido.

## **Tecnologías Empleadas**

- **Backend:** Ruby on Rails (Modo API)
- **Frontend:** Next.js con React
- **Estilos:** Tailwind CSS
- **Peticiones HTTP:** Axios

---

## **Instrucciones de Instalación y Uso**

### **1. Clonar el Repositorio**

```sh
git clone https://github.com/diego41071/prueba-ruby
cd prueba-ruby
```

---

### 🔹 **2. Configuración del Backend (Ruby on Rails)**

#### **Instalar dependencias**

```sh
cd backend-api
bundle install
```

#### **Ejecutar el Servidor Rails**

```sh
rails server
```

El backend estará accesible en `http://localhost:3000/`

---

### 🔹 **3. Configuración del Frontend (Next.js)**

#### **Instalar dependencias**

```sh
cd frontend
npm install
```

#### **Ejecutar el Frontend**

```sh
npm run dev
```

El frontend estará disponible en `http://192.168.1.2:3000/`

---

## **Características del Proyecto**

Visualización de productos a través de la API.  
 Incorporación de productos al carrito de compras.  
 Visualización del carrito con los productos agregados.  
 Implementación de un algoritmo para seleccionar la mejor combinación de productos dentro de un presupuesto determinado.

---

## **Estructura del Proyecto**

```
tu-repositorio
 ┣  backend-api        # Código del backend en Ruby on Rails
 ┃ ┣  app/controllers  # Controladores de la API
 ┃ ┣  config           # Archivos de configuración de Rails
 ┃ ┗  Gemfile          # Lista de dependencias de Ruby
 ┣  frontend           # Código del frontend en Next.js
 ┃ ┣  pages            # Páginas principales del frontend
 ┃ ┣  styles           # Archivos de estilos con Tailwind
 ┃ ┗  package.json     # Dependencias de Node.js
 ┗  README.md          # Documentación del proyecto
```

---

## **Despliegue en Vercel**

Si deseas acceder a la aplicación en línea, visita:  
🔗 [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app)
