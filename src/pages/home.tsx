import Layout from "../Components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="col-4 m-auto">
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="gitUser" className="form-label">
            Usuário do Github
          </label>
          <input
            className="form-control"
            id="gitUser"
            aria-describedby="UserHelp"
          />
          <div id="emailHelp" className="form-text">
            Informe seu usuário do GitHub
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Entrar
        </button>
      </div>
    </Layout>
  );
};

export default Home;
