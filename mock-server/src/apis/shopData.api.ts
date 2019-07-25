import { Express } from 'express';

export default function setup(app: Express) {
  app.get(`/local/shop/list`, (req, res) => {
    res.json({
      code: 'success',
      shops: [
        {
          id: '1',
          name: 'T恤',
          pic: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          description: '实惠',
          inventory: 10,
        },
        {
          id: '2',
          name: '短裤',
          pic: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          description: '实惠',
          inventory: 40,
        },
        {
          id: '3',
          name: '帽子',
          pic: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          description: '实惠',
          inventory: 5,
        },
      ],
    });
  });
}
