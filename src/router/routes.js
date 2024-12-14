import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

import NotFound from "@/pages/NotFoundPage.vue";

const SignIn = () =>
  import("@/pages/Auth/SignIn.vue");
const SignUp = () =>
  import("@/pages/Auth/SignUp.vue");
const ResetPassword = () =>
  import("@/pages/Auth/ResetPassword.vue");

const Dashboard = () =>
  import("@/pages/Dashboard.vue");
const Users = () =>
  import("@/pages/Users.vue");
const UserProfile = () =>
  import("@/pages/UserProfile.vue");
const Notifications = () =>
  import("@/pages/Notifications.vue");
const Icons = () =>
  import("@/pages/Icons.vue");
const Maps = () => 
  import("@/pages/Maps.vue");
const Typography = () =>
  import("@/pages/Typography.vue");
const TableList = () =>
  import("@/pages/TableList.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: SignIn
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "users",
        name: "users",
        component: Users,
      },
      {
        path: "user/:id",
        name: "user",
        component: UserProfile,
      },
      {
        path: "profile",
        name: "profile",
        component: UserProfile,
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },
    ],
  },
  { path: "*", component: NotFound },
];

export default routes;
