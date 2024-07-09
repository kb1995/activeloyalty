const BEEHIIV_API_KEY = "r0PYXriK2dHJecd9d5wxj3QwWJoIOvS2IzKwP70biVADX4afRMPaDYyN1pnXVXMk"
const BEEHIIV_PUB_KEY = "pub_46822db0-efeb-4c8d-a790-d4bbef4aa9c6"

export async function POST(req) {
  const API_KEY = BEEHIIV_API_KEY
  const API_URL = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_KEY}/subscriptions`

  const body = await req.json()

  const response = await fetch(API_URL, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    method: "POST",
  })

  if (response.status >= 400) {
    return new Response("", {
      status: 400,
    })
  }
  return new Response("", {
    status: 200,
  })
}
