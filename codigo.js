array1  =  [ "María" ,  "José" ,  "Roberta" ]
array2  =  [ "Pedro" ,  "Marcelo" ,  array1 ,  "Josefina" ]

forRancio:
para  ( dejar  matriz  en  matriz2 ) {
    si ( matriz  ==  2 ) {
        para ( deje  matriz  de  matriz1 ) {
            documento . escribir ( matriz  +  "<br>" ) ;
            romper forRancio ;
        }
    }  más  {
        documento . escribir ( matriz2 [ matriz ]  +  "<br>" ) ;
    }
}