import { render, screen } from "@testing-library/react";
import Author from "./Author";
import { describe, expect, it } from "vitest";

describe("Author component", () => {
  it("renders the author's name", () => {
    render(<Author avatar="avatar-url" name="John Doe" isVerified={false} />);

    const nameElement = screen.getByText(/John Doe/i);

    expect(nameElement).toBeInTheDocument();
  });

  it("renders the author's avatar", () => {
    render(<Author avatar="avatar-url" name="John Doe" isVerified={false} />);

    const avatarElement = screen.getByAltText(/author-avatar/i);

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", "avatar-url");
  });

  it("renders the verified icon when the author is verified", () => {
    render(<Author avatar="avatar-url" name="John Doe" isVerified={true} />);

    const verifiedIcon = screen.getByTestId("author-verified-icon");

    expect(verifiedIcon).toBeInTheDocument();
  });

  it("does not render the verified icon when the author is not verified", () => {
    render(<Author avatar="avatar-url" name="John Doe" isVerified={false} />);

    const verifiedIcon = screen.queryByTestId("author-verified-icon");

    expect(verifiedIcon).toBeNull();
  });
});
