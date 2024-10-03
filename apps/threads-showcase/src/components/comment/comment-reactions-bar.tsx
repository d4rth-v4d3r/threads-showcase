import { CommentIcon, ReactionIcon } from '../icon';

export type CommentReactionsBarProps = {
  reactions?: Array<{
    type: string;
    count: number;
  }>;
  comments?: React.ReactNode[];
  totalComments?: number;
  showComments?: boolean;
};

export function CommentReactionsBar({
  reactions = [],
  comments = [],
  showComments = false,
  totalComments = comments.length,
}: CommentReactionsBarProps) {
  return (
    <div className="cluster-layout--between px-6 py-2">
      <div className="cluster-layout--start gap-2 text-xs [&_>_span]:rounded-full [&_>_span]:bg-grey-5 [&_>_span]:px-2 [&_>_span]:py-1">
        {reactions.length === 0 && (
          <span className="[&&]:px-1">
            <ReactionIcon />
          </span>
        )}
        {reactions.map((reaction) => (
          <span key={reaction.type}>
            {reaction.type} {reaction.count}
          </span>
        ))}
      </div>
      <div className="cluster-layout--start gap-4 text-sm text-content-secondary">
        {totalComments > 0 && (
          <>
            {totalComments} comments
            <div className="cluster-layout--start [&_>_:not(:first-child)]:-ml-3">
              {showComments && comments}
            </div>
          </>
        )}
        {totalComments === 0 && (
          <span className="icon-layout">
            <CommentIcon />
            Comment
          </span>
        )}
      </div>
    </div>
  );
}
