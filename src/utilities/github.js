import axios from "axios";
import { GITHUB_API_URL } from "./constants";

const getUser = (username) => {
  let promise = new Promise((resolve, reject) => {
    axios
      .get(`${GITHUB_API_URL}users/${username}`)
      .then((res) => {
        let data = res.data;
        resolve(data);
      })
      .catch(reject);
  });
  return promise;
};

const getRepos = (username) => {
  let promise = new Promise((resolve, reject) => {
    let repos = [];
    let finalRepos = [];
    getTotalCommits(username)
      .then((commits) => {
        repos = commits.map((commit) => {
          return commit.repo.name;
        });
        for (const repo of repos) {
          if (!finalRepos.includes(repo)) {
            finalRepos.push(repo);
          }
        }
        resolve(finalRepos);
      })
      .catch(reject);
  });
  return promise;
};

const getTotalCommits = (username) => {
  let promise = new Promise((resolve, reject) => {
    let commits = [];
    const req = (no) => {
      axios
        .get(`${GITHUB_API_URL}users/${username}/events?page=${no}`)
        .then((res) => {
          let data = res.data;
          if (data.length) {
            if (new Date(data[0].created_at).getMonth() >= 9) {
              commits.push(...data);
              commits = commits.filter(
                (commit) =>
                  commit.type === "PushEvent" &&
                  new Date(commit.created_at).getMonth() >= 9
              );
              if (new Date(data[data.length - 1].created_at).getMonth() >= 9) {
                req(no + 1);
              } else {
                resolve(commits);
              }
            } else {
              resolve(commits);
            }
          } else {
            resolve(commits);
          }
        })
        .catch(reject);
    };
    req(1);
  });
  return promise;
};

export { getUser, getTotalCommits, getRepos };
