window.addEventListener("DOMContentLoaded", () => {
  const styles = getComputedStyle(document.documentElement);
  const chart1Color = styles.getPropertyValue('--chart-1').trim();
  const chart2Color = styles.getPropertyValue('--chart-2').trim();
  const chart3Color = styles.getPropertyValue('--chart-3').trim();
  const borderColor = styles.getPropertyValue('--border').trim();
  const muted = styles.getPropertyValue('--muted-foreground').trim();
  const greenAccess = [
    { group: "Lowest 20%", minutes: 16 },
    { group: "Low-middle", minutes: 13 },
    { group: "Middle", minutes: 10 },
    { group: "Upper-middle", minutes: 7 },
    { group: "Highest 20%", minutes: 4 }
  ];
  const servicesByIncome = [
    { decile: "1", gp: 2.1, transport: 3.2, parks: 1.8 },
    { decile: "2", gp: 2.4, transport: 3.5, parks: 2.2 },
    { decile: "3", gp: 2.8, transport: 3.9, parks: 2.6 },
    { decile: "4", gp: 3.1, transport: 4.3, parks: 3.0 },
    { decile: "5", gp: 3.4, transport: 4.6, parks: 3.5 },
    { decile: "6", gp: 3.6, transport: 4.9, parks: 4.0 },
    { decile: "7", gp: 3.9, transport: 5.3, parks: 4.5 },
    { decile: "8", gp: 4.2, transport: 5.7, parks: 5.1 },
    { decile: "9", gp: 4.5, transport: 6.1, parks: 5.8 },
    { decile: "10", gp: 4.8, transport: 6.5, parks: 6.4 },
  ];
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
  backgroundColor: "#fff",
  titleColor: "#000",
  bodyColor: "#000",
  borderColor: borderColor,
  borderWidth: 1,
  padding: 8,
  displayColors: false,
  titleFont: { size: 12 },
  bodyFont: { size: 12 }
},
      legend: {
        labels: {
          color: muted,
          font: { size: 12 }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: muted,
          font: { size: 11 }
        }
      },
      y: {
        grid: {
          color: borderColor,
          borderDash: [2, 4]
        },
        ticks: {
  color: muted,
  font: {
    size: 11,
    family: "system-ui, sans-serif"
  }
}
      }
    }
  };
  new Chart(document.getElementById("chart-1"), {
  type: "bar",
  data: {
    labels: greenAccess.map(d => d.group),
    datasets: [{
      data: greenAccess.map(d => d.minutes),
      backgroundColor: chart1Color,
      borderRadius: { topLeft: 2, topRight: 2 },
      barPercentage: 0.9,
      categoryPercentage: 0.8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 10, right: 10, left: 0, bottom: 0 }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
  backgroundColor: "#fff",
  titleColor: "#000",
  bodyColor: "#000",
  borderColor: borderColor,
  borderWidth: 1,
  padding: 8,
  displayColors: false,
  titleFont: { size: 12 },
  bodyFont: { size: 12 }
}
    },
    scales: {
      x: {
        grid: {
          display: false   
        },
        ticks: {
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" },
          maxRotation: 0,
          minRotation: 0
        },
        border: {
          color: borderColor   
        }
      },
      y: {
        grid: {
          color: borderColor,
          borderDash: [2, 4]   
        },
        ticks: {
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" }
        },
        border: {
          display: false   
        },
        title: {
          display: true,
          text: "minutes",
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" },
          padding: { bottom: 4 }
        }
      }
    }
  }
});
  new Chart(document.getElementById("chart-2"), {
  type: "line",
  data: {
    labels: servicesByIncome.map(d => d.decile),
    datasets: [
      {
        label: "GP surgeries",
        data: servicesByIncome.map(d => d.gp),
        borderColor: chart1Color,
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 4
      },
      {
        label: "Transport links",
        data: servicesByIncome.map(d => d.transport),
        borderColor: chart2Color,
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 4
      },
      {
        label: "Parks & green space",
        data: servicesByIncome.map(d => d.parks),
        borderColor: chart3Color,
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 10, right: 20, left: 0, bottom: 0 }
    },
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: borderColor,
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        titleFont: { size: 12 },
        bodyFont: { size: 12 }
      },
      legend: {
        position: "top",
        labels: {
          color: muted,
          font: { size: 12 },
          usePointStyle: true,
          pointStyle: "line",
          padding: 10,
          boxWidth: 30
        }
      },
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        formatter: (value, context) => {
          return `${context.dataset.label}: ${value}`;
        },
        color: muted,
        font: {
          size: 10,
          family: "system-ui, sans-serif"
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: borderColor,
          borderDash: [2, 4],
          drawBorder: false
        },
        ticks: {
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" },
          padding: 6
        },
        border: {
          color: borderColor
        },
        title: {
          display: true,
          text: "Income decile (1 = lowest, 10 = highest)",
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" },
          padding: { top: 8, bottom: 0 }
        }
      },
      y: {
        min: 0,
        max: 7,
        grid: {
          color: borderColor,
          borderDash: [2, 4],
          drawBorder: false
        },
        ticks: {
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" }
        },
        border: {
          display: false
        },
        title: {
          display: true,
          text: "access score",
          color: muted,
          font: { size: 11, family: "system-ui, sans-serif" },
          padding: { right: 10 }
        }
      }
    },
    elements: {
      line: {
        fill: false
      }
    }
  }
});
});