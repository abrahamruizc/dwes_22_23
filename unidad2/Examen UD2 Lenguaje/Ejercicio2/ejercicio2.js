function ver(){
    let cadena = document.getElementById("texto").value;
    let array = cadena.split(" ");
    console.log(cadena);
    console.log(array);
    

    document.write("numero de palabras: " + array.length + " Primera palabra: " + array[0] + " Ultima palabra: " + array[array.length -1]);

    let cadenaaux="";
    for(let i = cadena.length-1; i > -1; i--){
        cadenaaux += cadena[i];
    }
    console.log(cadenaaux);
    let alreves="";
    
    for(let e = 0; e < cadenaaux.length; e++){
        if (cadenaaux[e] != " "){
            alreves += cadenaaux[e];
        }
    }
    alreves.toLowerCase;
    console.log(alreves);

    let cadenasinespacio="";
    

    for(let s = 0; s< cadena.length; s++){
        if (cadena[s] != " "){
            cadenasinespacio += cadena[s];
        }
    }
    cadenasinespacio.toLowerCase;
    console.log(cadenasinespacio);
    
    
    if(cadenasinespacio == alreves){
        document.write(" La frase es palíndroma ");
    } else {
        document.write(" la frase no es palíndroma ")
    }

    let arraycuenta= Array(array.length);
    for(let x =0; x< array.length; x++){
        arraycuenta[x] = array[x].length;
    }
    arraycuenta.sort();
    document.write("palabras ordenadas de mayor a menor: ");
    for(let c =0; c< arraycuenta.length; c++){
        for(let y =0; y< array.length; y++){
            if (array[y].length == arraycuenta[c]){
                document.write(" " +array[y] + " ");
                console.log(array[y]);
            }
        }
    }
    
    console.log(arraycuenta);

    
}






