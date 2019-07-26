import { Express } from 'express';
import shopData from './apis/shopData.api';
import userData from './apis/userData.api';
export default function loadApis(app: Express) {
  shopData(app);
  userData(app);
  // 警告： 放在最后，放在最后，放在最后
}
