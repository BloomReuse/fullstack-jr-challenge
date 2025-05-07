# Desafío Fullstack Jr 2025


## Objetivo
Según la configuración de cada marca, deberás visualizar la sección de "preguntas frecuentes del vendedor" para una determinada marca.

## Contexto
En Bloom Reuse hacemos recommerce (resale+ecommerce) para distintas marcas. Cada app que creamos tiene una configuración de acorde a la marca, pero a su vez se maneja bajo una misma lógica de reventa. 
El flujo principal para hacer una venta a través de Bloom es el siguiente:

1. El vendedor debe crearse una cuenta.
2. En su cuenta, debe publicar un producto. En el proceso de publicación deberá subir fotos del producto y poner un precio de venta.
3. Su producto puede ser aprobada, rechazada o le podemos pedir cambios para aprobar la publicación.
4. Una vez que el producto es aprobado se publica en la página para comprar.
5. Cuando se realiza la compra del producto, el vendedor deberá ingresar a su cuenta y llenar un formulario. El formulario incluye una pregunta sobre cómo quiere enviar el producto y los datos para recibir el pago.
6. Una vez que el vendedor envía el producto y es recibido por el comprador, si el comprador confirma la recepción del producto o pasan  días desde su recepción, se procede a hacer el pago al vendedor.
7. En caso que el comprador quiera una devolución, se envía el producto devuelta al vendedor y no se realiza el pago.

Cada marca puede variar según los siguientes elementos:
1. Forma de pago al vendedor: un vendedor puede recibir el 100% del pago en un cupón de descuento para utilizar en el ecommerce original de la marca **y/o** un 80% a través de transferencia bancaria. Hay marcas que dan una de las dos opciones y otras que dan ambas.
2. Logística de envío: un vendedor puede pedir una recolección a domicilio del producto **y/o** puede llevar el producto a un punto Blue Express. Hay marcas que dan una de las dos opciones y otras que dan ambas.
3. Cobros adicionales: Hay marcas que el producto pasa primero por un taller para revisar su estado antes que llegue al comprador. En este paso, la marca puede decidir si siempre cobrar un fijo por limpieza o solo en el caso que la limpieza sea requerida. Hay marcas que nunca harán un cobro adicional.

## Desafío
Deberás hacer una app que muestre la sección de preguntas frecuentes del vendedor según cada configuración de la marca. 

Dentro de este repo encontrarás en una carpeta el código de frontend y en otra el de backend. El frontend está hecho en React + Next, acá deberás modificar el código para ser capaz de seleccionar una marca y mostrar cómo se vería su sección de preguntas frecuentes. El backend está hecho con Express, tiene la data de cada marca más dos endpoints: listar las marcas y ver la configuración de cada marca.

Puedes modificar todos los archivos como tu lo desees. Lo importante es que hagas una "versión 0.1" con una solución funcional y después explicarnos en un video más detalles sobre tu solución. Considera que no hay respuestas correctas, nos interesa tu forma de abarcar el problema y el análisis que haces después.


## Especificaciones

Deberás poner la respuesta a las siguientes preguntas frecuentes:

1. ¿Cómo puedo publicar un producto para la venta?
    - Modalidad: Única para todas las marcas.
    - Respuesta: ¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.
  
1. ¿Cómo envío mi artículo después de que alguien lo compra?
   - Modalidad: La respuesta varía según cada marca.
   - Respuesta: _Depende de logística comentadas anteriormente._

1. ¿Cómo y cuándo recibo el pago?
   - Modalidad: La respuesta varía según cada marca.
   - Respuesta: _Depende de cuál opción de pago está habilitada._
_
1. ¿Hay cobros adicionales por vender mi producto por acá?
  - Modalidad: La respuesta varía según cada marca.
  - Respuesta: _Depende de la opción de cobros adicionales que esté habilitada._

1. Política de uso de cupones
 - Modalidad: La pregunta únicamente se muestra para las marcas que tengan habilitados los cupones como método de pago. La respuesta es igual para todas las marcas.
 - Respuesta: Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:
          a. Se pueden utilizar únicamente para compras en el sitio web `[URL de la marca]`.
          b. Tiene un tiempo máximo para ser utilizado de 6 meses.
          a. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.


Recomendamos revisar las preguntas frecuentes de:
1. [Karyn Coo](https://karyncoo.bloomreuse.com/help/faq?view=seller): reventa de ropa, el producto se envía directamente al comprador. El vendedor puede recibir el pago en un cupón de descuento (créditos) o por transferencia bancaria. Puede enviar el producto por retiro a domicilio o por Blue Express.
2. [Andesgear](https://circular.andesgear.cl/help/faq?view=seller): reventa outdoor, el producto se envía directamente al comprador. El vendedor únicamente puede recibir el pago por transferencia bancaria. Puede enviar el producto por retiro a domicilio o por Blue Express.
3. [Milú Rugs](https://milu.bloomreuse.com/help/faq?view=seller): reventa de alfombras, el producto **siempre** pasa por un lugar de lavado y sanitizado. Se descuenta al vendedor un monto por el lavado. Solo existe la opción de retiro a domicilio como forma de envío, no se puede enviar el producto por Blue express.
4. [Kokoro](https://vintage.kokoro.cl/help/faq?view=seller): reventa de ropa, donde el producto pasa por un taller. En caso que no esté limpio, se descuenta el costo de la tintorería. Puede enviar el producto por retiro a domicilio o por Blue Express.

## Entregables
### 1. Plazos
Tienes 7 días para entregar el desafío. 

### 2. Código
1. Haz un fork de este repositorio.
2. Escribe tu solución y súbela a un repo en github. Agrega a @fvr1 y a @ignaciomansuy
3. Envía el link con tu solución a florencia@bloomreuse.com y ignacio@bloomreuse.com

Puedes agregar cualquier librería, modificar cualquier archivo que estimes conveniente y agregar o crear carpetas/archivos/datos como gustes.

### 3. Video
Crea un video de máximo 7 minutos explicando tu solución y respondiendo las siguientes preguntas:
1. ¿Cuáles son los archivos y carpetas principales que creaste? ¿Cuál es la responsabilidad/objetivo que cumplen cada uno de ellos?
2. ¿Qué te gustó de tu solución? ¿Qué te hubiese gustado agregar/cambiar?
3. ¿Qué mejoras harías para que sea más escalable? ¿Cuáles son los cuellos de botellas que le ves a la solución?

## Criterios de evaluación
Nosotros estaremos midiendo lo siguiente:
1. Cumplimiento de la funcionalidad; para cada una de las marcas, la información que se muestra es la correcta. No importa que se vea "bonito".
2. Entender las responsabilidades de cada uno de los componentes/archivos/funciones y cómo interactúan entre ellos.
3. Análisis sobre los pros y contras de la solución. No buscamos que la ejecución de la solución sea óptima.
