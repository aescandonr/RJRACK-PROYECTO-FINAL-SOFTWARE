class Calculadora{
    isExponente(base,exp){
        let res = 1
        for(let i=1;i<=exp;i++){
            res*=base
        }
        return res
    }   
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }


    PalabraMayus(cadena) {
        let palabras = [];
        let palabraactualizada = "";
        for (let i = 0; i < cadena.length; i++) {
            let caracter = cadena.charAt(i);
            if (caracter !== " ") {
                palabraactualizada += caracter;
            }
            else{
                if (palabraactualizada !== "") {
                palabras.push(palabraactualizada);
                }
                palabraactualizada = "";
            }
        }
            if (palabraactualizada !== "") {
                palabras.push(palabraactualizada);
        }

        let mayus = "";
        for (let i = 0; i < palabras.length; i++) {
            let palabra = palabras[i];
            let primerletra = palabra.charAt(0).toUpperCase();
            let palabraMayuscula = primerletra + palabra.substring(1) + " ";
            mayus += palabraMayuscula;
        }
        mayus = mayus.trim();

        return mayus;
    }
    base10_2(num){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        if(isNaN(numero)){
            alert("Valor ingresado no numerico")
        }else{
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
        $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        }
        
    }
    arrecad(arreglo,caracter){
        let cadena=""
        for (let i = 0; i < arreglo.length; i++) {
          cadena += arreglo[i]
            if (i < arreglo.length - 1) {
              cadena +=caracter
            }
        }
        return cadena
    }
    mayorelemento(arreglo){
        let mayorElemento = arreglo[0]
        for (let i = 1; i < arreglo.length; i++) {
          if (arreglo[i] > mayorElemento) {
            mayorElemento= arreglo[i];
        }
      }
        return mayorElemento
      }
obtenerMenor(arreglo) {
        let menor = arreglo[0];
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] < menor) {
            menor = arreglo[i]
            }
        }
        return menor;
        }
base10_16(){
        let $input=document.getElementById("result");
        let numero=parseInt($input.value)
        let resp=numero
        let base=16,resi,digito,base16=""
        if(isNaN(numero)){
            alert("Valor ingresado no numerico")
        }else{
        let letras16=["A","B","C","D","E","F"]
        while(numero>0){
            resi=numero%base
            if(resi>9){
                digito=letras16[resi-10]
            }else{
                digito=resi.toString()
            }
            base16= digito + base16
            numero=Math.trunc(numero/base)
        }
        $input.value=`[Base10=${resp}] ==> Base 16=${base16}`
    }
        
    }
