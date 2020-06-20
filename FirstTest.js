const { Builder, By, Key, until, Navigation } = require('selenium-webdriver');

class FirstTest {
  async chrome() {
    try {
      let driverChrome =  new Builder().forBrowser('chrome').build();
      await driverChrome.get('http://www.google.com/ncr')
      await driverChrome.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      // await driverChrome.wait(until.titleIs('webdriver - Google Search'), 10000);
      await driverChrome.navigate().to('http://www.fb.com')
      await driverChrome.navigate().to('http://www.youtube.com')
      await driverChrome.quit();
    } catch (e) {
      console.log(e);
    }
  }
  async firefox() {
    try {
      let driverFirefox =  new Builder().forBrowser('firefox').build();
      await driverFirefox.get('http://www.google.com/ncr')
      await driverFirefox.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      // await driverFirefox.wait(until.titleIs('webdriver - Google Search'), 10000);
      await driverFirefox.navigate().to('http://www.fb.com')
      await driverFirefox.navigate().to('http://www.youtube.com')
      await driverFirefox.navigate().to('http://www.fb.com')
      await driverFirefox.quit();
    } catch (e) {
      console.log(e);
    }
  }
}

const test = new FirstTest();
test.chrome();
test.firefox();