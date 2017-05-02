var TestPage = require('./page/TestPage.po.js');

describe('Search users', function () {
    var testPage = new TestPage();

    var users = [{
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_sales_aaa",
        password: "starwars123",
        customer: "Company AAA",
        role: "Sales Team",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_customer_aaa",
        password: "starwars123",
        customer: "Company AAA",
        role: "Customer",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_company_aaa",
        password: "starwars123",
        customer: "Company AAA",
        role: "Admin",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_sales_bbb",
        password: "starwars123",
        customer: "Company BBB",
        role: "Sales Team",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_customer_bbb",
        password: "starwars123",
        customer: "Company BBB",
        role: "Customer",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        userName: "luke_company_bbb",
        password: "starwars123",
        customer: "Company BBB",
        role: "Admin",
        email: "skywalkertest@some.com",
        phone: "123456789"
    }];

    beforeEach(function () {
        testPage.get();
    });

    users.forEach(function (user) {
        it('should find a user', function () {
            testPage.addUser(user);
            testPage.search(user.userName);
            var foundUser = testPage.getFirstUserFromTable();

            expect(foundUser.firstName).toEqual(user.firstName);
            expect(foundUser.lastName).toEqual(user.lastName);
            expect(foundUser.customerName).toEqual(user.customer);
            expect(foundUser.role).toEqual(user.role);
        });
    });
});