function $(el) {
  return document.querySelector(el);
}

const github = new Github();
const ui = new UI();

// Search input
const searchUser = $("#search-user");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("Пользователь не найден", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.removeProfile();
  }
});
