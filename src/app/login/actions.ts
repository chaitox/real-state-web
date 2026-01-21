"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // TODO: Use env var for API URL
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"; // Assuming API runs on 3001 locally? Or 3000? 
    // I'll stick to localhost:3001 which is common when 3000 is taken by web, 
    // BUT the admin platform said "http://api:3000" internally. 
    // If API is nesting in same repo, usually it has its own port.
    // I will guess 3001 for now, user can change later.

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            cache: "no-store",
        });

        if (!response.ok) {
            return { message: "Credenciales inválidas" };
        }

        const data = await response.json();

        // 1. Guardar Token en Cookie HTTP-Only
        (await cookies()).set("auth_token", data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
            sameSite: "strict",
        });

        // 2. Guardar Rol en Cookie legible por JS
        (await cookies()).set("user_role", data.user.role, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24,
            path: "/",
        });

    } catch (error) {
        console.error("Login Error:", error);
        return { message: "Error de conexión con el servidor" };
    }

    redirect("/dashboard");
}
