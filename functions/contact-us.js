export function onRequest(context) {
    return new Response('{"text": "Email!", "type": "ok"}',
                        {
                            headers: {
                                "content-type": "application/json;charset=UTF-8",
                            },
                        })
}
