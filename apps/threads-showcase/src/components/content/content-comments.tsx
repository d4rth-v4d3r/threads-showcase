import { Avatar } from '../core/avatar';

export type ContentCommentsProps = {
  flashCard?: React.ReactNode;
  reactions?: React.ReactNode;
};

export function ContentComments({
  flashCard,
  reactions,
}: ContentCommentsProps) {
  return (
    <>
      <div className="cluster-layout--between gap-52 px-2 pb-3 pt-9 text-content-secondary">
        <div className="stack-layout gap-3">
          <div className="cluster-layout--start gap-6 text-xs text-content-tertiary">
            <span className="icon-layout font-semibold text-content-secondary">
              <Avatar
                src="/images/user-1.jpeg"
                alt="user avatar"
                size={24}
              />
              Michael Busch
            </span>
            <span>published Flashcard</span>
            <span>• 6 days ago</span>
          </div>
          <h3 className="text-xl font-bold text-content-primary">
            Ecosystems and Communities
          </h3>
          <p className="pr-28 text-base">
            Dummy comment - But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system,
            and expound the actual teachings...
          </p>
        </div>
        {flashCard}
      </div>
      <hr />
      {reactions}
      <hr />
    </>
  );
}
