describe('cadastro', () => {
    it('seja um entregador', () => {
      cy.viewport(1440, 900)
      cy.visit('https://buger-eats.vercel.app')
      
      cy.get('a[href="/deliver"]').click()
      cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')


      var cadastro =  {
        nome:'Renan',
        cpf:'12345678910',
        email: 'renan@renan.com.br',
        whatsapp: '1198765432',
        endereco:{
          cep:'05550095',
          rua:'Rua Santa Amélia',
          numero:'141',
          complemento: 'apt 07',
          bairro:'Jardim do Lago',
          cidade_uf:'São Paulo/SP'
        }
      }

      cy.get('input[name="name"]').type(cadastro.nome)
      cy.get('input[name="cpf"]').type(cadastro.cpf)
      cy.get('input[name="email"]').type(cadastro.email)
      cy.get('input[name="whatsapp"]').type(cadastro.whatsapp)

      cy.get('input[name="postalcode"]').type(cadastro.endereco.cep)
      cy.get('input[type=button][value="Buscar CEP"]').click()
      cy.get('input[name="address-number"]').type(cadastro.endereco.numero)
      cy.get('input[name="address-details"]').type(cadastro.endereco.complemento)

      cy.get('input[name="address"]').should('have.text', cadastro.endereco.rua)
      cy.get('input[name="district"]').should('have.text', cadastro.endereco.bairro)
      cy.get('input[name="city-uf"]').should('have.text', cadastro.endereco.cidade_uf)

    })

  
})