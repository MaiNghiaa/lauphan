import { lazy, memo, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Porlet from "../Pages/Porlet/Porlet";
import News from "../Pages/News/News";
import BookingPage from "../Pages/BookingPage/BookingPage";
import AddressPage from "../Pages/AddressPage/AddressPage";
import AuthPage from "../Pages/AuthenPage/AuthPage";
import {
  MAINMENU,
  PORLETPAGE,
  NEWSPAGE,
  BOOKINGPAGE,
  ADDRESSPAGE,
  AUTHENPAGE,
} from "./Path";

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
        { path: MAINMENU, element: <LandingPage /> },
        { path: PORLETPAGE, element: <Porlet /> },
        { path: NEWSPAGE, element: <News /> },
        { path: BOOKINGPAGE, element: <BookingPage /> },
        { path: ADDRESSPAGE, element: <AddressPage /> },
        { path: AUTHENPAGE, element: <AuthPage /> },
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
