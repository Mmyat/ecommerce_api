const axios = require('axios')
axios.get("http://localhost:8080/api/products/65435fbfb4bf836e63bc7d78").then((res)=>{console.log(res.data);})
.catch(console.log())