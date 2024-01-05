//ron swanson quotes
//make a click funtion that returns a ron swanson quote
$("body").css("background-color", "grey");
$(".btn-btn1").on("click", function (event) {
  let url;
  if (Math.random() < 0.5) {
    url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  } else {
    url = "https://api.breakingbadquotes.xyz/v1/quotes";
  }
  let $div = $("<div></div>");
  jQuery.get(url, function (data) {
    if (data[0].quote) {
      $div.text(data[0].quote);
      $div.addClass("breakingBadQuote");
    } else {
      $div.text(data[0]);
      $div.addClass("ronSwansonQuote");
    }
    console.log(data);

    $(".quotes").append($div);
  });
});

// console.log($(".quotes").children()[0].classList.contains(".ronSwansonQuote"));

function scoreUpdate(str) {
  let score = str.split("score = "); // [0]

  console.log(score);
  $(".swanson-guess").on("click", function (event) {
    if ($(".quotes").children()[1].classList.contains("ronSwansonQuote")) {
      $(".score").text("Correct");
      $("body").css("background-color", "white");
      $(".img2").append(
        "<img src='https://www.indystar.com/gcdn/-mm-/582568e00c17e48a137dbf529626145d89c4861c/c=0-151-3000-1846/local/-/media/2016/08/03/INGroup/Indianapolis/636058464185558674-parksandrec13.JPG?width=3000&height=1695&fit=crop&format=pjpg&auto=webp' width='600' height='400'>"
      );
    } else {
      $(".score").text("wrong..");
    }
  });

  $(".breakingbad-guess").on("click", function (event) {
    if ($(".quotes").children()[1].classList.contains("breakingBadQuote")) {
      $(".score").text("Correct");
      $("body").css("background-color", "white");
      $(".image1").append(
        "<img src='https://i.insider.com/5d7f91ed6f24eb3d3e33cc05?width=750&format=jpeg&auto=webp' width='700' height='500'>"
      );
    } else {
      $(".score").text("Wrong..");
    }
  });
}
scoreUpdate($(".score").text());
// location.reload();
