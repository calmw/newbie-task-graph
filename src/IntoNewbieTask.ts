import {ClaimRecord as ClaimRecordEvent} from "../generated/NewbieTask/NewbieTask"
import {NewbieTask} from "../generated/schema"
import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts";


export function handleClaimRecordLog(event: ClaimRecordEvent): void {
    let newbieTask = new NewbieTask(createEventID(event.block.number, event.logIndex))
    // let newbieTask = new NewbieTask(event.params.tid.toString())
    newbieTask.tid = event.params.tid
    newbieTask.user = event.params.user
    newbieTask.claimType = event.params.claimType
    newbieTask.amount = event.params.amount
    newbieTask.txHash = event.transaction.hash
    newbieTask.ctime = event.params.ctime
    newbieTask.save()
}


function createEventID(blockNumber: BigInt, logIndex: BigInt): string {
    return blockNumber.toString().concat('-').concat(logIndex.toString())
}

function createResolverID(node: Bytes, resolver: Address): string {
    return resolver.toHexString().concat('-').concat(node.toHexString())
}

