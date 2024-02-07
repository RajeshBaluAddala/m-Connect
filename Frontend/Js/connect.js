// Access-Control-Allow-Origin: "http://localhost:3000";

$('#signinBtn').on('click', function () {
    const gmail = $('#gmail').val();
    const password = $('#password').val();
    const isAdmin = $('#adminCheckbox').is(':checked');

    const formData = {
        gmail: gmail,
        password: password,
        isAdmin: isAdmin
    };
    console.log(gmail);
    console.log(password);

    // Call the updated function for AJAX communication
    sendFormData('http://localhost:8081/login', formData, 'formBox');
});


function sendFormData(url, data, elementId) {

    // console.log('Sending request to :', url)
    // console.log('Rquest body  :', JSON.stringify(data))

    $.ajax({
        type: 'POST',
        url: url,  // Make sure the URL is correct
        contentType: 'application/json',
        data: JSON.stringify(data),

        success: function (responseData) {

            console.log('Response received:', responseData);

            document.getElementById(elementId).innerHTML = responseData;

            // Assuming the responseData is a URL for redirection
            if (responseData == 'success') {
                console.log('Redirecting to success page');

                window.location.href = 'http://localhost:8080/SuccessPage';
            }
        },
        error: function (error) {
            console.error('Error sending data:', error);
        }
    });
}
