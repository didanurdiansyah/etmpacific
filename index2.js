$(document).ready((event) => {
  $("#active-send-data").toggleSwitch();
  $("#use-low-power-mode").toggleSwitch();

  $(".item-menu").click((e) => {
    const dataLayout = e.target.dataset.layout;
    $(".layout").addClass("d-none");
    $(".item-menu").removeClass("active");
    $('*[data-layout="' + dataLayout + '"]').addClass("active");
    if (dataLayout && dataLayout.indexOf("-parent") < 0) {
      $("#" + dataLayout).removeClass("d-none");
    }
  });
  $(".item-menu-m").click((e) => {
    const dataLayout = e.target.dataset.layout;
    $(".layout").addClass("d-none");
    $(".item-menu-m").removeClass("active");
    $(".item-menu").removeClass("active");
    $('*[data-layout="' + dataLayout + '"]').addClass("active");
    $("#" + dataLayout).removeClass("d-none");
  });
  $(".item-top-menu").click((e) => {
    const dataLayout = e.target.dataset.flag;
    $(".item-top-menu-mobile").removeClass("active");
    $(".item-top-menu").removeClass("active");

    $('*[data-flag="' + dataLayout + '"]').addClass("active");
    const id = dataLayout.replace("t-m-", "");
    $(".main-layout").addClass("d-none");
    $("#" + id).removeClass("d-none");
  });
  $(".menu-mobile").click((e) => {
    if ($(".top-menu-dropdown-mobile").hasClass("d-none")) {
      $(".top-menu-dropdown-mobile").removeClass("d-none");
      $(".top-menu-dropdown-mobile").addClass("d-show");
    } else {
      $(".top-menu-dropdown-mobile").removeClass("d-show");
      $(".top-menu-dropdown-mobile").addClass("d-none");
    }
  });
  $(".item-top-menu-mobile").click((e) => {
    const dataLayout = e.target.dataset.flag;
    $(".item-top-menu-mobile").removeClass("active");
    $(".item-top-menu").removeClass("active");
    $('*[data-flag="' + dataLayout + '"]').addClass("active");
  });
  $("#menu-channel").click((e) => {
    if ($("#child-menu-channel").hasClass("d-none")) {
      $("#child-menu-channel").removeClass("d-none");
      $("#child-menu-channel").addClass("d-show");
    } else {
      $("#child-menu-channel").removeClass("d-show");
      $("#child-menu-channel").addClass("d-none");
    }
  });
  $(document).click(function (e) {
    if ($(e.target).closest(".menu-mobile").length == 0) {
      // .closest can help you determine if the element
      // or one of its ancestors is #menuscontainer
      if ($(".top-menu-dropdown-mobile").hasClass("d-show")) {
        $(".top-menu-dropdown-mobile").removeClass("d-show");
        $(".top-menu-dropdown-mobile").addClass("d-none");
      }
    }
  });
});
