import { expect, test, describe, it  } from 'vitest'
import { API_KEY, MarsRoverImages } from './MarsRoverImages'

import {
	render,
} from "@testing-library/react";

test('API Key check', () => {
    expect(API_KEY, 'zfpIuVyYaaKZETKqwLOst2vKrFubJaL4f0usFq7B')
})

describe("MarsRoverImages", () => {
	it("component renders without crashing", () => {
		render(<MarsRoverImages />);
	});
})