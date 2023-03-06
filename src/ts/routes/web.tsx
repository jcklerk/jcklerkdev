import { Route, RootRoute, Outlet } from "@tanstack/react-router";
import Nav from "../components/Nav";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Nav />
      <div className="mx-auto max-w-screen-2xl p-10">
        <Outlet />
      </div>
    </>
  ),
});

export const PagePath = [
  new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "/aboutme",
    component: AboutPage,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "/projects",
    component: ProjectPage,
  }),
];

// const blogRoute = new Route({ getParentRoute: () => rootRoute, path: 'blog' })
// const postRoute = new Route({ getParentRoute: () => blogRoute, path: '$slug' })

// const routeConfig = rootRoute.addChildren([
//   indexRoute,
//   blogRoute.addChildren([postRoute]),
// ])
