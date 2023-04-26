/// <reference types="cypress"/>
//const API_URL = Cypress.env('API_BASE_URL')

describe('Validate PUT API', () =>
{
    it.only('Learning PUT API Testing', () =>
    
    {
        cy.api('DELETE', 'https://dummy.restapiexample.com/api/v1/delete/2').then((response)=> {

        //verifica status
        expect(response.status).equal(200)
                        
        })

    }

    )

})