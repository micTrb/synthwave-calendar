import React from 'react';
import { Priority, Reminder } from "../../redux/ReminderSlice";
import { format } from 'date-fns';
import clsx from 'clsx';
import { getKeyByValue } from '../../utils/getKeyByValue';

interface Props {
	reminder: Reminder;
}


const ReminderTooltip: React.FC<Props> = ({ reminder }) => {

	const { content, date, priority, } = reminder;


	return (
		<div className="overflow-hidden bg-black-900 w-full rounded flex flex-col space-y-4 font-xirod">
			<div>
				<p className='text-2xl'>Task:</p>
				<p className="font-medium bg-purple-800 p-2 rounded text-2xl 
				mb-2 text-start font-digit">{content}</p>
			</div>

			<div>
				<p className='text-xl'>When:</p>

				<div className="bg-purple-800 p-2 rounded">
					<p className="text-white text-2xl font-digit">
						{format(date, 'MM/dd/yyyy')}
					</p>
					<p className="text-white text-2xl font-digit">
						{format(date, "hh:mm a")}
					</p>
				</div>

			</div>

			<div className='w-full '>
				<p className='text-xl'>Priority:</p>
				<div className="bg-purple-800 p-2 rounded">

					<p className='my-1 '>{getKeyByValue(priority)}</p>

					<div className={clsx(`w-1/6 h-5 rounded-lg ${priority}`)}></div>
				</div>
			</div>


			<button
				className="text-white hover:bg-opacity-100 
				
				bg-opacity-80 px-4 py-2 text-xl rounded bg-green-500 cursor-pointer"

			>Edit</button>
			<button
				className="text-white hover:bg-opacity-100 
				
				bg-opacity-80 px-4 py-2 text-xl rounded bg-red-400 cursor-pointer"

			>Delete</button>
		</div>
	)
}

export default ReminderTooltip