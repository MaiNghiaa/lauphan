import { lazy, memo, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Porlet from "../Pages/Porlet/Porlet";
import News from "../Pages/News/News";
import BookingPage from "../Pages/BookingPage/BookingPage";
import AddressPage from "../Pages/AddressPage/AddressPage";

export const normalRoutes = [];
export const authRoutes = [];

const PageLayout = lazy(() => import("../Layouts/PageLayout"));
function Router() {
  const location = useLocation();

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
        { path: "/dat-ban", element: <BookingPage /> },
        { path: "/dia-chi", element: <AddressPage /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <div>{element}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default memo(Router);
