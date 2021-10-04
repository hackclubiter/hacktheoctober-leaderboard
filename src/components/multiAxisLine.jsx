import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const MultiAxisLine = ({ totalCommits }) => {
  const [commitData, setCommitData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const data = {
    labels: (() => {
      let arr = [];
      for (let index = 1; index <= 30; index++) {
        arr.push(`${index}`);
      }
      return arr;
    })(),
    datasets: [
      {
        label: "No. of contributions",
        data: commitData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "No. of repositories",
        data: repoData,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const getTotalCommitsOnDay = (totalCommits) => {
    let temp = (() => {
      let arr = [];
      for (let index = 1; index <= 31; index++) {
        arr.push(0);
      }
      return arr;
    })();
    totalCommits.forEach((commit) => {
      let day = new Date(commit.created_at).getDate();
      temp[day - 1] += 1;
    });
    setCommitData(temp);
  };
  const getTotalReposOnDay = (totalCommits) => {
    let makeDateArray = () => {
      var date = new Date();
      var month = date.getMonth();
      date.setDate(1);
      var all_days = [];
      while (date.getMonth() === month) {
        var d =
          date.getFullYear() +
          "-" +
          date.getMonth().toString().padStart(2, "0") +
          "-" +
          date.getDate().toString().padStart(2, "0");
        all_days.push(d);
        date.setDate(date.getDate() + 1);
      }
      return all_days;
    };

    let result = [];

    let month_days = makeDateArray();

    month_days.forEach((e) => {
      let tdc = totalCommits.filter((commit) => {
        let createdDate = new Date(commit.created_at).getDate();
        let createdMonth = new Date(commit.created_at).getMonth();
        return (
          // eslint-disable-next-line
          createdDate == e.split("-")[2] && createdMonth == e.split("-")[1]
        );
      });

      let filter = [];

      tdc.forEach((d) => {
        // eslint-disable-next-line
        if (filter.filter((j) => j.repo.id == d.repo.id).length == 0) {
          filter.push(d);
        }
      });
      result.push(filter.length);
    });
    setRepoData(result);
  };

  useEffect(() => {
    getTotalCommitsOnDay(totalCommits);
    getTotalReposOnDay(totalCommits);
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        maxWidth: "48rem",
      }}
      className="w-full"
    >
      <Line data={data} />
    </div>
  );
};

export default MultiAxisLine;
