import {ClaimRecord as ClaimRecordEvent} from "../generated/NewbieTask/NewbieTask"
import {NewbieTask} from "../generated/schema"


export function handleClaimRecordLog(event: ClaimRecordEvent): void {

  let t_id = "OTC-".concat(event.params.tid.toString())
    // let packageObj = NewbieTask.load(o_id)
    // if (packageObj == null) {
      let  packageObj = new NewbieTask(t_id)
        packageObj.user = event.params.user
        packageObj.claimType = event.params.claimType
        packageObj.amount = event.params.amount
        packageObj.ctime = event.params.ctime
        packageObj.save()
    // } else {
    //     packageObj.user = event.params.user
    //     packageObj.amount = event.params.amount
    //     packageObj.claimType = event.params.claimType
    //     packageObj.ctime = event.params.ctime
    //     packageObj.save()
    // }
}

