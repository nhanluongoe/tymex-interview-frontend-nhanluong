import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import useBreakpoints from "@hooks/useBreakpoints";
import useToggleShowOnScroll from "@modules/marketplace/hooks/useToggleShowOnScroll";
import { describe, beforeEach, test, vi, expect } from "vitest";
import { Mock } from "vitest";

// Mock the hooks
vi.mock("@hooks/useBreakpoints");
vi.mock("@modules/marketplace/hooks/useToggleShowOnScroll");

const NAVIGATION = [
  { name: "home", label: "Home", path: "" },
  { name: "about-us", label: "About us", path: "about" },
  { name: "marketplace", label: "Marketplace", path: "marketplace" },
  { name: "white-paper", label: "White paper", path: "white-paper" },
];

describe("Header component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders correctly when show is true and isTablet is false", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    NAVIGATION.forEach((nav) => {
      expect(screen.getByText(nav.label)).toBeInTheDocument();
    });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("does not render when show is false", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(false);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
  });

  test("renders Drawer when isTablet is true", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: true });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    NAVIGATION.forEach((nav) => {
      expect(screen.getByText(nav.label)).toBeInTheDocument();
    });
  });

  test("toggles Drawer open and close", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: true });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const drawer = screen.queryByTestId("drawer");

    expect(drawer).toBeInTheDocument();

    const homeLink = screen.getByText(NAVIGATION[0].label);

    fireEvent.click(homeLink);

    waitFor(() => expect(drawer).toBeNull());
  });

  test("renders LanguageSelector component", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId("language-selector")).toBeInTheDocument();
  });

  test("Drawer contains LanguageSelector component", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: true });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("language-selector")).toBeInTheDocument();
  });

  test("active link has correct styles", () => {
    (useToggleShowOnScroll as Mock).mockReturnValue(true);
    (useBreakpoints as Mock).mockReturnValue({ isTablet: false });

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    );

    const activeLink = screen.getByText("About us");
    expect(activeLink).toHaveStyle(
      "background: linear-gradient(90deg, #primary.main 0%, #primary.light 100%)"
    );
  });
});
