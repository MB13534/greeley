import React from "react";
import { Droplet, CheckSquare, CreditCard } from "react-feather";
import CallMerge from "@material-ui/icons/CallMerge";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import AdminGuard from "../components/AdminGuard";
import AdminVisibilityFilter from "../components/AdminVisibilityFilter";
import DeveloperGuard from "../components/DeveloperGuard";
import DeveloperVisibilityFilter from "../components/DeveloperVisibilityFilter";

export const STARTING_LOCATION = [-97.4718189239502, 31.050691282461912];

// Configuration
export const CRUD_MODELS = [
  {
    header: "Data Management",
    name: "DmPermits",
    sidebarName: "Permits",
    icon: <CheckSquare />,
    guard: AdminGuard,
    visibilityFilter: AdminVisibilityFilter,
  },
  {
    name: "DmWells",
    sidebarName: "Wells",
    icon: <Droplet />,
    guard: AdminGuard,
    visibilityFilter: AdminVisibilityFilter,
  },
  {
    name: "DmRolodexes",
    sidebarName: "Rolodex",
    icon: <CreditCard />,
    guard: AdminGuard,
    visibilityFilter: AdminVisibilityFilter,
  },
  {
    name: "DmPermitHolders",
    sidebarName: "Permit Holders",
    icon: <PermContactCalendar />,
    guard: AdminGuard,
    visibilityFilter: AdminVisibilityFilter,
  },
  {
    name: "DmAggregateSystems",
    sidebarName: "Aggregated Systems",
    icon: <CallMerge />,
    guard: AdminGuard,
    visibilityFilter: AdminVisibilityFilter,
  },
  {
    name: "ListPermitTypes",
    sidebarName: "List Permit Types",
    guard: DeveloperGuard,
    visibilityFilter: DeveloperVisibilityFilter,
  },
];

export const CRUD_LOOKUP_TABLES = [
  "ui_list_permit_holders",
  "list_aggregate_systems",
  "list_aquifers",
  "list_water_uses",
  "list_well_statuses",
  "list_booleans",
  "list_permit_types",
  "list_permit_terms",
  "current_wells_to_rolodex_owners_texts",
  "current_wells_to_rolodex_contacts_texts",
];

export const THEME = {
  MAIN_SIDEBAR_WIDTH: 258,
  DATETIME_FORMAT_SHORT: "MM/dd/yyyy hh:mm a",
  DATE_FORMAT_LONG: "MMM D YYYY, HH:mm A",
  DATE_FORMAT_SHORT: "MM/dd/yyyy",
  TIME_FORMAT_LONG: "hh:mm:ss a",
  TIME_FORMAT_SHORT: "hh:mm a",
};

export const CONFIG = {
  VERSION_LIMIT: 5,
};

export const ROUTES = {
  HOME: "/",
  PAGE_ABOUT: "/about",
  PAGE_CHANGELOG: "/changelog",
  PAGE_DOCUMENTATION: "/documentation",
  PAGE_SUPPORT: "/support",
  USER_ACCOUNT: "/account",
  USER_PROFILE: "/account/profile",
  USER_LOGOUT: "/account/logout",
  MODELS: "/models",
  PRIVATE: "/private",
  NOTFOUND: "/404",
  PAGE_BLANK: "/coming-soon",
  PAGE_DASHBOARD: "/dashboard",
  PAGE_DOCS_INTRODUCTION: "/documentation/introduction",
  PAGE_DOCS_GETTING_STARTED: "/documentation/getting-started",
  PAGE_DOCS_CRUD: "/documentation/crud",
  PAGE_DOCS_DEPLOY: "/documentation/deploy",
  PAGE_DOCS_STATE_MANAGEMENT: "/documentation/state-management",
  PAGE_DOCS_SUPPORT: "/documentation/support",
  PUBLIC_MAP: "/public-map",
};

