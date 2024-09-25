class BasePage {
    constructor (page) {
// if (!options) {
//     this.options = {}
// } else {
//     this.options = options;
//     }
    this.page = page;
}

async getAttributProperty(selector, attribut) {
    const element = await this.page.$(selector);
    const propertyName = await element.getProperty(attribut);
    return propertyName.jsonValue();
}

async fillForm (selector, text) {
    return this.page.type(selector, text);
}
}

module.exports = BasePage;