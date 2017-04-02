$(function(){
  $('ul.tabs li:first').addClass('active');
  $('.block .tab').hide();
  $('.block .tab:first').show();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block .tab').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})

$(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('menu-opener')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('menu-open');
    });
  }, false);
});
$(function() {
  var body = document.body;
  var search = document.getElementsByClassName('btn-search')[0];
  var search1 = document.getElementsByClassName('btn-search')[1];

  search.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('searc-open');
    });
  }, false);

  search1.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('searc-open');
    });
  }, false);
});
