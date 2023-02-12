import React from 'react';

export const columns = [ 
  {
    title: '',
    dataIndex: 'period_time',
    key: 'period_time',
    render: (text) => <strong>{text}</strong>,
    align: 'center',
  },
  {
    title: '一',
    dataIndex: 'monday',
    key: 'monday',
    align: 'center',
  },
  {
    title: '二',
    dataIndex: 'tuesday',
    key: 'tuesday',
    align: 'center',
  },
  {
    title: '三',
    key: 'wednesday',
    dataIndex: 'wednesday',
    align: 'center',
  },
  {
    title: '四',
    dataIndex: 'thursday',
    key: 'thursday',
    align: 'center',
  },
  {
    title: '五',
    dataIndex: 'friday',
    key: 'friday',
    align: 'center',
  },
  {
    title: '六',
    dataIndex: 'saturday',
    key: 'saturday',
    align: 'center',
  },
]

export const BranchHuaSia = [
  {
    key: '1',
    period_time: (
      <>
        <li>早診</li>
        <li>09:30</li>
        <li>11:30</li>
      </>
    ),
    monday: '✅',
    tuesday: '',
    wednesday: '✅',
    thursday: '',
    friday: '✅',
    saturday: '✅',
  },
  {
    key: '2',
    period_time: (
      <>
        <li>午診</li>
        <li>14:30</li>
        <li>17:00</li>
      </>
    ),
    monday: '✅',
    tuesday: '✅',
    wednesday: '✅',
    thursday: '✅',
    friday: '✅',
    saturday: '',
  },
  {
    key: '3',
    period_time: (
      <>
        <li>晚診</li>
        <li>18:30</li>
        <li>20:30</li>
      </>
    ),
    monday: '✅',
    tuesday: '✅',
    wednesday: '✅',
    thursday: '✅',
    friday: '',
    saturday: '',
  },
];

export const BranChingPu = [
    {
    key: '1',
    period_time: (
      <>
        <li>早診</li>
        <li>09:30</li>
        <li>11:30</li>
      </>
    ),
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '✅',
    saturday: '✅',
  },
  {
    key: '2',
    period_time: (
      <>
        <li>午診</li>
        <li>14:30</li>
        <li>17:00</li>
      </>
    ),
    monday: '✅',
    tuesday: '✅',
    wednesday: '✅',
    thursday: '✅',
    friday: '✅',
    saturday: '',
  },
  {
    key: '3',
    period_time: (
      <>
        <li>晚診</li>
        <li>18:30</li>
        <li>20:30</li>
      </>
    ),
    monday: '✅',
    tuesday: '✅',
    wednesday: '✅',
    thursday: '✅',
    friday: '',
    saturday: '',
  },
]
