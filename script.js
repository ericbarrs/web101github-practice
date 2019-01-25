let toggle = false;
let toggleText = false;

function myFunc() {
  if (toggleText) {
    document.getElementsByClassName("box-1")[0].innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis tellus, egestas quis leo in, porttitor dapibus justo. Etiam eget venenatis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque ante sed sem ullamcorper, mattis finibus purus dictum. Praesent eu mauris non mauris bibendum euismod eu ac eros. Quisque augue felis, lobortis eget erat vel, tempor tempus augue. Sed eget auctor nulla, at gravida leo. Phasellus turpis nisi, iaculis ut elementum vel, fringilla ac enim. Aenean tincidunt ante vel sem lacinia egestas.";
    document.getElementsByClassName("box-3")[0].innerHTML =
      "In gravida justo enim, vitae convallis risus interdum non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sit amet sapien luctus, egestas est ut, sollicitudin enim. Integer fringilla viverra turpis sit amet scelerisque. Nulla eget semper libero. Etiam aliquam risus faucibus lectus blandit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
    document.getElementsByClassName("boxinbox-1-p")[0].innerHTML =
      "Nullam ut justo id mi placerat sollicitudin. Donec in orci venenatis, lacinia est in, molestie elit. Nunc ut dui justo. Donec imperdiet condimentum tellus, quis aliquam nunc. Nunc ac nibh ac augue maximus rhoncus. Fusce ornare gravida sem, vitae semper lacus. Vivamus sit amet accumsan magna. Fusce odio felis, dictum at massa eu, elementum finibus felis.";
    document.getElementsByClassName("boxinbox-2-p")[0].innerHTML =
      "Mauris erat lectus, suscipit in dui et, interdum finibus sapien. In lacinia non lectus in ullamcorper. Morbi gravida velit ac lacus rhoncus, id viverra libero laoreet. Praesent ultricies tincidunt lorem, sed mollis arcu blandit mattis. Proin dui leo, auctor tristique justo id, lacinia dictum leo. Sed eu lorem condimentum, egestas leo vel, euismod turpis. Fusce ut tempus enim. Sed interdum gravida turpis, sed consequat dui tempus quis. Cras nisi elit, tincidunt et blandit lobortis, consectetur ac arcu. Donec porta tortor id placerat facilisis. Aliquam vel odio viverra, semper mauris et, ultricies ex. Aenean non purus condimentum, tincidunt diam quis, tincidunt erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;";
    document.getElementsByClassName("footer")[0].innerHTML =
      "Maecenas tempus, quam at tempor scelerisque, dui nunc feugiat odio, sit amet sodales velit justo ac sapien. Vivamus a nisi metus. Sed laoreet sit amet metus sit amet tempus. Proin sagittis viverra tortor consequat lobortis. Nam condimentum vulputate justo non porttitor. Sed vel diam ac tortor varius aliquet non efficitur erat. Praesent interdum nisl non ipsum tempor eleifend. Morbi pretium, metus at scelerisque imperdiet, dui massa lobortis ex, dapibus malesuada neque nulla in arcu. Pellentesque dignissim semper nisl hendrerit semper.";
    toggleText = false;
  } else {
    document.getElementsByClassName("box-1")[0].innerHTML = "";
    document.getElementsByClassName("box-3")[0].innerHTML = "";
    document.getElementsByClassName("boxinbox-1-p")[0].innerHTML = "";
    document.getElementsByClassName("boxinbox-2-p")[0].innerHTML = "";
    document.getElementsByClassName("footer")[0].innerHTML = "";
    toggleText = true;
  }
}

function border() {
  if (toggle) {
    document.getElementsByClassName("header")[0].style.border =
      "1px solid orange";
    document.getElementsByClassName("box-1")[0].style.border =
      "1px solid green";
    document.getElementsByClassName("box-3")[0].style.border =
      "1px solid green";
    document.getElementsByClassName("boxinbox-1")[0].style.border =
      "1px solid fuchsia";
    document.getElementsByClassName("boxinbox-2")[0].style.border =
      "1px solid fuchsia";
    document.getElementsByClassName("footer")[0].style.border = "1px solid red";
    document.getElementsByClassName("box-2")[0].style.border =
      "1px solid purple";
    toggle = false;
  } else {
    document.getElementsByClassName("header")[0].style.border = "none";
    document.getElementsByClassName("box-1")[0].style.border = "none";
    document.getElementsByClassName("box-3")[0].style.border = "none";
    document.getElementsByClassName("boxinbox-1")[0].style.border = "none";
    document.getElementsByClassName("boxinbox-2")[0].style.border = "none";
    document.getElementsByClassName("footer")[0].style.border = "none";
    document.getElementsByClassName("box-2")[0].style.border = "none";
    toggle = true;
  }
}
