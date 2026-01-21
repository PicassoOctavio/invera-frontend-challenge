// src/components/custom/UsersTable/UserTablePagination.test.tsx
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsersTablePagination } from "./UserTablePagination";

// Mock completo
vi.mock("react-redux", () => ({
  useDispatch: () => vi.fn(),
  useSelector: vi.fn(() => ({
    page: 1,
    limit: 6,
    search: "",
    sortBy: "",
    sortOrder: "asc",
    statusFilter: "",
  })),
  Provider: ({ children }: { children: React.ReactNode }) => children,
}));

describe("UsersTablePagination", () => {
  it("renders pagination controls", () => {
    render(<UsersTablePagination total={50} />);

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("1 / 9")).toBeInTheDocument();
  });

  it("disables Previous button on first page", () => {
    // Mock específico para page = 1
    vi.mocked(require("react-redux").useSelector).mockReturnValue({
      page: 1,
      limit: 6,
      search: "",
      sortBy: "",
      sortOrder: "asc",
      statusFilter: "",
    });

    render(<UsersTablePagination total={50} />);

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    // Mock específico para page = 9
    vi.mocked(require("react-redux").useSelector).mockReturnValue({
      page: 9, // Última página
      limit: 6,
      search: "",
      sortBy: "",
      sortOrder: "asc",
      statusFilter: "",
    });

    render(<UsersTablePagination total={50} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });
});
