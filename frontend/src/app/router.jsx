// src/app/router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout, ProtectedRoute } from "@/shared";
import { Login } from "@/features/auth";
import { UserListPage, UserRegisterForm } from "@/features/users";
import { AccessPage } from "@/features/access";
import HomePage from "@/features/home/page/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/login" replace />,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "register",
            element: <UserRegisterForm />,
        },
        ],
    },
    {
        path: "/dashboard",
        element: (
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
        ),
        children: [
        { path: "userList", element: <UserListPage /> },
        { path: "userCreate", element: <UserRegisterForm /> },
        { path: "home", element: <HomePage /> },
        { path: "access", element: <AccessPage /> },
        ],
    },
]);

export default router;