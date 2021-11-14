class Github {
  constructor() {
    this.client_id = "e136354a660eaffdae8d";
    this.client_secret = "23d0e72164251513c75eedd42c489703620cfe89";
    this.repos_count = 3;
    this.repos_sort = "created: asc";
    ///this.client_secret = "17f12d56063016a95b732fe4d3331f3f2ac70aea";
  }

  async getUser(user) {
    const profileResponce = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
      {
        headers: {
          "User-Agent": "request",
        },
      }
    );

    const repoResponce = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
      {
        headers: {
          "User-Agent": "request",
        },
      }
    );

    const profileData = await profileResponce.json();

    const reposData = await repoResponce.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
