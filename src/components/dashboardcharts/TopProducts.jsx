import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Basic Tees', value: 400 },
  { name: 'Custom Short Pants', value: 1000 },
  { name: 'Super Hoodies', value: 300 },
  { name: 'Special Brand Tees', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export class TopProducts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className=' rounded border w-1/2 flex gap-1 bg-white'>
        <div className='flex flex-col items-center justify-center '>


          <div className='flex flex-col text-center mt-6' >
            <strong >Top products</strong>
            <PieChart width={250} height={300} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={120}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            </PieChart>
          </div>
        </div>
        <div className='mt-4'>
          May-Jun
          <div className='mt-5'>
            {
              data.map((item, index) => <DisplayItems key={index} item={item} index={index} />


              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TopProducts

function DisplayItems({ item, index }) {
  console.log(item)
  return (
    <div style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
      <div style={{display: 'flex',
    alignItems: 'center',}}>

      <span  style={{
        width:'10px',
        height:'10px',
        display:'inline-block',
        backgroundColor: COLORS[index],
        border: `1px  ${COLORS[index]}`,
        margin: '10px', padding: '0px 3px',
        borderRadius:'50%'
      }}>

      </span>



      <span>{item.name}</span>
        </div>

      
    </div>
  )
}