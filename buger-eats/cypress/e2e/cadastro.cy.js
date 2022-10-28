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
        },

        metodo_entrega:'Moto',
        cnh: 'cnh-digital.jpg'
      }

      cy.get('input[name="name"]').type(cadastro.nome)
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

      cy.get('button[type="submit"]').click()

     const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

      cy.get('div[class=swal2-html-container]').should('have.text', expectMessage)


    })

    it('CPF invalido', () => {
      cy.viewport(1440, 900)
      cy.visit('https://buger-eats.vercel.app')
      
      cy.get('a[href="/deliver"]').click()
      cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')


      var cadastro =  {
        nome:'Renan',
        cpf:'123456789AA',
        email: 'renan@renan.com.br',
        whatsapp: '1198765432',
        endereco:{
          cep:'05550095',
          rua:'Rua Santa Amélia',
          numero:'141',
          complemento: 'apt 07',
          bairro:'Jardim do Lago',
          cidade_uf:'São Paulo/SP'
        },

        metodo_entrega:'Moto',
        cnh: 'cnh-digital.jpg'
      }

      cy.get('input[name="name"]').type(cadastro.nome)
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

      cy.get('button[type="submit"]').click()

      cy.get( '.alert-error').should('have.text', 'Oops! CPF inválido')

    


    })

    

  
})