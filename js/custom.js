
  jQuery(document).ready(function() {
var path = drupalSettings.host + "/" + drupalSettings.modulepath;
if(drupalSettings.pdfchoice == 1){
     
        var template = {
        html: path + '/templates/default-book-view.html',
        styles: [
          path + '/css/font-awesome.min.css',
          path + '/css/short-white-book-view.css'
        ],
        script: path + '/js/default-book-view.js'
      };   
  jQuery('.books').find('img').click(function(e) {
      var currentpath = jQuery(this).attr('data');
      var booksOptions = {
      investindiaflipbook: {
      pdf: currentpath,
      downloadURL: currentpath,
      template: template
     },
    };
      
      var instance = {
      scene: undefined,
      options: undefined,
      node: jQuery('#flip-book-window').find('.mount-node')
      };
  jQuery('#flip-book-window').on('hidden.bs.modal',  function() {
    instance.scene.dispose();
  });
  jQuery('#flip-book-window').on('shown.bs.modal', function() {
    instance.scene = instance.node.FlipBook(instance.options);
  });
      var targetid = "investindiaflipbook";
      instance.options = booksOptions[targetid];
      jQuery('#flip-book-window').modal('show');
    
  });
}
else{
      
var template = {
        html: path + '/templates/default-book-view.html',
        links: [{
          rel: 'stylesheet',
          href: path + '/css/font-awesome.min.css'
        }],
        styles: [
          path + '/css/short-black-book-view.css'
        ],
        script: path + '/js/default-book-view.js'
      };
    jQuery('#container1').FlipBook({
       pdf: drupalSettings.pdfpath,
       template: template
     });
}

  });

      // }This is a change for 2019-04-14:30:00
This is a change for 2022-12-09:30:00
This is a change for 2023-08-17:00:00
This is a change for 2019-05-09:30:00
This is a change for 2018-12-14:00:00
This is a change for 2020-05-10:30:00
This is a change for 2020-03-11:30:00
This is a change for 2023-12-15:30:00
This is a change for 2020-09-14:00:00
This is a change for 2020-09-11:30:00
This is a change for 2022-04-12:00:00
This is a change for 2024-03-12:00:00
This is a change for 2017-11-12:00:00
This is a change for 2015-07-12:30:00
This is a change for 2021-06-12:00:00
This is a change for 2016-12-17:30:00
This is a change for 2014-05-16:00:00
This is a change for 2021-02-13:00:00
This is a change for 2020-01-15:00:00
This is a change for 2019-05-12:00:00
This is a change for 2014-01-12:00:00
This is a change for 2019-09-11:00:00
This is a change for 2018-04-12:30:00
This is a change for 2023-02-15:00:00
This is a change for 2023-02-12:30:00
This is a change for 2016-06-13:00:00
This is a change for 2017-11-09:30:00
This is a change for 2021-12-14:00:00
This is a change for 2022-08-15:00:00
This is a change for 2017-04-15:00:00
This is a change for 2023-03-11:00:00
This is a change for 2023-10-15:00:00
This is a change for 2023-10-13:00:00
This is a change for 2016-05-09:30:00
This is a change for 2023-10-11:30:00
This is a change for 2020-09-09:00:00
This is a change for 2018-03-16:30:00
This is a change for 2022-02-11:30:00
This is a change for 2015-10-17:30:00
This is a change for 2014-12-15:00:00
This is a change for 2014-06-09:00:00
This is a change for 2024-11-10:30:00
This is a change for 2019-02-11:00:00
This is a change for 2021-07-13:00:00
This is a change for 2021-04-17:00:00
This is a change for 2022-04-11:00:00
This is a change for 2024-03-13:00:00
This is a change for 2024-10-11:30:00
This is a change for 2022-06-15:30:00
This is a change for 2014-06-15:30:00
This is a change for 2016-03-10:00:00
This is a change for 2016-06-13:00:00
This is a change for 2023-03-14:00:00
This is a change for 2023-10-15:30:00
This is a change for 2020-07-14:30:00
