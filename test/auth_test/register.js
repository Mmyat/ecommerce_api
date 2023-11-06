const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    username : "First Customer",
    password : "Abcd123",
}).then((res)=>{console.log(res.data);})
.catch(console.log())