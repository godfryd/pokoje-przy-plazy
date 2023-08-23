export async function onRequestPost(context) {
    const dataIn = await context.request.formData();

    const dataOut = new FormData();
    dataOut.append('access_key', context.env.ACCESS_KEY);
    dataOut.append('email', dataIn.get('user_email'));
    dataOut.append('subject', '[Pokoje przy Plaży Sopot] Pytanie: ' + dataIn.get('user_subject'));
    dataOut.append('name', dataIn.get('user_name'));
    dataOut.append('message', dataIn.get('user_message'));
    dataOut.append('phone', dataIn.get('user_phone'));

    var resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataOut,
    });

    return new Response('{"text": "Wiadomość wysłana!", "type": "ok"}',
                        {
                            headers: {
                                "content-type": "application/json;charset=UTF-8",
                            },
                        })
}
