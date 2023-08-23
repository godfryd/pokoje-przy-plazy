// export function onRequest(context) {
//     var payload = {
//         "personalizations": [
//             {
//                 "to": [
//                     {
//                         "email": "godfryd@gmail.com"
//                     }
//                 ],
//                 "subject": "Hello, World!"
//             }
//         ],
//         "from": {
//             "email": "kontakt@pokojeprzyplazy.pl"
//         },
//         "content": [
//             {
//                 "type": "text/plain",
//                 "value": "Hello, World!"
//             }
//         ]
//     };
//     var myHeaders = new Headers({
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + context.env.API_KEY,
//     });
//     var data = new FormData();
//     data.append( "json", JSON.stringify( payload ) );

//     console.info('sending')

//     var resp = fetch("https://api.sendgrid.com/v3/mail/send",
//                      {
//                          method: "POST",
//                          headers: myHeaders,
//                          body: data
//                      })
//         .then(function(res) {
//             console.info('OK RESP')
//             return res.json();
//         })
//         .then(function(data) {
//             console.log( JSON.stringify( data ) )
//         })

//     console.info('sent', JSON.stringify(resp))


//     return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
//                         {
//                             headers: {
//                                 "content-type": "application/json;charset=UTF-8",
//                             },
//                         })
// }

export async function onRequestPost(context) {
    console.info('email 1')
    const dataIn = await context.request.formData();
    console.info('email 1a', JSON.stringify(dataIn))

    const dataOut = new FormData();
    dataOut.append('access_key', context.env.ACCESS_KEY);
    dataOut.append('email', dataIn.get('user_email'));
    dataOut.append('name': dataIn.get('user_name'));
    dataOut.append('message': dataIn.get('user_message'));
    dataOut.append('phone': dataIn.get('user_phone'));
    dataOut.append('subject': dataIn.get('user_subject'));

    var resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataOut,
    });
    console.info('email 2', JSON.stringify(resp))

    return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
                        {
                            headers: {
                                "content-type": "application/json;charset=UTF-8",
                            },
                        })
}
