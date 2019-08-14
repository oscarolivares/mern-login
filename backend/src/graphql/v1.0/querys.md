## Graphiql

    {
      Users {
        email
      }
    }

    mutation{
      createUser(input: {
        email: "amdin@mail.com",
        password: "Admin123.."
      })
      {
        email
      }
    }
