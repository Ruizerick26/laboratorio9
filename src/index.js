const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.send("Lading Page --- Grupo N°2")
})

app.get('/informacion-grupo',(req,res)=>{
    res.send(`<h1>Grupos de Trabajo N°2</h1>
        <p><font size="5">Desarrollo de aplicaciones WEB</font></p>
        <P><font size="4">Integrado por:</font></P>
        <ul>
            <li>Hidalgo Paul</li>
            <li>Jimenez Martinez</li>
            <li>Morales Gilmar</li>
            <li>Novillo Ismael</li>
            <li>Paredes Cristian</li>
            <li>Ruiz Erick</li>
            <li>Simba Cristian</li>
        </ul>
    `)
})

app.get('/productos',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
            <p><font size="5">Los mejores productos a mejores precios</font></p>
            <P><font size="4">En nuestro Stock poseemos los siguientes productos:</font></P>    
            <ul>
                <li>Laptop HP <br><img src="https://digitalbox.com.ec/5524/laptop-notebook-hp-250-g7-intel-core-i3-ram-4gb-disco-hdd-1tb-1560-win-10.jpg" width="100px" heigth="100px">
                <br> Color: Gris <br> Procesador: Intel <br> Ram: 8gb <br> Disco: 2Tb <br> Precio: $1000</li>

                <li>Computadora Escritorio <br> <img src="https://worldcomputers.com.ec/wp-content/uploads/2022/03/Computador-de-escritiorio.webp" width="100px" heigth="100px">
                <br> Color: Negro <br> Procesador: AMD <br> Ram: 16gb <br> Disco: 2Tb<br> Precio: $1200</li>

                <li>MACBOOK <br> <img src="https://http2.mlstatic.com/D_Q_NP_953866-MLA50968332322_082022-O.webp" width="100px" heigth="100px">
                <br> Color: blanco <br> Procesador: Intel <br> Ram: 16gb <br> Disco: 1Tb<br> Precio: $2000</li>

                <li>Computadora Oficina<br> <img src="https://electronicapanamericana.com/wp-content/uploads/22-DF1519LA.jpg" width="100px" heigth="100px">
                <br> Color: Negro <br> Procesador: Intel <br> Ram: 8gb <br> Disco: 1Tb<br> Precio: $1100</li>

                <li>Computadora Gamer <br> <img src="https://m.media-amazon.com/images/I/71ECtFcFxlL.jpg" width="100px" heigth="100px">
                <br> Color: Rojo <br> Procesador: AMD <br> Ram: 32gb <br> Disco: 2Tb<br> Precio: $1500</li>
            </ul>

    `)
})




app.use((req,res)=>{
    res.send("404 - Not Found")     
  })
app.listen(3000);
console.log("Servidor en puerto 3000")