import React, { useState } from "react";
import { useAuthStore } from "./authStore";

function Dummy() {
  const { userCredentials, dispatchEvent } = useAuthStore();

  return (
    <div className="flex bg-[#0F1112] h-screen justify-center items-center text-gray-300 text-xl">
      {userCredentials ? (
        <div className="flex flex-col items-center gap-4">
          <p>
            A verification email has been sent to{" "}
            <span className="text-sm">{userCredentials.user.email}</span>.
            Please verify your email.
          </p>
          <button
            className="flex w-fit justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
            onClick={() =>
              dispatchEvent({ name: "verify", user: userCredentials.user })
            }
          >
            Send Verification Again
          </button>

          <button
            className="flex w-fit justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
            onClick={() => dispatchEvent({ name: "logout" })}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p>No user is available to display. Please login or register again!</p>
      )}
    </div>
  );
}

export default Dummy;
