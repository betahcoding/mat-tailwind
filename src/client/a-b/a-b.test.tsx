import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { AB } from "./a-b";

describe.concurrent("a-b", () => {
	afterEach(cleanup);

	test("check if h1 heading exists", ({ expect }) => {
		render(<AB />);
		expect(screen.getByTestId("a-b-h1").textContent).toBe("a b");
	});
});