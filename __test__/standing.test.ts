import handler from '@/pages/api/standings/[page]';
require('dotenv').config({ path: '.env.local' });

describe('/api/standings/[page] handler', () => {
  it('should return correct JSON for id 1', async () => {
    // 加入 async
    const req = {
      query: {
        page: 1,
      },
    };

    const res: any = {
      statusCode: null,
      body: null,
      status: function (status: number) {
        this.statusCode = status;
        return this;
      },
      json: function (msg: any) {
        this.body = msg;
        return this;
      },
    };

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.data[0]).toHaveProperty('MeetID');
    expect(res.body.data[0]).toHaveProperty('LifterID');
    expect(res.body.data.length).toBe(50);
  });
});
