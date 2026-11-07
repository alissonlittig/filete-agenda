import { expect, test } from 'vitest'
import { PLANS, price, yearlySaving } from './pricing.js'
test('mensal mantém o valor de tabela', () => expect(price(99, false)).toBe(99))
test('anual aplica 20% de desconto', () => expect(price(99, true)).toBe(79))
test('economia anual do plano Casa', () => expect(yearlySaving(99)).toBe(238))
test('exatamente um plano em destaque', () => expect(PLANS.filter((p) => p.featured)).toHaveLength(1))
