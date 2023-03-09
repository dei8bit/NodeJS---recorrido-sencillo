/*
Estetica de comentarios:
//# TITULO: 
    //.SubTitulo_1
        //$ Subtitulo_2
//* Comentario importante!.
//+ comentario explayado...
//- Comentario sintetico.
/// comentario personal.♥


//* EJECUCION DE NODE EN TERMINAL--> "node" + "file_name"; y se ejecutara.
function saludar(nombre){return(`Hola ${nombre} como estas?`);}
console.log(saludar("pepe"));
//* IMPORTACION DE MODULOS:
const matematicas = require("./operaciones.js");


//. como usar la importacion:
    console.log(matematicas.suma(8,2));
    console.log(matematicas.resta(8,2));
    console.log(matematicas.division(8,2));
    console.log(matematicas.multiplicacion(8,2));

//. sintaxis de  desestructuracion: 
    /// Para importar solo algunas funcionalidades de un modulo.
    const { potencia ,raiz } = require("./operaciones.js");
    console.log(potencia(2,4));
    console.log(raiz(100));

//# MODULO CONSOLE:
    console.log('mensaje mostrado con log');
    console.warn('mensaje mostrado con warn');
    console.error('mensaje mostrado con error');
    console.log(new Error('mensaje mostrado con New Error')); ///Como se puede observar sete tipo de error es mucho mas descriptivo



//# MODULO PROCESS:
    //. process:
        console.log(process); /// nos mostrara info sobre el proceso de ejecucion de node

    //. env:
        console.log(process.env); ///  nos mostrara info sobre el entorno.

    //. argv:
    /// nos mostrara info sobre los argumentos con los que esta trabajando node
    console.log(process.argv); 

    //- [node, app.js]   
    //-   0      1       
    //+Cuando nosotros ejecutamos node app.js estamos usando dos palabras, cada string separado seria un argumento dentro de la terminal. ejemplo: De esta forma nosotros podemos usar las propiedades de arreglos para trabajar con estos argumentos.
    for (let i = 0; i < process.argv.length; i++) {console.log(process.argv[i]);} 

    //. memoryUssage:
    //+ Nos muestra informacion sobre el uso de memoria.
    console.log(process.memoryUsage()); 

//#  MODULO OS: Contiene diferentes funcionalidades sobre el Sistema operativo
    const sistema = require('os');
    console.log(sistema.type());     //+ Muestra el tipo de sistema operativo
    console.log(sistema.homedir());  //+ Muestra el directorio principal .
    console.log(sistema.uptime());   //+ Muestra  hace cuanto tiempo esta ejecutandose el sistema.
    console.log(sistema.userInfo()); //+ Muestra la informacion del usuario.

//# MODULO TIMERS: Contiene funciones que se pueden ejecutar despues de un periodo de tiempo.

    //. setTimeout:
    //+ permite ejecutar codigo despues de un numero especifico de milisegundos 1s = 1000ms
    function materia (tematica){console.log(`Estoy aprendiendo ${tematica}`)}
    setTimeout(materia,1500,"algebra" );  

    function suma_tres (n1,n2,n3){console.log(`La suma resulto en: ${n1+n2+n3}`)}
    setTimeout(suma_tres,2000, 2,3,4); 

    // setImmediate: se ejecuta inmediatamente despues de que se haya ejecutado el codigo sincrono  
    function mensaje(text) { console.log(text)}

    //* lo ultimo que se ejecutara sera lo asincrono.

    console.log("antes de setImmediate"); //-sincrono
    setImmediate(mensaje , "Soy  una ejecucion asincrona"); //- asincrono
    console.log("despues de setImmediate"); //-sincrono



    //. setInterval:
    //+ Ejecutara codigo un numero infinito de veces cada un periodo especifico en milisegundos.
    function mensajes(text1,text2) { console.log(text1 + text2)}
    setInterval(mensajes,1000,"hola","chau");
    //* tenemos que interrumpirlo manualmente con algun comando como "CTRL + C"



//# MODULO FS (FileSystem): 
    //+ permite leer-modificar-copiar-eliminar-cambiar el nombre de archivos y carpetas
    //* Los metodos de este modulo son Asincronos por defecto, aunque la propiedad "sync" modifica esto.
    const modulo_fs = require('fs');
    

    //. ASINCRONAMENTE:
    //+como el metodo que usamos es asincrono, se debe definir el flujo en caso de un error.

    
    //$ readFile: Leer el archivo
    modulo_fs.readFile('index.html','utf-8',(err,contenido)=>{
        if (err){console.log(err)}
        else{console.log(contenido)}
    } );

    //* diferentes formas de devolver errores:
    //- sin throw--> no se interrumple la ejecucion.
    modulo_fs.readFile('inde.html','utf-8',(err,contenido)=>{ //+ El nombre del archivo esta intencionalmente mal escrito
        if (err){console.log(err)}
        else{console.log(contenido)}
        console.log("mensaje...") //- se muestra al final
    } );

    //- con throw--> se interrumple la ejecucion.
    modulo_fs.readFile('inde.html','utf-8',(err,contenido)=>{ //+ El nombre del archivo esta intencionalmente mal escrito
        if (err){throw(err)} console.log(contenido);
        console.log("mensaje...") //- no se muestra al final.
    } );


    //$ rename: cambiar el nombre del archivo.
    //* sintaxis: module_name.rename('ruta.formato','nombre.formato', (function)=>{codigo}; !tambien se puede cambiar el formato!

    modulo_fs.rename('index.html','main.html', (err)=>{
    if(err){throw err;}
    console.log("cambio exitoso")
    });

    modulo_fs.rename('main.html','index.html', (err)=>{
    if(err){throw err;}
    console.log("cambio exitoso")
    });

    //$ appendFile: crear archivo o agregar contenido al final del mismo.
    //* si el archivo no existe, lo creara

    /// agregar contenido al  final de un archivo existente.
    modulo_fs.appendFile('index.html','<h1>titulo agregado</h1>', (err)=>{
        if (err) {throw err;}
        console.log('Archivo actualizado...') ///esto agregaria la etiqueta al final del hatml
    });

    /// crear un archivo con cierto contenido. 
    modulo_fs.appendFile('archivo_nuevo.txt','Archivo nuevo desde 0', (err)=>{
        if (err) {throw err;}
        console.log('Archivo creado...') ///esto crearia un arhivo con el contenido indicado
    });


    //$  writeFile: reemplazar el contenido del archivo.
    //* si el archivo no existe, lo creara
    //-Reemplazar:
    modulo_fs.writeFile('archivo_viejo.txt','Contenido nuevo',(err)=>{
    if (err) {throw err}
    console.log("Contenido reemplazado");
    });

    //-Crear
    modulo_fs.writeFile('archivo_nuevo.txt','Contenido nuevo',(err)=>{
    if (err) {throw err}
    console.log("Archivo creado y contenido cargado");
    });
    


    

    //$ unlink: borrar archivo.
    modulo_fs.unlink('archivo_borrable.css',(err)=>{
        if(err){throw err}
        console.log("archivo eliminado..");
    });

    const modulo_fs = require('fs'); 
    //. SINCRONAMENTE:
    //+como el metodo que usamos es sincrono, no es necesario definir el flujo en caso de un error.
        //$readFilySync:
        const contenido =  modulo_fs.readFileSync('index.html','utf-8');
        console.log(contenido);

        //$renameSync:
        modulo_fs.renameSync('index.html','main.html');
        modulo_fs.renameSync('main.html','index.html');
        
        //$appendFileSync:
        modulo_fs.appendFileSync('index_old.html','<p>final text</p>');
        modulo_fs.appendFileSync('index_new.html','Contenido exclusivamente nuevo');
        
        
        //$writeFileSync:
        modulo_fs.writeFileSync('index_old.html','Contenido completamente nuevo');
        modulo_fs.writeFileSync('new_file.txt','Nuevo contenido en nuevo Archivo');
        
        //$unlinkSync:
        modulo_fs.unlinkSync('index_old.html');
*/