base10_8(num){
        let $input=document.getElementById("result");
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,8)
        let base08=""
        if(isNaN(numero)){
            alert("Valor ingresado no es numerico")
        }else{
            for(let i=arreglo.length-1;i>=0;i--){
                base08=base08+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base 8=${base08}`
            } 
    }

base2_10(num){
        let $input=document.getElementById("result");
        let numero = parseInt($input.value)
        if(isNaN(numero)){
            alert("Valor ingresado no es numerico")
        }else{
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        $input.value=`[Base2=${numero}] ==> Base2=${base10}`
        }
    }
completarbin(numero,div){
        while(numero.length%div !== 0){
            numero='0'+numero
        }
        return numero
    }

base2_8(num) {
        let $input=document.getElementById("result");
        let numero=($input.value)
        let base8 = '';
        let num8=this.completarbin(numero,3)
        if(isNaN(numero)){
            alert("Valor ingresado no numerico")
        }else{
            for (let i = num8.length - 1; i >= 0; i -= 3) {
                let grupo = num8[i-2] + num8[i-1] + num8[i];
                let equivalenteOctal = 0;
                if (grupo[0] === '1') equivalenteOctal += 4;
                if (grupo[1] === '1') equivalenteOctal += 2;
                if (grupo[2] === '1') equivalenteOctal += 1;
                base8= equivalenteOctal.toString() + base8;
                $input.value=`[Base 2=${numero}] ==> Base 8=${base8}`
            }
            return base8; 
        }   
    }

base2_16(num){
        let $input=document.getElementById("result");
        let numero=parseFloat($input.value)
        let base10=parseInt(numero,2)
        let digitos=this.isDigitos(base10,16)
        let base16=""
        for(let i=digitos.length-1;i>=0;i--){
            base16+=digitos[i].toString(16).toUpperCase()
            $input.value=`[Base 2=${numero}] ==> Base 16=${base16}`
        }
        
    }

    BaseNaBaseN(){
        let $input=document.getElementById("result")
        let valor=$input.value
        if(isNaN(valor)){
            alert("Valor ingresado no numerico")
        }else{
            let base1=prompt("Ingresa Base del Valor")
            let base2=prompt("Ingrese Base a transformar")
        if(base1==10 && base2==2){
            result=this.base10_2(valor)
            $input.value=result
        }else if(base1==10 && base2==16){
            result=this.base10_16(valor)
            $input.value=result
        }else if(base1==10 && base2==8){
            result=this.base10_8(valor)
            $input.value=result
        }else if(base1==2 && base2==10){
            result=this.base2_10(valor)
            $input.value=result
        }else if(base1==2 && base2==16){
            result=this.base2_16(valor)
            $input.value=result
        }else if(base1==2 && base2==8){
            result=this.base2_8(valor)
            $input.value=result
        }else{
            alert("Error:Bases mal ingresadas")
        }}
    }
    
calcularBilletes() {
        let $input=document.getElementById("result")
        let cantidad=parseInt($input.value)
        cantidad = parseFloat(cantidad);
        const billetes = [50, 20, 10, 5, 1];
        let  contador = 0;
        if(isNaN(cantidad)||cantidad>99){
            alert("Error:Valor ingresado fuera del rango permitido(99) o no es un numerico")
        }else{
        for (var i = 0; i < billetes.length; i++) {
            let division = cantidad / billetes[i];
            let cantidadBilletes = Math.floor(division);
            cantidad -= cantidadBilletes * billetes[i];
            contador += cantidadBilletes;
            $input.value+=`\n Billetes de $ ${billetes[i]}: ${cantidadBilletes} \n`;
        }
    }
    }

convertirARomano() {
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        let resp = numero;
        if(isNaN(numero)||numero>99){
            alert("Error:Valor ingresado fuera del rango permitido(99) o no es un numerico")
        }else{
        const valoresRomanos = [
        { valor: 90, romano: 'XC' },
        { valor: 50, romano: 'L' },
        { valor: 40, romano: 'XL' },
        { valor: 10, romano: 'X' },
        { valor: 9, romano: 'IX' },
        { valor: 5, romano: 'V' },
        { valor: 4, romano: 'IV' },
        { valor: 1, romano: 'I' }
        ];

        let resultado = '';

    for (let i = 0; i < valoresRomanos.length; i++) {
        while (numero >= valoresRomanos[i].valor) {
            resultado += valoresRomanos[i].romano;
            numero -= valoresRomanos[i].valor;
        }
        }
        $input.value=`Numero ${resp} su equivalencia en romanos es ${resultado}`
    } 
    }

isBuscado(arr, buscar) {
    let pos = 0,
        enc = 0;
    while (pos < arr.length && enc == 0) {
        if (arr[pos] == buscar) {
        enc = 1;
        } else {
        pos += 1;
        }
    }
        if (enc == 1) {
            return pos;
        } else {
        return -1;
    }
    }

buscarPalabra(cadena,buscado){
        let palabras= this.splitMio(cadena," ");
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] == buscado) {
                return i;
            }
        }
        return -1;
    }

buscarCadena(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.buscarPalabra(cadena,buscado)
        if (pos >= 0){
            $input.value=`${cadena} - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`${cadena} - ${buscado} no se encuentra en la cadena`
        }
    }

splitMio(cadena, separador) {
    let arr = [];
    let palabra = "";
    for (let i = 0; i < cadena.length; i++) {
        let char = cadena.charAt(i);
        if (char !== separador) {
        palabra += char;
    } else {
        if (palabra !== "") {
            arr.push(palabra);
        }
        palabra = "";
    }
    }
    if (palabra !== "") {
        arr.push(palabra);
    }
    return arr;
    }

cadenaArreglo(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = this.splitMio(cadena,";")
    $input.value=`La cadena ${cadena} convertida en arreglo queda [${arreglo}]`
    }

sumardic(cadena){
    let suma = 0;
    for (let i = 0; i < cadena.length; i++) {
        let digito = parseInt(cadena[i]);
        suma += digito;
    }
    return suma
    }

digicade(){
    let $input=document.getElementById("result")
    let cadena=$input.value
    let resul=this.sumardic(cadena)
    if(isNaN(cadena)){
        alert("Error: Ingreso un valor no numerico")
    }else{
    $input.value=`La cadena es "${cadena}"==> Suma de los digitos=${resul}`
    }}

oracion() {
    let $input=document.getElementById("result");
    let cadena = $input.value;
    let oracionMayus = this.PalabraMayus(cadena);
    if(!isNaN(cadena)){
        alert("Error: No ingreso un texto")
    }else{
    if(oracionMayus){
    $input.value= `La cadena es <${cadena}> y la palabra oracion de la cadena es <${oracionMayus}>;`
    }}
}

