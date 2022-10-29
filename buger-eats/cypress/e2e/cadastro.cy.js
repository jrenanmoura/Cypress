import SingupPage from '../pages/singupPage'



describe('cadastro', function(){

  beforeEach(function(){
    cy.fixture('deliver').then(function(dev){
      this.deliver = dev
    })
  })


  var singUp = new SingupPage()

    it('seja um entregador', function(){
      
      const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'


      

      singUp.go()
      singUp.fillForm(this.deliver.cadastro)
      singUp.submit()
      singUp.modalContentShouldBe(expectMessage)
     

    })

    it('CPF invalido', function(){
        
          

      singUp.go()
      singUp.fillForm(this.deliver.cadastro_erro)
      singUp.submit()
      singUp.alertMessageShouldBe('Oops! CPF inválido')      

    


    })

    

  
})