let form = document.querySelector("form").elements;

const signUp = () => {
  let user = {};

  if (
    form.user.value &&
    form.email.value &&
    form.pass.value &&
    form.conf_pass.value
  ) {
    if (form.pass.value === form.conf_pass.value) {
      user = {
        user: form.user.value,
        email: form.email.value,
        pass: form.pass.value,
      };

      Swal.fire({
        title: "Thank You!",
        text: "Form Has Been Successfully Submited!",
        icon: "success",
      });

      localStorage.setItem("user", JSON.stringify(user));

      form.user.value = "";
      form.email.value = "";
      form.pass.value = "";
      form.conf_pass.value = "";
    } else {
      alert("Password Doesn't Match");
    }
  } else {
    alert("Fill All Filed!");
  }
};

const login = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (form.user.value === user.user && form.pass.value === user.pass) {
    window.location.href = "userpage.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Credentials!",
    });

    form.user.value = "";
    form.pass.value = "";
  }
};
