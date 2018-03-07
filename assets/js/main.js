

  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "assets/php/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо, ваша заявка принята!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });





$(document).ready(function($){

  var application = $('.application');
  var applicationContainer = $('.application-container');
  var appClosed = $('.app-closed');

  var popupClosed = $('.popup-closed');
  var popupContainer = $('.popup-container');
  var title = $('.popup-title');
  var description = $('.popup-description');
  var price = $('.popup-price');

  var reset = $('#filter-reset');

  application.click(function(){
    applicationContainer.show();
    appClosed.show();
    $('.m-menu-btn').show();
    $('.m-menu-close-btn').hide();
    $('.m-menu').hide();
    $('.m-menu-closed').hide();
  });
  appClosed.click(function(){
    applicationContainer.hide();
    appClosed.hide();
  });

  $('#repair').click(function(){
    $('.repair').show();
    $('.windows').hide();
    $('.optimization').hide();
    $('.internet').hide();
  });
  $('#windows').click(function(){
    $('.repair').hide();
    $('.windows').show();
    $('.optimization').hide();
    $('.internet').hide();
  });
  $('#optimization').click(function(){
    $('.repair').hide();
    $('.windows').hide();
    $('.optimization').show();
    $('.internet').hide();
  });
  $('#internet').click(function(){
    $('.repair').hide();
    $('.windows').hide();
    $('.optimization').hide();
    $('.internet').show();
  });

  $('.list-1').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.html('Ремонт компьютера, замена комплектующих');
    description.html('Замена комплектующих:<br> Мы занимаемся установкой запчастей на ваш компьютер или ноутбук, устанавливаем для них драйвера. Диагностируем, ремонтируем, меняем блок питания, видеокарту, сетевую карту, звуковую карту, оперативную память, процессор, систему охлаждения, жесткий диск.<br> Ремонт компьютера:<br> Обычно ремонт компьютера заключается в том, чтобы найти неисправный модуль и заменить его. Перепайка элементов в неисправных модулях (комплектующих) чаще не дает результата, т.к. в основном выходит из строя микросхема (чип). Саму микросхему менять невыгодно, т.к. её стоимость аналогична стоимости нового комплектующего. Если явно видно, что ремонт компьютерного комплектующего модуля не даст результатов, мы произведим его замену на дому клиента.');
    price.text('Цена услуги: 500 руб');
  });
  $('.list-2').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Чистка компьютера / ноутбука от пыли');
    description.html('Если ваш компьютер / ноутбук стал сильно греться, выключаться при работе, сильно шуметь, или вы просто решили провести профилактическую чистку, мы окажем вам профессиональную помощь.<br> В услугу чистки входит:<br> Разбор компьтера / ноутбука.<br> Удаление всей внутренней пыли, грязи и ворса, слоя "войлока" с пластин радиатора.<br> Замена термопасты между радиатором и процессором.<br> Смазка кулера (вентилятора) маслом.');
    price.text('Цена услуги: 800 руб');
  });
  $('.list-3').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Ремонт экрана, матрицы ноутбука');
    description.html('Средняя стоимость услуги 3700 рублей в мастерской (для матрицы 15.6 дюймов)<br> Средняя стоимость услуги 3900 рублей на дому клиента (для матрицы 15.6 дюймов)<br> Стоимость услуги напрямую зависит от стоимости матрицы (экрана).<br> Если вы уронили ноутбук, у вас треснул экран, сломалась матрица ноутбука, нет изображения, или оно искажено трещинами и разводами. В данном случае матрицу можно только заменить. Чтобы заменить матрицу, мы узнаем модель вашего ноутбука, подбираем новую, приезжаем к вам на дом и производим замену.<br> Матрицы могут быть разные по размерам и четкости изображения. Замена самой распространенной матрицы ноутбука, размером 15.6 дюймов (разрешение 1366x768) будет стоить от 3500 руб, с учетом стоимости самой матрицы.<br> Гарантия на работу до 2х месяцев, гарантия на новую матрицу до полугода.');
    price.text('Цена услуги: от 3500 руб');
  });
  $('.list-4').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Ремонт ноутбука после залития');
    description.html('Ремонт ноутбука после залития, попадания жидкости:<br> - от 1500 руб.<br> Вышла из строя клавиатура:<br> - от 1700 руб. (Установка новой клавиатуры.)<br> Вышла из строя цепь питания:<br> - от 2000 руб. Вышла из строя микросхема материнской платы ноутбука: (северный или южный мост, видеочип и др.)<br> - от 4000 руб. (В данном случае возможна только замена данных микросхем.)<br><br> Мы предоставляем услуги по ремонту ноутбука после попадания на него жидкости. После предварительной диагностики мы точно определим, что именно в ноутбуке вышло из строя. В случае окисления платы ноутбука, поможет только химическая чистка.');
    price.text('Цена услуги: от 1500 руб');
  });
  $('.list-5').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Ремонт ноутбука, перепайка чипов');
    description.html('Если ноутбук перестал включаться или начал показывать изображение с искажениями, помехами. Ноутбук включается, но изображения нет. В этих случаях работа будет сводиться к восстановлению элементов питания или замене микросхем. Мы произведем качественную перепайку видеочипа, северного моста и других контроллеров материнской платы ноутбука. Точную стоимость работы можно узнать только после подробной диагностики ноутбука.');
    price.text('Цена услуги: от 2000 руб');
  });
  $('.list-6').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Установка Windows "под ключ"');
    description.html('Мы устанавливаем Windows через разъем USB, поэтому нам не требуется дисковод. По завершению работы вы получите полностью настроенную и укомплектованную операционнуб систему.<br> В услугу переустановки системы входит:<br> Настройка БИОС;<br> Копирование данных клиента;<br> Создание разделов жесткого диска для установки операционной системы;<br> Установка Windows;<br> Оптимизация системы;<br> Настройка Интернета;<br> Установка полного комплекта драйверов;<br> Установка комплекта нужного вам програмного обеспечения;<br> Установка офисного пакета програмного обеспечения;<br> Установка антивирусного програмного обеспечения.');
    price.text('Цена услуги: 1500 руб');
  });
  $('.list-7').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Решение проблем с Windows');
    description.html('Восстановление системы без переустановки Windows;<br> Сохранение всех ваших данных, документов, фото и видео;<br> Сохранение ранее установленных программ.<br><br> Решение проблем с Windows, если система не работает, не запускается. Предлагаем свою помощь по восстановлению работоспособности вашей операционной системы. Наши мастера приедут к вам на дом или в офис, произведут диагностику, выявят проблему в вашей операционной системе, после произведут необходимые работы по восстанолению системы без переустановки, с сохранением информации.<br><br> Мы решаем различные проблемы с системой:<br> Windows не запускается, происходят ошибки при загрузке.<br> Windows загружается долго и медленно, появляется синий экран.<br> Любые другие проблемы с запуском и работой операционной системы.');
    price.text('Цена услуги: от 700 руб');
  });
  $('.list-8').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Удаление компьютерных вирусов');
    description.html('Мы полностью очистим ваш компьютер или ноутбук от любых компьютерных вирусов без установки антивирусной программы. Удалим различные трояны, черви, шпионы, руткиты и остальные разновидности вирусов. А так же уберем последствия, который оставили после себя вирусы.');
    price.text('Цена услуги: 700 руб');
  });
  $('.list-9').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Установка драйвера для Windows');
    description.html('Сразу после устаноки Windows необходимо установить все драйвера, чтобы комплектующие вашего устройства начали работать в полную силу. Без драйвера свежая система не сможет увидеть и правильно работать с устройством (видекартой, звуковой картой, сетевой картой), поэтому устанавливается специальная программа (драйвер), которая является связующим звеном между установленной операционной системой и устройством.');
    price.text('Цена услуги: 500 руб');
  });
  $('.list-10').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Настройка Интернета, роутера, WiFi');
    description.html('Мы настроим ваш роутер, модем, маршрутизатор, usb модем и другие Интернет устройства. При необходимости произведем прошивку роутера, прокладку сетевого кабеля. Создадим защищенное Wi-Fi соединение с вашим компьютеров и телефоном, чтобы соседи не смогли подключиться к вашему Интернету.');
    price.text('Цена услуги: 500 руб');
  });
  $('.list-11').click(function(){
    popupContainer.show();
    popupClosed.show();
    title.text('Настройка локальной сети');
    description.html('Мы настроим у вас дома локальную сеть, обеспечивающую связь между всеми вашими компьютерами и устройствами. Так же к сети может быть подключен общий принтер, жесткий диск и любое другое сетевое устройство. При наличии Wi-Fi роутера к сети может быть подключено беспроводное устройство, такое как ноутбук, планшет или телефон.');
    price.text('Цена услуги: 500 руб (за 2 ПК)');
  });

  popupClosed.click(function(){
    popupContainer.hide();
    popupClosed.hide();
  });

  $('#filter-1').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-1').show();
  });
  $('#filter-2').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-2').show();
  });
  $('#filter-3').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-3').show();
  });
  $('#filter-4').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-4').show();
  });
  $('#filter-5').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-5').show();
  });
  $('#filter-6').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-6').show();
  });
  $('#filter-7').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-7').show();
  });
  $('#filter-8').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-8').show();;
  });
  $('#filter-9').click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').hide();
    $('.filter-9').show();
  });

  reset.click(function(){
    $('[class^=filter-]:not([class$=reset]):not([class$=container])').show();
  });

  $('.m-menu-btn').click(function(){
    $('.m-menu-btn').hide();
    $('.m-menu-close-btn').show();
    $('.m-menu').show();
    $('.m-menu-closed').show();
  });
  $('.m-menu-close-btn').click(function(){
    $('.m-menu-btn').show();
    $('.m-menu-close-btn').hide();
    $('.m-menu').hide();
    $('.m-menu-closed').hide();
  });
  $('.m-menu-closed').click(function(){
    $('.m-menu-btn').show();
    $('.m-menu-close-btn').hide();
    $('.m-menu').hide();
    $('.m-menu-closed').hide();
  });
});

