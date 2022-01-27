const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");


async function fetchFromIWork() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.iworkplc.com/contact");
    var officeNumber = await driver
      .findElement(By.xpath("//div[@id='comp-kktfmgn8']/p[@class='font_9']/span[@class='color_15']")).getText();
    var mobileNumber = await driver
      .findElement(By.xpath("//div[@id='comp-ks7htvty']/p[@class='font_9']/span[@class='color_15']")).getText();


    //Cnvert value to float
     officeNumber = parseFloat(officeNumber.slice(14));
     mobileNumber = parseFloat(mobileNumber.slice(13));

    console.log(officeNumber / mobileNumber)



  } finally {
    await driver.quit();
  }
}

fetchFromIWork();
//it is working :)