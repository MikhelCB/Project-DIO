import { screen, render } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

describe("Layout", () => {
  render(
    <BrowserRouter>
      <Layout>Meu APP</Layout>
    </BrowserRouter>
  );

  it("Deve Renderizar a mensagem meu APP", () => {
    const app = screen.getByText("Meu APP");

    expect(app).toBeInTheDocument();
  });
});
