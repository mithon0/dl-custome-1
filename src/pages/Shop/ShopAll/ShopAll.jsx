import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card'; 
import CommonBanner from '../../../components/CommonBanner/CommonBanner';
import img from '../../../assets/banner/shopBanner2.webp';
import Slider from 'rc-slider';
import Chart from 'chart.js/auto';
import 'rc-slider/assets/index.css';
import { IoMdArrowDropright } from 'react-icons/io'; 

const ShopAll = () => {
  const priceOptions = [
    { id: 1, value: 50, label: '$ 50' },
    { id: 3, value: 100, label: '$ 100' },
    { id: 4, value: 150, label: '$ 150' },
    { id: 5, value: 200, label: '$ 200' },
    { id: 6, value: 300, label: '$ 300' },
    { id: 7, value: 400, label: '$ 400' },
    { id: 8, value: 500, label: '$ 500' },
    { id: 9, value: 600, label: '$ 600' },
    { id: 10, value: 700, label: '$ 700' },
    { id: 11, value: 800, label: '$ 800' },

  ];
  const initialMin = { label: 'Min', value: -1 };
  const initialMax = { label: 'Max', value: -2 };
  const [selectedMin, setSelectedMin] = useState(initialMin);
  const [selectedMax, setSelectedMax] = useState(initialMax);

  const [range, setRange] = useState({ min: 50, max: 800 });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://run-gran-server-flax.vercel.app/products')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);



  useEffect(() => {
    let chartInstance = null;

    const generateChartData = () => {
      if (
        selectedMin.value === initialMin.value ||
        selectedMax.value === initialMax.value
      ) {
        // If "Min" or "Max" is selected, return the full price range
        return {
          labels: priceOptions.map((option) => option.label),
          datasets: [
            {
              label: 'Price Range',
              backgroundColor: '#E0144A6E',
              borderColor: '#E0144C',
              borderWidth: 1,
              data: priceOptions.map((option) => option.value),
            },
          ],
        };
      }

      const minIndex = priceOptions.findIndex(
        (option) => option.value === selectedMin.value
      );
      const maxIndex = priceOptions.findIndex(
        (option) => option.value === selectedMax.value
      );
      const chartData = priceOptions.slice(minIndex, maxIndex + 1);
      const reversedLabels = chartData.map((option) => option.label).reverse(); // Reverse the labels

      return {
        labels: reversedLabels,
        datasets: [
          {
            label: 'Price Range',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: chartData.map((option) => option.value),
          },
        ],
      };
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById('chart');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: generateChartData(),
      options: {
        scales: {
          x: {
            display: false, // Hide X-axis labels
          },
          y: {
            display: false, // Hide Y-axis labels
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [selectedMin, selectedMax]);

  // Function to handle the range change
  const handleRangeChange = (newRange) => {
    setRange(newRange);
    // Update selectedMin and selectedMax based on the new range values
    const minOption = priceOptions.find((option) => option.value <= newRange.min);
    const maxOption = priceOptions.find((option) => option.value >= newRange.max);
    setSelectedMin(minOption || initialMin);
    setSelectedMax(maxOption || initialMax);
  };


  return (

    <section>
      <CommonBanner
        img={img}
        title="Shop All"
      ></CommonBanner>

      <div className='py-20 bg-base-100 flex flex-col-reverse space-y-10 lg:flex-row w-[90%] mx-auto gap-10'>

        {/* right side bar */}
        <div className='flex flex-col lg:w-[35%]'>
          <div className='cart-card px-6 py-10 bg-white shadow-md space-y-5'>
            <h1 className='text-3xl font-semibold'>SHOPPING CART</h1>
            <p>No products in the cart.</p>
          </div>

          <div className='border-t-2'></div>

          <div className='cart-card px-6 py-10 bg-white shadow-md space-y-5'>
            <h1 className='text-3xl font-semibold'>PRICE FILTER</h1>
            <div className="chart">
              <canvas id="chart" />
            </div>
            <div className="range-selector">
              <Slider
                min={50}
                max={800}
                value={[range.min, range.max]}
                onChange={(newValues) => handleRangeChange({ min: newValues[0], max: newValues[1] })}
                range
              />
            </div>
          </div>

          <div className='border-t-2'></div>

          <div className='cart-card px-6 py-10 bg-white shadow-md space-y-5 flex flex-col'>
            <h1 className='text-3xl font-semibold'>CATEGORIES</h1>
            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Accessories</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Clothes</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Gear</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Glasses</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Sale!</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Shoes</p>
          </div>

          <div className='border-t-2'></div>

          <div className='cart-card px-6 py-10 bg-white shadow-md space-y-2 flex flex-col'>
            <h1 className='text-3xl font-semibold my-3'>TAGS</h1>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Apparel</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Clothing</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Cross</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Marathon</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Running</p>

            <p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Seed</p>

          </div>

        </div>


        {/* content part */}
        <div className='flex flex-col space-y-14 w-full'>

          <div className='-mt-10 flex justify-between'>
            <div>

            </div>
            <select className="select select-bordered w-full max-w-xs rounded-xl">
              <option>Sort by popularity</option>
              <option>Sort by average</option>
              <option>Sort by latest</option>
              <option>Sort by latest</option>
              <option>Sort by price: Low to High</option>
              <option>Sort by price: High to Low</option>
            </select>
          </div>


          <div className='grid w-[90%] mx-auto lg:w-full grid-cols-1 lg:grid-cols-3 gap-10'>
            {
              data?.map((d, index) => <Card
                key={index}
                data={d}
              ></Card>)
            }
          </div>
        </div>
      </div>

    </section>

  );
};

export default ShopAll;