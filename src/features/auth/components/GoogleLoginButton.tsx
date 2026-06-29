"use client";

import { GoogleLogin } from "@react-oauth/google";

export default function GoogleLoginButton() {
  return (
    <GoogleLogin
      theme="outline"
      size="large"
      width="100%"
      shape="rectangular"
      onSuccess={async (credentialResponse) => {
        const response = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            idToken: credentialResponse.credential,
          }),
        });

        const data = await response.json();

        console.log(data);

        if (data.success) {
          window.location.href = "/dashboard";
        }
      }}
      onError={() => {
        console.error("Google Login Failed");
      }}
    />
  );
}
