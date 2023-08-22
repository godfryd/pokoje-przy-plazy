import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export function onRequest(context) {
    // console.log('sending mail 1')
    // var send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         personalizations: [
    //             {
    //                 to: [{ email: 'godfryd@gmail.com', name: 'Test Recipient' }],
    //             },
    //         ],
    //         from: {
    //             email: 'sender@example.com',
    //             name: 'Workers - MailChannels integration',
    //         },
    //         subject: 'Look! No servers',
    //         content: [
    //             {
    //                 type: 'text/plain',
    //                 value: 'And no email service accounts and all for free too!',
    //             },
    //         ],
    //     }),
    // })
    // console.log('sending mail', JSON.stringify(send_request))

    const msg = createMimeMessage();
    msg.setSender({ name: "GPT-4", addr: "<SENDER>@example.com" });
    msg.setRecipient("<RECIPIENT>@example2.com");
    msg.setSubject("An email generated in a worker");
    msg.addMessage({
        contentType: 'text/plain',
        data: `Congratulations, you just sent an email from a worker.`
    });

    var message = new EmailMessage(
        "<SENDER>@example.com",
        "<RECIPIENT>@example.com",
        msg.asRaw()
    );
    try {
        context.env.SEB.send(message);
    } catch (e) {
        return new Response(e.message);
    }

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
