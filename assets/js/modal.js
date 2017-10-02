var spreadsheetID = "1awZAKFgfe-NY7hQRlYJHCUQcR_-QGgieOSNnZ5L1C7M";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
$.getJSON(url, function(data) {
  var html = '';
  var modalview = '';

  var tportofolio = '';
  var datalink = '';
  var myString = '';
  var mySplitResult = [];
  var clas;
  var proj;
  var k=0;

  function myFunction(p1) {
    var mview = [];

    mview += '<ol class="carousel-indicators">';

    for (var j=0; j < p1.length; j++) {
      if (j == 0) {
        clas = "active";
      } else {
        clas = "";
      }
      mview += '<li class="item' + k + ' ' + clas + '" data-target="#myCarousel" data-slide-to="'+ k + j + '"></li>';
      k++;
    }
    mview += '</ol>';

    mview += '<div class="carousel-inner">';
    for (var j=0; j < p1.length; j++) {
      // mview += '<div class="item"><img src="'+ p1[j] + '" alt=""></div>';
      if (j == 0) {
        proj = "active";
      } else {
        proj = "";
      }
      mview += '<div class="item ' + proj + '' +'"><img class="img-responsive" src="' + p1[j] + '" alt="..."></div>';
    }
    mview += '</div>';
    return mview;
  }

  var entry = data.feed.entry;
  /* for (var i = entry.length - 1; i >= 0; i -= 1) { */
  for (var i = 0; i < entry.length; i++) {
    html += '<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ' + entry[i]['gsx$kelas']['$t'] + '">';
    html += '<div class="single_image">';
    html += '<img src="'+ entry[i]['gsx$cover']['$t'] +'" alt="" class="img-responsive">';
    html += '<div class="image_overlay">';
    html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + entry[i]['gsx$project']['$t'] + '"><i class="fa fa-search"></i> View Project</button>';
    html += '<h2>' + entry[i]['gsx$project']['$t'] + '</h2>';
    html += '<h4>' + entry[i]['gsx$shortdescription']['$t'] + '</h4>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  }

  for (var i = 0; i < entry.length; i++) {
    modalview += '<div class="modal fade product_view" id="' + entry[i]['gsx$project']['$t'] + '">';
    modalview += '<div class="modal-dialog"><div class="modal-content">';
    modalview += '<div class="modal-body"><div class="row"><a href="#" data-dismiss="modal" class="class pull-right">';
    modalview += '<span class="glyphicon glyphicon-remove"></span></a><div class="col-md-12 product_img">';
    // modalview += '<div class="owl-carousel owl-theme">';

    // mySplitResult[i] = entry[i]['gsx$link']['$t'].split(",");
    //
    // modalview += myFunction(mySplitResult[i]);



    // modalview += '<div id="myCarousel" class="carousel slide" data-ride="carousel">';
    // modalview += '<ol class="carousel-indicators">';
    // modalview += '<li class="item1 active"></li>';
    // modalview += '<li class="item2"></li>';
    // modalview += '<li class="item3"></li>';
    // modalview += '</ol>';
    // modalview += '<div class="carousel-inner">';
    // modalview += '<div class="item active"><img class="img-responsive" src="/assets/img/no-photo.jpg" alt="..."></div>';
    // modalview += '<div class="item"><img class="img-responsive" src="/assets/img/no-photo2.jpg" alt="..."></div>';
    // modalview += '<div class="item"><img class="img-responsive" src="/assets/img/no-photo3.jpg" alt="..."></div>';
    // modalview += '</div>';
    modalview += '<div id="myCarousel' + i + '" class="carousel slide" data-ride="carousel">';
    mySplitResult[i] = entry[i]['gsx$link']['$t'].split(",");
    modalview += myFunction(mySplitResult[i]);

    modalview += '<a class="left carousel-control" href="#myCarousel' + i + '" role="button" data-slide="prev">';
    modalview += '<span class="glyphicon glyphicon-chevron-left"></span></a>';
    modalview += '<a class="right carousel-control" href="#myCarousel' + i + '" role="button" data-slide="next">';
    modalview += '<span class="glyphicon glyphicon-chevron-right"></span></a></div>';

    // mySplitResult = entry[i]['gsx$link']['$t'].split(",");
    // modalview += myFunction(mySplitResult);






    // modalview += '</div>';
    modalview += '</div><div class="col-md-12 product_content">';
    modalview += '<h3 class="modal-title">' + entry[i]['gsx$project']['$t'] + '</h3>';
    modalview += '<p>' + entry[i]['gsx$shortdescription']['$t'] + '</p>';
    modalview += '</div></div></div></div></div></div>';



    ///================ dummy ==================//
    // modalview += '<div class="modal fade product_view" id="'+ entry[i]['gsx$project']['$t'] + '">';
    // modalview += '<div class="modal-dialog">';
    // modalview += '<div class="modal-content">';
    // modalview += '<div class="modal-body">';
    // modalview += '<div class="row">';
    // modalview += '<a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>';
    // modalview += '<div class="col-md-12 product_img">';
    // modalview += '<div id="owl-demo" class="owl-carousel owl-theme">'
    // modalview += '<div class="item"><img src="' + entry[i]['gsx$cover']['$t'] + '" alt=""></div>';
    //
    //
    // modalview += '<div class="item"><img src="{{ "/assets/img/no-photo.jpg" | prepend: site.baseurl }}" alt="The Last of us"></div>';
    // modalview += '<div class="item"><img src="{{ "/assets/img/no-photo2.jpg" | prepend: site.baseurl }}" alt="GTA V"></div>';
    // modalview += '<div class="item"><img src="{{ "/assets/img/no-photo3.jpg" | prepend: site.baseurl }}" alt="Mirror Edge"></div>';
    //
    //
    //
    // modalview += '</div>';
    // modalview += '</div>';
    // modalview += '<div class="col-md-12 product_content">';
    // modalview += '<h3 class="modal-title">' + entry[i]['gsx$project']['$t'] + '</h3>';
    // modalview += '<p>' + entry[i]['gsx$content']['$t'] + '</p>';
    // modalview += '</div>';
    // modalview += '</div>';
    // modalview += '</div>';
    // modalview += '</div>';
    // modalview += '</div>';
    // modalview += '</div>';
  }

  for (var i = 0;  i < entry.length; i++) {
    if (i<6){
      tportofolio += '<div class="col-md-4 no_padding">';
      tportofolio += '<div class="single_image">';
      tportofolio += '<img src="'+ entry[i]['gsx$cover']['$t'] +'" alt="">';
      tportofolio += '<div class="image_overlay">';
      tportofolio += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + entry[i]['gsx$project']['$t'] + '"><i class="fa fa-search"></i> View Project</button>';
      tportofolio += '<h2>' + entry[i]['gsx$project']['$t'] + '</h2>';
      tportofolio += '<h4>' + entry[i]['gsx$shortdescription']['$t'] + '</h4>';
      tportofolio += '</div></div></div>';
    }
  }

  $('.console').html(html);
  $('.viewModal').html(modalview);
  $('.portofolioPreview').html(tportofolio);

  var myId = '#myCarousel';
  for (var i = 0; i < entry.length; i++) {

    $(myId+i).carousel();
    $(".left").click(function(){
        $(myId+i).carousel("prev");
    });
    $(".right").click(function(){
        $(myId+i).carousel("next");
    });
  }
});
