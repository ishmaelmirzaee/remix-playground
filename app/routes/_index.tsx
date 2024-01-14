import {Link} from '@remix-run/react';

export default function HomeRoute() {
  return (
    <>
      <Link to="exercises" className="">
        Exercises
      </Link>
    </>
  );
}
