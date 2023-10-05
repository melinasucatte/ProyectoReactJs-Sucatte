const productos = [
    {id: 1, name:'Alimento Seco Perro',category:'alimento', price: 12000, stock:200, description:'Alimento seco para Perro', imageUrl:'https://optimumpet.com.ar/wp-content/uploads/2019/06/Optimum-Bolsa-Perro-Adulto_.png'},
    {id: 2, name:'Alimento Seco Gato',category:'alimento', price: 500, stock:500, description:'Alimento Humedo para Gato', imageUrl:'https://optimumpet.com.ar/wp-content/uploads/2019/06/Optimum-Bolsa-Kitten_.png'},
    {id: 3, name:'Juguete',category:'accesorios', price: 200, stock:100, description:'Juguete para Mascotas', imageUrl:'https://http2.mlstatic.com/D_NQ_NP_796695-MLA50283933903_062022-O.webp'},
    {id: 4, name:'Correa y Collar',category:'accesorios', price: 1200, stock:400, description:'Correa y Collar para Mascotas', imageUrl:'https://d22fxaf9t8d39k.cloudfront.net/859e11bde697b3c0ec77c99ad014441f44223aefb3c44659a1d68b74722fe57016876.jpeg'},
    {id: 5, name:'Comedero y Bebedero',category:'accesorios', price: 3000, stock:150, description:'Comedero y Bebedero para Mascotas', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8s1_1lAYitOZUT3CCrvXG2F2VOZ0chfZXw&usqp=CAU'},
    {id: 6, name:'Piedritas',category:'higiene', price: 600, stock:300, description:'Piedritas para Gato', imageUrl:'https://http2.mlstatic.com/D_NQ_NP_681743-MLA48819055084_012022-O.webp'}
]
export const mFetch = () => {return new Promise((res) => {
        setTimeout(()=>{
            res(productos)
        },1000)
    })
}
 export const mFetchOne = (pid) => { return new Promise((res) => {
        setTimeout(()=>{
            res(productos.find(prod => prod.id === pid))
        },1000)
    })
}