
function validate() {
    let username = document.forms['validateForm']['username'].value;
    let password = document.forms['validateForm']['password'].value;
    let confirmpassword = document.forms['validateForm']['confirmpassword'].value;
    let email = document.forms['validateForm']['email'].value;
    let confirmemail = document.forms['validateForm']['confirmemail'].value;

    if (!username || !password || !confirmpassword || !email || !confirmemail) {
        alert("Ada form yang belum terisi")
        return false
    } else {
        if (password !== confirmpassword) {
            alert('Password tidak sama')
            if (email !== confirmemail) {
                alert('Email tidak sama')
            }
            return false
        } else if (email !== confirmemail) {
            alert('Email tidak sama')
            return false
        }
    }
}