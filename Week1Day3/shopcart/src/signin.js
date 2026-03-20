import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleFacebookLogin = () => {
    const popup = window.open(
      "",
      "Facebook Login",
      "width=500,height=600,left=450,top=120"
    );

    if (!popup) {
      alert("Please allow popups for this demo.");
      return;
    }

    popup.document.write(`
      <html>
        <head>
          <title>Facebook Sign In</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #f0f2f5;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            .box {
              background: white;
              width: 340px;
              padding: 24px;
              border-radius: 12px;
              box-shadow: 0 8px 20px rgba(0,0,0,0.12);
              text-align: center;
            }
            h2 {
              color: #1877f2;
              margin-bottom: 16px;
            }
            input {
              width: 100%;
              padding: 12px;
              margin-bottom: 12px;
              border: 1px solid #dddfe2;
              border-radius: 6px;
              box-sizing: border-box;
            }
            button {
              width: 100%;
              padding: 12px;
              background: #1877f2;
              color: white;
              border: none;
              border-radius: 6px;
              font-size: 16px;
              cursor: pointer;
            }
            p {
              color: #666;
              font-size: 14px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="box">
            <h2>Facebook</h2>
            <input type="text" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button id="loginBtn">Log In</button>
            <p>Demo popup for assignment</p>
          </div>

          <script>
            document.getElementById("loginBtn").onclick = function() {
              localStorage.setItem("fbLoggedIn", "true");
              localStorage.setItem("fbUser", "Facebook User");
              window.opener.postMessage({ type: "FB_LOGIN_SUCCESS" }, "*");
              window.close();
            };
          </script>
        </body>
      </html>
    `);

    const receiveMessage = (event) => {
      if (event.data && event.data.type === "FB_LOGIN_SUCCESS") {
        window.removeEventListener("message", receiveMessage);
        navigate("/checkout");
      }
    };

    window.addEventListener("message", receiveMessage);
  };

  return (
    <Card className="auth-card shadow p-4">
      <Card.Body className="text-center">
        <h2 className="mb-3">Sign In</h2>
        <p className="text-muted mb-4">
          Please sign in with Facebook to continue to checkout.
        </p>

        <Button className="fb-btn px-4 py-2" onClick={handleFacebookLogin}>
          Sign in with Facebook
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SignIn;