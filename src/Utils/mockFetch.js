let products = [
    {  
    id :"1",
    category:"Notebook",
    name:"Notebook Asus Rog Strix G512lv-es74 Gaming 16gb Ram 512gb Ssd Intel Core I7 Nvidia® Geforce Rtx 2060 6gb Windows 10 Home 15.6 Full Hd",
    img:"/public/assets/img/asus-gamer.webp",
    price:999999,
    stock:15,
    },
    {
        id:"2",
        category:"Notebook",
        name:"Notebook Dell Inspiron 3511 black 15.6, Intel Core I7 1165G7 8GB de RAM 256GB SSD",
        img:"/public/assets/img/NotebookDellInspiro.webp",
        price:370900,
        stock:20,
    },
    {
        id:"3",
        category:"Notebook",
        name:"Notebook Asus Gamer Tuf 15.6 F15 Intel Core I7 16gb 512gb Ssd Rtx 3060 6gb Negro ",
        img:"/public/assets/img/Notebook.AsusGamer.webp",
        price:849380,
        stock:10,
    },
    {
        id:"4",
        category:"Notebook",
        name:"Notebook gamer Lenovo Legion 5  Gen 6 Ryzen 7 Rtx 3050 512gb Ssd 8gb 144hz ",
        img:"/public/assets/img/lenovo.gamer.webp",
        price:948090,
        stock:10,
    },
    {
        id:"5",
        category:"Notebook",
        name:"Notebook Asus Gamer Intel Core I7 15,6 12gb + 480 Gb Ssd Gamer ",
        img:"/public/assets/img/Asus.gamer.webp",
        price:388900,
        stock:15,
    },{
        id:"6",
        category:"KitGamer",
        name:"Kit de teclado,mouse y auriculales gamer + mouse pad",
        img:"/public/assets/img/kit-gamer.webp",
        price:10999,
        stock:15,
    },{
        id:"7",
        category:"KitGamer",
        name:"Kit Gamer Noga Teclado Mouse Auricular Pad Combo 4en1 Nkb403",
        img:"/public/assets/img/kitGamer2.webp",
        price:8099,
        stock:20,
    },{
        id:"8",
        category:"KitGamer",
        name:" Kit de teclado y mouse gamer Redragon S101-BA Español de color negro",
        img:"/public/assets/img/kitGamer3.webp",
        price:18699,
        stock:15,
    },{
        id:"9",
        category:"KitGamer",
        name:"Kit de teclado,mouse y auriculales gamer + mouse pad",
        img:"/public/assets/img/kitGamer4.webp",
        price:26999,
        stock:10,
    }

];

export let mockFetch = (id) =>{
    return new Promise((resolve,rejact)=>{
        setTimeout(()=>{
            resolve(id ? products.find(prod=> prod.id === id): products)
        },2000)
    })
}