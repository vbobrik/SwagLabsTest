const BasePage = require('./BasePage');

class LoginPage extends BasePage{
    constructor (page) {
        super(page);
        this.loginFieldElement = '#user-name';
        this.passwordFieldElement = '#password';
        this.buttonElement = '#login-button';
    }

    async checkPlaceholder (selector) {
        return this.getAttributProperty(selector, 'placeholder');
    }

    async checkValue (selector) {
        return this.getAttributProperty(selector, 'value');
    }

    async getType (selector) {
        return this.getAttributProperty(selector, 'type');
    }
}

module.exports = LoginPage;