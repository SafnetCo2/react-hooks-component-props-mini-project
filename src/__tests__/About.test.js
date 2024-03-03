import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import logo from "../assets/logo";

describe("About Component", () => {
  test("renders a <aside> element", () => {
    render(<About />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
    render(<About imageSrc={logo} />);
    const img = screen.getByAltText("blog logo");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(logo);
  });

  test("uses a default value for the image if no image is passed as a prop", () => {
    render(<About />);
    const img = screen.getByAltText("blog logo");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("https://via.placeholder.com/215");
  });

  test("renders a <p> with the about text", () => {
    const aboutText = "About this blog";
    render(<About about={aboutText} />);
    expect(screen.getByText(aboutText)).toBeInTheDocument();
  });

  test("renders a default about text if no about prop is passed", () => {
    render(<About />);
    expect(screen.getByText("Default about text")).toBeInTheDocument();
  });
});
