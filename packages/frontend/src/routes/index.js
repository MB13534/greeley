/* eslint-disable import/first */
import React from "react";
import { CRUD_MODELS, ROUTES } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";

import async from "../components/Async";

import {
  Activity,
  Archive,
  Database,
  FileText,
  Home,
  Monitor,
  Users,
  Map as MapIcon,
} from "react-feather";

import Blank from "../pages/pages/Blank";
import Landing from "../pages/presentation/Landing";
import * as inflector from "inflected";
import { CrudProvider } from "../CrudProvider";

// TODO MAYBE LAZY IMPORT
import PublicMap from "../pages/publicMap";
import Default from "../pages/dashboards/Default";
import AdminGuard from "../components/AdminGuard";
import AdminVisibilityFilter from "../components/AdminVisibilityFilter";
import ListWqatActivityTypes from "../pages/dataManagement/ListWqatActivityTypes";
import ListWqatWaterbodies from "../pages/dataManagement/ListWqatWaterbodies";
import ListWqatParameters from "../pages/dataManagement/ListWqatParameters";
import ListWqatOrganizations from "../pages/dataManagement/ListWqatOrganizations";
import ListWqatMediaTypes from "../pages/dataManagement/ListWqatMediaTypes";
import ListWqatLocations from "../pages/dataManagement/ListWqatLocations";
import ListWqatLocationTypes from "../pages/dataManagement/ListWqatLocationTypes";
const Account = async(() => import("../pages/pages/Account"));
const Profile = async(() => import("../pages/pages/Profile"));

const CrudIndexPage = async(() => import("../components/crud/CrudIndexPage"));
const CrudViewPage = async(() => import("../components/crud/CrudViewPage"));

const getSidebarMenu = (list) => {
  return list.map((item) => {
    const slug = inflector.dasherize(inflector.underscore(item.name));
    return {
      id: item.sidebarName ?? inflector.titleize(item.name),
      path: `/models/${slug}`,
      model: inflector.singularize(item.name),
      icon: item.icon || <Database />,
      component: CrudIndexPage,
      config: require(`../pages/models/${item.name}Config`),
      provider: CrudProvider,
      children: item.children,
      header: item.header,
      guard: item.guard,
      visibilityFilter: item.visibilityFilter,
    };
  });
};

const getCrudRoutes = (list) => {
  return list.map((item) => {
    const config = require(`../pages/models/${item.name}Config`);
    const slug = inflector.dasherize(inflector.underscore(item.name));

    return {
      id: inflector.titleize(item.name),
      path: `/models/${slug}`,
      model: inflector.singularize(item.name),
      component: CrudIndexPage,
      provider: CrudProvider,
      config,
      crud: [
        {
          path: `/models/${slug}/:id`,
          name: `View ${inflector.titleize(inflector.singularize(item.name))}`,
          component: CrudViewPage,
          provider: CrudProvider,
          model: inflector.singularize(item.name),
          config,
        },
        {
          path: `/models/${slug}/add`,
          name: `Add ${inflector.titleize(inflector.singularize(item.name))}`,
          component: CrudViewPage,
          provider: CrudProvider,
          model: inflector.singularize(item.name),
          config,
        },
      ],
    };
  });
};

const crudSidebarMenu = [...getSidebarMenu(CRUD_MODELS)];
const modelCrudRoutes = [...getCrudRoutes(CRUD_MODELS)];

const dataAccessRoutes = {
  header: "Data Access",
  id: "Time Series",
  icon: <Activity />,
  children: [
    {
      path: "/data-access/time-series/a-time-series",
      name: "A Time Series",
      component: Blank,
    },
  ],
};

const reportsRoutes = {
  id: "Reports",
  icon: <FileText />,
  children: [
    {
      path: "/data-access/reports/a-report",
      name: "A report",
      component: Blank,
    },
  ],
};

const publicMapRoutes = {
  header: "Map Resources",
  id: "Interactive Map",
  icon: <MapIcon />,
  path: ROUTES.PUBLIC_MAP,
  name: "Interactive Map",
  component: PublicMap,
};

const publicFilesRoutes = {
  id: "Public Files",
  header: "Documents",
  icon: <Archive />,
  path: "/data-access/documents/public-files",
  name: "Public Files",
  component: Blank,
};

const dataScrubbingRoutes = {
  header: "Data Management",
  id: "Data Scrubbing",
  icon: <Database />,
  children: [
    {
      path: "/data-management/activity-types",
      name: "Activity Types",
      component: ListWqatActivityTypes,
      guard: AdminGuard,
    },
    {
      path: "/data-management/location-types",
      name: "Location Types",
      component: ListWqatLocationTypes,
      guard: AdminGuard,
    },
    {
      path: "/data-management/locations",
      name: "Locations",
      component: ListWqatLocations,
      guard: AdminGuard,
    },
    {
      path: "/data-management/media-types",
      name: "Media Types",
      component: ListWqatMediaTypes,
      guard: AdminGuard,
    },
    {
      path: "/data-management/organizations",
      name: "Organizations",
      component: ListWqatOrganizations,
    },
    {
      path: "/data-management/parameters",
      name: "Parameters",
      component: ListWqatParameters,
      guard: AdminGuard,
    },
    {
      path: "/data-management/water-bodies",
      name: "Water Bodies",
      component: ListWqatWaterbodies,
      guard: AdminGuard,
    },
  ],
  visibilityFilter: AdminVisibilityFilter,
};

const accountRoutes = {
  id: "Account",
  path: "/account",
  name: "Account",
  header: "Pages",
  icon: <Users />,
  component: Account,
  children: [
    {
      path: ROUTES.USER_PROFILE,
      name: "Profile",
      component: Profile,
    },
    {
      path: "/auth/logout",
      name: "Logout",
      component: function Logout() {
        const { logout } = useAuth0();
        logout();
      },
    },
  ],
};

const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Landing,
  children: null,
};

const mainRoutes = {
  header: "Dashboards",
  id: "Water Quality Dashboard",
  path: "/dashboard",
  icon: <Home />,
  component: Default,
  children: null,
  containsHome: true,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  mainRoutes,
  dataScrubbingRoutes,
  dataAccessRoutes,
  reportsRoutes,
  publicFilesRoutes,
  accountRoutes,
];

export const dashboardMaxContentLayoutRoutes = [
  ...crudSidebarMenu,
  ...modelCrudRoutes,
  publicMapRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [accountRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes using the full screen map layout
export const fullscreenMapRoutes = [];

// Routes visible in the sidebar
export const sidebarRoutes = [
  mainRoutes,
  ...crudSidebarMenu,
  dataScrubbingRoutes,
  dataAccessRoutes,
  reportsRoutes,
  publicMapRoutes,
  publicFilesRoutes,
];
