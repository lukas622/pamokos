import "./Form.css";
export default function Form() {
  return (
    <div className="frm">
      <form className="add-form">
        <p>What do you need for your trip?</p>
        <select
          name="amount"
          id="amount"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
        <input
          type="text"
          placeholder="Item..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
