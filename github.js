class GitHub {
  constructor() {
    // init id
    this.client_id = '558489d3629d7467efb7';
    // init secret
    this.client_secret = 'baf16ac61ffe347f5ca756d9c48cbddae4ce7884';
    // set repo count
    this.repos_count = 5;
    // set latest date repo
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Github profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Github repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }

  }

}