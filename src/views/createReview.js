export default function Createreview() {
  return (
    <div>
      <h5>Add Your Review</h5>
      <form action="/movies" method="POST">
        <label htmlFor="review"></label>
        <textarea
          className="form-control"
          placeholder="Write your comment"
          type="text"
          name="comment"
          id="comment"
          required
        ></textarea>
        <br />
        <br />
        <h5>
          <label htmlFor="stars">Star Rating</label>
        </h5>
        <input
          className="form-control"
          id="rating"
          name="rating"
          type="number"
          step=".5"
          min="0"
          max="5"
          required
        ></input>
        <br />

        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}
