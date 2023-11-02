const axios = require('axios')
axios.get("http://localhost:8080/api/products/653e8036a75f646abf669026").then((res)=>{console.log(res.data);})
.catch(console.log())