## 📊 Endpoints de la API

La API mock (json-server) provee los siguientes endpoints:

### Usuarios

- `GET /users` - Obtiene usuarios con paginación, búsqueda y filtros
  - Parámetros de query: `_page`, `_limit`, `q`, `_sort`, `_order`, `_status`
- `GET /users/:id` - Obtiene un usuario específico
- `POST /users` - Crea un nuevo usuario
- `PUT /users/:id` - Actualiza un usuario existente
- `DELETE /users/:id` - Elimina un usuario

### Estadísticas

- `GET /statics` - Obtiene estadísticas de usuarios (totalUsers, newUsers, etc.)
- `GET /userTypes` - Obtiene distribución de tipos de usuarios para gráficos

}
