/// <reference types="cypress"/>
//const API_URL = Cypress.env('API_BASE_URL')

describe('Validate PUT API', () =>
{
    it('Learning PUT API Testing', () =>
    
    {
        cy.api('PUT', 'https://dummy.restapiexample.com/api/v1/update/21',{
            "name":"test",
            "salary":"123",
            "age":"23"
         }).then((response)=> {

        
        //verifica message
        expect(response.body).to.have.property('message', 'Successfully! Record has been added.')
        //verifica status
        expect(response.status).equal(200)
        

                
        })

    }

    )

})