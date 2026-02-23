#!/usr/bin/env bun
/**
 * Calculator CLI - Perform mathematical calculations with precision.
 * Usage: bun .cursor/skills/calculator/scripts/cli.ts '<json_operations>'
 *
 * Input format:
 * [{"operator":"add","operands":[1,2,3]},{"operator":"multiply","operands":[4,5]}]
 *
 * Operators: add, subtract, multiply, divide
 */

import { runOperations, type Operation } from '../src/calculator'

function main() {
	const input = process.argv[2]

	if (!input) {
		console.error('Usage: bun cli.ts \'<json_operations>\'')
		console.error(
			'Example: bun cli.ts \'[{"operator":"add","operands":[1,2,3]}]\''
		)
		process.exit(1)
	}

	try {
		const operations: Operation[] = JSON.parse(input)

		if (!Array.isArray(operations)) {
			throw new Error('Input must be a JSON array of operations')
		}

		const results = runOperations(operations)
		console.log(JSON.stringify({ results }, null, 2))
	} catch (error) {
		if (error instanceof SyntaxError) {
			console.error('Error: Invalid JSON input')
			process.exit(1)
		}
		console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
		process.exit(1)
	}
}

main()
