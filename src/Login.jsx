import React from 'react';

import { signInWithPopup } from 'firebase/auth';
import {auth, googleProvider} from './firebase.config';

const Login = () => {
    const googleLogin = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // Google user info
      const user = result.user;
      console.log("Logged in user:", user);
    })
    .catch((error) => {
      console.error("Login error:", error.message);
    });
};
    return (
        <div>

            <button
            onClick={googleLogin}
                    className="bg-red-500 text-white px-4 py-2 rounded"
               >
  Login with Google
</button>

            
        </div>
    );
};

export default Login;