import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AddCollateral,
  BuyOption,
  DebugEvent,
  ExerciseOption,
  OwnershipTransferred,
  RedeemCollateral,
  SellOption
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleAddCollateral(event: AddCollateral): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.from = event.params.from
  entity.collateral = event.params.collateral

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allowance(...)
  // - contract.calCollateralWorth(...)
  // - contract.calOptionsOccupied(...)
  // - contract.calculateCollateralRate(...)
  // - contract.checkAddressPermission(...)
  // - contract.checkAllowance(...)
  // - contract.delegateToImplementation(...)
  // - contract.delegateToViewImplementation(...)
  // - contract.getALLCollateralinfo(...)
  // - contract.getAvailableCollateral(...)
  // - contract.getCollateralPoolAddress(...)
  // - contract.getCollateralRate(...)
  // - contract.getFPTCoinAddress(...)
  // - contract.getImplementation(...)
  // - contract.getInputAmountRange(...)
  // - contract.getLeftCollateral(...)
  // - contract.getNetWorthBalance(...)
  // - contract.getOccupiedCollateral(...)
  // - contract.getOptionsPoolAddress(...)
  // - contract.getOptionsPrice(...)
  // - contract.getOptionsPriceAddress(...)
  // - contract.getOracleAddress(...)
  // - contract.getPriceRateRange(...)
  // - contract.getRealBalance(...)
  // - contract.getTokenNetworth(...)
  // - contract.getTotalCollateral(...)
  // - contract.getUnlockedCollateral(...)
  // - contract.getUserPayingUsd(...)
  // - contract.getUserTotalWorth(...)
  // - contract.getWhiteList(...)
  // - contract.implementation(...)
  // - contract.isEligibleAddress(...)
  // - contract.isInputAmountInRange(...)
  // - contract.isOwner(...)
  // - contract.owner(...)
  // - contract.removeWhiteList(...)
  // - contract.userInputCollateral(...)
}

export function handleBuyOption(event: BuyOption): void {}

export function handleDebugEvent(event: DebugEvent): void {}

export function handleExerciseOption(event: ExerciseOption): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRedeemCollateral(event: RedeemCollateral): void {}

export function handleSellOption(event: SellOption): void {}
