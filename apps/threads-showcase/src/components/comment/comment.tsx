import clsx from 'clsx';

export type CommentProps = {
  media?: React.ReactNode;
  reactions?: React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
  author?: React.ReactNode;
  comments?: Array<CommentProps>;
  replies?: Array<CommentProps>;
  publishedAt?: React.ReactNode;
  activityType?: React.ReactNode;
  badge?: React.ReactNode;
  isReply?: boolean;
  showCommentBox?: boolean;
  user?: React.ReactNode;
};

export function Comment({
  media,
  reactions,
  title,
  body,
  activityType,
  publishedAt,
  author,
  badge,
  comments = [],
  replies = [],
  isReply = false,
  showCommentBox = false,
  user,
}: CommentProps) {
  return (
    <>
      <div
        className={clsx(
          'stack-layout md:cluster-layout--between gap-3 text-content-secondary md:flex-row lg:gap-[160px]',
          isReply ? 'mt-9 border-l border-l-grey-10' : 'pb-3 pt-9',
        )}
      >
        <div className={'stack-layout gap-1 px-2'}>
          {badge}
          <div className="cluster-layout--between lg:cluster-layout--start gap-6 text-xs text-content-tertiary">
            {author}
            <span className="hidden lg:block">{activityType}</span>
            {publishedAt && (
              <span>
                <span className="hidden lg:inline">•</span>{' '}
                {publishedAt}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-xl font-bold text-content-primary">
            {title}
          </h3>
          <p
            className={clsx(
              'stack-layout gap-2 text-base',
              isReply ? 'pl-4' : undefined,
            )}
          >
            {body}
          </p>
        </div>
        {media}
      </div>
      {!isReply && <hr />}
      <div
        className={clsx(
          isReply ? 'border-l border-l-grey-10' : undefined,
        )}
      >
        {reactions}
      </div>
      {!isReply && <hr />}
      <div className="px-4 md:px-12 lg:px-28">
        {comments.map((reply, index) => (
          <Comment key={index} {...reply} user={user} />
        ))}
      </div>
      <div className="pl-4 md:pl-12 lg:pl-28">
        {replies.map((reply, index) => (
          <Comment isReply key={index} {...reply} user={user} />
        ))}
      </div>
      {showCommentBox && (
        <form>
          <div className="stack-layout mt-4 gap-3 bg-background-secondary p-3">
            {user}
            <textarea
              name="comment"
              className="resize-none p-3 text-sm text-grey-40"
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
