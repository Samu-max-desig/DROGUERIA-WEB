import arrurru from "../assets/images/products/arrurru.png";
import colgate from "../assets/images/products/colgate.png";
import dove from "../assets/images/products/dove.png";
import loratadina from "../assets/images/products/loratadina-mk.png";
import neurobion from "../assets/images/products/neurobion.png";
import huggies from "../assets/images/products/huggies.png";
import allegra from "../assets/images/products/allegra-pediatrico.png";
import legrip from "../assets/images/products/legrip-plus.png";
import helado from "../assets/images/products/helado-maracuya.png";
import cocacola from "../assets/images/products/cocacola.png";

const products = [
    {
        name: "Arrurrú Shampoo",
        price: "$14.000",
        category: "Bebés",
        image: arrurru,
        discount: 10,
        available: true,
        featured: true,
        type: "Líquido",
        prescription: "No",
        presentation: "Frasco",
        size: "220 ML",
        form: "Shampoo",
        invima: "NSOC5741714CO",
        manufacturer: "Belleza Express"
    },
    {
        name: "Colgate Triple Acción",
        price: "$8.000",
        category: "Cuidado personal",
        image: colgate,
        discount: 15,
        available: true,
        featured: true,
        type: "Kit de higiene oral",
        prescription: "No",
        presentation: "Caja",
        size: "X 2 UNDS",
        form: "Kit",
        flavor: "Triple Acción",
        invima: "NSOC7233616CO",
        manufacturer: "Colgate"
    },
    {
        name: "Dove Roll On",
        price: "$16.000",
        category: "Cuidado personal",
        image: dove,
        discount: 0,
        available: false,
        featured: false,
        type: "Desodorante",
        prescription: "No",
        presentation: "Spray",
        size: "2 X 100ML",
        form: "Desodorante",
        invima: "NSOC1096521CO",
        manufacturer: "Unilever Andina Colombia Ltda"
    },
    {
        name: "Loratadina MK",
        price: "$7.500",
        category: "Medicamentos",
        image: loratadina,
        discount: 20,
        available: true,
        featured: true,
        prescription: "Sí",
        presentation: "Caja",
        size: "X 10 UNDS",
        form: "Tabletas",
        concentration: "10 MG",
        invima: "2023M012964R4",
        manufacturer: "Tecnoquímicas"
    },
    {
        name: "Neurobión",
        price: "$28.000",
        category: "Medicamentos",
        image: neurobion,
        discount: 5,
        available: true,
        featured: false,
        prescription: "No",
        presentation: "Caja",
        size: "X 30 UNDS",
        form: "Tabletas",
        invima: "2019M0009578R1",
        manufacturer: "Procter & Gamble Colombia Ltda"
    },
    {
        name: "Pañales Huggies",
        price: "$32.000",
        category: "Bebés",
        image: huggies,
        discount: 0,
        available: true,
        featured: false,
        type: "Pañales",
        prescription: "No",
        presentation: "Bolsa",
        size: "X 50 UNDS",
        form: "Pañales",
        invima: "NSOA0018409C",
        manufacturer: "Kimberly Colpapel"
    },
    {
        name: "Allegra Pediátrico",
        price: "$25.000",
        category: "Medicamentos",
        image: allegra,
        discount: 12,
        available: false,
        featured: false,
        prescription: "No",
        presentation: "Caja",
        size: "150 ML",
        form: "Suspensión",
        invima: "2009M0009537",
        manufacturer: "Opella Healthcare Colombia"
    },
    {
        name: "LeGrip Plus",
        price: "$14.500",
        category: "Medicamentos",
        image: legrip,
        discount: 8,
        available: true,
        featured: false,
        presentation: "Caja",
        size: "X 10 Cápsulas",
        form: "Cápsula blanda",
        manufacturer: "ICOM Consumo"
    },
    {
        name: "Helado Maracuyá",
        price: "$4.500",
        category: "Helados",
        image: helado,
        discount: 25,
        available: true,
        featured: true,
        prescription: "No",
        presentation: "Bolsa",
        size: "70 G",
        flavor: "Maracuyá",
        invima: "RSA00262262023",
        manufacturer: "Crem Helado"
    },
    {
        name: "Coca-Cola 400ml",
        price: "$3.500",
        category: "Bebidas",
        image: cocacola,
        discount: 0,
        available: true,
        featured: false,
        type: "Gaseosa",
        prescription: "No",
        presentation: "Botella",
        size: "1.5 Litros",
        form: "Gaseosa",
        flavor: "Original",
        manufacturer: "Coca-Cola"
    }
];

export default products;