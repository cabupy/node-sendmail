# node-sendmail

Generamos un proyecto como ejemplo para enviar con nodemailer, correos desde nuestro propio servidor, usando el puerto 587.

## Clonar el repo

``` sh
$ git clone https://github.com/cabupy/node-sendmail
$ npm install
```

## Modulos requeridos
- standard: usamos para escribir nuestro codigo de manera estandard.
- nodemailer: es una libreria para el envio de correo electronico con node.js

## Variables de entorno

- VAMYAL_SMTP_HOST
- VAMYAL_SMTP_USER
- VAMYAL_SMTP_PASS

## Para ejecutar el server y probar el envio
``` sh
$ env VAMYAL_SMTP_HOST='host.dominio.com' VAMYAL_SMTP_USER='usuario@dominio.com' VAMYAL_SMTP_PASS='password' node server.js
```


## Licencia

MIT
