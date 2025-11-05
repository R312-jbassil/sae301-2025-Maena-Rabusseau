import pb from "../../utils/pb";
import { Collections } from "../../utils/pocketbase-types";

export const POST = async ({ request, cookies }) => {
    // Récupère l'email et le mot de passe envoyés dans la requête
    const { email, password } = await request.json();
    try {
        // Authentifie l'utilisateur avec PocketBase en utilisant email et mot de passe
        const authData = await pb.collection(Collections.Users).authWithPassword(email, password);

        // Enregistre le token d'authentification dans un cookie sécurisé
        // Définit le cookie d'authentification avec les données exportées de PocketBase
        const cookieVal = pb.authStore.exportToCookie();
        if (cookieVal) {
            cookies.set("pb_auth", cookieVal, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 365 * 24 * 60 * 60 // 1 an en secondes
            });
        }
        // Retourne les informations de l'utilisateur authentifié
        return new Response(JSON.stringify({ user: authData.record }), { status: 200 });
    } catch (err) {
        // En cas d'erreur d'authentification, retourne une erreur
        console.error("Erreur de connexion :", err);
        return new Response(JSON.stringify({ error: "Identifiants invalides" }), { status: 401 });
    }
};
