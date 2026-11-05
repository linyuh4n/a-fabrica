import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/Header";
import { BrowserRouter } from "react-router-dom";

// Mock window.scrollTo
vi.stubGlobal("scrollTo", vi.fn());

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Header Component", () => {
  it("should render logo", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("A Fábrica")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Modalidades")).toBeInTheDocument();
    expect(screen.getByText("Planos")).toBeInTheDocument();
    expect(screen.getByText("Horários")).toBeInTheDocument();
    //expect(screen.getByText("Ferramentas")).toBeInTheDocument();
    expect(screen.getByText("Localização")).toBeInTheDocument();
  });

  it("should render WhatsApp button", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("FALE CONOSCO")).toBeInTheDocument();
  });

  it("should render mobile menu button", () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText("Abrir menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("should open mobile menu when button clicked", () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText("Abrir menu");
    fireEvent.click(menuButton);
    
    expect(screen.getByLabelText("Fechar menu")).toBeInTheDocument();
    expect(screen.getByText("Início")).toBeInTheDocument();
  });
});
