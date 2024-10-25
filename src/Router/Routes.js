import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Porlet from "../Pages/Porlet/Porlet";
import News from "../Pages/News/News";

export const normalRoutes = [];
export const authRoutes = [];

const PageLayout = lazy(() => import("../Layouts/PageLayout"));

function Router() {
  const location = useLocation(); // Track current route location

  const routes = [
    {
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <PageLayout>
            <LandingPage />
          </PageLayout>
        </Suspense>
      ),
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/thuc-don", element: <Porlet /> },
        { path: "/tin-tuc", element: <News /> },
        // Add other routes here if necessary
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Use location.key for unique transitions
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <div>{element}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default memo(Router);
