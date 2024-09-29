import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import useBreakpoints from "@hooks/useBreakpoints";
import { describe, expect, it, Mock, vi } from "vitest";

vi.mock("@hooks/useBreakpoints");

describe("Footer component", () => {
  it("renders all sections correctly", () => {
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/subscribe to receive our latest update/i)
    ).toBeInTheDocument();
  });

  it("renders footer links correctly", () => {
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/security/i)).toBeInTheDocument();
    expect(screen.getByText(/legal/i)).toBeInTheDocument();
    expect(screen.getByText(/privacy/i)).toBeInTheDocument();
  });

  it("renders copyright text correctly", () => {
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/© 2023 Tyme - Edit. All rights reserved./i)
    ).toBeInTheDocument();
  });

  it("renders sections in column layout on tablet", () => {
    (useBreakpoints as Mock).mockReturnValue({ isTablet: true });

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const container = screen.getByTestId("section-container");

    expect(container).toHaveStyle("flex-direction: column");
  });

  it("renders sections in row layout on non-tablet", () => {
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const container = screen.getByTestId("section-container");

    expect(container).toHaveStyle("flex-direction: row");
  });
});
