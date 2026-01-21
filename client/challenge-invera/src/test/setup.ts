import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Mock para react-redux - mantener Provider real
vi.mock("react-redux", async () => {
  const actual =
    await vi.importActual<typeof import("react-redux")>("react-redux");
  return {
    ...actual,
    useSelector: vi.fn((selector) => {
      const defaultState = {
        usersTable: {
          page: 1,
          limit: 6,
          search: "",
          sortBy: "",
          sortOrder: "asc",
          statusFilter: "",
        },
      };
      return selector ? selector(defaultState) : defaultState;
    }),
    useDispatch: vi.fn(() => vi.fn()),
  };
});

// Mock para @tanstack/react-query
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(() => ({
    data: null,
    isLoading: false,
    isError: false,
    error: null,
    refetch: vi.fn(),
  })),
  useMutation: vi.fn(() => ({
    mutate: vi.fn(),
    mutateAsync: vi.fn(),
    isLoading: false,
    isError: false,
    error: null,
  })),
  QueryClient: vi.fn(() => ({
    getQueryData: vi.fn(),
    setQueryData: vi.fn(),
    invalidateQueries: vi.fn(),
  })),
  QueryClientProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
