
const colors = require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, inquirerPause, leerInput, deleteTasks, confirm } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');




console.clear();

const main = async () =>{
    let opt;
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTarea(tareasDB);

    }


    do {
        opt = await inquirerMenu();   //Imprime el menu 
        console.log(`Opción: ${opt}\n`);

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);  //llama a la clase tareas y lo mete en crearTarea
                
            break;
        
            case '2':
               tareas.listadoCompleto();
            break;
            case '3':
                tareas.mostarPendientesCompletadas(true);
            break;
            case '4':
                tareas.mostarPendientesCompletadas(false);
            break;
            case '6':
                const id = await deleteTasks(tareas.listadoArr);

                const ok = confirm(tareas.listadoArr);
                
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada');
                }
                break;
        }

       guardarDB(tareas.listadoArr);

   
        await inquirerPause(); // Espera la respuesta del usuario, al presionar enter continua

    } while (opt !== '0')
    
}

main();


/*
const tarea = new Tarea('Hola');
       console.log(tarea);

       const tareas = new Tareas();
       console.log(tareas)

       tareas._listado[tarea.id] = tarea;
       console.log(tare
*/