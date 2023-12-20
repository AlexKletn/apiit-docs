import {Route, Routes} from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout/MainLayout.tsx";
import MainPage from "@/pages/HomePage/MainPage.tsx";
import InstallationPage from "@/pages/InstallationPage/InstallationPage.tsx";
import GuidePage from "@/pages/GuidePage/GuidePage.tsx";
import ApiPage from "@/pages/ApiPage/ApiPage.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          key="mainpage"
          element={<MainPage />}
        />
        <Route
          path="installation"
          element={<InstallationPage />}
        />
        <Route
          path="guide"
          element={<GuidePage />}
        >
          <Route
            index
            element={<GuidePage />}
          />
          <Route
            path=":section"
            element={<GuidePage />}
          />
          <Route
            path=":section"
            element={<GuidePage />}
          >
            <Route
              path=":subSection"
              element={<GuidePage />}
            />
          </Route>
        </Route>
        <Route
          path="api-description"
          element={<ApiPage />}
        >
          <Route
            path=":section?"
            element={<ApiPage />}
          >
            <Route
              path=":name"
              element={<ApiPage />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes;
