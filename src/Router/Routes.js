import { lazy, memo, Suspense } from "react";
import { useRoutes, useLocation, Outlet } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Porlet from "../Pages/Porlet/Porlet";
import News from "../Pages/News/News";
import BookingPage from "../Pages/BookingPage/BookingPage";
import AddressPage from "../Pages/AddressPage/AddressPage";
import AuthPage from "../Pages/AuthenPage/AuthPage";
import RegisterPage from "../Pages/AuthenPage/RegisterPage";
import PageLayout from "../Layouts/PageLayout";
import AdminLayout from "../Layouts/AdminLayout";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

import {
  MAINMENU,
  PORLETPAGE,
  NEWSPAGE,
  BOOKINGPAGE,
  ADDRESSPAGE,
  AUTHENPAGE,
  REGISTER,
  DASHBOARD,
  INFORMATION,
  ACCOUNTS_MANAGEMENT,
  ORDER_MANAGEMENT,
  NEWS_MANAGEMENT,
  LOGINADMIN,
} from "./Path";

import Dashboard from "../Admin/Pages/Dashboard";
import LoginManagement from "../Admin/Pages/LoginManagement";
import AccountsManagement from "../Admin/Pages/AccountsManagement";
import NewsManagement from "../Admin/Pages/NewsManagement";
import OrderManagement from "../Admin/Pages/OrderManagement";
import UserProfile from "../Admin/Pages/UserProfile";

function Router() {
  const location = useLocation();

  const routes = [
    // Public routes
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
        { path: REGISTER, element: <RegisterPage /> },
      ],
    },

    {
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <>
            <LoginManagement />
          </>
        </Suspense>
      ),
      children: [{ path: LOGINADMIN, element: <LoginManagement /> }],
    },
    // Admin protected routes
    {
      element: (
        <ProtectedAdminRoute>
          <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
            <AdminLayout />
          </Suspense>
        </ProtectedAdminRoute>
      ),
      children: [
        { path: DASHBOARD, element: <Dashboard /> },
        { path: INFORMATION, element: <UserProfile /> },
        { path: ACCOUNTS_MANAGEMENT, element: <AccountsManagement /> },
        { path: ORDER_MANAGEMENT, element: <OrderManagement /> },
        { path: NEWS_MANAGEMENT, element: <NewsManagement /> },
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
