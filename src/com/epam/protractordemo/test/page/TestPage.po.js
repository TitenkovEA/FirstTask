var TestPage = function () {
    var btnAddUser = element(by.buttonText('Add User'));
    var btnSave = element(by.buttonText('Save'));

    var inputFirstName = element(by.name('FirstName'));
    var inputLastName = element(by.name('LastName'));
    var inputUserName = element(by.name('UserName'));
    var inputPassword = element(by.name('Password'));
    var inputEmail = element(by.name('Email'));
    var inputCellPhone = element(by.name('Mobilephone'));
    var inputSearch = element(by.model('searchValue'));

    var radioCompanyAAA = element(by.css("input[value='15'][type='radio']"));
    var radioCompanyBBB = element(by.css("input[value='16'][type='radio']"));

    var tableRows = element.all(by.repeater('dataRow in displayedCollection'));

    var headerCellFirstName = element(by.xpath("//th[./span[text()='First Name']]"));

    this.get = function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    };

    this.addUser = function (user) {
        btnAddUser.click();

        inputPassword.sendKeys(user.password);
        inputFirstName.sendKeys(user.firstName);
        inputLastName.sendKeys(user.lastName);
        inputUserName.sendKeys(user.userName);
        inputEmail.sendKeys(user.email);
        inputCellPhone.sendKeys(user.phone);
        element(by.xpath("//option[text()='" + user.role + "']")).click();
        if (user.customer == 'Company AAA') {
            radioCompanyAAA.click();
        } else if (user.customer == 'Company BBB') {
            radioCompanyBBB.click();
        }

        btnSave.click();
    };

    this.search = function (searchValue) {
        inputSearch.sendKeys(searchValue);
    };

    this.getFirstUserFromTable = function () {
        var firstRowCells = tableRows.first().all(by.repeater('column in columns'));

        return user = {
            firstName: firstRowCells.get(0).getText(),
            lastName: firstRowCells.get(1).getText(),
            customerName: firstRowCells.get(4).getText(),
            role: firstRowCells.get(5).getText()
        };
    };

    this.getLastUserFromTable = function () {
        var firstRowColumns = tableRows.last().all(by.repeater('column in columns'));

        return user = {
            firstName: firstRowColumns.get(0).getText(),
            lastName: firstRowColumns.get(1).getText(),
            customerName: firstRowColumns.get(4).getText(),
            role: firstRowColumns.get(5).getText()
        };
    };

    this.getTableSize = function () {
        return tableRows.count();
    };

    this.setAscOrderByFirstName = function () {
        headerCellFirstName.click();

        var sort = headerCellFirstName.element(by.tagName('span')).getAttribute('class').then(function (value) {
            if (!value.includes("sort-ascent")) {
                headerCellFirstName.click();
            }
        });
    };

    this.setDesOrderByFirstName = function () {
        headerCellFirstName.click();

        var sort = headerCellFirstName.element(by.tagName('span')).getAttribute('class').then(function (value) {
            if (value.includes("sort-ascent")) {
                headerCellFirstName.click();
            }
        });
    };

    this.deleteUser = function (userName) {
        element(by.xpath("//tr[./td[3][text()='" + userName + "']]/td[11]/button")).click();
        element(by.xpath("//button[text()='OK']")).click();
    };
};
module.exports = TestPage;