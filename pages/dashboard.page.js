class Dashboard {
    async dashBoardelm() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > ul > li:nth-child(1) > a') }
    async corporateLand() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > ng-component > div > div.ui-g-12.mainDashboardSection > div > div > div:nth-child(3) > a > p-card > div > div') }

}
module.exports = new Dashboard