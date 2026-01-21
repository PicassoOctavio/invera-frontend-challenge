import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PageHeader } from "./PageHeader";

describe("PageHeader", () => {
  const mockHandleClick = vi.fn();

  it("renders title and button correctly", () => {
    render(
      <PageHeader
        title="Users"
        btnTitle="Add User"
        handleClick={mockHandleClick}
      />,
    );

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Add User")).toBeInTheDocument();
  });

  it("calls handleClick when button is clicked", () => {
    render(
      <PageHeader
        title="Users"
        btnTitle="Add User"
        handleClick={mockHandleClick}
      />,
    );

    const button = screen.getByText("Add User");
    fireEvent.click(button);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with empty props", () => {
    render(<PageHeader title="" btnTitle="" handleClick={mockHandleClick} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
