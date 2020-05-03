// export default class Page {
    module.exports = class Page {

        async open(path) {
             await browser.setWindowSize(1366,768);
             await browser.url(path);
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