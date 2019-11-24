# Desarrollo

## Instalar dependencias
Este proyecto está desarrollado en javascript sin ningún tipo de dependecia.

## Arrancar el proyecto
Puedes clonar este repositorio y arrancar el proyecto con open in Live Server

## Especificaciones
- El ejercicio se realizara en JS sin ayuda de frameworks o librerías externas
- La principal prioridad es que se puedan completar las tareas o acciones pedidas
- La siguiente prioridad, una vez resuelta la principal, es acercarse lo más posible - a las guías gráficas ofrecidas
- La lista de tareas se tiene que almacenar en el Local Storage del navegador, de manera que si recargamos la página no perdamos la información
- Tiene que aparecer la fecha actual
- Todo se desarrolla en la misma página, solo hay 1.

## Tareas:
- Completar una tarea: Hacer clic en una tarea, o en su checkbox, marca la tarea como completada y la coloca al final de la lista
- Desmarcar una tarea completada: Hacer clic en una tarea completada, o en su checkbox, marca la tarea como pendiente y la coloca al principio de la lista
- Añadir una tarea nueva: muestra una capa donde podremos rellenar el nombre de la tarea y añadirla. Aparecerá en primer lugar.

## Orden lógico y pasos que he seguido:
1. Hacer el esqueleto de HTML y verificar que todo esté bien enlazado
2. Tenemos un array vacío que se va a rellenar con las tareas
3. El primer paso de interacció sería añadir un listener al botón de crear tarea.
4. Al hacer click, aparece una modal que contiene
  - Nueva tarea
  - Input
  - Botón de añadir
  - El fondo de la app se le aplica una opacity de 0.5
5. Al apretar el botón de AÑADIR 
  - se ejecuta una función que recoge el input.value y lo guardo en una constante
  - en el array de tareas, hago push de la tarea
  - con un ```map()``` me recorro el array y por cada tarea, añado un checkbox con un listener de onChange
6. Cada checkbox debería tener un listener que ejecute una función cuyo objetivo es:
  - Añadir un style o una clase desde el js para que se tache la tarea y se ponga en gris
  - Sólo se tacha si está checked. Si no está checked, se le quita ese estilo
7. Cada vez que se tacha una tarea, hacer un ```pop()``` de esa tarea al array de tareas y con ```push()```meto esas tareas en el array de tareas terminadas.
Cada elemento del array será un ```<li>```que estará dentro de su propio ```<ul>```para que se posicionen una lista debajo de la otra
8. Cada checkbox en la lista de tareas terminadas, cambia de estilo

