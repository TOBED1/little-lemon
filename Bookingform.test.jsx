import { render, screen, fireEvent } from "@testing-library/react";
import Bookingform from "../components/BookingForm";

describe("Bookingform", () => {
  beforeEach(() => {
    render(<Bookingform />);
  });

  it("renders all form fields", () => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  it("shows error if form is submitted empty", () => {
    fireEvent.click(screen.getByRole("button", { name: /Book Now/i }));
    expect(screen.getByText(/All fields are required/i)).toBeInTheDocument();
  });

  it("validates minimum 1 guest", () => {
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: "0" } });
    fireEvent.click(screen.getByRole("button", { name: /Book Now/i }));
    expect(screen.getByText(/between 1 and 20 guests/i)).toBeInTheDocument();
  });

  it("accepts valid form submission", () => {
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "Derick" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "derick@example.com" } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-08-12" } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /Book Now/i }));
    expect(screen.queryByText(/All fields are required/i)).not.toBeInTheDocument();
  });
});
