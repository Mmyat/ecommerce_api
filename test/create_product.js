const axios = require('axios')
axios.post(`http://localhost:8080/api/products/`,{
    code : "P0003",
    name : "Baby Shirt",
    description :"It is 100% cotton shirt,made by Giorendo",
    price : 7500,
}).then((res)=>{console.log(res.data);})
.catch(console.log())