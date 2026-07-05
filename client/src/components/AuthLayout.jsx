import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-logo">Airbnb</h1>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;