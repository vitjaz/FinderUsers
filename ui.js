class UI {
  constructor() {
    // Init
    // Profile block, img, button
    this.profile = document.querySelector("#profile");
    this.profileImg = document.querySelector("#profile-img");
    this.profileLinkBtn = document.querySelector("#view-profile-btn");

    // Badges
    this.profileBadgeRepos = document.querySelector("#badge-repos");
    this.profileBadgeGists = document.querySelector("#badge-gists");
    this.profileBadgeFollowers = document.querySelector("#badge-followers");
    this.profileBadgeFollowing = document.querySelector("#badge-following");

    // List with info
    this.profileListCompany = document.querySelector("#list-company");
    this.profileListBlog = document.querySelector("#list-blog");
    this.profileListLocation = document.querySelector("#list-location");
    this.profileListMember = document.querySelector("#list-member");
  }

  showProfile(user) {
    // Set visibility to block
    this.profile.classList.remove("none");
    this.profile.classList.add("block");

    // Button and avatar
    this.profileImg.setAttribute("src", user.avatar_url);
    this.profileLinkBtn.setAttribute("href", user.html_url);
    // Badges
    this.profileBadgeRepos.textContent = `Публичные репозитории: ${user.public_repos}`;
    this.profileBadgeGists.textContent = `Публичные Gists:  ${user.public_gists}`;
    this.profileBadgeFollowers.textContent = `Подписчики:  ${user.followers}`;
    this.profileBadgeFollowing.textContent = `Публичные репозитории: ${user.following}`;

    // List with info
    this.profileListCompany.textContent = `Компания: ${user.company}`;
    this.profileListBlog.textContent = `Вебсайт/блог: ${user.blog}`;
    this.profileListLocation.textContent = `Локация: ${user.location}`;
    this.profileListMember.textContent = `Участник сообщества с: ${new Date(
      user.created_at
    ).getFullYear()}`;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-warning">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>`;
    });

    document.querySelector("#repos").innerHTML = output;
  }

  // Show alert msg
  showAlert(msg, className) {
    // Clear remainig alerts
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".search-container");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert msg
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  removeProfile() {
    this.profile.classList.remove("block");
    this.profile.classList.add("none");
  }
}