buscaArreglo(){
    let $input = document.getElementById("result");
    let cadena = $input.value;
    let arreglo = this.splitMio(cadena, ";");
    let buscado = prompt("Ingrese dato a buscar");
    let pos = this.isBuscado(arreglo, buscado);
    if (pos >= 0) {
    $input.value =` [${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`;
    } else {
    $input.value = `[${arreglo}] - ${buscado} no se encuentra en el arreglo`;
    }
    }

arrecad(arreglo,caracter){
        let cadena=""
        for (let i = 0; i < arreglo.length; i++) {
            cadena += arreglo[i]
                if (i < arreglo.length - 1) {
                    cadena +=caracter
            }
        }
        return cadena
    }

arregloacadena(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.splitMio(cadena, ",")
        let caracter=";"
        let arre=[]
        let resultado=this.arrecad(arreglo,caracter)
        arre.push(resultado)
        $input.value=`Arreglo=[${arreglo}] ==> Cadena="${arre}"`
    }

mayorelemento(arreglo){
        let mayorElemento = arreglo[0]
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] > mayorElemento) {
            mayorElemento= arreglo[i];
        }
        }
        return mayorElemento
        }

elementomayor(){
        let $input=document.getElementById("result")
        let arreglo=this.splitMio($input.value,",")
        let arre=[], resul
        resul=this.mayorelemento(arreglo)
        arre.push(resul)
        $input.value=`Arreglo=${arreglo} ==> Elemento Mayor="${arre}"`;
    }

obtenerMenor(arreglo) {
        let menor = arreglo[0];
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] < menor) {
                menor = arreglo[i]
        }
            }
        return menor;
        }

menorelem(){
        let $input=document.getElementById("result")
        let arreglo=this.splitMio($input.value,",");
        let arre=[]
        let resul=this.obtenerMenor(arreglo)
        arre.push(resul)
        $input.value=`Arreglo=[${arreglo}] ==> Elemento Menor="${arre}"`
        }

eliminarElementos(arr,rvalor){

            let newArreglo = []
            for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== rvalor) {
            newArreglo.push(arr[i])
            }
            }
            return newArreglo;
        }
eliminar_elementos(){
            let $input = document.getElementById("result");
            let arreglo = this.splitMio($input.value, ",");
            let removerValor = prompt("Ingrese el valor a remover");
            let result = this.eliminarElementos(arreglo, removerValor);
            $input.value = "";
            for (let i = 0; i < result.length; i++) {
                $input.value += result[i];
                if (i < result.length - 1) {
            $input.value = $input.value + "," ;
            }
        }
        $input.value= "El arreglo de=["+arreglo+"] quitando el elemento:"+removerValor+" es="+"["+$input.value+"]";
    }
insertarValores(arr, ivalor) {
        if (arr.length === 0) {
            return [ivalor];
        }
        let i = arr.length - 1;
        while (i >= 0 && arr[i] > ivalor) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = ivalor;
        return arr;
        }
    
insertar_elementos() {
        let $input = document.getElementById("result");
        let arregloIngresado = this.splitMio($input.value, ",");
        let valorNuevo = parseInt(prompt("Ingrese el valor a insertar"));
        let result = this.insertarValores(arregloIngresado, valorNuevo);
        $input.value = "";
        if(isNaN(valorNuevo)){
            alert(`Error: El valor a ingresar no es numerico`)
        }else{
            for (let i = 0; i < result.length; i++) {
        $input.value += result[i];
        if (i < result.length - 1) {
        $input.value += ",";
        }
    }
    $input.value= "Al insertar el elemento:"+valorNuevo+" el arreglo nuevo es="+"["+$input.value+"]";}
}

contarCaracteres(cadena) {
        let comas = 0;
        let puntos = 0;
        let puntosComas = 0;
        let dosPuntos = 0;

        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === ',') {
            comas++;
        } else if (cadena[i] === '.') {
            puntos++;
        } else if (cadena[i] === ';') {
            puntosComas++;
        } else if (cadena[i] === ':') {
                dosPuntos++;
        }
    }
    return `${comas} "," ${puntos} "." ${puntosComas} ";" ${dosPuntos} ":"`;
}
cadenacaracteres(){
        let $input = document.getElementById("result");
        let entrada = $input.value;
        let resp = this.contarCaracteres(entrada);
        $input.value = "Los caracteres de la cadena: "+entrada+" son: "+resp;
}

limpiar(){
        document.getElementById("result").value = "";    
    }
    

}
let cal = new Calculadora()
