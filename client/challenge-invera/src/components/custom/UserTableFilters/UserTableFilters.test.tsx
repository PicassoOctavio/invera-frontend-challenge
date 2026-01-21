import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsersTableFilters } from "./UserTableFilters";

vi.mock("react-redux", () => ({
  useDispatch: () => vi.fn(),
  useSelector: vi.fn(() => ({
    search: "",
    statusFilter: "",
  })),
}));

describe("UsersTableFilters", () => {
  it("renders search input and title", () => {
    render(<UsersTableFilters />);

    expect(screen.getByText("All Users")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for...")).toBeInTheDocument();
  });
});
