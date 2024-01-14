import {PlusIcon} from '@heroicons/react/24/outline';

export default function NewEntry() {
  return (
    <div className="px-4 py-2">
      <h1 className="text-2xl font-bold">New Entry</h1>
      <form className="my-3 flex flex-col place-content-center text-xs">
        <div className="flex flex-col">
          <label>Date</label>
          <input type="date" className="w-full rounded" />
        </div>

        <div>
          <div className="mt-2 grid grid-cols-4 grid-rows-1 place-content-center gap-1 text-center">
            <div className="col-span-1 flex flex-col">
              <label>Sets</label>
              <label>1</label>
            </div>
            <div className="col-span-1 flex flex-col">
              <label>Weight (lbs)</label>
              <input type="number" min={1} />
            </div>
            <div className="col-span-1 flex flex-col">
              <label>Reps</label>
              <input type="number" min={1} className="max-w-auto" />
            </div>
            <div className="col-span-1 flex flex-col items-center">
              <label>Tracking set</label>
              <input type="checkbox" className="rounded-full" />
            </div>
          </div>

          <button className="my-2 flex w-full items-center justify-center space-x-2 border border-dashed border-slate-950 py-2">
            <PlusIcon className="h-5 w-5" />
            <span>Add set</span>
          </button>
        </div>
        <div className="space-y-2">
          <label>Notes</label>
          <textarea
            rows={5}
            className="w-full border border-dashed border-slate-950 py-2"
          />
        </div>
        <div className="flex justify-between">
          <button className="border border-slate-950 px-4 py-1">Cancel</button>
          <button className="border bg-slate-950 px-5 py-1 text-slate-100">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
