const { Builder, By } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the URL
    await driver.get('https://www.nseindia.com/get-quotes/derivatives?symbol=NIFTY&identifier=OPTIDXNIFTY12-10-2023CE19800.00#equity-derivative-cntrctinfo-optionchain');

    // Trigger the JavaScript function
    await driver.executeScript("loadDerivativesOptionChain()");
    await driver.sleep(500)
    await driver.executeScript("loadDerivativesOptionChain()");

    // Wait for the data to load (you may need to adjust the waiting time)
    await driver.sleep(5000); // Adjust the time as needed

    // Extract and print the table data
    const table = await driver.findElement(By.id('optionChainTable-indices'));
    if (table) {
      const rows = await table.findElements(By.tagName('tr'));
      for (const row of rows) {
        const cells = await row.findElements(By.tagName('td'));
        const cellText = [];
        for (const cell of cells) {
          cellText.push(await cell.getText());
        }
        console.log(cellText.join('\t'));
      }
    } else {
      console.log('Table not found on the webpage.');
    }
  } finally {
    await driver.quit();
  }
})();
