const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    username : "First Customer",
    email : "mmz@mail.com",
    password : "Abcd123",
}).then((res)=>{console.log(res.data);})
.catch(console.log())