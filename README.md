# Quick SMS

Servicio para el envío de SMS por API.

## Requisitos

1. Node.js v20.12 o superior

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/POWRFULCOW89/quick_sms
```

2. Instalar las dependencias

```bash
npm i
```

3. Configurar el entorno
```
cd .env.example .env
```

4. Iniciar el servidor
```bash
node --env-file=.env index.js
```

## Uso 
Se define un endpoint (`POST /sms`), que recibe un payload JSON con un campo `message`, que contiene el mensaje a enviar. El mensaje debe estar definido y ser menor o igual a 30 caracteres. Usando el paquete de `express-validator` es posible sanitizar la entrada para evitar ataques de inyección. Además, desde Node.js 20 es posible cargar archivos `.env` directamente, omitiendo el uso de `dotenv`. Además, `body-parser` se incluye en `express` a partir de la versión *4.16*, por lo que también es posible omitir esta dependencia.

Para enviar SMS se utiliza una cuenta de Twilio. Solamente es posible enviar mensajes a números verificados dentro de la misma cuenta de Twilio.