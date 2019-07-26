import { Express } from 'express';

export default function setup(app: Express) {
  app.get(`/local/user/list`, (req, res) => {
    res.json({
      code: 'success',
      data: [
        {
          id: '1',
          key: '1',
          name: '张三',
          age: 22,
          address: '西湖区湖底公园1号',
          job: '学生',
        },
        {
          id: '2',
          key: '2',
          name: '胡彦祖',
          age: 32,
          address: '西湖区湖底公园2号',
          job: '老师',
        },
        {
          id: '3',
          key: '3',
          name: '吴醉',
          age: 12,
          address: '西湖区湖底公园23号',
          job: '学生',
        },
      ],
    });
  });
}
