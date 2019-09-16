const Service = require('egg').Service;

class IndexService extends Service {
    async getList(ctx) {
        const { limit, curpage } = ctx.request.query;
        let datalist = await this.app.mysql.query(`SELECT * from movie`);
        console.log(datalist.length)
        //当前页数 以及限制页数
        let list = datalist.slice((curpage * 1 - 1) * limit,curpage * limit)

        ctx.body = {
            data: datalist.length,
            list
        }
    }
}

module.exports = IndexService;