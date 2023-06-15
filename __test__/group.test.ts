import handler from '@/pages/api/group';
require('dotenv').config({ path: '.env.local' });
describe('/api/group handler', () => {
  it('should return correct JSON for id 1', async () => {
    // 加入 async
    const req = {
      method: 'POST',
      body: {
        LifterID: [1, 2, 3, 5, 6],
      },
    };

    const res: any = {
      statusCode: null,
      body: null,
      status: function (status: number) {
        this.statusCode = status;
        return this;
      },
      send: function (msg: any) {
        this.body = msg;
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
  });
});
