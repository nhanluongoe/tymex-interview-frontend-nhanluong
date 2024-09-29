// import { render, screen } from '@testing-library/react'
// import { describe, it } from 'vitest'
// import TokenCard from '../components/TokenCard'

// describe('App', () => {
//   it('renders the App component', () => {
//     render(<TokenCard name="" tier='' />)

//     screen.debug(); // prints out the jsx in the App component unto the command line
//   })

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TokenCard from "./TokenCard";

describe("TokenCard", () => {
  const defaultProps = {
    name: "Sample Token",
    avatar: "sample-avatar-url",
    tier: "rare",
    price: 1.5,
    author: "Author Name",
    authorAvatar: "author-avatar-url",
  };

  it("renders the TokenCard component with correct props", () => {
    render(<TokenCard {...defaultProps} />);

    expect(screen.getByText("Sample Token")).toBeInTheDocument();
    expect(screen.getByText("rare")).toBeInTheDocument();
    expect(screen.getByText("1.5 ETH")).toBeInTheDocument();
    expect(screen.getByText("Author Name")).toBeInTheDocument();
  });

  it("renders the avatar image with correct src and alt attributes", () => {
    render(<TokenCard {...defaultProps} />);

    const avatarImg = screen.getByAltText("avatar");

    expect(avatarImg).toHaveAttribute("src", "sample-avatar-url");
  });

  it("renders the correct background for the tier", () => {
    render(<TokenCard {...defaultProps} />);

    const avatarImg = screen.getByAltText("avatar");

    expect(avatarImg).toHaveStyle(
      "background: linear-gradient(90deg, rgba(67,168,246,1) 0%, rgba(87,124,242,1) 100%)"
    );
  });

  it("renders the EthIcon component", () => {
    render(<TokenCard {...defaultProps} />);

    const ethIcon = screen.getByTestId("eth-icon");

    expect(ethIcon).toBeInTheDocument();
  });

  it("renders the Author component with correct props", () => {
    render(<TokenCard {...defaultProps} />);

    const authorAvatarImg = screen.getByAltText("author-avatar");

    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(authorAvatarImg).toHaveAttribute("src", "author-avatar-url");
  });
});
