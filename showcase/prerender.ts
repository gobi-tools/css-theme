import ReactSrv from "react-srv";
import { cp } from "fs/promises";
import foodDeliveryConfig from './food-delivery/react-srv.config';
import newsletterConfig from './newsletter/react-srv.config';
import landingPageConfig from './landing-page/react-srv.config';
import newspaperConfig from './newspaper/react-srv.config';
import blogConfig from './blog/react-srv.config';
import appConfig from './app/react-srv.config';

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

  // landing page
  const newspaperReact = new ReactSrv(newspaperConfig);
  await newspaperReact.prerender();
  cp('./showcase/newspaper/custom.css', './docs/showcase/newspaper/custom.css');
  console.log('Rendered Newspaper showcase');

  // blog page
  const blogReact = new ReactSrv(blogConfig);
  await blogReact.prerender();
  cp('./showcase/blog/custom.css', './docs/showcase/blog/custom.css');
  console.log('Rendered Blog showcase');

  // app page
  const appReact = new ReactSrv(appConfig);
  await appReact.prerender();
  cp('./showcase/app/custom.css', './docs/showcase/app/custom.css');
  console.log('Rendered App showcase');
})();

