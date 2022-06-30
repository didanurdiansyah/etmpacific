let resultAPI = [];

async function fetchDataTable() {
  let res = [];
  await fetch(
    "https://62be15c0c5ad14c110cb88a6.mockapi.io/etmpacific/api/v1/table"
  )
    .then((response) => response.json())
    .then((result) => {
      res = result;
    });
  return res;
}

function parseData(page, res) {
  const start = page * 10;
  const data = [];
  for (let index = start; index < start + 10; index++) {
    if (res[index]) {
      data.push(res[index]);
    }
  }
  return data;
}

function parseHTMLTable(result) {
  const res = result.map((e) => {
    const radio = e.subscription ? `checked` : null;
    const id = e.id < 10 ? "0" + e.id : e.id;
    const comment = e.comment === null ? "-" : e.comment;
    return (
      `<div class="border-bottom-grey d-flex-no-warp p-t-1 p-b-2">
    <div class="channel-checkbox">
      <input type="checkbox" class="checkbox-form" />
    </div>
    <div class="name-cols">` +
      e.name +
      `</div>
    <div class="type-cols">` +
      e.type +
      `</div>
    <div class="date-cols">` +
      e.date_add +
      `</div>
    <div class="comment-cols">` +
      comment +
      `</div>
    <div class="subscription-cols">
      <input
        type="checkbox"
        name="active_send_data"
        id="subscription-` +
      id +
      `"
        ` +
      radio +
      `
      />
    </div>
    <div class="action-cols">
      <button class="btn-link no-margin">Edit</button>
    </div>
  </div>`
    );
  });

  $("#res-table").html(res);

  result.forEach((e) => {
    const id = e.id < 10 ? "0" + e.id : e.id;
    $("#subscription-" + id).toggleSwitch();
  });
}

function changePage(page) {
  const data = parseData(page, resultAPI);
  parseHTMLTable(data);
}

$(document).ready(() => {
  $(".tumbler__wrapper").click("click", (_) =>
    document.body.classList.toggle("dark-mode")
  );

  fetchDataTable().then((result) => {
    const total_page = Math.floor(result.length / 10) + 1;
    const page = 0;
    const data = parseData(page, result);
    resultAPI = result;
    parseHTMLTable(data);

    const pagePreviousHTML =
      '<li class="page-item"><a id="page-previous" onClick="changePage(0)" class="page-link" href="#">Previous</a></li>';
    const pageNextHTML =
      '<li class="page-item"><a id="page-next" onClick="changePage(' +
      (total_page - 1) +
      ')" class="page-link" href="#">Next</a></li>';
    const pageHTML = [];
    pageHTML.push(pagePreviousHTML);
    for (let index = 0; index < total_page; index++) {
      pageHTML.push(
        '<li class="page-item"><a id="page-' +
          index +
          '" onClick="changePage(' +
          index +
          ')" class="page-link" href="#">' +
          (index + 1) +
          "</a></li>"
      );
    }
    pageHTML.push(pageNextHTML);
    $("#pagination").html(pageHTML.join(""));
    $("#page-0").addClass("active");
    $(".page-link").click((e) => {
      const id = e.currentTarget.id;
      $(".page-link").removeClass("active");
      $("#" + id).addClass("active");
    });
  });

  $("#set-email-limit").toggleSwitch();
  $("#active-et-command").toggleSwitch();
  $("#active-call").toggleSwitch();
  $("#active-sms").toggleSwitch();
  $("#active-email").toggleSwitch();

  $(".btn-collapse").click((e) => {
    const id = e.currentTarget.id;
    if ($('*[data-collapse="' + id + '"]').hasClass("d-none")) {
      $('*[data-collapse="' + id + '"]').removeClass("d-none");
      $('*[data-collapse="' + id + '"]').addClass("d-show");
    } else {
      $('*[data-collapse="' + id + '"]').removeClass("d-show");
      $('*[data-collapse="' + id + '"]').addClass("d-none");
    }
  });

  Highcharts.chart("chart-line", {
    chart: {
      backgroundColor: "#FCFFC500",
      type: "line",
    },
    title: {
      text: "",
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: "",
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
    ],
  });

  let $modal = $("#myModal");
  $modal.draggable({
    handle: ".modal-header",
  });
  $modal.resizable();
});
