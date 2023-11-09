const axios = require('axios')
axios.post(`http://localhost:8080/api/products/`,{
    name : "Girl Shirt",
    description :"It is 100% cotton shirt,made by Giorendo",
    category : "Fashion and Apparel",
    price : 8500,
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
})