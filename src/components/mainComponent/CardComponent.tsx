import React, { useEffect, useState } from 'react';

import { Button, Calendar, Card, Col, DatePicker, Row, Space, message, notification } from 'antd';
import pic from '../../assets/images/snowy-road-picture-3wlwtu7z46vbv7k2.jpg'
import './index.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Search, { SearchProps } from 'antd/es/input/Search';
import axios from 'axios';
import es from 'antd/es/date-picker/locale/ka_GE';
import moment from 'moment';

import { ExportToExcel } from './ExportToExcel'
const { Meta } = Card;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}


const columns: ColumnsType<any> = [
  {
    title: 'Person',
    width: 240,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Account',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',

  },
  {
    title: ' 1',
    dataIndex: 'day1',
    key: 'key1',
    width: 90,
  },
  {
    title: ' 2',
    dataIndex: 'day2',
    key: '2',
    width: 90,
  },
  {
    title: ' 3',
    dataIndex: 'day3',
    key: '3',
    width: 90,
  },
  {
    title: ' 4',
    dataIndex: 'day4',
    key: '4',
    width: 90,
  },
  {
    title: ' 5',
    dataIndex: 'day5',
    key: '5',
    width: 90,
  },
  {
    title: ' 6',
    dataIndex: 'day6',
    key: '6',
    width: 90,
  },
  {
    title: ' 7',
    dataIndex: 'day7',
    key: '7',
    width: 90,
  },
  {
    title: ' 8', dataIndex: 'day8', key: '8',
    width: 90,
  },
  {
    title: ' 9', dataIndex: 'day9', key: '9',
    width: 90,
  },
  {
    title: ' 10', dataIndex: 'day10', key: '10',
    width: 90,
  },
  {
    title: ' 11', dataIndex: 'day11', key: '11',
    width: 90,
  },
  {
    title: ' 12', dataIndex: 'day12', key: '12',
    width: 90,
  },
  {
    title: ' 13', dataIndex: 'day13', key: '13',
    width: 90,
  },
  {
    title: ' 14', dataIndex: 'day14', key: '14',
    width: 90,
  },
  {
    title: ' 15', dataIndex: 'day15', key: '15',
    width: 90,
  },
  {
    title: ' 16', dataIndex: 'day16', key: '16',
    width: 90,
  },
  {
    title: ' 17', dataIndex: 'day17', key: '17',
    width: 90,
  },
  {
    title: ' 18', dataIndex: 'day18', key: '18',
    width: 90,
  },
  {
    title: ' 19', dataIndex: 'day19', key: '19',
    width: 90,
  },
  {
    title: ' 20', dataIndex: 'day20', key: '20',
    width: 90,
  },
  {
    title: ' 21', dataIndex: 'day21', key: '21',
    width: 90,
  },
  {
    title: ' 22', dataIndex: 'day22', key: '22',
    width: 90,
  },
  {
    title: ' 23', dataIndex: 'day23', key: '23',
    width: 90,
  },
  {
    title: ' 24', dataIndex: 'day24', key: '24',
    width: 90,
  },
  {
    title: ' 25', dataIndex: 'day25', key: '25',
    width: 90,
  },
  {
    title: ' 26', dataIndex: 'day26', key: '26',
    width: 90,
  },
  {
    title: ' 27', dataIndex: 'day27', key: '27',
    width: 90,
  },
  {
    title: ' 28', dataIndex: 'day28', key: '28',
    width: 90,
  },
  {
    title: ' 29', dataIndex: 'day29', key: '29',
    width: 90,
  },
  {
    title: ' 30', dataIndex: 'day30', key: '30',
    width: 90,
  },
  {
    title: ' 31', dataIndex: 'day31', key: '31',
    width: 90,
  },
  {
    title: 'ს ჯამი', dataIndex: 'fullWorkHours', key: 'fullWorkHours',
    width: 90,
  },
  {
    title: 'ს დღეები', dataIndex: 'fullWorKDays', key: 'fullWorKDays',
    width: 90,
  },
  {
    title: 'შ ჯამი', dataIndex: 'fullVacationHours', key: 'fullVacationHours',
    width: 90,
  },
  {
    title: 'შ დღეები', dataIndex: 'fullVacationDays', key: 'fullVacationDays',
    width: 90,
  },
  {
    title: 'ს/ფ ჯამი', dataIndex: 'fullSickHours', key: 'fullSickHours',
    width: 110,
  },
  {
    title: 'ს/ფ დღეები', dataIndex: 'fullIllDay', key: 'fullIllDay',
    width: 110,
  },
  {
    title: 'უ/შ ჯამი', dataIndex: 'fullUnpaidVacationHours', key: 'fullUnpaidVacationHours',
    width: 110,
  },
  {
    title: 'უ/შ დღეები', dataIndex: 'fullUnpaidVacationDay', key: 'fullUnpaidVacationDay',
    width: 110,
  },
  {
    title: 'დასვენება', dataIndex: 'fullWeekendDay', key: 'fullWeekendDay',
    width: 110,
  }
  
];



