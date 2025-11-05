import pb from "../../utils/pb";


// Fonction pour gérer la déconnexion de l'utilisateur
export const POST = async ({ cookies }) => {
  cookies.delete("pb_auth", { path: "/" });
  return new Response(null, { status: 303, headers: { Location: '/' } });
}; 
export const GET = async ({ cookies }) => {
    try {
        pb.authStore.clear();
    } catch (e) {
        // ignore if pb isn't initialized or already cleared
    }
    cookies.delete("pb_auth", { path: "/" });
    return new Response(null, { status: 303, headers: { Location: '/' } });
};