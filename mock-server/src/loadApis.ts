import { Express } from 'express';
import shopData from './apis/shopData.api';

export default function loadApis(app: Express) {
  shopData(app);
  // 警告： 放在最后，放在最后，放在最后
}
