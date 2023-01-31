import {
  Route,
  RootRoute,
} from '@tanstack/react-router'
import HomePage from '../pages/HomePage';

let rootRoute =  new RootRoute();

export const PagePath = [
    new Route({ getParentRoute: () => rootRoute, path: '/', component: HomePage }),
];


// const blogRoute = new Route({ getParentRoute: () => rootRoute, path: 'blog' })
// const postRoute = new Route({ getParentRoute: () => blogRoute, path: '$slug' })

// const routeConfig = rootRoute.addChildren([
//   indexRoute,
//   blogRoute.addChildren([postRoute]),
// ])