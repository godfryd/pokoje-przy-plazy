export function onRequest(context) {
    console.log('sending mail 1')
    var send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{ email: 'godfryd@gmail.com', name: 'Test Recipient' }],
                },
            ],
            from: {
                email: 'sender@example.com',
                name: 'Workers - MailChannels integration',
            },
            subject: 'Look! No servers',
            content: [
                {
                    type: 'text/plain',
                    value: 'And no email service accounts and all for free too!',
                },
            ],
        }),
    })
    console.log('sending mail', JSON.stringify(send_request))

    return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
                        {
                            headers: {
                                "content-type": "application/json;charset=UTF-8",
                            },
                        })
}

// import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest = mailchannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "ACME Support", email: "godfryd@gmail.com" }],
//     },
//   ],
//   from: { name: "Enquiry", email: "no-reply@example.com" },
//   respondWith: () =>
//     new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
//                  {
//                      headers: {
//                          "content-type": "application/json;charset=UTF-8",
//                      },
//                  }),
// });