export const CardComponent = () => {
  const today = new Date();
  const [date1, setDate] = useState<any>(new Date);
  const fileName = "myfile"; // here enter filename for your excel file
  const [exceldata, setExcelData] = React.useState([])

  const inputdate1Change = (date: any, dateString: any) => {

    console.log(date, 'dateString');
    setDate(date)
  };
  const [api, contextHolder] = notification.useNotification();
  type NotificationType = 'success' | 'info' | 'warning' | 'error';
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'მსგავს პიროვნებაზე ინფორმაცია ვერ მოიძებნა',
    });
  };


  const [response, setResponse] = useState<any>([]);
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(date1, 'date11111')


    if (value == '') {
      value = 'null'
    }

   
    // https://localhost:5249/
    axios.get(`${window.location.origin}/TimeGeApi/api/Rmg/user`, {
      headers: {
        'Content-Type': 'application/json',
    },     
      params: {
        usr_id: value,
        date: date1,

      }
    }
    )

      .then((response) => {

        if (response.data.length == 0) {
          openNotificationWithIcon('error')

        }



        console.log(response.data, 'data');
        setResponse(response.data)

        const customHeadings = response?.data?.map((item: any) => ({
          'pirovneba': item.fullname,
          "day1": (item.day1 == 'სთ' ? item.day1hour : item.day1),
          "day2": item.day2 == 'სთ' ? item.day2hour : item.day2,
          "day3": item.day3 == 'სთ' ? item.day3hour : item.day3,
          "day4": item.day4 == 'სთ' ? item.day4hour : item.day4,
          "day5": item.day5 == 'სთ' ? item.day5hour : item.day5,
          "day6": item.day6 == 'სთ' ? item.day6hour : item.day6,
          "day7": item.day7 == 'სთ' ? item.day7hour : item.day7,
          "day8": item.day8 == 'სთ' ? item.day8hour : item.day8,
          "day9": item.day9 == 'სთ' ? item.day9hour : item.day9,
          "day10": item.day10 == 'სთ' ? item.day1hour : item.day10,
          "day11": item.day11 == 'სთ' ? item.day1hour : item.day11,
          "day12": item.day12 == 'სთ' ? item.day2hour : item.day12,
          "day13": item.day13 == 'სთ' ? item.day3hour : item.day13,
          "day14": item.day14 == 'სთ' ? item.day4hour : item.day14,
          "day15": item.day15 == 'სთ' ? item.day5hour : item.day15,
          "day16": item.day16 == 'სთ' ? item.day6hour : item.day16,
          "day17": item.day17 == 'სთ' ? item.day7hour : item.day17,
          "day18": item.day18 == 'სთ' ? item.day8hour : item.day18,
          "day19": item.day19 == 'სთ' ? item.day9hour : item.day19,
          "day20": item.day20 == 'სთ' ? item.day1hour : item.day20,
          "day21": item.day21 == 'სთ' ? item.day2hour : item.day21,
          "day22": item.day22 == 'სთ' ? item.day3hour : item.day22,
          "day23": item.day23 == 'სთ' ? item.day4hour : item.day23,
          "day24": item.day24 == 'სთ' ? item.day5hour : item.day24,
          "day25": item.day25 == 'სთ' ? item.day6hour : item.day25,
          "day26": item.day26 == 'სთ' ? item.day7hour : item.day26,
          "day27": item.day27 == 'სთ' ? item.day8hour : item.day27,
          "day28": item.day28 == 'სთ' ? item.day9hour : item.day28,
          "day29": item.day29 == 'სთ' ? item.day7hour : item.day29,
          "day30": item.day30 == 'სთ' ? item.day8hour : item.day30,
          "day31": item.day31 == 'სთ' ? item.day9hour : item.day31,

          "ს ჯამი":item.fullWorkHours,
          "შ ჯამი":item.fullVacationHours,
        	"ს/ფ ჯამი":item.fullSickHours,
        	"უ/შ ჯამი":item.fullUnpaidVacationHours, 
        	"დასვენება":item.fullWeekendDay,	

        }))
        setExcelData(customHeadings)


      });
  }

  let month = today.getMonth() + 1;
  let year = today.getFullYear() + 1;
  const data: any = [];
  response?.map((item: any) => (
    data.push({
      key: item.fullname,
      name: item.fullname,
      day1: <div>{item.day1 == 'შ' && <div className='color_green'>{item.day1}</div>}
        {item.day1 == 'სთ' && <div className='color_orange'>{item.day1hour}</div>}
        {item.day1 == 'დასვენება' && <div className='color_blue'>{item.day1}</div>}
        {item.day1 == 'ს/ფ' && <div className='color_red'>{item.day1}</div>}
        {item.day1 == 'უ/შ' && <div className='color_Pink'>{item.day1}</div>}</div>,

      day2: <div>{item.day2 == 'შ' && (<div className='color_green'>{item.day2}</div>)}
        {item.day2 == 'სთ' && (<div className='color_orange'>{item.day2hour}</div>)}
        {item.day2 == 'დასვენება' && <div className='color_green'>{item.day2}</div>}
        {item.day2 == 'ს/ფ' && <div className='color_red'>{item.day2}</div>}
        {item.day2 == 'უ/შ' && <div className='color_Pink'>{item.day2}</div>}</div>,

      day3: <div>{item.day3 == 'შ' && (<div className='color_green'>{item.day3}</div>)}
        {item.day3 == 'სთ' && (<div className='color_orange'>{item.day3hour}</div>)}
        {item.day3 == 'დასვენება' && <div className='color_green'>{item.day3}</div>}
        {item.day3 == 'ს/ფ' && <div className='color_red'>{item.day3}</div>}
        {item.day3 == 'უ/შ' && <div className='color_Pink'>{item.day3}</div>}</div>,

      day4: <div>{item.day4 == 'შ' && (<div className='color_green'>{item.day4}</div>)}
        {item.day4 == 'სთ' && (<div className='color_orange'>{item.day4hour}</div>)}
        {item.day4 == 'დასვენება' && <div className='color_blue'>{item.day4}</div>}
        {item.day4 == 'ს/ფ' && <div className='color_red'>{item.day4}</div>}
        {item.day4 == 'უ/შ' && <div className='color_Pink'>{item.day4}</div>}</div>,

      day5: <div>{item.day5 == 'შ' && (<div className='color_green'>{item.day5}</div>)}
        {item.day5 == 'სთ' && (<div className='color_orange'>{item.day5hour}</div>)}
        {item.day5 == 'დასვენება' && <div className='color_blue'>{item.day5}</div>}
        {item.day5 == 'ს/ფ' && <div className='color_red'>{item.day5}</div>}
        {item.day5 == 'უ/შ' && <div className='color_Pink'>{item.day5}</div>}</div>,

      day6: <div>{item.day6 == 'შ' && (<div className='color_green'>{item.day6}</div>)}
        {item.day6 == 'სთ' && (<div className='color_orange'>{item.day6hour}</div>)}
        {item.day6 == 'დასვენება' && <div className='color_blue'>{item.day6}</div>}
        {item.day6 == 'ს/ფ' && <div className='color_red'>{item.day6}</div>}
        {item.day6 == 'უ/შ' && <div className='color_Pink'>{item.day6}</div>}</div>,

      day7: <div>{item.day7 == 'შ' && (<div className='color_green'>{item.day7}</div>)}
        {item.day7 == 'სთ' && (<div className='color_orange'>{item.day7hour}</div>)}
        {item.day7 == 'დასვენება' && <div className='color_blue'>{item.day7}</div>}
        {item.day7 == 'ს/ფ' && <div className='color_red'>{item.day7}</div>}
        {item.day7 == 'უ/შ' && <div className='color_Pink'>{item.day7}</div>}</div>,

      day8: <div>{item.day8 == 'შ' && (<div className='color_green'>{item.day8}</div>)}
        {item.day8 == 'სთ' && (<div className='color_orange'>{item.day8hour}</div>)}
        {item.day8 == 'დასვენება' && <div className='color_blue'>{item.day8}</div>}
        {item.day8 == 'ს/ფ' && <div className='color_red'>{item.day8}</div>}
        {item.day8 == 'უ/შ' && <div className='color_Pink'>{item.day8}</div>}</div>,

      day9: <div>{item.day9 == 'შ' && (<div className='color_green'>{item.day9}</div>)}
        {item.day9 == 'სთ' && (<div className='color_orange'>{item.day9hour}</div>)}
        {item.day9 == 'დასვენება' && <div className='color_blue'>{item.day9}</div>}
        {item.day9 == 'ს/ფ' && <div className='color_red'>{item.day9}</div>}
        {item.day9 == 'უ/შ' && <div className='color_Pink'>{item.day9}</div>}</div>,

      day10: <div>{item.day10 == 'შ' && (<div className='color_green'>{item.day10}</div>)}
        {item.day10 == 'სთ' && (<div className='color_orange'>{item.day10hour}</div>)}
        {item.day10 == 'დასვენება' && <div className='color_blue'>{item.day10}</div>}
        {item.day10 == 'ს/ფ' && <div className='color_red'>{item.day10}</div>}
        {item.day10 == 'უ/შ' && <div className='color_Pink'>{item.day10}</div>}</div>,

      day11: <div>{item.day11 == 'შ' && (<div className='color_green'>{item.day11}</div>)}
        {item.day11 == 'სთ' && (<div className='color_orange'>{item.day11hour}</div>)}
        {item.day11 == 'დასვენება' && <div className='color_blue'>{item.day11}</div>}
        {item.day11 == 'ს/ფ' && <div className='color_red'>{item.day11}</div>}
        {item.day11 == 'უ/შ' && <div className='color_Pink'>{item.day11}</div>}</div>,

      day12: <div>{item.day12 == 'შ' && (<div className='color_green'>{item.day12}</div>)}
        {item.day12 == 'სთ' && (<div className='color_orange'>{item.day12hour}</div>)}
        {item.day12 == 'დასვენება' && <div className='color_blue'>{item.day12}</div>}
        {item.day12 == 'ს/ფ' && <div className='color_red'>{item.day12}</div>}
        {item.day12 == 'უ/შ' && <div className='color_Pink'>{item.day12}</div>}</div>,

      day13: <div>{item.day13 == 'შ' && (<div className='color_green'>{item.day13}</div>)}
        {item.day13 == 'სთ' && (<div className='color_orange'>{item.day13hour}</div>)}
        {item.day13 == 'დასვენება' && <div className='color_blue'>{item.day13}</div>}
        {item.day13 == 'ს/ფ' && <div className='color_red'>{item.day13}</div>}
        {item.day13 == 'უ/შ' && <div className='color_Pink'>{item.day13}</div>}</div>,

      day14: <div>{item.day14 == 'შ' && (<div className='color_green'>{item.day14}</div>)}
        {item.day14 == 'სთ' && (<div className='color_orange'>{item.day14hour}</div>)}
        {item.day14 == 'დასვენება' && <div className='color_blue'>{item.day14}</div>}
        {item.day14 == 'ს/ფ' && <div className='color_red'>{item.day14}</div>}
        {item.day14 == 'უ/შ' && <div className='color_Pink'>{item.day14}</div>}</div>,

      day15: <div>{item.day15 == 'შ' && (<div className='color_green'>{item.day15}</div>)}
        {item.day15 == 'სთ' && (<div className='color_orange'>{item.day15hour}</div>)}
        {item.day15 == 'დასვენება' && <div className='color_blue'>{item.day15}</div>}
        {item.day15 == 'ს/ფ' && <div className='color_red'>{item.day15}</div>}
        {item.day15 == 'უ/შ' && <div className='color_Pink'>{item.day15}</div>}</div>,

      day16: <div>{item.day16 == 'შ' && (<div className='color_green'>{item.day16}</div>)}
        {item.day16 == 'სთ' && (<div className='color_orange'>{item.day16hour}</div>)}
        {item.day16 == 'დასვენება' && <div className='color_blue'>{item.day16}</div>}
        {item.day16 == 'ს/ფ' && <div className='color_red'>{item.day16}</div>}
        {item.day16 == 'უ/შ' && <div className='color_Pink'>{item.day17}</div>}</div>,

      day17: <div>{item.day17 == 'შ' && (<div className='color_green'>{item.day17}</div>)}
        {item.day17 == 'სთ' && (<div className='color_orange'>{item.day17hour}</div>)}
        {item.day17 == 'დასვენება' && <div className='color_blue'>{item.day17}</div>}
        {item.day17 == 'ს/ფ' && <div className='color_red'>{item.day17}</div>}
        {item.day17 == 'უ/შ' && <div className='color_Pink'>{item.day17}</div>}</div>,

      day18: <div>{item.day18 == 'შ' && (<div className='color_green'>{item.day18}</div>)}
        {item.day18 == 'სთ' && (<div className='color_orange'>{item.day18hour}</div>)}
        {item.day18 == 'დასვენება' && <div className='color_blue'>{item.day18}</div>}
        {item.day18 == 'ს/ფ' && <div className='color_red'>{item.day18}</div>}
        {item.day18 == 'უ/შ' && <div className='color_Pink'>{item.day18}</div>}</div>,

      day19: <div>{item.day19 == 'შ' && (<div className='color_green'>{item.day19}</div>)}
        {item.day19 == 'სთ' && (<div className='color_orange'>{item.day19hour}</div>)}
        {item.day19 == 'დასვენება' && <div className='color_blue'>{item.day19}</div>}
        {item.day19 == 'ს/ფ' && <div className='color_red'>{item.day19}</div>}
        {item.day19 == 'უ/შ' && <div className='color_Pink'>{item.day19}</div>}</div>,

      day20: <div>{item.day20 == 'შ' && (<div className='color_green'>{item.day20}</div>)}
        {item.day20 == 'სთ' && (<div className='color_orange'>{item.day20hour}</div>)}
        {item.day20 == 'დასვენება' && <div className='color_blue'>{item.day20}</div>}
        {item.day20 == 'ს/ფ' && <div className='color_red'>{item.day20}</div>}
        {item.day20 == 'უ/შ' && <div className='color_Pink'>{item.day20}</div>}</div>,

      day21: <div>{item.day21 == 'შ' && (<div className='color_green'>{item.day21}</div>)}
        {item.day21 == 'სთ' && (<div className='color_orange'>{item.day21hour}</div>)}
        {item.day21 == 'დასვენება' && <div className='color_blue'>{item.day21}</div>}
        {item.day21 == 'ს/ფ' && <div className='color_red'>{item.day21}</div>}
        {item.day21 == 'უ/შ' && <div className='color_Pink'>{item.day21}</div>}</div>,

      day22: <div>{item.day22 == 'შ' && (<div className='color_green'>{item.day22}</div>)}
        {item.day22 == 'სთ' && (<div className='color_orange'>{item.day22hour}</div>)}
        {item.day22 == 'დასვენება' && <div className='color_blue'>{item.day22}</div>}
        {item.day22 == 'ს/ფ' && <div className='color_red'>{item.day22}</div>}
        {item.day22 == 'უ/შ' && <div className='color_Pink'>{item.day22}</div>}</div>,

      day23: <div>{item.day23 == 'შ' && (<div className='color_green'>{item.day23}</div>)}
        {item.day23 == 'სთ' && (<div className='color_orange'>{item.day23hour}</div>)}
        {item.day23 == 'დასვენება' && <div className='color_blue'>{item.day23}</div>}
        {item.day23 == 'ს/ფ' && <div className='color_red'>{item.day23}</div>}
        {item.day23 == 'უ/შ' && <div className='color_Pink'>{item.day23}</div>}</div>,

      day24: <div>{item.day24 == 'შ' && (<div className='color_green'>{item.day24}</div>)}
        {item.day24 == 'სთ' && (<div className='color_orange'>{item.day24hour}</div>)}
        {item.day24 == 'დასვენება' && <div className='color_blue'>{item.day24}</div>}
        {item.day24 == 'ს/ფ' && <div className='color_red'>{item.day24}</div>}
        {item.day24 == 'უ/შ' && <div className='color_Pink'>{item.day24}</div>}</div>,

      day25: <div>{item.day25 == 'შ' && (<div className='color_green'>{item.day25}</div>)}
        {item.day25 == 'სთ' && (<div className='color_orange'>{item.day25hour}</div>)}
        {item.day25 == 'დასვენება' && <div className='color_blue'>{item.day25}</div>}
        {item.day25 == 'ს/ფ' && <div className='color_red'>{item.day25}</div>}
        {item.day25 == 'უ/შ' && <div className='color_Pink'>{item.day25}</div>}</div>,

      day26: <div>{item.day26 == 'შ' && (<div className='color_green'>{item.day26}</div>)}
        {item.day26 == 'სთ' && (<div className='color_orange'>{item.day26hour}</div>)}
        {item.day26 == 'დასვენება' && <div className='color_blue'>{item.day26}</div>}
        {item.day26 == 'ს/ფ' && <div className='color_red'>{item.day26}</div>}
        {item.day26 == 'უ/შ' && <div className='color_Pink'>{item.day26}</div>}</div>,

      day27: <div>{item.day27 == 'შ' && (<div className='color_green'>{item.day27}</div>)}
        {item.day27 == 'სთ' && (<div className='color_orange'>{item.day27hour}</div>)}
        {item.day27 == 'დასვენება' && <div className='color_blue'>{item.day27}</div>}
        {item.day27 == 'ს/ფ' && <div className='color_red'>{item.day27}</div>}
        {item.day27 == 'უ/შ' && <div className='color_Pink'>{item.day27}</div>}</div>,

      day28: <div>{item.day28 == 'შ' && (<div className='color_green'>{item.day28}</div>)}
        {item.day28 == 'სთ' && (<div className='color_orange'>{item.day28hour}</div>)}
        {item.day28 == 'დასვენება' && <div className='color_blue'>{item.day28}</div>}
        {item.day28 == 'ს/ფ' && <div className='color_red'>{item.day28}</div>}
        {item.day28 == 'უ/შ' && <div className='color_Pink'>{item.day28}</div>}</div>,

      day29: <div>{item.day29 == 'შ' && (<div className='color_green'>{item.day29}</div>)}
        {item.day29 == 'სთ' && (<div className='color_orange'>{item.day29hour}</div>)}
        {item.day29 == 'დასვენება' && <div className='color_blue'>{item.day29}</div>}
        {item.day29 == 'ს/ფ' && <div className='color_red'>{item.day29}</div>}
        {item.day29 == 'უ/შ' && <div className='color_Pink'>{item.day29}</div>}</div>,

      day30: <div>{item.day30 == 'შ' && (<div className='color_green'>{item.day30}</div>)}
        {item.day30 == 'სთ' && (<div className='color_orange'>{item.day30hour}</div>)}
        {item.day30 == 'დასვენება' && <div className='color_blue'>{item.day30}</div>}
        {item.day30 == 'ს/ფ' && <div className='color_red'>{item.day30}</div>}
        {item.day30 == 'უ/შ' && <div className='color_Pink'>{item.day30}</div>}</div>,

      day31: <div>{item.day31 == 'შ' && (<div className='color_green'>{item.day31}</div>)}
        {item.day31 == 'სთ' && (<div className='color_orange'>{item.day31hour}</div>)}
        {item.day31 == 'დასვენება' && <div className='color_blue'>{item.day31}</div>}
        {item.day31 == 'ს/ფ' && <div className='color_red'>{item.day31}</div>}
        {item.day31 == 'უ/შ' && <div className='color_Pink'>{item.day31}</div>}</div>,

      fullWorkHours: <div>{item.fullWorkHours}</div>,
      fullWorKDays:<div>{item.fullWorKDays}</div>,
      fullSickHours: <div>{item.fullSickHours}</div>,
      fullIllDay:<div>{item.fullIllDay}</div>,
      fullVacationHours: <div>{item.fullVacationHours}</div>,
      fullVacationDays:<div>{item.fullVacationDays}</div>,
      fullUnpaidVacationHours: <div>{item.fullUnpaidVacationHours}</div>,
      fullUnpaidVacationDay:<div>{item.fullUnpaidVacationDay}</div>,

      fullWeekendDay: <div>{item.fullWeekendDay}</div>,




    })
  ))

  return (
    <div>

      {contextHolder}
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <ExportToExcel apiData={exceldata} fileName={fileName} />
      <DatePicker
        onChange={inputdate1Change}
        className="organisationInput"
        locale={es}
        format="DD/MM/YYYY"
      />
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 400 }} />
    </div>
  )
}

