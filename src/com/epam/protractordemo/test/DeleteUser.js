var TestPage = require('./page/TestPage.po.js');

describe('Delete user', function () {
    var testPage = new TestPage();

    var user = {
        firstName: "Luke",
        lastName: "Skywalker",
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

    it('should delete a user', function () {
        testPage.addUser(user);
        testPage.deleteUser(user.userName);
        testPage.search(user.userName);

        expect(testPage.getTableSize()).toEqual(0);
    });
});