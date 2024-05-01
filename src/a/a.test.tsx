import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { A } from "./a";

describe.concurrent("a", () => {
	afterEach(cleanup);

	test("check if h1 heading exists", ({ expect }) => {
		render(<A />);
		expect(screen.getByTestId("a-h1").textContent).toBe("a");
	});
});