// export function onRequest(context) {
//     return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
//                         {
//                             headers: {
//                                 "content-type": "application/json;charset=UTF-8",
//                             },
//                         })
// }

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


export default {
  async fetch(request) {
      return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
                          {
                              headers: {
                                  "content-type": "application/json;charset=UTF-8",
                              },
                          })
  },
};