export const CONTENT_NODE_STATUS_IDS = {
  DRAFT: 1,
  PUBLISHED: 2,
  UPDATED: 3,
};

export const CONTENT_NODE_STATUS_NAMES = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  UPDATED: "Updated",
};

export const CONTENT_NODE_STATUS_DESCRIPTIONS = {
  DRAFT: "Record is hidden from visitors. Good for works-in-progress.",
  PUBLISHED: "Record is visible to visitors.",
  UPDATED: "Record is published but has unpublished changes saved.",
};

// Symbols
export const AUTH_SIGN_IN_REQUEST = "AUTH_SIGN_IN_REQUEST";
export const AUTH_SIGN_IN_SUCCESS = "AUTH_SIGN_IN_SUCCESS";
export const AUTH_SIGN_IN_FAILURE = "AUTH_SIGN_IN_FAILURE";
export const AUTH_SIGN_OUT = "AUTH_SIGN_OUT";
export const AUTH_SIGN_UP_REQUEST = "AUTH_SIGN_UP_REQUEST";
export const AUTH_SIGN_UP_SUCCESS = "AUTH_SIGN_UP_SUCCESS";
export const AUTH_SIGN_UP_FAILURE = "AUTH_SIGN_UP_FAILURE";
export const AUTH_RESET_PASSWORD_REQUEST = "AUTH_RESET_PASSWORD_REQUEST";
export const AUTH_RESET_PASSWORD_SUCCESS = "AUTH_RESET_PASSWORD_SUCCESS";
export const AUTH_RESET_PASSWORD_FAILURE = "AUTH_RESET_PASSWORD_FAILURE";
export const AUTH_METADATA_REFRESH = "AUTH_METADATA_REFRESH";

export const CRUD_VIEW_MODES = {
  ADD: "ADD",
  EDIT: "EDIT",
  READONLY: "READONLY",
};

export const CRUD_FIELD_TYPES = {
  TEXT: "TEXT",
  MULTILINE_TEXT: "MULTILINE_TEXT",
  EMAIL: "EMAIL",
  DROPDOWN: "DROPDOWN",
  NUMBER: "NUMBER",
  DATE: "DATE",
  TIME: "TIME",
  DATETIME: "DATETIME",
  CUSTOM: "CUSTOM",
  DIVIDER: "DIVIDER",
  SECTION_HEADER: "SECTION_HEADER",
  SPLIT_STRING_DROPDOWN: "SPLIT_STRING_DROPDOWN",
  READ_ONLY_ARRAY_OF_LINKS: "READ_ONLY_ARRAY_OF_LINKS",
  READ_ONLY_ARRAY_OF_STRINGS: "READ_ONLY_ARRAY_OF_STRINGS",
};

export const CRUD_DISPLAY_MODES = {
  TABLE: "TABLE",
  CARD: "CARD",
  LIST: "LIST",
};

export const CRUD_FORM_SUBMIT_TYPES = {
  SAVE: "SAVE",
  PUBLISH: "PUBLISH",
};

export const DIALOG_TYPES = {
  UNSAVED: "UNSAVED",
  DELETE: "DELETE",
  EVOLVE: "EVOLVE",
  DEVOLVE: "DEVOLVE",
};

export const THEMES = {
  DEFAULT: "DEFAULT",
  DARK: "DARK",
  LIGHT: "LIGHT",
};

export const THEME_SELECTED = "THEME_SELECTED";

