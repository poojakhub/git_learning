class Corporate {
    async price() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div:nth-child(1) > div > ul > li:nth-child(2) > h4 > a') }
    async minCost() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > div > div > div > span:nth-child(2) > input') }
    async maxCost() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > div > div > div > span:nth-child(3) > input') }
    async applyPrice() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-corporate-land/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/p-button/button') }
   // async applyFilter() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.text-right > button > span') }
   async applyFilter() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-corporate-land/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[4]/button[2]/span') }
    
   async priceAmount() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-record-list > div > p-table > div > div.ui-table-scrollable-wrapper.ng-star-inserted > div > div.ui-table-scrollable-body > table > tbody > tr:nth-child(1) > td:nth-child(5)') }
    async Region() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div:nth-child(1) > div > ul > li:nth-child(4) > h4 > a') }
    async SouthEast() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-corporate-land > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > div > p-listbox > div > div.ui-listbox-list-wrapper > ul > li:nth-child(1) > span') }
    

}
module.exports = new Corporate