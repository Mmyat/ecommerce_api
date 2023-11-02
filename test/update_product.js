const axios = require('axios')
axios.put("http://localhost:8080/api/products/653e8036a75f646abf669026",{
    code : "P0003",
    name : "Baby Coat",
    description :"It is 100% cotton,made by Giorendo",
    price : 7500,
}).then((res)=>{console.log(res.data);})
.catch(console.log())