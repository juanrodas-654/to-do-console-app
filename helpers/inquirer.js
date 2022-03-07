const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

const questions = [{
    type: 'list',
    name: 'option',
    message: '¿Qué quieres hacer?',
    choices: [
        {
            value: '1',
            name:'1. Crear lista'
        },
        {
            value: '2',
            name: '2. Listar Tareas'
        },
        {
            value: '3',
            name:'3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name:'5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        },
        
        
    ]
}]

const inquirerMenu = async()=>{

    console.log('========================'.green);
    console.log('Seleccione una opción: '.green);
    console.log('========================\n'.green);

    const {option} = await inquirer.prompt(questions);
    return option;
}

const inquirerPause = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: 'Presione enter para continuar'
    }]

    await inquirer.prompt(question);
}

const leerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message, 
            validate( value ){
                if(value.length === 0) {
                    return 'Porfavor ingrese un valor ';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;


}


const deleteTasks = async(tareas = []) => {

    const choices = tareas.map((tarea,i) => {
        const idx = `${i+1}`
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.desc}`
        }
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(question);

    return id;

}


const confirm = async(message) =>{

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message

        }
    ];

    const {ok} = await inquirer.prompt(question);

    return ok;
}

module.exports = { 
    inquirerMenu,
    inquirerPause,
    leerInput,
    deleteTasks,
    confirm
}