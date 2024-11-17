console.log("hCaptcha initialized");
hcaptcha.execute('48e0efae-4fac-4ec0-8922-f832624ec508', { action: 'submit' }).then(function (token) {
    console.log('Token:', token);
});