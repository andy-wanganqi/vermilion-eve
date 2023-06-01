import { createBrowserRouter } from "react-router-dom";

import Workspace from "./Workspace";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import DashboardPage from "../pages/DashboardPage";
import LocationManagerPage from "../pages/LocationManagerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: "settings",
        element: <SettingsPage />,
        // children: [{
        //   errorElement: <ErrorPage />,
        //   children: [
        //     { index: true, element: <StartSettingsWidget /> },
        //     {
        //       path: "blueprint/:id",
        //       loader: blueprintLoader,
        //       element: <BlueprintSettingWidget />,
        //     },
        //     {
        //       path: "structure",
        //       element: <StructureSettingWidget />
        //     }
        //   ]
        // }]
      },
      {
        path: "location",
        element: <LocationManagerPage />,
        children: [
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