var CharTimeout = 100;
var StoryTimeout = 3000;

var Summaries = new Array();

Summaries[0] = 'Не работает компьютер?';
Summaries[1] = 'Не загружается Windows?';
Summaries[2] = 'Нужно подключить интернет?';
Summaries[3] = 'Ноутбук сильно греется и шумит?';
Summaries[4] = 'Нужна настройка wi-fi роутера?';
Summaries[5] = 'Разбили экран ноутбука?';
Summaries[6] = 'Залили ноутбук жидкостью?';
Summaries[7] = 'Всплывает рекламный баннер?';

function startTicker(){
  massiveItemCount =  Number(Summaries.length);
  CurrentStory     = -1;
  CurrentLength    = 0;
  AnchorObject     = document.getElementById("Ticker");
  runTheTicker();     
}
function runTheTicker(){
  var myTimeout;  
  if(CurrentLength == 0){
    CurrentStory++;
    CurrentStory      = CurrentStory % massiveItemCount;
    StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
  }
  AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + sign();
  if(CurrentLength != StorySummary.length){
    CurrentLength++;
    myTimeout = CharTimeout;
  } else {
    CurrentLength = 0;
    myTimeout = StoryTimeout;
  }
  setTimeout("runTheTicker()", myTimeout);
}
function sign(){
  if(CurrentLength == StorySummary.length) return "";
  else return "|";
}

startTicker();
