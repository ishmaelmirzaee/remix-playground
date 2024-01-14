import {NavLink, Outlet} from '@remix-run/react';

const dummyExercises = ['Bench press', 'Push ups', 'Squat'];

export default function ExercisesRoute() {
  return (
    <>
      <nav>
        {dummyExercises.map((d, idx) => (
          <NavLink key={idx} to={`/exercises/${idx}`} className="px-2">
            {d}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </>
  );
}
