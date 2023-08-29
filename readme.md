# Sistema de Gestión de Reporte de Ordenadores en Salones MONGO

El Sistema de Gestión de Reporte de Ordenadores en Salones es una aplicación diseñada para facilitar la administración de ordenadores en diferentes salones y resolver incidencias relacionadas con hardware y software. Permite a los usuarios, especialmente profesores y personal de TI, gestionar eficientemente el inventario de ordenadores y realizar un seguimiento de las incidencias en cada equipo.

## Características

- Creación de Reportes: Los usuarios Admin pueden generar reportes detallados de incidencias en los ordenadores, especificando la categoría (hardware o software) y el nivel de gravedad (leve, moderado, crítico).
- Eliminar reportes 
- Actualizar Reportes
- Sistema de login por usuario 

1. **Configurar variables de entorno:** un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes encontrar un ejemplo de las variables requeridas en el archivo

   ```
   ALTAS_USUARIO="Nirclaw"
   ATLAS_PASS="EDTXMFUhkURsfs7g"
   ATLAS_DB="gestion_reportes"
   SERVER = {"hostname":"","port":}
   PASSWORD = "Nicolas1234567890"
   ```

## Uso de la Simulación

1. **Inicio de Sesión:** Los usuarios ingresan utilizando credenciales predefinidas para acceder al sistema. Dependiendo del tipo de usuario seleccionado, se establece el nivel de acceso.
2. **Exploración de Datos:** Una vez dentro, los usuarios pueden explorar los datos ficticios. Los usuarios específicos tienen acceso completo a todas las colecciones y pueden ejecutar consultas detalladas. Los usuarios limitados tienen un acceso restringido y solo pueden ver los reportes.
3. **creacion de reportes:** Se permite la creacion y la actualizacion y eliminacion de reportes por parte del administrador quien es el que tiene los permisos

# Instrucciones para Utilizar la Simulación del Gestor de Reportes

## Clonar el Repositorio

1. Abre tu terminal o línea de comandos.
2. Ejecuta el siguiente comando para clonar el repositorio desde GitHub:

```
git clone https://github.com/Nirclaw/Mongo_citas.git
```

## Configuración e Inicio

1. Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Si no los tienes, puedes descargarlos e instalarlos desde [aquí](https://nodejs.org/).
2. Instala las dependencias del proyecto ejecutando:

```
npm install
```

1. Una vez que todas las dependencias estén instaladas, inicia la simulación ejecutando:

```
npm run dev
```

## Notas

- Esta simulación está diseñada para propósitos educativos y de demostración. No se conecta a una base de datos real y utiliza datos ficticios generados para ilustrar el concepto del gestor de Reportes.
- Asegúrate de que estés en el directorio correcto del proyecto y de haber instalado las dependencias antes de ejecutar el comando `npm run dev`

# Recomendación para Utilizar Thunder Client con el Proyecto de Reportes

Para interactuar con el proyecto de gestor de reportes , se recomienda utilizar la extensión Thunder Client para Visual Studio Code. Dado que el proyecto no cuenta con una interfaz gráfica, Thunder Client facilitará la realización de solicitudes HTTP a los endpoints proporcionados. A continuación, se detallan los endpoints disponibles y cómo utilizarlos con Thunder Client.

# iniciar sesion

## Credenciales de Acceso

En esta simulación del gestor , se utilizan diferentes roles para definir los niveles de acceso a las consultas de las colecciones. A continuación, se detallan las credenciales para los dos roles principales:

### Rol: Admin

- **Usuario:** Nicolas
- **Contraseña:** 123456789
- **Acceso:** Tiene acceso total a la coleccion de reportes donde podra ver todos los reportes crear , modificar y eliminar
- versiones : 1.0.0 ,2.0.0
- NOTA :el admin puede usar la version 2.0.0 donde podra utilizar los endpoinds de actualizar y crear y eliminar datos

### Rol: User

- **Usuario:** Miguel
- **Contraseña:** 123456789
- **Acceso:** Tiene acceso únicamente a la coleccion de reportes donde solo podra visualizar los reportes de los usuarios
- versiones : 1.0.0

Estas credenciales te permitirán experimentar con diferentes niveles de acceso y realizar consultas en las colecciones correspondientes, según el rol que elijas utilizar durante la simulación.

Estas credenciales te permitirán experimentar con diferentes niveles de acceso y realizar consultas en las colecciones correspondientes, según el rol que elijas utilizar durante la simulación.

**POST**

<http://127.10.10.10:5100/login/>

pasar los datos asi

```
{
  "user": "Nicolas",
  "password": "123456789"
}
```

Después de iniciar sesión exitosamente, recibirás una clave de autenticación que estará activa durante un período limitado de 3 horas. Esta clave es esencial para autorizar tus solicitudes y acceder a los endpoints correspondientes en la simulación del gestor 

Una vez hayas ingresado tus credenciales y enviado la solicitud de inicio de sesión, el servidor te proporcionará una clave de autenticación en la respuesta. Esta clave es esencial para identificarte en las solicitudes futuras y acceder a los endpoints correspondientes.

Luego, al realizar solicitudes a otros endpoints, debes incluir esta clave en los encabezados de la solicitud. Esto se logra agregando un encabezado "Authorization" con el valor "Bearer [tu_clave_de_autenticación]". Por ejemplo: Authorization: Bearer tu_clave_de_autenticación e indicando a la version que vas utilizar 

# IMPORTANTE

**Recuerda que una vez que la clave de autenticación expire después de las 3 horas, deberás iniciar sesión nuevamente para obtener una nueva clave y continuar utilizando la simulación.**

# ENDPOINDS versiones 1.0.0-2.0.0

**GET**

Traer todas los reportes existentes

http://127.10.10.10:5100/usuario_reporte/

--------------------

# ENDPOINDS versiones 2.0.0

Entiendo que estás proporcionando instrucciones sobre cómo deben enviarse ciertos datos. Parece que estás describiendo las reglas y restricciones para cada uno de los campos de datos que se enviarán. Aquí está una interpretación clara de las instrucciones que has proporcionado:

1. `usu_id_reporte`: Este campo debe ser un número entero que identifica al usuario o al informe.
2. `nivel`: Este campo solo puede tener uno de los siguientes valores: "bajo", "medio" o "alto". Representa la categoría de nivel.
3. `categoria`: Este campo debe ser uno de los siguientes valores: "hardware" o "software". Indica si la categoría es hardware o software.
4. `fecha`: Este campo debe ser una fecha válida, siguiendo el formato de fecha.
5. `id_salon`: Este campo debe ser un número entero que identifica al salón.
6. `id_ordenador`: Este campo debe ser un número entero que identifica a la computadora u ordenador.
7. `usu_idTrainer`: Este campo debe ser un número entero que identifica al entrenador o instructor.

Para asegurarte de que los datos se envíen correctamente, asegúrate de que se sigan estas restricciones y reglas para cada campo mencionado.

---------------

**POST**

http://127.10.10.10:5100/usuario_reporte/crear

crear un nuevo reporte

```json
{
  "usu_id_reporte": 4,
  "usu_incidencia": {
    "nivel": "ato",
    "categoria": "hardware"
  },
  "usu_fecha": "2023-08-29",
  "usu_lugar_incidencia": {
    "id_salon": 4,
    "id_ordenador": 108
  },
  "usu_idTrainer": 4
}
```

--------------------------

**PUT**

http://127.10.10.10:5100/usuario_reporte/put

actualizar un reporte en especifico

```json
{
  "usu_id_reporte": 4,
  "usu_incidencia": {
    "nivel": "ato",
    "categoria": "hardware"
  },
  "usu_fecha": "2023-08-29",
  "usu_lugar_incidencia": {
    "id_salon": 4,
    "id_ordenador": 108
  },
  "usu_idTrainer": 4
}
```

------------

**DELETE**

http://127.10.10.10:5100/usuario_reporte/delete

eliminar un reporte existente

```json
{
  "usu_id_reporte": 4
}
```

