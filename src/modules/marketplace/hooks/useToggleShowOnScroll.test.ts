import { renderHook, act } from "@testing-library/react-hooks";
import useToggleShowOnScroll from "./useToggleShowOnScroll";
import { beforeEach, describe, expect, it } from "vitest";

describe("useToggleShowOnScroll", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  it("should initialize with show as true", () => {
    const { result } = renderHook(() => useToggleShowOnScroll());
    expect(result.current).toBe(true);
  });

  it("should hide when scrolling down", () => {
    const { result } = renderHook(() => useToggleShowOnScroll());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    setTimeout(() => {
      expect(result.current).toBe(false);
    }, 100);
  });

  it("should show when scrolling up", () => {
    const { result } = renderHook(() => useToggleShowOnScroll());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    setTimeout(() => {
      act(() => {
        window.scrollY = 50;
        window.dispatchEvent(new Event("scroll"));
      });

      setTimeout(() => {
        expect(result.current).toBe(true);
      }, 100);
    }, 100);
  });

  it("should show when scroll position is less than 10", () => {
    const { result } = renderHook(() => useToggleShowOnScroll());

    act(() => {
      window.scrollY = 5;
      window.dispatchEvent(new Event("scroll"));
    });

    setTimeout(() => {
      expect(result.current).toBe(true);
    }, 100);
  });
});