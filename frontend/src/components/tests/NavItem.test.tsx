import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavItem from "components/NavItem";

test("renders learn react link", () => {
  const page = { title: "Про нас", url: "/about", component: () => <>1</> };

  const { getByText } = render(
    <BrowserRouter>
      <NavItem page={page} />
    </BrowserRouter>,
  );
  const elem = getByText(page.title);
  expect(elem).toHaveAttribute("href", page.url);
  expect(elem).toBeInTheDocument();
});
