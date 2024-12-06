1. Login API
    Request URL: `https://apis.ccbp.in/login`
    Request Method: [POST]
    Status Code: {200 OK} 
    # Payload: 
    ```json
    {
    "username":"rahul",
    "password":"rahul@2021"
    }
    ```
    # response:
    ```json
    {
    "jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
    }
    ```