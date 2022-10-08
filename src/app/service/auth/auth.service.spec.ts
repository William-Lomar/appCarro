import { loadingService } from './../loading.service';
import { AuthService } from 'src/app/service/auth/auth.service';
describe('Test auth service',()=>{

    beforeEach(()=>{


    })

    it('should return status user',()=>{
      //Instancia uma classe real;
      // let loading = new loadingService();

      //Dessa maneira é criada uma classe fake/mock
      let mockLoading = jasmine.createSpyObj('loading',['show','hide','getUser']);


      let authService = new AuthService(mockLoading);

      //Adiciona um valor de retorno para uma função do mock
      mockLoading.getUser.and.returnValue('William');

      //Desse modo o metodo espião impede a execução real do metodo chamado
      // spyOn(loading,'show');
      // spyOn(loading,'hide');

      //Desse modo o espião não impede o metodo real
      // spyOn(loading,'show').and.callThrough();
      // spyOn(loading,'hide').and.callThrough();

      let user = authService.verificaUsuario();

      // expect(mockLoading.show);
      // expect(mockLoading.hide);
      expect(user).toBe("William");



      // pending()  // Informa ao Karma q o teste ainda será configurado -> Ou pode usar o xit
    })
})
