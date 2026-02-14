import LoginPage from '../pages/LoginPage';

describe('Teste de Login - Portal RDV', () => {

    beforeEach(() => {
        LoginPage.visitar();
    });

    it('Deve realizar login com sucesso', () => {

        LoginPage.preencherEmpresa('SUPERA');
        LoginPage.preencherUsuario('03960584857');
        LoginPage.preencherSenha('123qwe');

        LoginPage.clicarEntrar();
        LoginPage.validarLoginSucesso();

    });

    it('Deve exibir erro ao informar senha inválida', () => {

        LoginPage.preencherEmpresa('SUPERA');
        LoginPage.preencherUsuario('03960584857');
        LoginPage.preencherSenha('senhaerrada');

        LoginPage.clicarEntrar();
        LoginPage.validarErroLogin();

    });

});
