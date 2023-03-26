class Calculadora{
    isBuscado(arr,buscar){
        let pos=0,enc=0
        //[2,4,6]  4
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
            enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
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
    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        console.log($input)
        console.log(cadena)
        console.log(arreglo)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
        
    }   
    isPalabras(frase){
        let cp=1
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            
            if (frase[pos]==' ' && frase[pos+1]!=' ' ){
                cp+=1
            }
        }
        return cp
    }
    contarPalabras(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cp = this.isPalabras(cadena)
        $input.value=`${cadena} tiene ${cp} palabras`
   
    }
     isCopiarCaracteres(frase,car){
        let copia=""
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if (frase[pos]==car ){
                copia = copia + frase[pos]
            }
        }
        return copia
    }
    copiarCaracteres(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter = prompt("Ingrese caracter")
        let cc = this.isCopiarCaracteres(cadena,caracter)
        $input.value=`${cadena} - ${cc} `
   
    }
      isDivisor(arr,divisor){
        let divisores=[],pos2=0
        for (let pos=0;pos<arr.length;pos++){
            let num=parseInt(arr[pos])
            if (num%divisor==0){
                divisores.push(num)
                //divisores[pos2]=arr[pos]
                //pos2+=1
            }

        }
        return divisores
    }
    copiarDivisor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        //console.log($input)
        //console.log(cadena)
        //console.log(arreglo)["ana","jose","dan"] jose
        let divisor=parseInt(prompt("Ingrese Divisor"))
        let divisores = this.isDivisor(arreglo,divisor)
        $input.value=`[${arreglo}] - ${divisores}`
        
        
    }
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
    base10_2(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
        $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        
    }
    base10_16(){
        let $input=document.getElementById("result");
        let numero=parseInt($input.value)
        let resp=numero
        let base=16,resi,digito,base16=""
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

    base2_10(){
        let $input=document.getElementById("result");
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        $input.value=`[Base2=${numero}] ==> Base 10=${base10}`
        return base10
    }

    base2_8() {
        let $input=document.getElementById("result");
        let numero=parseInt($input.value)
            while (numero.length % 3 !== 0) {
              numero = '0' + numero;
            }
            let base8 = '';
            for (let i = numero.length - 1; i >= 0; i -= 3) {
              let grupo = numero[i-2] + numero[i-1] + numero[i];
              let equivalenteOctal = 0;
              if (grupo[0] === '1') equivalenteOctal += 4;
              if (grupo[1] === '1') equivalenteOctal += 2;
              if (grupo[2] === '1') equivalenteOctal += 1;
              base8= equivalenteOctal.toString() + base8;
              $input.value=`[Base 2=${numero}] ==> Base 8=${base8}`
            }
              return base8;     
    }
    quitaEspacio(cadena){
        let sinEspacio=""
        cadena = cadena.trim()
        for(let i=0;i<cadena.length;i++){
            if (cadena[i]!==' '){
                sinEspacio+=cadena[i]
            }
        }
        return sinEspacio
    }
    calcularBilletes() {
        let $input=document.getElementById("result")
        let cantidad=parseInt($input.value)
        cantidad = parseFloat(cantidad);
        const billetes = [50, 20, 10, 5, 1];
        let  contador = 0;
        for (var i = 0; i < billetes.length; i++) {
            let division = cantidad / billetes[i];
            let cantidadBilletes = Math.floor(division);
            cantidad -= cantidadBilletes * billetes[i];
            contador += cantidadBilletes;
            $input.value+=`\n Billetes de $ ${billetes[i]}: ${cantidadBilletes} \n`;
        }
        
    }
    convertirARomano() {
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        let resp = numero;
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
    palindroma(){
        let $input=document.getElementById("result")
        let cadena = $input.value // anitalavala  t  i  n  a
        //                           012345678910 11 12 13 14
        // 
        let cadenaPal=this.quitaEspacio(cadena).toLowerCase()                       
        let pi=0,pf=cadenaPal.length-1,pal=1
        while (pi <= pf && pal==1){
            if (cadenaPal[pi]==cadenaPal[pf]){
                pi++
                pf--
            }
            else{
                pal=0
            }
        }
        if (pal==1){
            $input.value=`[${cadena}] Es Palindroma`
        }else{
            $input.value=`[${cadena}] No es Palindroma`
        }
    }
    mayorelemento(){
        let $input=document.getElementById("result");
        let arreglo=($input.value)
        let resp=[]
        for(let i=0;i<arreglo.length;i++){
            if(arreglo[i]>arreglo[i-1]){
                resp.push(arreglo(i))
            }
        }



    }
}
let cal = new Calculadora()
// console.log(cal.isExponente(5,3))
// console.log(cal.isDigitos(123,10))
// console.log(cal.isDigitos(25,2))
//console.log(cal.quitaEspacio(" anita  lava la tina"))