// Redux Actions
export const ACTIONS = {
  APP_CRUD_MODEL_UPDATE: "APP_CRUD_MODEL_UPDATE",

  CRUD_MODEL_FIND_REQUEST: "CRUD_MODEL_FIND_REQUEST",
  CRUD_MODEL_FIND_SUCCESS: "CRUD_MODEL_FIND_SUCCESS",
  CRUD_MODEL_FIND_FAILURE: "CRUD_MODEL_FIND_FAILURE",

  CRUD_MODEL_FETCH_REQUEST: "CRUD_MODEL_FETCH_REQUEST",
  CRUD_MODEL_FETCH_SUCCESS: "CRUD_MODEL_FETCH_SUCCESS",
  CRUD_MODEL_FETCH_FAILURE: "CRUD_MODEL_FETCH_FAILURE",

  CRUD_MODEL_CREATE_REQUEST: "CRUD_MODEL_CREATE_REQUEST",
  CRUD_MODEL_CREATE_SUCCESS: "CRUD_MODEL_CREATE_SUCCESS",
  CRUD_MODEL_CREATE_FAILURE: "CRUD_MODEL_CREATE_FAILURE",

  CRUD_MODEL_UPDATE_REQUEST: "CRUD_MODEL_UPDATE_REQUEST",
  CRUD_MODEL_UPDATE_SUCCESS: "CRUD_MODEL_UPDATE_SUCCESS",
  CRUD_MODEL_UPDATE_FAILURE: "CRUD_MODEL_UPDATE_FAILURE",

  CRUD_MODEL_CREATE_AND_PUBLISH_REQUEST:
    "CRUD_MODEL_CREATE_AND_PUBLISH_REQUEST",
  CRUD_MODEL_CREATE_AND_PUBLISH_SUCCESS:
    "CRUD_MODEL_CREATE_AND_PUBLISH_SUCCESS",
  CRUD_MODEL_CREATE_AND_PUBLISH_FAILURE:
    "CRUD_MODEL_CREATE_AND_PUBLISH_FAILURE",

  CRUD_MODEL_UPDATE_AND_PUBLISH_REQUEST:
    "CRUD_MODEL_UPDATE_AND_PUBLISH_REQUEST",
  CRUD_MODEL_UPDATE_AND_PUBLISH_SUCCESS:
    "CRUD_MODEL_UPDATE_AND_PUBLISH_SUCCESS",
  CRUD_MODEL_UPDATE_AND_PUBLISH_FAILURE:
    "CRUD_MODEL_UPDATE_AND_PUBLISH_FAILURE",

  CRUD_MODEL_DELETE_REQUEST: "CRUD_MODEL_DELETE_REQUEST",
  CRUD_MODEL_DELETE_SUCCESS: "CRUD_MODEL_DELETE_SUCCESS",
  CRUD_MODEL_DELETE_FAILURE: "CRUD_MODEL_DELETE_FAILURE",

  CRUD_MODEL_PUBLISH_REQUEST: "CRUD_MODEL_PUBLISH_REQUEST",
  CRUD_MODEL_PUBLISH_SUCCESS: "CRUD_MODEL_PUBLISH_SUCCESS",
  CRUD_MODEL_PUBLISH_FAILURE: "CRUD_MODEL_PUBLISH_FAILURE",

  CRUD_MODEL_UNPUBLISH_REQUEST: "CRUD_MODEL_UNPUBLISH_REQUEST",
  CRUD_MODEL_UNPUBLISH_SUCCESS: "CRUD_MODEL_UNPUBLISH_SUCCESS",
  CRUD_MODEL_UNPUBLISH_FAILURE: "CRUD_MODEL_UNPUBLISH_FAILURE",

  CRUD_MODEL_ENABLE_REQUEST: "CRUD_MODEL_ENABLE_REQUEST",
  CRUD_MODEL_ENABLE_SUCCESS: "CRUD_MODEL_ENABLE_SUCCESS",
  CRUD_MODEL_ENABLE_FAILURE: "CRUD_MODEL_ENABLE_FAILURE",

  CRUD_MODEL_DISABLE_REQUEST: "CRUD_MODEL_DISABLE_REQUEST",
  CRUD_MODEL_DISABLE_SUCCESS: "CRUD_MODEL_DISABLE_SUCCESS",
  CRUD_MODEL_DISABLE_FAILURE: "CRUD_MODEL_DISABLE_FAILURE",
};
