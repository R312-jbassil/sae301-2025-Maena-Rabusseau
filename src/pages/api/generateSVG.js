export const POST = async ({ request }) => {
    // Affiche la requête dans la console pour le débogage
    console.log(request);


    const ACCESS_TOKEN = import.meta.env.OPENAI_API_KEY || import.meta.env.HF_TOKEN || import.meta.env.OPENROUTER_API_KEY;
    const BASE_URL = import.meta.env.OPENROUTER_BASE_URL || import.meta.env.HF_URL;


    // Extraction des message du corps de la requête
    const messages = await request.json();

    // Initialisation du client OpenAI (ou OpenRouter-compatible) avec le token/API key
    // On utilise import.meta.env (Astro/Vite) plutôt que process.env pour la compatibilité
    const apiKey = ACCESS_TOKEN;
    const openrouterBase = BASE_URL || "https://api.openrouter.ai/v1";

    // Essayer d'importer dynamiquement le package 'openai'. Si absent, on utilisera un stub.
    let client = null;
    try {
        const OpenAI = (await import("openai")).default;
        if (OpenAI && apiKey) {
            client = new OpenAI({ apiKey, baseURL: openrouterBase });
        } else if (!apiKey) {
            // Renvoyer un message clair au client indiquant l'absence de clé API
            return new Response(
                JSON.stringify({
                    error: true,
                    message:
                        "Aucune clé API trouvée. Ajoutez OPENAI_API_KEY ou HF_TOKEN (ou OPENROUTER_API_KEY en alias) dans votre fichier .env et redémarrez le serveur.",
                    hint: "Placez votre clé dans un fichier .env à la racine (voir .env.example) et ne la commitez pas.",
                }),
                { status: 400, headers: { "Content-Type": "application/json" } },
            );
        }
    } catch (err) {
        console.warn("Module 'openai' non installé ou impossible à importer, utilisation d'un stub. Erreur:", err?.message || err);
    }

    // Création du message système pour guider le modèle
    let SystemMessage =
    {
        role: "system", // Rôle du message
        content: "You are an SVG code generator. Generate SVG code for the following messages. Make sure to include ids for each part of the generated SVG.", // Contenu du message
    };

    // Appel à l'API pour générer le code SVG en utilisant le modèle spécifié
    let messageContent = "";

    if (client) {
        try {
            // Tentative d'appel à l'API réelle (structure possible selon l'implémentation du SDK)
            const chatCompletion = await client.chat?.completions?.create?.({
                model: "gpt-4o-mini",
                messages: [SystemMessage, ...messages],
            });
            const msg = chatCompletion?.choices?.[0]?.message || { content: "" };
            messageContent = msg.content || "";
        } catch (err) {
            console.error("Erreur lors de l'appel à l'API OpenAI, fallback au stub SVG:", err?.message || err);
            messageContent = "";
        }
    }

    if (!messageContent) {
        messageContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240" viewBox="0 0 480 240">
  <rect width="100%" height="100%" fill="#f8fafc" />
  <g id="monture" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M60 120c20-20 40-20 80-20s60 0 80 20" />
    <path d="M420 120c-20-20-40-20-80-20s-60 0-80 20" />
    <rect x="220" y="110" width="40" height="8" rx="4" fill="#111827" stroke="none" />
  </g>
  <g id="verres" fill="#e6eef6" stroke="#9fb8d6" stroke-width="1">
    <ellipse cx="150" cy="120" rx="60" ry="36" />
    <ellipse cx="330" cy="120" rx="60" ry="36" />
  </g>
    <text x="24" y="220" font-size="12" fill="#6b7280">SVG de démonstration — installez le package 'openai' et/ ou définissez OPENAI_API_KEY ou HF_TOKEN pour la génération réelle.</text>
</svg>
        `;
    }

    return new Response(JSON.stringify({ svg: messageContent }), {
        headers: { "Content-Type": "application/json" },
    });
};