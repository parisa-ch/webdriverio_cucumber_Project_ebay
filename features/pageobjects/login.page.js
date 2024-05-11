const { $ } = require('@wdio/globals');
const Page = require('./page');

class LoginPage extends Page {
    get loginLink() {
        return $('//a[contains(text(), "Sign in")][1]');
    }
    get inputUsername() {
        return $('#userid');
    }
    get buttonContinue() {
        return $('#signin-continue-btn');
    }
    get inputPassword() {
        return $('#pass');
    }
    get btnSubmit() {
        return $('#sgnBt');
    }
    get searchInput() {
        return $('#gh-ac');
    }
    get searchBtn() {
        return $('#gh-btn');
    }
    get resultCount() {
        return $('//span[@class="BOLD"][1]');
    }

    async loginPage() {
        await this.loginLink.click();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username, { force: true });
        await this.buttonContinue.click();
        await browser.pause(7000);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async search(keyword) {
        await this.searchInput.setValue(keyword);
        await this.searchBtn.click();
    }

    async countResult() {
        const text = await this.resultCount.getText();
        console.log('Total Search Items :', text);
    }

    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
