import { Comment as CommentT, CommentType, User } from '@threads/core';
import clsx from 'clsx';
import { Avatar } from '../core/avatar';
import { CommentAuthor } from './comment-author';
import { CommentBadge } from './comment-badge';
import { CommentFlashCard } from './comment-flash-card';
import { CommentImage } from './comment-image';
import { CommentReactionsBar } from './comment-reactions-bar';

export type CommentProps = {
  isReply?: boolean;
  showCommentBox?: boolean;
  user?: User;
  comment?: CommentT;
};

export function Comment({
  isReply = false,
  showCommentBox = false,
  user,
  comment,
}: CommentProps) {
  return (
    <>
      <div
        className={clsx(
          'stack-layout md:cluster-layout--between text-content-secondary gap-3 md:flex-row lg:gap-[160px]',
          isReply ? 'border-l-grey-10 mt-9 border-l' : 'pb-3 pt-9',
        )}
      >
        <div className={'stack-layout gap-1 px-2'}>
          {comment?.badge && <CommentBadge {...comment.badge} />}
          <div className="cluster-layout--between lg:cluster-layout--start text-content-tertiary gap-6 text-xs">
            {comment?.author && <CommentAuthor {...comment.author} />}
            <span className="hidden lg:block">
              {comment?.type === CommentType.Enum.reply
                ? 'replied to'
                : comment?.type === CommentType.Enum.comment
                ? 'commented on'
                : `posted ${comment?.type ?? ''}`}
            </span>
            <span>
              <span className="hidden lg:inline">•</span>{' '}
              {comment?.date}
            </span>
          </div>
          <h3 className="text-content-primary mt-2 text-xl font-bold">
            {comment?.title}
          </h3>
          <p
            className={clsx(
              'stack-layout gap-2 text-base',
              isReply ? 'pl-4' : undefined,
            )}
          >
            {comment?.body}
          </p>
        </div>
        {comment?.media ? (
          comment.type === 'flashcard' ? (
            <CommentFlashCard {...comment.media} />
          ) : (
            <CommentImage {...comment.media} />
          )
        ) : undefined}
      </div>
      {!isReply && <hr />}
      <div
        className={clsx(
          isReply ? 'border-l-grey-10 border-l' : undefined,
        )}
      >
        <CommentReactionsBar
          showComments
          reactions={comment?.reactions}
          comments={[
            <Avatar
              key="1"
              src="/images/user-3.jpeg"
              alt="user avatar"
              size={24}
            />,
            <Avatar
              key="2"
              src="/images/user-2.jpeg"
              alt="user avatar"
              size={24}
            />,
          ]}
        />
      </div>
      {!isReply && <hr />}
      <div className="px-4 md:px-12 lg:px-28">
        {comment?.comments.map((reply, index) => (
          <Comment key={index} comment={reply} user={user} />
        ))}
      </div>
      <div className="pl-4 md:pl-12 lg:pl-28">
        {comment?.replies.map((reply, index) => (
          <Comment isReply key={index} comment={reply} user={user} />
        ))}
      </div>
      {showCommentBox && (
        <form>
          <div className="stack-layout bg-background-secondary mt-4 gap-3 p-3">
            {user && <CommentAuthor {...user} />}
            <textarea
              name="comment"
              className="text-grey-40 resize-none p-3 text-sm"
              placeholder="What are your thoughts?"
              id="comment"
              rows={5}
            />
          </div>
        </form>
      )}
    </>
  );
}
