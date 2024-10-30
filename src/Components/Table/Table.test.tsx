import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  render(<Table></Table>);

  it("Deve Exibir os itens na tabela", () => {
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Front-end")).toBeInTheDocument();
  });
});
