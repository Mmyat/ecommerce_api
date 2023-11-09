const axios = require('axios')
axios.delete("http://localhost:8080/api/products/653e8036a75f646abf669026").then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
})