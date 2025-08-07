import { onAuthenticatedUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
const AuthCallbackPage = async () => {
  const auth = await onAuthenticatedUser();
  if (auth && (auth.status === 200 || auth.status === 201)) {
    redirect("/home");
  } else if (
    auth && (auth.status === 403 ||
    auth.status === 500 ||
    auth.status === 400)
  ) {
    redirect("/");
  } else {
    redirect("/");
  }
};

export default AuthCallbackPage;

//TODO: Implement the actual callback logic
