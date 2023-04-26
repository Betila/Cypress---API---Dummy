/// <reference types="cypress"/>

describe('Validate GET API', () =>
{
    it.only('Learning get API Testing', () =>
    
    {
        cy.api('https://dummy.restapiexample.com/api/v1/employee/1').then((response)=> {

        //verifica message
        expect(response.body).to.have.property('message', 'Successfully! Record has been fetched.')
        //verifica status
        expect(response.status).equal(200)
        //verifica o Body
        expect(response.body).to.deep.equal({

            "status": "success",
            "data": {
                "id": 1,
                "employee_name": "Tiger Nixon",
                "employee_salary": 320800,
                "employee_age": 61,
                "profile_image": ""
            },
            "message": "Successfully! Record has been fetched."
        })
                
        })

    }

    )

})