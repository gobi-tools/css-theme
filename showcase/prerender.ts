import ReactSrv from "react-srv";
import { cp } from "fs/promises";
import foodDeliveryConfig from './food-delivery/react-srv.config';

(async () => {
  // food delivery
  const foodDeliveryReact = new ReactSrv(foodDeliveryConfig);
  await foodDeliveryReact.prerender();
  cp('./showcase/food-delivery/custom.css', './docs/showcase/food-delivery/custom.css');
  console.log('Rendered Food Delivery showcase');
})();

