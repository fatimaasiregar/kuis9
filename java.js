function login(){
    let username=prompt("masukkan username anda");
    let name="patimah";
    let password=prompt("masukkan password anda");
    if(username=="patimah"){
        if(password==='12345'){
            alert("selamat datang");
            biodata();
        }
        else{
            alert("password anda salah");
        }
    }
    else{
        document.write("<h1> username anda salah</h1");

    }
 
}
function biodata(){
    let nama= prompt("masukkan nama anda");
    let umur=prompt("masukkan umur anda");
    let jurusa=prompt("masukkan jurusan anda");

    document.write("nama anda "+nama);
    document.write("umur anda"+umur);
    document.write("jurusan anda"+jurusan);
}
let data=[];
function tambah(){
    let tambah_data=prompt("masukkan data anda");
    if(tambah_data!=null){
        data.push(tambah_data);
        console.log("data berhasil ditambahkan");
    }
    else{
        console.log("data tidak berhasil ditambahkan");
    }
}
function tampilData(){
    console.log(data);
    

}
