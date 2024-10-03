import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.wrapInput}>
      <label htmlFor="search" className={css.label}>Find contacts by name</label>
      <input id="search" type="text" value={value} onChange={e => onFilter(e.target.value)} className={css.input} />
    </div>
  )
}
