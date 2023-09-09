import { describe, expect, test } from "bun:test"

describe("bun env", () => {
	test("should alias process env", () => {
		expect(Bun.env).toBe(process.env)
	})
})
