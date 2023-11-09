const axios = require('axios')
axios.get("http://localhost:8080/api/products/",{
    params :{search : "Woman"}
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
})