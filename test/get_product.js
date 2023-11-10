const axios = require('axios')
axios.get("http://localhost:8080/api/products/",{
    params :{search : "Woman"}
}).then((res)=>{console.log(res.data);})
.catch(console.log())