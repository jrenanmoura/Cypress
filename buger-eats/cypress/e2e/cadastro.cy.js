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

    context ('Campos Obrigatórios', function(){

      const messages = [
        {field: 'name',output: 'É necessário informar o nome'},
        {field: 'cpf',output: 'É necessário informar o CPF'},
        {field: 'email',output: 'É necessário informar o email'},
        {field: 'CEP',output: 'É necessário informar o CEP'},
        {field: 'número',output: 'É necessário informar o número do endereço'},
        {field: 'metodo',output: 'Selecione o método de entrega'},
        {field: 'cnh',output: 'Adicione uma foto da sua CNH'}
      ]

      before(function(){
        singUp.go()
        singUp.submit()
      })

      messages.forEach(function(msg){
        it(`${msg.field} is required`, function(){
          singUp.alertMessageShouldBe(msg.output)
        } )

      })

    })

    // it('Campos Obrigatórios', function(){

    //   singUp.go()
    //   singUp.submit()
    //   singUp.alertMessageShouldBe('É necessário informar o nome')
    //   singUp.alertMessageShouldBe('É necessário informar o CPF')
    //   singUp.alertMessageShouldBe('É necessário informar o email')
    //   singUp.alertMessageShouldBe('É necessário informar o CEP')
    //   singUp.alertMessageShouldBe('É necessário informar o número do endereço')
    //   singUp.alertMessageShouldBe('Selecione o método de entrega')
    //   singUp.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })

    

  
})