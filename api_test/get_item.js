const axios = require('axios')
axios.get("http://localhost:8080/api/items/",
// {params :{search : "Woman"}},
{headers: {
    'Authorization' :
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRjOGI2OGM2MmI4OTkyZjI2ODk1ZmEiLCJpYXQiOjE3MDUzOTc0OTcsImV4cCI6MTcwNTQwMTA5N30.2fbEwsJ8opyj6PBAATvmHc5A-UESswCDrqIKX7JJ7bE`
    }}
).then((res)=>{console.log(res.data);})
.catch(console.log())