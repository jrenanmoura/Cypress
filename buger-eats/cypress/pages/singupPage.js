class SingupPage{

    go(){
      cy.visit('/')
      
      cy.get('a[href="/deliver"]').click()
      cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

    }

    fillForm(cadastro){
           
      cy.get('input[name="fullName"]').type(cadastro.nome)
      cy.get('input[name="cpf"]').type(cadastro.cpf)
      cy.get('input[name="email"]').type(cadastro.email)
      cy.get('input[name="whatsapp"]').type(cadastro.whatsapp)

      cy.get('input[name="postalcode"]').type(cadastro.endereco.cep)
      cy.get('input[type=button][value="Buscar CEP"]').click()
      cy.get('input[name="address-number"]').type(cadastro.endereco.numero)
      cy.get('input[name="address-details"]').type(cadastro.endereco.complemento)

      cy.get('input[name="address"]').should('have.value', cadastro.endereco.rua)
      cy.get('input[name="district"]').should('have.value', cadastro.endereco.bairro)
      cy.get('input[name="city-uf"]').should('have.value', cadastro.endereco.cidade_uf)

      cy.contains('.delivery-method li', cadastro.metodo_entrega).click()
      cy.get('input[accept^="image/*"]').attachFile('/images/' + cadastro.cnh)

    }

    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(expectMessage){
        cy.get('div[class=swal2-html-container]').should('have.text', expectMessage)
    }

    alertMessageShouldBe(expectMessage){
        cy.get( '.alert-error').should('have.text', expectMessage)
    }


}

export default SingupPage;