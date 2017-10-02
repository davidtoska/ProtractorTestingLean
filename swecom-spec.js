/**
 * Created by David Aleks Toska on 08/23/2017.
 */




describe('Sweacom logg-in', function () {

    var loggInURL = "https://swecom.org/?password-protected=login&redirect_" +
        "to=https%3A%2F%2Fswecom.org%2Foauth%2Fauthorize%2F%3Fresponse_" +
        "type%3Dcode%26client_id%3DwtX5Z4w4J27FysuXwV4VVmfoNbyq4C%26scope%" +
        "3Dopenid%26redirect_uri%3Dhttps%3A%2F%2Fapi.leanbusinessplatform.com%" +
        "2Foauth%2FwtX5Z4w4J27FysuXwV4VVmfoNbyq4C%3FredirectUrl%3Dhttps%3A%2F%" +
        "2Fswecom1.leanbusinessplatform.com%2Foauth%2Fcallback";


    //var element = element(by.css('app-header-logo'));
    it('After logg-inn ', function () {
        browser.waitForAngularEnabled(false);
        browser.get(loggInURL);

        element(by.id('password_protected_pass')).sendKeys("swecom2016");
        element(by.id('wp-submit')).click();


        element(by.id("user_login")).sendKeys("developer");
        element(by.id("user_pass")).sendKeys("Developer123");
        element(by.id("wp-submit")).click().then(function () {
            console.log("inside then.");
        });

        browser.sleep(6000);
        expect(element(by.className("ni-ideas canvas__icons")).isPresent()).toBe(true);
        expect(browser.getCurrentUrl()).toBe("https://swecom1.leanbusinessplatform.com/cases/5491");
        element(by.className("ni-ideas canvas__icons")).click();
        browser.sleep(6000);


    });
}, 40000); //Timeout 40 seconds

/**
 * #main-view >
 * div.app-container.ng-scope >
 * div.app-content > div >
 * nav-canvas >
 * div.nav-canvas__row.content__one.ng-scope >
 * nav-canvas-idea
 *
 */