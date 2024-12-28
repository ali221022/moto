console.log("Signup frontend javascript file");

  function validateSignupForm() {
    const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();
    memberEmail = $(".member-email").val();

    if (
        memberNick === "" ||
        memberPhone === "" || 
        memberPassword === "" || 
        confirmPassword === "" ||
        memberEmail === ""
    )  {
        alert("Please insert all required inputs!");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Password differs, please check!");
        return false;
    }

  }