 jQuery(function () {
    jQuery('#skilldia').highcharts({
      chart: {
          polar: true,
          type: 'line'
      },
      credits: {
      enabled: false
    },
      title: {
          text: ''
      },
      
      pane: {
          startAngle: 0,
          endAngle: 360
      },
  
      xAxis: {
        type: 'category',
          tickInterval: 1,
          categories: ['WordPress', 'HTML/CSS', 'JavaScript', 'React Js', 'WooCommerce', 'WP/WooCommerce Rest API', 'Design', 'PHP'],
          min: 0,
          max: 8,
          tickmarkPlacement: 'on',

          lineWidth: 0,
          labels: {
            formatter: function () {
              return this.value
            }
          },

      },
       tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<div class="newTip"><big>{point.key}</big>' + '<br/>',
            pointFormat: '{point.y} / 5.0',
            footerFormat: '</div>',
            valueDecimals: 1
        },
      yAxis: {
          gridLineInterpolation: 'polygon',
          min: 0,
          max: 5,
          tickInterval: 1,
      minorTickInterval: 0.5,
      showLastLabel: 'true',
      labels:{
          x: 8,
        style: {
          color: '#fff',
          textShadow:'1px 1px 0px #fff',
          display: "inline-block"
          }       
      },
      
      },
      
      plotOptions: {
          series: {
              pointStart: 0,
              pointInterval: 1,

          },
          column: {
              pointPadding: 0,
              groupPadding: 0
          }
      },
  
      series: [{
          type: 'area',
          name: 'Skills',
          data: [4.9, 4.5, 4, 3.8, 4.5, 4.2, 3.5, 4.3],
          pointPlacement: "on"
      }]
  });
});

 function makesvg(percentage, inner_text=""){

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = ""

  if(percentage < 0){
    classes = "danger-stroke circle-chart__circle--negative";
  } else if(percentage > 0 && percentage <= 30){
    classes = "warning-stroke";
  } else{
    classes = "success-stroke";
  }

 var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
     + '<circle class="circle-chart__circle '+classes+'"'
     + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
     + '<g class="circle-chart__info">'
     + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

  if(inner_text){
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  }
  
  svg += ' </g></svg>';
  
  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));

$(function () {
     $('.circlechart').circlechart();
});

const burger = document.getElementById('burger');
const imchintesh_nav = document.getElementById('imchintesh_nav');

burger.addEventListener('click', toggleNav);

function toggleNav() {
  console.log('clicked');
  if(burger.classList.contains('is-active')){
       burger.classList.remove('is-active');
       imchintesh_nav.classList.remove('fixed');
  }else{
      burger.classList.add('is-active'); 
      imchintesh_nav.classList.add('fixed');
  }
}
