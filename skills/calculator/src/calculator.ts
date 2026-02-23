/**
 * Core calculator logic - exported for testing and CLI consumption.
 */

export type Operator = 'add' | 'subtract' | 'multiply' | 'divide'

export interface Operation {
	operator: Operator
	operands: number[]
}

export interface CalculationResult {
	operation: string
	result: number
}

export function calculate(operation: Operation): number {
	const { operator, operands } = operation

	if (operands.length < 2) {
		throw new Error('Each operation requires at least 2 operands')
	}

	switch (operator) {
		case 'add':
			return operands.reduce((a, b) => a + b, 0)
		case 'subtract':
			return operands.reduce((a, b) => a - b)
		case 'multiply':
			return operands.reduce((a, b) => a * b, 1)
		case 'divide':
			if (operands.slice(1).some(n => n === 0)) {
				throw new Error('Division by zero')
			}
			return operands.reduce((a, b) => a / b)
	}
}

export function runOperations(operations: Operation[]): CalculationResult[] {
	return operations.map(op => ({
		operation: `${op.operator}(${op.operands.join(', ')})`,
		result: calculate(op)
	}))
}
