import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts';

export const FarmingCenterAddress = Address.fromString("0x82831E9565cb574375596eFc090da465283E22A4")

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)