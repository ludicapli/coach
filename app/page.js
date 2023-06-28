"use client";

import Image from 'next/image'
import Calendar from 'components/calendar';

export default function Home() {
  let now = new Date();
  return (
    <main id="app">
      <Calendar year={now.getFullYear()} month={now.getMonth()+1} day={now.getDate()} />

    </main>
  )
}
