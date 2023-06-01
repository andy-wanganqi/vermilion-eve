import { createBrowserRouter } from "react-router-dom";

import Workspace from "./Workspace";
import ErrorPage from "../pages/ErrorPage";
import BlueprintSettingWidget, { blueprintLoader }  from "../pages/SettingsPage/BlueprintSettingWidget";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "settings",
        element: <SettingsPage />,
        children: [
          {
            path: "blueprint/:id",
            loader: blueprintLoader,
            element: <BlueprintSettingWidget />,
          },
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
