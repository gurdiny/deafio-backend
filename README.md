# Proyecto de API de Usuarios

## Descripción

Este proyecto es una API de usuarios que incluye autenticación, creación de publicaciones y manejo de usuarios. La API está construida con Node.js, Express y MongoDB.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:
   ```plaintext
   PORT=8080
   DB_USER=<TU_DB_USER>
   DB_PASSWORD=<TU_DB_PASSWORD>
   DB_HOST=<TU_DB_HOST>
   DB_NAME=<TU_DB_NAME>
   JWT_SECRET=<TU_JWT_SECRET>
   ```

## Uso

1. Inicia la base de datos MongoDB.

2. Inicia el servidor:

   ```bash
   npm start
   ```

3. La API estará disponible en `http://localhost:8080`.

## Endpoints

- `GET /` - Muestra un mensaje de bienvenida.
- `POST /auth` - Maneja la autenticación de usuarios.
- `POST /users` - Maneja la creación de usuarios.
- `GET /users` - Obtiene una lista de usuarios.
- `POST /post` - Maneja la creación de publicaciones.
- `GET /post` - Obtiene una lista de publicaciones.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios.
4. Haz commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`).
5. Empuja tus cambios (`git push origin feature/nueva-funcionalidad`).
6. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
