import { Client } from "@notionhq/client"
import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const database_id = "de9de5ca1594412d94d9cb99d5d52473"

let payload: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[] = []

async function getBentos() {
  if (payload[0]) return { results: payload }
  const data = await notion.databases.query({
    database_id: database_id!,
    sorts: [
      {
        property: "index",
        direction: "ascending",
      },
    ],
  })
  payload = data.results
  setTimeout(() => {
    payload = []
  }, 30 * 60 * 1000)
  return data
}

export default defineEventHandler(async () => {
  const res = await getBentos()
  return res.results
})
