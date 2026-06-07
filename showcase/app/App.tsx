export default function App() {
  return (
    <>
      <main>
        <h1>Register</h1>
        <form method="post">
          <fieldset>
            <legend>Enter new account details</legend>

            <label>
              <span>
                <b>Email</b>
              </span>

              <input type="email" required id="user-email" placeholder="Email address" />
            </label>

            <label>
              <span>
                <b>Password</b>
              </span>

              <input
                id="user-password"
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="Password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$"
                autoComplete="new-password"
              />
            </label>

            <blockquote className="primary">
              The password must be at least 8 characters long and must contain letters, numbers
              and special characters.
            </blockquote>

            <label>
              <span>
                <b>Confim password</b>
              </span>

              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                minLength={8}
                placeholder="Confim password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$"
              />
            </label>

            <hr />

            <div className="row disable-mobile">
              <button type="reset">Login</button>
              <div></div>
              <button type="submit" className="success">Register</button>
            </div>
          </fieldset>
        </form>
      </main>
      <footer>
        <div>
          Learn more about this service <a href="">here</a>.
        </div>
      </footer>
    </>
  );
}