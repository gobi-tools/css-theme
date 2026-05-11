import ReactSrv from "react-srv";
import foodDeliveryConfig from './food-delivery/react-srv.config';

(async () => {
  // food delivery
  const foodDeliveryReact = new ReactSrv(foodDeliveryConfig);
  await foodDeliveryReact.prerender();
  console.log('Rendered Food Delivery showcase');
})();

