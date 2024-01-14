import {PencilSquareIcon} from '@heroicons/react/24/solid';
import {json, Link, useLoaderData} from '@remix-run/react';
import type {LoaderFunctionArgs} from 'react-router';

export const loader = async ({params}: LoaderFunctionArgs) => {
  const {exerciseId} = params;
  const dummyEntries = [
    [
      {id: '1', weight: '186 lbs', reps: '3'},
      {id: '12', weight: '188 lbs', reps: '2'},
      {id: '13', weight: '184 lbs', reps: '5'},
      {id: '2', weight: '178 lbs', reps: '3'},
      {id: '3', weight: '192 lbs', reps: '3'},
    ],
    [
      {id: '4', weight: '202 lbs', reps: '3'},
      {id: '5', weight: '202 lbs', reps: '2'},
      {id: '15', weight: '202 lbs', reps: '5'},
      {id: '21', weight: '201 lbs', reps: '3'},
      {id: '221', weight: '201 lbs', reps: '3'},
    ],
  ];
  if (!exerciseId || +exerciseId >= dummyEntries.length) {
    console.log('Wrrr');
    return json('Not found', {status: 404});
  }

  return json({entries: dummyEntries[exerciseId]});
};

export default function ExerciseDetailPage() {
  return (
    <div className="relative">
      <Link className="text-lg font-bold" to="..">
        Exercises
      </Link>
      <div className="absolute right-0 top-0">
        {/* MORE: /new -> localhost:3000/new */}
        {/* MORE: new -> localhost:3000/exercises/1/new */}
        <Link to="/exercises/new" className="flex py-2 text-sky-600">
          <PencilSquareIcon className="h-6 w-6" />
        </Link>
      </div>

      <EntryCard />
    </div>
  );
}

export function EntryCard() {
  const {entries} = useLoaderData<Awaited<ReturnType<typeof loader>>>();
  console.log(entries);

  return (
    <ul>
      {entries?.map(entry => (
        <li key={entry.id} className="flex space-x-1">
          <span>{entry.weight}</span>
          <span>-</span>
          <span>{entry.reps} reps</span>
        </li>
      ))}
    </ul>
  );
}
