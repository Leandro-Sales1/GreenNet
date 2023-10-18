
function montaGrafico() {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        {
          label: 'Trimestre atual',
          /**
           * These colors come from Tailwind CSS palette
           * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
           */
          backgroundColor: '#3DCD58',
          borderColor: '#3DCD58',
          data: [43, 48, 40, 54, 67, 73, 88],
          fill: false,
        },
        {
          label: 'Trimestre anterior',
          fill: false,
          /**
           * These colors come from Tailwind CSS palette
           * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
           */
          backgroundColor: '#0694a2',
          borderColor: '#0694a2',
          data: [24, 42, 36, 57, 52, 49, 55],
        },
      ],
    },
    options: {
      responsive: true,
      /**
       * Default legends are ugly and impossible to style.
       * See examples in charts.html to add your own legends
       *  */
      legend: {
        display: false,
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value',
          },
        },
      },
    },
  });
}

function count() {
  let countPost = document.getElementById('countPost');
  let countShare = document.getElementById('countShare');
  let countComment = document.getElementById('countComment');
  let countLike = document.getElementById('countLike');
  let contador = 0;
  let cron = setInterval(() => {
    if (contador <= 278){
      countPost.innerHTML = contador;
    }
    if (contador <= 422){
      countShare.innerHTML = contador
    }
    if (contador <= 352){
      countComment.innerHTML = contador;
    }
    if (contador <= 512){
      countLike.innerHTML = contador;
    }
    if (contador > 512) {
      clearInterval(cron);
    }
    contador++;
  }, 1);

}
