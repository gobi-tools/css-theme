import ReactSrv from "react-srv";
import foodDeliveryConfig from './food-delivery/react-srv.config';
import newsletterConfig from './newsletter/react-srv.config';
import landingPageConfig from './landing-page/react-srv.config';
import blogConfig from './blog/react-srv.config';
import appConfig from './app/react-srv.config';
import basicConfig from './basic/react-srv.config';

(async () => {
  // app page
  const basicReact = new ReactSrv(basicConfig);
  await basicReact.prerender();
  console.log('Rendered Basic showcase');

  // food delivery
  const foodDeliveryReact = new ReactSrv(foodDeliveryConfig);
  await foodDeliveryReact.prerender();
  console.log('Rendered Food Delivery showcase');

  // newsletter
  const newsletterReact = new ReactSrv(newsletterConfig);
  await newsletterReact.prerender();
  console.log('Rendered Newsletter showcase');

  // landing page
  const landingPageReact = new ReactSrv(landingPageConfig);
  await landingPageReact.prerender();
  console.log('Rendered Landing Page showcase');

  // blog page
  const blogReact = new ReactSrv(blogConfig);
  await blogReact.prerender();
  console.log('Rendered Blog showcase');

  // app page
  const appReact = new ReactSrv(appConfig);
  await appReact.prerender();
  console.log('Rendered App showcase');
})();

