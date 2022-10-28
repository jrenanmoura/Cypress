import SingupPage from '../pages/singupPage'



describe('cadastro', () => {
    it('seja um entregador', () => {
      

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


      const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'


      var singUp = new SingupPage()

      singUp.go()
      singUp.fillForm(cadastro)
      singUp.submit()
      singUp.modalContentShouldBe(expectMessage)
     

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

      var singUp = new SingupPage()

      singUp.go()
      singUp.fillForm(cadastro)
      singUp.submit()
      singUp.alertMessageShouldBe('Oops! CPF inválido')      

    


    })

    

  
})