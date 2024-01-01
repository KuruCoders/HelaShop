import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function AreaChart() {
    const chartOptions = {
        series: [
            { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
            { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
        ],
        chart: {
            type: "bar",
            height: 345,
            offsetX: -15,
            toolbar: { show: true },
            foreColor: "#adb0bb",
            fontFamily: 'inherit',
            sparkline: { enabled: false },
        },
        colors: ["#5D87FF", "#49BEFF"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "80%",
                borderRadius: [5],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        markers: { size: 0 },
        dataLabels: {
            enabled: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
           
        },
        xaxis: {
            type: "category",
            categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
           
        },
        yaxis: {
            show: true,
            min: 0,
            max: 400,
            tickAmount: 4,
           
        },
        tooltip: { theme: "dark" },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 3,
                        }
                    },
                }
            }
        ]
    };
    return (
        <>
            <ReactApexChart options={chartOptions}
                series={chartOptions.series}
                type="bar"
                height={chartOptions.chart.height} />
        </>
    )
}
