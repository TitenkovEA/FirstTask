var TestPage = require('./page/TestPage.po.js');

describe('Sort users by user name', function () {
    var testPage = new TestPage();

    var user = {
        firstName: "0_Luke",
        lastName: "1_Skywalker",
        userName: "luke_admin",
        password: "starwars123",
        customer: "Company AAA",
        role: "Admin",
        email: "lskywalkertest_admin@some.com",
        phone: "123456789"
    };

    beforeEach(function () {
        testPage.get();
    });

    it('should sort table in ascent order by user name', function () {
        testPage.addUser(user);
        testPage.setAscOrderByFirstName();
        testPage.setAscOrderByFirstName();
        testPage.setAscOrderByFirstName();
        testPage.setAscOrderByFirstName();

        expect(testPage.getLastUserFromTable().firstName).toEqual(user.firstName);
    });

    it('should sort table in descent order by user name', function () {
        testPage.addUser(user);
        testPage.setDesOrderByFirstName();
        testPage.setDesOrderByFirstName();
        testPage.setDesOrderByFirstName();
        testPage.setDesOrderByFirstName();

        expect(testPage.getFirstUserFromTable().firstName).toEqual(user.firstName);
    });
});