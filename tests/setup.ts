import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock window.open
vi.stubGlobal("open", vi.fn());

// Mock navigator.share
Object.defineProperty(navigator, "share", {
  value: vi.fn(),
  writable: true,
});

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
  writable: true,
});
