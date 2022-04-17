import {Deta} from "deta"
import { TCategory } from "./types"

const deta = Deta(process.env.NEXT_DETA_PROJECT_KEY)

const db = deta.Base("domains")


db.fetch().then(res => {
    if(res.count === 0) return db.put({
        domain:"lio.domains",
        usage: "Listing Domains",
        category: [TCategory.Information]
    })
    else return
})


export default db