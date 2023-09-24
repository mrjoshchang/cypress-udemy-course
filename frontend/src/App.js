import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import AboutPage from "./pages/About";
import ButtonsPage from "./pages/playground/Buttons";
import CheckboxPage from "./pages/playground/Checkbox";
import DropdownsPage from "./pages/playground/Dropdowns";
import ErrorPage from "./pages/Error";
import FormPage from "./pages/playground/Form";
import HomePage from "./pages/Home";
import PlaygroundPage from "./pages/Playground";
import RadioPage from "./pages/playground/RadioButton";
import RootLayout from "./pages/Root";
import TextPage from "./pages/playground/Text";
import AlertsPage from "./pages/playground/Alerts";
import TablePage from "./pages/playground/Table";
import IframePage from "./pages/playground/Iframe";
import AttributesPage from "./pages/playground/Attributes";
import DownloadsPage from "./pages/playground/Downloads";
import UploadPage from "./pages/playground/Upload";
import TriggerPage from "./pages/playground/Trigger";
import ScrollPage from "./pages/playground/Scroll";
import ToDoListPage from "./pages/playground/ToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/playground", element: <PlaygroundPage /> },
      { path: "/playground/alerts", element: <AlertsPage /> },
      { path: "/playground/attributes", element: <AttributesPage /> },
      { path: "/playground/buttons", element: <ButtonsPage /> },
      { path: "/playground/checkbox", element: <CheckboxPage /> },
      { path: "/playground/dropdowns", element: <DropdownsPage /> },
      { path: "/playground/downloads", element: <DownloadsPage /> },
      { path: "/playground/form", element: <FormPage /> },
      { path: "/playground/iframe", element: <IframePage /> },
      { path: "/playground/radio", element: <RadioPage /> },
      { path: "/playground/scroll", element: <ScrollPage /> },
      { path: "/playground/table", element: <TablePage /> },
      { path: "/playground/text", element: <TextPage /> },
      { path: "/playground/trigger", element: <TriggerPage /> },
      { path: "/playground/upload", element: <UploadPage /> },
      { path: "/playground/todo-list", element: <ToDoListPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
