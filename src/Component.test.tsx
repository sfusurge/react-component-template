import { render, screen } from "@testing-library/react";

import React from "react";

import { Component } from "./Component";

test("renders message", () => {
	render(<Component message="test message" />);

	const renderedElement = screen.getByText(/test message/);
	expect(renderedElement).toBeInTheDocument();
});
