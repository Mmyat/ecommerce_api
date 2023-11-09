const axios = require('axios')
axios.put("http://localhost:8080/api/products/65435fbfb4bf836e63bc7d78",{
    name : "Boy shirt",
    description :"It is 100% cotton,made by Giorendo",
    category : "Fashion and Apparel",
    price : 9500,
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
})