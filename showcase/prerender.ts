import ReactSrv from "react-srv";
import { cp } from "fs/promises";
import foodDeliveryConfig from './food-delivery/react-srv.config';
import newsletterConfig from './newsletter/react-srv.config';
import landingPageConfig from './landing-page/react-srv.config';

(async () => {
  // food delivery
  const foodDeliveryReact = new ReactSrv(foodDeliveryConfig);
  await foodDeliveryReact.prerender();
  cp('./showcase/food-delivery/custom.css', './docs/showcase/food-delivery/custom.css');
  console.log('Rendered Food Delivery showcase');

  // newsletter
  const newsletterReact = new ReactSrv(newsletterConfig);
  await newsletterReact.prerender();
  cp('./showcase/newsletter/custom.css', './docs/showcase/newsletter/custom.css');
  console.log('Rendered Newsletter showcase');

  // landing page
  const landingPageReact = new ReactSrv(landingPageConfig);
  await landingPageReact.prerender();
  cp('./showcase/landing-page/custom.css', './docs/showcase/landing-page/custom.css');
  console.log('Rendered Landing Page showcase');
})();

