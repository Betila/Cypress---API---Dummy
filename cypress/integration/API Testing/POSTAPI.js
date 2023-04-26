/// <reference types="cypress"/>
//const API_URL = Cypress.env('API_BASE_URL')

describe('Validate POST API', () =>
{
    it('Learning POST API Testing', () =>
    
    {
        cy.api('POST', 'https://dummy.restapiexample.com/api/v1/create',{
            "name":"test",
            "salary":"123",
            "age":"23"
         }).then((response)=> {

        
        //verifica message
        expect(response.body).to.have.property('message', 'Successfully! Record has been added.')
        //verifica status
        expect(response.status).equal(200)
        //verifica o Body
        expect(response.body).to.deep.equal({

            "status": "success",
            "data": {
                "name": "test",
                "salary": "123",
                "age": "23",
                "id": 5766
            },
            "message": "Successfully! Record has been added."
        })
                
        })

    }

    )

})