"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { setUser } from "@/store/slices/auth.slice";
import { useAppDispatch } from "@/store/hooks";

export default function GoogleLoginButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="w-full [&>div]:!w-full">
      <GoogleLogin
        theme="outline"
        size="large"
        width="100%"
        shape="rectangular"
        text="continue_with"
        onSuccess={async (credentialResponse) => {
          try {
            const response = await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({
                idToken: credentialResponse.credential,
              }),
            });

            const data = await response.json();

            if (data.success) {
              dispatch(setUser(data.user));
              toast.success("Signed in with Google");
              router.replace("/dashboard");
              return;
            }

            toast.error(data.message ?? "Google sign-in failed");
          } catch {
            toast.error("Google sign-in failed");
          }
        }}
        onError={() => {
          toast.error("Google sign-in was cancelled");
        }}
      />
    </div>
  );
}
