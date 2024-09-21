import { useSession } from "next-auth/react";
import { FC } from "react";

interface ParticipantProps {
  participant: Participant;
  onVote: () => void;
  isSelf: boolean;
}

const ParticipantItem: FC<ParticipantProps> = ({
  participant,
  onVote,
  isSelf,
}) => {
  const { data: session } = useSession();
  return (
    <div className="bg-white shadow-md rounded-lg p-5 max-w-sm w-full h-96 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 mb-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={`${participant.mainImage}`}
            alt={`${participant.user.email}'s avatar`}
          />
        </div>
      </div>

      <div className="mt-4 w-full">
        <div className="text-center py-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {participant.user.email.split("@")[0]}
          </h3>
          <p className="text-sm text-gray-600">Votes: {participant.votes}</p>

          {session ? (
            <button
              onClick={onVote}
              disabled={isSelf}
              className={`w-full font-bold py-2 px-4 rounded-lg transition ${
                isSelf
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-slate-950 text-white hover:bg-blue-600"
              }`}
            >
              {isSelf ? "You can't vote for yourself" : "Vote"}
            </button>
          ) : (
            <p className="text-sm text-gray-600 mt-3">Please login to vote</p>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default ParticipantItem;
