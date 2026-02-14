class LoginPage {

    visitar() {
        cy.visit('https://portalrdvqa.azurewebsites.net/Account/Login');
    }

    preencherEmpresa(empresa) {
        cy.get('input[name="tenancyName"]').clear().type(empresa);
    }

    preencherUsuario(usuario) {
        cy.get('input[name="usernameOrEmailAddress"]').clear().type(usuario);
    }

    preencherSenha(senha) {
        cy.get('input[name="password"]').clear().type(senha);
    }

    clicarEntrar() {
        cy.get('button[type="submit"]').click();
    }

    validarLoginSucesso() {
        cy.url().should('not.include', 'Login');
        cy.contains('Dashboard').should('exist');
    }

    validarErroLogin() {
        cy.contains('Falha no login!').should('be.visible');
    }
}

export default new LoginPage();
