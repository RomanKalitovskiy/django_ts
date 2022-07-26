import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TopHeaderNavItem } from "./TopHeaderNavItem";

test("renders learn react link", () => {
  const page = { title: "Про нас", url: "/about", component: () => <>1</> };

  const { getByText } = render(
    <BrowserRouter>
      <TopHeaderNavItem page={page} />
    </BrowserRouter>,
  );
  const elem = getByText(page.title);
  expect(elem).toHaveAttribute("href", page.url);
  expect(elem).toBeInTheDocument();
});
