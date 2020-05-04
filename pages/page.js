// export default class Page {
    module.exports = class Page {

        async open() {
             await browser.setWindowSize(1366,768);
             await browser.url('https://test.datagardener.com/login');
         }
    
        async getTitle()
        {
            return await browser.getTitle();
        }
    
        async pause(ms)
        {
            browser.pause(parseInt(ms));
        }
    };