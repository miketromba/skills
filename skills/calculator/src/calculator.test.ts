import { describe, expect, test } from 'bun:test'
import { calculate } from './calculator'

describe('Calculator', () => {
	describe('Basic Operations', () => {
		test('add: 2 + 3 = 5', () => {
			expect(calculate({ operator: 'add', operands: [2, 3] })).toBe(5)
		})

		test('subtract: 10 - 4 = 6', () => {
			expect(calculate({ operator: 'subtract', operands: [10, 4] })).toBe(6)
		})

		test('multiply: 6 × 7 = 42', () => {
			expect(calculate({ operator: 'multiply', operands: [6, 7] })).toBe(42)
		})

		test('divide: 20 ÷ 4 = 5', () => {
			expect(calculate({ operator: 'divide', operands: [20, 4] })).toBe(5)
		})
	})

	describe('Negative Numbers', () => {
		test('add negative: -5 + 10 = 5', () => {
			expect(calculate({ operator: 'add', operands: [-5, 10] })).toBe(5)
		})

		test('subtract to negative: 5 - 10 = -5', () => {
			expect(calculate({ operator: 'subtract', operands: [5, 10] })).toBe(-5)
		})

		test('subtract negatives: -3 - (-7) = 4', () => {
			expect(calculate({ operator: 'subtract', operands: [-3, -7] })).toBe(4)
		})

		test('multiply neg × pos: -3 × 4 = -12', () => {
			expect(calculate({ operator: 'multiply', operands: [-3, 4] })).toBe(-12)
		})

		test('multiply neg × neg: -3 × -4 = 12', () => {
			expect(calculate({ operator: 'multiply', operands: [-3, -4] })).toBe(12)
		})

		test('divide neg ÷ pos: -12 ÷ 4 = -3', () => {
			expect(calculate({ operator: 'divide', operands: [-12, 4] })).toBe(-3)
		})

		test('divide neg ÷ neg: -12 ÷ -4 = 3', () => {
			expect(calculate({ operator: 'divide', operands: [-12, -4] })).toBe(3)
		})
	})

	describe('Zero Handling', () => {
		test('zero + zero = 0', () => {
			expect(calculate({ operator: 'add', operands: [0, 0] })).toBe(0)
		})

		test('zero × large = 0', () => {
			expect(calculate({ operator: 'multiply', operands: [0, 999999] })).toBe(0)
		})

		test('zero ÷ num = 0', () => {
			expect(calculate({ operator: 'divide', operands: [0, 5] })).toBe(0)
		})

		test('divide by zero throws', () => {
			expect(() =>
				calculate({ operator: 'divide', operands: [10, 0] })
			).toThrow('Division by zero')
		})

		test('divide by zero in chain throws', () => {
			expect(() =>
				calculate({ operator: 'divide', operands: [100, 2, 0] })
			).toThrow('Division by zero')
		})
	})

	describe('Multi-Operand Chaining', () => {
		test('add 5 numbers: 1+2+3+4+5 = 15', () => {
			expect(calculate({ operator: 'add', operands: [1, 2, 3, 4, 5] })).toBe(15)
		})

		test('multiply 3 numbers: 2×3×4 = 24', () => {
			expect(calculate({ operator: 'multiply', operands: [2, 3, 4] })).toBe(24)
		})

		test('subtract chain: 100-30-20-10 = 40', () => {
			expect(
				calculate({ operator: 'subtract', operands: [100, 30, 20, 10] })
			).toBe(40)
		})

		test('divide chain: 100÷2÷5 = 10', () => {
			expect(calculate({ operator: 'divide', operands: [100, 2, 5] })).toBe(10)
		})
	})

	describe('Precision & Scale', () => {
		test('small decimals: 1e-6 + 2e-6 = 3e-6', () => {
			expect(calculate({ operator: 'add', operands: [1e-6, 2e-6] })).toBe(3e-6)
		})

		test('tiny decimals: 1e-15 + 1e-15 = 2e-15', () => {
			expect(calculate({ operator: 'add', operands: [1e-15, 1e-15] })).toBe(
				2e-15
			)
		})

		test('division precision: 1 ÷ 3', () => {
			expect(calculate({ operator: 'divide', operands: [1, 3] })).toBeCloseTo(
				0.3333333333333333,
				15
			)
		})

		test('division tiny: 1 ÷ 1e9 = 1e-9', () => {
			expect(calculate({ operator: 'divide', operands: [1, 1e9] })).toBe(1e-9)
		})

		test('large × large: 1e6 × 1e6 = 1e12', () => {
			expect(calculate({ operator: 'multiply', operands: [1e6, 1e6] })).toBe(
				1e12
			)
		})

		test('float precision: 0.1 + 0.2 ≈ 0.3 (JS limitation)', () => {
			// This documents the known JS floating point behavior
			expect(calculate({ operator: 'add', operands: [0.1, 0.2] })).toBeCloseTo(
				0.3,
				10
			)
		})

		test('overflow: 1e308 × 2 = Infinity', () => {
			expect(calculate({ operator: 'multiply', operands: [1e308, 2] })).toBe(
				Infinity
			)
		})
	})
})
