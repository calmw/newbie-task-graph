import {ClaimRecord as ClaimRecordEvent} from "../generated/NewbieTask/NewbieTask"
import {NewbieTask} from "../generated/schema"


export function handleClaimRecordLog(event: ClaimRecordEvent): void {

    let t_id = event.params.tid.toString()
    let packageObj = NewbieTask.load(t_id)
    if (packageObj == null) {
        packageObj = new NewbieTask(t_id)
    }
    packageObj.user = event.params.user
    packageObj.claimType = event.params.claimType
    packageObj.amount = event.params.amount
    packageObj.ctime = event.params.ctime
    packageObj.save()
}

