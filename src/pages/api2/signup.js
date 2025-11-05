import PocketBase from "pocketbase";

export const POST = async ({ request, cookies }) => {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!email || !password) {
            return new Response(JSON.stringify({ error: true, message: "Email et mot de passe requis" }), { status: 400 });
        }

        const PB_URL = import.meta.env.PB_URL || "http://127.0.0.1:8090";
        const pb = new PocketBase(PB_URL);

       
        const createData = {
            email,
            password,
            passwordConfirm: password,
        };
        if (name) createData.name = name;

        const created = await pb.collection("users").create(createData);

        // Authentifier immédiatement l'utilisateur pour obtenir l'authStore
        const authData = await pb.collection("users").authWithPassword(email, password);

        // Exporter le cookie d'auth et le définir côté serveur
        const cookieVal = pb.authStore.exportToCookie();
        if (cookieVal) {
            cookies.set("pb_auth", cookieVal, {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                secure: import.meta.env.NODE_ENV === "production",
                maxAge: 365 * 24 * 60 * 60,
            });
        }

        return new Response(JSON.stringify({ user: authData.record }), { status: 201 });
    } catch (err) {
        console.error("Erreur signup:", err);
        // si PocketBase renvoie une erreur structurée, essayons d'extraire le message
        let message = "Erreur lors de la création du compte";
        try {
            const json = await err?.response?.json?.();
            if (json?.message) message = json.message;
        } catch (e) {
            // ignore
        }
        return new Response(JSON.stringify({ error: true, message }), { status: 500 });
    }
};
