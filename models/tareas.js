const Tarea = require("./tarea");


class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach(keys => {
            const tarea = this._listado[keys];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTarea(tarea = []){
        tarea.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, ind)=>{
            const idx = `${ind+1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red

            console.log(`${idx}. ${desc} :: ${estado}`);
        })
    }


    mostarPendientesCompletadas(completadas = true){
        let contador = 0;
        this.listadoArr.forEach((tarea)=>{ 
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;             
            if(completadas){
                if(completadoEn){
                    contador += 1;
                    console.log(`${contador}. ${desc} :: ${estado}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${contador}. ${desc} :: ${estado}`);
                }

            }     
        })

    }

    borrarTarea(id=''){

        if(this._listado[id]){
            delete this._listado[id];
        }

    }
}

module.exports = Tareas;