import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts';

export const FarmingCenterAddress = Address.fromString("0x481FcFa00Ee6b2384FF0B3c3b5b29aD911c1AAA7")

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)