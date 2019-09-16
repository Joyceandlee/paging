const Controller = require('egg').Controller;

class IndexController extends Controller {
    async getList(ctx) {
        await ctx.service.index.getList(ctx)
    }
}

module.exports = IndexController;