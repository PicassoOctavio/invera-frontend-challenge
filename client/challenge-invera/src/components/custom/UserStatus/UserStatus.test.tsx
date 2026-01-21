// src/components/custom/UserStatus/UserStatus.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserStatus } from "./UserStatus";

describe("UserStatus", () => {
  it("renders online status", () => {
    render(<UserStatus status="Online" />);
    const badge = screen.getByText("Online");
    expect(badge).toBeInTheDocument();

    expect(badge).toHaveAttribute("class");
    const classes = badge.getAttribute("class") || "";
    expect(classes).toContain("bg-");
  });

  it("renders offline status", () => {
    render(<UserStatus status="Offline" />);
    const badge = screen.getByText("Offline");
    expect(badge).toBeInTheDocument();
  });

  it("handles different status text", () => {
    render(<UserStatus status="online" />);
    expect(screen.getByText("online")).toBeInTheDocument();

    render(<UserStatus status="offline" />);
    expect(screen.getByText("offline")).toBeInTheDocument();
  });
});
