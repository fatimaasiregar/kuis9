let nama;
let umur;
let jurusan;
let ttl;

function Nama(){
    nama = prompt("Nama Anda :");
    if(nama !== null){
        Umur();
    }
    else{
        Nama();
       
    }  
} 
function Umur(){
    umur = prompt("Umur Anda :");
    if(umur !== null){
        Jurusan();
        }
    else{
        Umur();
    }
}
function Jurusan(){
    jurusan = prompt("Jurusan anda :");
    if(jurusan !== null){
        Ttl();
      }
    else{
        Jurusan();
    }
}

function Ttl(){
    ttl = prompt("Ttl anda :");
    if(ttl !== null){
        document.writeln("<style>");
    document.writeln("h1 { color: #DA0C81; text-align: center }");
    document.writeln("p { color: #E41F7B; font-size: 20px; margin-left: 20px;}");
    document.writeln("</style>")

    document.writeln("<fieldset><h1>BIODATA"+"</h1>\n");
    document.writeln("<p>Nama Anda : " + nama + "<p>\n");
    document.writeln(" <p>Umur Anda : " + umur +"</p>");
    document.writeln("<p>Jurusan anda : " + jurusan + "</p>");
    document.writeln("<p>Ttl Anda : " +ttl +"</p></fieldset>")
    }
    else{
    }
}