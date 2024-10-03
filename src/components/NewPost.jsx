export default function NewPost() {
  return (
    <div className="new-post">
      <div className="avatar-column">
        <img src="/avatar.png" alt="User Avatar" className="avatar" />
      </div>
      <div className="content-column">
        <form>
          <textarea
            placeholder="What's happening?"
            value=""
            className="post-input"
          />
          <div className="post-actions">
            <button type="submit" className="post-button" disabled>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};