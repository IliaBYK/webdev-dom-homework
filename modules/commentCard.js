import { escapeHtml } from "./escapeHtml.js";

const commentCard = (
  nameValue,
  commentValue,
  likeCounter = 0,
  isLiked = false,
  date,
) => `
    <li class="comment">
      <div class="comment-header">
        <div class="comment-name">${escapeHtml(nameValue)}</div>
        <div>${date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${escapeHtml(commentValue)}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${likeCounter}</span>
          <button class="like-button ${isLiked ? "-active-like" : ""}"></button>
        </div>
      </div>
    </li>
  `;

export { commentCard };
