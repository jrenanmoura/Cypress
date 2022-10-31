import SingupPage from '../pages/singupPage'
import signupFactory from "../../Factores/signupFactory"



describe('cadastro', function(){

    // beforeEach(function(){
  //   cy.fixture('deliver').then(function(dev){
  //     this.deliver = dev
  //   })
  // })

  var singUp = new SingupPage()

    it('seja um entregador', function(){
      
      const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      
      
      var deliver = signupFactory.deliver()


      singUp.go()
      singUp.fillForm(deliver)
      singUp.submit()
      singUp.modalContentShouldBe(expectMessage)
     

    })

    it('CPF invalido', function(){
        
      var deliver = signupFactory.deliver()

      deliver.cpf = '123456789AA'


      singUp.go()
      singUp.fillForm(deliver)
      singUp.submit()
      singUp.alertMessageShouldBe('Oops! CPF inválido')      

    


    })

    it('Email inavlido', function(){

      var deliver = signupFactory.deliver()

      deliver.email = 'user.user.com.br'

      singUp.go()
      singUp.fillForm(deliver)
      singUp.submit()
      singUp.alertMessageShouldBe('Oops! Email com formato inválido.')      

    
    })

    

  
})