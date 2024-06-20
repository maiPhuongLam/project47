import React from 'react'
import { fakeShows } from '@/fake-data/Show'
import { CalendarForm } from '@/components/CalendarForm'
import SelectShow from '@/components/SelectShow'
const TimeAndPositionBooking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="max-w-6xl w-full flex justify-between space-x-4 gap-1">
        {/* Time */}
        <div className=" p-8 rounded-lg w-4/12 border-slate-400 border-2">
          <CalendarForm />
        </div>

        {/* SHow Form */}
        <div className="p-8 rounded-lg w-8/12 border-slate-400 border-2">
          <SelectShow />
        </div>
      </div>
    </div>
  )
}

export default TimeAndPositionBooking
