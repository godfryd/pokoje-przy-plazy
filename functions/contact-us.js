export function onRequest(context) {
    var payload = {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "godfryd@gmail.com"
                    }
                ],
                "subject": "Hello, World!"
            }
        ],
        "from": {
            "email": "kontakt@pokojeprzyplazy.pl"
        },
        "content": [
            {
                "type": "text/plain",
                "value": "Hello, World!"
            }
        ]
    };
    var myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY",
    });
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );

    console.info('sending')

    var resp = fetch("https://api.sendgrid.com/v3/mail/send",
                     {
                         method: "POST",
                         headers: myHeaders,
                         body: data
                     })
        .then(function(res) {
            console.info('OK RESP')
            return res.json();
        })
        .then(function(data) {
            console.log( JSON.stringify( data ) )
        })

    console.info('sent', JSON.stringify(resp))


    return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
                        {
                            headers: {
                                "content-type": "application/json;charset=UTF-8",
                            },
                        })
}
